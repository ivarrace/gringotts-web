import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { GroupType } from 'src/app/data/enums/group-type';
import { AccountancyService } from 'src/app/data/services/accountancy.service';
import {
  AccountancyInfo,
  CategoryInfo,
  GroupInfo
} from 'src/app/data/types/accountancy-info';
import { Movement } from 'src/app/data/types/movement';

let emptyMovement: Movement = {
  id: undefined,
  amount: undefined,
  date: '',
  info: '',
  accountancyKey: '',
  groupType: undefined,
  groupKey: '',
  categoryKey: ''
};

@Component({
  selector: 'app-movement-form',
  templateUrl: './movement-form.component.html',
  styleUrls: ['./movement-form.component.css']
})
export class MovementFormComponent {
  constructor(
    private location: Location,
    private accountancyService: AccountancyService
  ) {}

  movement: Movement = (this.location.getState() as any).movement
    ? (this.location.getState() as any).movement
    : emptyMovement;
  accountancyList: AccountancyInfo[] =
    this.accountancyService.getUserAccountancyInfoList();

  isNewMovement: boolean = this.movement.id === undefined;

  movementForm = new FormGroup({
    amount: new FormControl(this.movement.amount, [Validators.required]),
    date: new FormControl(this.movement.date, [Validators.required]),
    info: new FormControl(this.movement.info, []),
    accountancy: new FormControl(this.movement.accountancyKey, [
      Validators.required
    ]),
    groupType: new FormControl(this.movement.groupType, [Validators.required]),
    group: new FormControl(this.movement.groupKey, [Validators.required]),
    category: new FormControl(this.movement.categoryKey, [Validators.required])
  });

  accountancyOptions: AccountancyInfo[] = this.getAccountancyOptions();
  groupTypeOptions: typeof GroupType = GroupType;
  groupOptions: GroupInfo[] = this.getGroupOptions();
  categoryOptions: CategoryInfo[] = this.getCategoryOptions();
  //TODO move to accountancyService
  getAccountancyOptions(): AccountancyInfo[] {
    return this.accountancyList;
  }
  getGroupOptions(): GroupInfo[] {
    if (!this.movementForm.value.accountancy) {
      return [];
    }
    const selectedAccontancy = this.getAccountancyOptions().find(
      (acc) => acc.id === this.movementForm.value.accountancy
    );
    if (!selectedAccontancy) {
      return [];
    }
    const groupList =
      this.movementForm.value.groupType === GroupType.Expense
        ? selectedAccontancy.expenses
        : selectedAccontancy.incomes;
    return groupList ? groupList : [];
  }
  getCategoryOptions(): CategoryInfo[] {
    if (!this.movementForm.value.group) {
      return [];
    }
    const selectedGroup = this.getGroupOptions().find(
      (group) => group.id === this.movementForm.value.group
    );
    return selectedGroup ? selectedGroup.categories : [];
  }
  updateGroupOptions() {
    this.movementForm.controls['group'].reset();
    this.groupOptions = this.getGroupOptions();
    this.updateCategoryOptions();
  }
  updateCategoryOptions() {
    this.movementForm.controls['category'].reset();
    this.categoryOptions = this.getCategoryOptions();
  }

  onSubmit(): void {
    if (!this.movementForm.valid) {
      return;
    }
    console.warn('Movement form data', this.movementForm.value);
  }

  cancel(): void {
    //TODO check changes in form to alert
    this.location.back();
  }

  delete(): void {
    console.error('Delete movement');
  }
}

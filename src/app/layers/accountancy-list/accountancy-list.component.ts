import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccountancyService } from 'src/app/data/services/accountancy.service';
import { AccountancyInfo } from 'src/app/data/types/accountancy-info';

@Component({
  selector: 'app-accountancy-list',
  templateUrl: './accountancy-list.component.html',
  styleUrls: ['./accountancy-list.component.css']
})
export class AccountancyListComponent {
  constructor(
    public router: Router,
    private accountancyService: AccountancyService
  ) {}

  accountancyList = this.accountancyService.getUserAccountancyInfoList();

  addAccountancy() {
    console.warn('ADD ACCOUNTANCY');
  }
  editAccountancy(accountancy: AccountancyInfo) {
    console.warn('EDIT ACCOUNTANCY');
    console.log(accountancy);
  }
  deleteAccountancy() {
    console.warn('DELETE ACCOUNTANCY');
  }
}

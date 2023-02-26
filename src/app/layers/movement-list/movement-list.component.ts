import { Component } from '@angular/core';
import { GroupType } from 'src/app/data/enums/group-type';
import { Movement } from 'src/app/data/types/movement';

@Component({
  selector: 'app-movement-list',
  templateUrl: './movement-list.component.html',
  styleUrls: ['./movement-list.component.css']
})
export class MovementListComponent {
  viewMovement() {
    console.warn('VIEW!');
    console.warn(mockMovement);
  }
}

const mockMovement: Movement = {
  id: '001',
  amount: 1,
  date: '01/01/1970',
  info: 'Test 1',
  accountancyKey: 'personal',
  groupType: GroupType.Expense,
  groupKey: 'coche',
  categoryKey: 'gasolina'
};

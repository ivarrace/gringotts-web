import { Injectable } from '@angular/core';
import { GroupType } from '../enums/group-type';
import { Movement } from '../types/movement';

@Injectable({
  providedIn: 'root'
})
export class MovementService {
  constructor() {}

  getAllMovements(): Movement[] {
    return mockMovementList;
  }
}

let mockMovement: Movement = {
  id: '001',
  amount: 1,
  date: '01/01/1970',
  info: 'Test 1',
  accountancyKey: 'personal',
  groupType: GroupType.Expense,
  groupKey: 'coche',
  categoryKey: 'gasolina'
};

let mockMovementList: Movement[] = [
  mockMovement,
  {
    id: '002',
    amount: 2,
    date: '01/01/1970',
    info: 'test 2',
    accountancyKey: 'personal',
    groupType: GroupType.Expense,
    groupKey: 'coche',
    categoryKey: 'gasolina'
  }
];

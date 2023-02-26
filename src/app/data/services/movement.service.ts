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
  amount: 12,
  date: '01/01/1970',
  info: 'Estación de servicio',
  accountancyKey: 'personal',
  groupType: GroupType.Expense,
  groupKey: 'coche',
  categoryKey: 'gasolina'
};

let mockMovementList: Movement[] = [
  mockMovement,
  {
    id: '002',
    amount: 215,
    date: '01/01/1970',
    info: 'Paga de navidad',
    accountancyKey: 'personal',
    groupType: GroupType.Income,
    groupKey: 'trabajo',
    categoryKey: 'extras'
  }
];

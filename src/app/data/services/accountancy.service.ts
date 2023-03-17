import { Injectable } from '@angular/core';
import { AccountancyInfo } from '../types/accountancy-info';

@Injectable({
  providedIn: 'root'
})
export class AccountancyService {
  constructor() {}

  getUserAccountancyInfoList(): AccountancyInfo[] {
    return mockUserAccountancyList;
  }
}

let mockUserAccountancyList: AccountancyInfo[] = [
  {
    id: 'personal',
    name: 'Personal',
    createdDate: '01/01/1970',
    lastModified: '01/01/2000',
    incomes: [
      {
        id: 'trabajo',
        name: 'Trabajo',
        categories: [
          { id: 'nomina', name: 'Nomina' },
          { id: 'extras', name: 'Extras' }
        ]
      },
      {
        id: 'otros',
        name: 'Otros',
        categories: [{ id: 'otros', name: 'Otros' }]
      }
    ],
    expenses: [
      {
        id: 'coche',
        name: 'Coche',
        categories: [
          { id: 'seguro', name: 'Seguro' },
          { id: 'gasolina', name: 'Gasolina' }
        ]
      }
    ]
  },
  {
    id: 'compartida',
    name: 'Compartida',
    createdDate: '01/01/1970',
    lastModified: '01/01/2000',
    incomes: [],
    expenses: []
  }
];

export interface AccountancyInfo {
  id: string;
  name: string;
  createdDate: string;
  lastModified: string;
  incomes: GroupInfo[];
  expenses: GroupInfo[];
}

export interface GroupInfo {
  id: string;
  name: string;
  categories: CategoryInfo[];
}

export interface CategoryInfo {
  id: string;
  name: string;
}
//------------------------------------------------------------------
export interface AccountancyId {
  key: string;
  name: string;
}
export interface AccountancySchema {
  id: AccountancyId;
  incomes: GroupSchema[];
  expenses: GroupSchema[];
}
export interface GroupId {
  key: string;
  name: string;
}
export interface GroupSchema {
  id: GroupId;
  categories: CategoryId[];
}
export interface CategoryId {
  key: string;
  name: string;
}

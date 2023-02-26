import { GroupType } from '../enums/group-type';

export interface Movement {
  id: string | undefined;
  amount: number | undefined;
  date: string;
  info: string;
  accountancyKey: string;
  groupType: GroupType | undefined;
  groupKey: string;
  categoryKey: string;
}

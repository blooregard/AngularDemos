import { IPerson } from './person';

export interface IPagedPerson {
  content: IPerson[];
  totalPages: number;
  totalElements: number;
  last: boolean,
  number: number,
  size: number,
  numberOfElements: number,
  sort: string,
  first: boolean
}

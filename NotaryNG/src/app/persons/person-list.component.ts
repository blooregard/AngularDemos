import { Component, OnInit } from '@angular/core';
import { IPerson } from './person';
import { IPagedPerson } from './pagedperson';
import { PersonService } from './person.service';

@Component({
    templateUrl: './person-list.component.html',
    styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {
  pageTitle: string = 'Person List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  errorMessage: string;

  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value:string) {
    this._listFilter = value;
    this.filteredPersons = this.listFilter ? this.performFilter(this.listFilter) : this.persons;
  }

  filteredPersons: IPerson[];
  persons: IPerson[] = [];
  pagedperson: IPagedPerson;

  constructor(private _personService: PersonService) {

  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Person List: ' + message;
  }

  performFilter(filterBy: string): IPerson[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.persons.filter((person: IPerson) =>
        person.lastName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
      console.log('In OnInit');
      this._personService.getPersons()
        .subscribe(
          persons => {
            this.persons = persons;
            this.filteredPersons = this.persons;
            console.log(this.persons);
          },
          error => {this.errorMessage = <any> error; alert(this.errorMessage);}
        );
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IPerson } from './person';
import { PersonService } from './person.service';

@Component({
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {
  pageTitle: string = 'Person Detail';
  person: IPerson;
  errorMessage: string;

  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private _personService: PersonService ) {
  }

  ngOnInit() {
    const param = this._route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getPerson(id);
    }
  }

  getPerson(id: number) {
    this._personService.getPerson(id).subscribe(
      person => this.person = person,
      error => this.errorMessage = <any>error);
  }

  onBack(): void {
    this._router.navigate(['/persons']);
  }

}

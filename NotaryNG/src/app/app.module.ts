import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PersonListComponent } from './persons/person-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';
import { PersonDetailComponent } from './persons/person-detail.component';
import { WelcomeComponent } from './home/welcome.component';
import { PersonGuardService } from './persons/person-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    PersonListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    PersonDetailComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'persons', component: PersonListComponent },
      { path: 'persons/:id',
        canActivate:[ PersonGuardService],
        component: PersonDetailComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ])
  ],
  providers: [PersonGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StarRaterComponent } from './star-rater/star-rater.component';
import { TypeaheadComponent } from './typeahead/typeahead.component';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserInfoComponent } from './user-info/user-info.component';

@NgModule({
  declarations: [
    AppComponent,
    StarRaterComponent,
    TypeaheadComponent,
    UserInfoComponent
  ],
  imports: [
    BrowserModule,
    TypeaheadModule.forRoot(),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

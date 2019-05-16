import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { QueryComponent } from './components/query/query.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UppercaseDirective } from './directives/uppercase.directive';
import { SearchPatientComponent } from './components/search-patient/search-patient.component';
import { AddPatientComponent } from './components/add-patient/add-patient.component';
import { ColorHoverButtonDirective } from './directives/color-hover-button.directive';
import { SearchPatientModalComponent } from './components/search-patient-modal/search-patient-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    QueryComponent,
    UppercaseDirective,
    SearchPatientComponent,
    AddPatientComponent,
    ColorHoverButtonDirective,
    SearchPatientModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

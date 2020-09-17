import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { StartComponent } from './components/start/start.component';
import { FrontComponent } from './components/front/front.component';
import { FormsModule } from '@angular/forms';
import { ContainComponent } from './components/contain/contain.component';
import { ResultComponent } from './components/result/result.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import {
  MatFormFieldModule,
  MatFormFieldControl,
} from '@angular/material/form-field';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {
  ModalModule,
  TooltipModule,
  PopoverModule,
  ButtonsModule,
} from 'angular-bootstrap-md';
import { WavesModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    FrontComponent,
    QuestionsComponent,
    ContainComponent,
    StartComponent,
    ResultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    MatButtonModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatCardModule,
    MatIconModule,
    MDBBootstrapModule.forRoot(),
    WavesModule,
    ButtonsModule,
    FormsModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

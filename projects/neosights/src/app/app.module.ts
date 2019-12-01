import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {NeoCommonModule} from 'neo-common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardComponent } from './card/card.component';
import { MatCardModule, MatFormFieldModule, MatSelectModule, MatInputModule,
  MatButtonModule, MatIconModule,
  MatListModule, MatMenuModule, MatCheckboxModule,
  MatSnackBarModule,
  MatTabsModule,
  MatButtonToggleModule, MatProgressSpinnerModule, MatSlideToggleModule, MatDialogModule,
  MatToolbarModule, MatTooltipModule, MatRippleModule, MatRadioModule, MatGridListModule, MatSliderModule, MatAutocompleteModule } from '@angular/material';
  const MATERIAL_MODULES: any[] = [
    MatButtonModule, MatCardModule, MatIconModule,
    MatListModule, MatMenuModule,MatFormFieldModule,
    MatInputModule, MatCheckboxModule,
    MatSnackBarModule,
    MatTabsModule,
    MatButtonToggleModule, MatProgressSpinnerModule, MatSelectModule, MatSlideToggleModule, MatDialogModule,
    MatToolbarModule, MatTooltipModule, MatRippleModule, MatRadioModule, MatGridListModule, MatSliderModule, MatAutocompleteModule
  ];


  @NgModule({
  declarations: [
    AppComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    NeoCommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MATERIAL_MODULES
  ],
  exports:[],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

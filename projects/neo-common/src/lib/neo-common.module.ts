import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { MatCardModule, MatFormFieldModule, MatSelectModule, MatInputModule,
  MatButtonModule, MatIconModule,
  MatListModule, MatMenuModule, MatCheckboxModule,
  MatSnackBarModule,
  MatTabsModule,
  MatButtonToggleModule, MatProgressSpinnerModule, MatSlideToggleModule, MatDialogModule,
  MatToolbarModule, MatTooltipModule, MatRippleModule, MatRadioModule, MatGridListModule, MatSliderModule, MatAutocompleteModule } from '@angular/material';
import{FormsModule} from '@angular/forms'
import {
  CovalentCommonModule, CovalentDialogsModule,CovalentSearchModule, CovalentLoadingModule, CovalentLayoutModule, CovalentMessageModule
} from '@covalent/core';
const COVALENT_MODULES:any[]=[
  CovalentCommonModule, CovalentDialogsModule,CovalentSearchModule,
  CovalentLoadingModule, CovalentLayoutModule, CovalentMessageModule
]
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
  declarations: [ LoginComponent],
  imports: [
    FormsModule,
    MATERIAL_MODULES,
    COVALENT_MODULES
  ],
  exports: [LoginComponent]
})
export class NeoCommonModule { }

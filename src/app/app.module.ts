import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms'; 
import { MaterializeButtonModule } from 'materialize-angular';
import { MaterializeInputModule } from 'materialize-angular';
import { MaterializeRadioGroupModule } from 'materialize-angular';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
// common-widgets.module.ts
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MaterializeSelectModule } from 'materialize-angular';
import { MatOptionModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { MAT_DATE_LOCALE } from '@angular/material/core';
//import { MAT_DATE_LOCALE } from '@angular/material';

//import { MY_DATE_FORMATS } from './my-date-formats';



@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MaterializeSelectModule,
    MatOptionModule,
    MatSelectModule
  ],
  providers: [{ provide: MAT_DATE_LOCALE,  useValue: 'pt-BR' }],
  bootstrap: [AppComponent, MaterializeButtonModule, MaterializeInputModule, MaterializeRadioGroupModule]
})
export class AppModule { }

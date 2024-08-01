import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { DashboardModule } from "./dashboard/dashboard.module";
import {NgxSpinnerModule} from "ngx-spinner";
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { DataTablesModule } from 'angular-datatables';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { DatePipe } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from "ngx-toastr";
import { MatDialogModule } from "@angular/material/dialog";
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPrintModule } from "ngx-print";
import { MatInputModule } from '@angular/material/input';
import {NgxPaginationModule} from 'ngx-pagination';
import { AccueilComponent } from './dashboard/accueil/accueil.component';
@NgModule({
  declarations: [
    AppComponent,   
  ],
    imports: [
      MatInputModule,
      MatDatepickerModule,
      MatFormFieldModule,
      MatNativeDateModule,
      MatInputModule,
      MatDatepickerModule,
      MatFormFieldModule,
      MatNativeDateModule,
      BrowserModule,
      DashboardModule,
      BrowserAnimationsModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      RouterModule,
      ReactiveFormsModule,
      Ng2SearchPipeModule,
      NgxPaginationModule,
      MatDialogModule,
      NgxSpinnerModule,
      ToastrModule.forRoot(),
      NgxPrintModule,
      NgxChartsModule,
      DataTablesModule
    ],
  providers: [
    DatePipe,
   
  ],
    bootstrap: [AppComponent],
})
export class AppModule { }

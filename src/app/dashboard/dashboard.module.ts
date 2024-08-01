import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { NgxPaginationModule } from "ngx-pagination";
import { NgxSpinnerModule } from "ngx-spinner";
import { MatDialogModule } from "@angular/material/dialog";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatIconModule } from "@angular/material/icon";
import { BrowserModule } from "@angular/platform-browser";
import { ToastrModule } from "ngx-toastr";
import { NgxPrintModule } from "ngx-print";
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { HomeComponent } from './home/home.component';
import { DataTablesModule } from 'angular-datatables';
const routes: Routes = [


  // {
  //   path:'accueil',
  //   component: HomeComponent,
  //   canActivate: [MyGuardComponent]
  // },

];

@NgModule({
  declarations: [
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    NgxSpinnerModule,
    MatDialogModule,
    MatIconModule,
    ToastrModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    NgxPrintModule,
    NgxChartsModule,
    DataTablesModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: []
})
export class DashboardModule { }

import { Component, HostListener, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { NgxSpinnerService } from 'ngx-spinner';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
[x: string]: any;

  //token:any;
  spinnerName !: string;
  spinnerType !: string;

  //________ For the Pagination __________
  page:number = 1;
  count:number = 0;
  tableSize: number = 10;
  tableSizes: any = [3, 5, 10, 15, 20];
  //________ End Pagination __________


  //________ For Auto logout __________

  private inactivityTimeout: any;
  //________ End Auto logout __________

  constructor(
    private route: ActivatedRoute,

    private spinner: NgxSpinnerService,
    ) { }

  dataUser:any = [];
  dataRole:any = []; // pour recuperer le localStorage
  user:any;     // stock les infos et le token
  userRoles: string[] = [];
  profil!:string;
  userCount:any;
  fournisseurCount:any;
  medicamentCount:any;
  lotCount:any;
  venteOfToday:any = [];
  show:any = environment.show;
  chart:any;
  labels:any = [];
  val:any = [];
  tabData:any =  [];
  status = false;
  addToggle()
  {
    this.status = !this.status;       
  }

  ngOnInit(): void {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 5000);

   
    this.user = JSON.parse(this.dataUser);
    if (this.dataRole) {
       // Extractez les noms des rôles dans un tableau
       this.userRoles = JSON.parse(this.dataRole).map(role => role.nom);
    }
    
  
  }

  // function Pour la pagination
  onTableDataChange(event:any){
    this.page = event;
  }

  onTableSizeChange(event:any):void{
    this.tableSize = event.target.value;
    this.page = 1;
  }

  getValueShow():boolean{
    this.show = environment.show;
    return this.show;
  }

  updateValueshow():boolean{
    environment.show = false;
    this.show = environment.show;
    return this.show;
  }

 



}

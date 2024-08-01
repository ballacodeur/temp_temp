import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './dashboard/home/home.component';
import { AccueilComponent } from './dashboard/accueil/accueil.component';


const routes: Routes = [
  // A intégrer avec une page tableau de bord pour la redirection login
  // { path: '', redirectTo: '/login', pathMatch: 'full' },
  

  /************ Facture ***************/

 
  {
    path: '',
    component: HomeComponent,
    canActivate: [],
    children: [

      {
        path: "home",
        canActivate: [],
        component: AccueilComponent
      },

      /************ RECOUVREMENT ***************/

      

    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

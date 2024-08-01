import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../assets/Template/style.css']
})
export class AppComponent {
  constructor(
    private router: Router,
  ) { }
  title = 'Gestion DAOM';
  user: any;
  dataUser: any = [];
  private inactivityTimeout: any;
  private readonly PERIODE_INACTIVITE: number = 5 * 60 * 1000;



  ngOnInit(): void {

    // this.dataUser = this.localStorage.getData('dataUser');
    // this.user = JSON.parse(this.dataUser);

  }

  // // Réinitialise le minuteur d'inactivité lorsqu'il y a une interaction utilisateur
  @HostListener('document:mousemove', ['$event'])
  @HostListener('document:keypress', ['$event'])
  resetInactivityTimer(event: MouseEvent | KeyboardEvent) {
    // Vérifie si l'événement est une véritable interaction de l'utilisateur (pas un script automatisé)
    if (event instanceof MouseEvent || (event instanceof KeyboardEvent && event.key.length === 1)) {
      clearTimeout(this.inactivityTimeout);
      
    }
  }

  // logout() {
  //   let email = this.user.email;
  //   this.authService.logout(email).subscribe((result: any) => {
  //     sessionStorage.removeItem('token');
  //     this.notification.successNotification('Vous êtes déconnectés ...', 'Déconnexion');
  //     return this.router.navigate(['/login']);
  //   });
  // }
  // Démarrage du  minuteur d'inactivité 
  // Chose a mettre dans le composant principal
  // Faire de telle sorte

 
}

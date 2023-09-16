import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { AuthService } from 'src/app/services/auth.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user = new User()
  user1 = new User()
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    const user = localStorage.getItem("user");
    if (user) {
      this.router.navigate(['/index.html']);
      console.log(user)
    }
  }


  login(): void {
    this.authService.login({ username: this.user.username, password: this.user.password }).subscribe(
      (response) => {

        this.user1 = response;
        console.log(this.user1)
        if (response != null) {
          this.router.navigate(['/index.html']);
          localStorage.setItem('user', response);
        } else {
          alert("Username ou Mot de passe incorrect")
        }
      },
      (error) => {
        console.error('Échec de l\'authentification :', error);
        alert("Une erreur s'est produite veuillez reessayer ou creer un autre utilisateur")

      }
    );
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(['/index.html']);
  }
}

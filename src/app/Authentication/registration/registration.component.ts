import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { AuthService } from 'src/app/services/auth.services';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  user = new User();
  confirmation: String='';

  constructor(private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
    ){}

  signUp(): void{
    if (this.user.password == this.confirmation) {
      this.authService.signUp(this.user).subscribe(()=>{
        this.router.navigate(['/login'])}, (error) => {
          alert("Ce nom d'utilisateur existe déjà.\n veuillez utiliser un autre SVP!")
        })
    }else{
      alert("confirmation du mot de passe incorrect")
    }
    
    
  }
}

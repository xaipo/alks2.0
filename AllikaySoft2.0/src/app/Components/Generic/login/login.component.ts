import { Component, OnInit } from '@angular/core';
import {User} from '../../../Models/Generics/User';
import {Message} from 'primeng/primeng';
import {UserService} from '../../../Services/Generics/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {

  user: User;
  msgs: Message[] = [];
  constructor(private _userService: UserService, private router: Router, ) {
    this.user = new User('', '', 0, '');
  }

  ngOnInit() {
  }


  login() {

    try {
      console.log(this.user);
      this._userService.login(this.user).subscribe(response => {
        console.log(response);
        if (response.success === true ) {
          this.user = response.user;

          switch (this.user.tipo_usuario) {
            case 1 : this.router.navigate(['admin-dashboard']); break;
            case 2 : this.router.navigate(['docs-dashboard']); break;
          }


          console.log(this.user);
          localStorage.setItem('userAd', JSON.stringify(this.user));
          this.msgs = [];
          this.msgs.push({severity: 'Ingreso Correcto', summary: 'Ingreso Correcto', detail: 'Bienvenido' + this.user.nombre_usuario});
        }else {
          console.log('error en nombre de usuario o password');
          this.msgs = [];
          this.msgs.push({severity: 'error', summary: 'Error ', detail: 'Error en nombre de usuario o password'});
          // this.message='error en nombre de usuario o password';
        }
      }, error => {
        console.log('error en nombre de usuario o password');


      });
    }catch (exception) {
      console.log('error en nombre de usuario o password');

    }

    this.msgs.push({severity: 'success', summary: 'Login', detail: 'Ingreso Correcto'});
    console.log(this.user);
  }
}

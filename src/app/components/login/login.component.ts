import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { sha256 } from 'js-sha256';
import { clientLogin } from 'src/app/models/clientLogin';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CreateUserComponent } from '../create-user/create-user.component';
import { PasswordRecoverComponent } from '../password-recover/password-recover.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: clientLogin = { email: '', password: '' };
  img: string = '../../../assets/user.png';

  constructor(
    private snackBar: MatSnackBar,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit() {}

  Ingresar() {
    this.router.navigate(['/products']);
    // this.userService.getUsuarios().subscribe(data => {
    //   for (var i = 0; i < data.length; i++) {
    //     if (data[i].usuario === this.usuario && data[i].contrasenia === sha256(this.contrasenia))
    //     {
    //       localStorage.setItem('loguedPerson', data[i].razonSocial);
    //       this.logIn();
    //       break;
    //     }
    //     else
    //       this.notLogIn();
    //   }
    // });
  }

  logIn() {
    this.showSnackBar('Inicio sesion correctamente');
  }

  notLogIn() {
    this.showSnackBar('Campo usuario o contraseña invalidos');
  }

  passwordRecovery() {
    if (!this.user.email) {
      this.showSnackBar('Complete el campo usuario');
    } else {
      this.dialog.open(PasswordRecoverComponent, {
        data: {
          userEmail: this.user.email,
        },
      });
    }
  }

  createUser() {
    this.dialog.open(CreateUserComponent);
  }

  showSnackBar(text: string) {
    this.snackBar.open(text, 'X', {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 2000,
    });
  }
}

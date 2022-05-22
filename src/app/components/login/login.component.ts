import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { sha256 } from 'js-sha256';
import { ClientLogin } from 'src/app/models/clientLogin';
import { MatDialog } from '@angular/material/dialog';
import { CreateUserComponent } from '../create-user/create-user.component';
import { PasswordRecoverComponent } from '../password-recover/password-recover.component';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: ClientLogin = { email: '', password: '' };
  img: string = '../../../assets/user.png';

  constructor(
    private snackBar: MatSnackBar,
    private router: Router,
    private dialog: MatDialog,
    private userService: UserService
  ) {
    if (this.userService.userData) {
      this.router.navigate(['/products']);
    }
  }

  ngOnInit() {}

  logIn() {
    this.userService.LogIn(this.user.email, sha256(this.user.password)).subscribe(data => {
      if (data.token !== '') {
        this.router.navigate(['/products']);
        this.showSnackBar('Inicio sesion correctamente');
      } 
      else 
      {
        this.showSnackBar('Campo usuario o contraseña invalidos');
      }
    });
  }

  passwordRecovery() {
    this.dialog.open(PasswordRecoverComponent, {
      data: {
        userEmail: this.user.email,
      },
    });
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

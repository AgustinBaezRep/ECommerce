import { Component, DebugElement, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PasswordRecoverService } from 'src/app/services/password-recover.service';
import { clientLogin } from '../../models/clientLogin';
import { sha256 } from 'js-sha256';

@Component({
  selector: 'app-password-recover',
  templateUrl: './password-recover.component.html',
  styleUrls: ['./password-recover.component.css'],
})
export class PasswordRecoverComponent implements OnInit {
  user: clientLogin = {email: this.data.userEmail, password: ""};
  newPassword2: string = '';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private snackBar: MatSnackBar,
    private passwordRecoverService: PasswordRecoverService
  ) {}

  ngOnInit(): void {}

  sendMail() {
    debugger;
    this.user.password = sha256(this.user.password);
    this.passwordRecoverService.updateClientPassword(this.user).subscribe(data => {
      debugger;
      console.log(data);
      this.snackBar.open(
        'Se ha enviado un mail a su correo con su nueva contraseña',
        'X',
        {
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
          duration: 5000,
        }
      );
    });
  }
}
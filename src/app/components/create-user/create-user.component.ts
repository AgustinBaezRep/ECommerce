import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client';
import { UserService } from 'src/app/services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { sha256 } from 'js-sha256';
import { Roles } from 'src/app/models/roles';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent implements OnInit {
  user: Client = { name: '', surname: '', email: '', password: '', dni: null, dateBirth: null, phone: null, idRol: 0 };
  roles: Roles[] = [{value: 'Administrador', id: 1}, {value: 'Cliente', id: 2}];

  constructor(private userService: UserService,
              private snackBar: MatSnackBar
              ) 
  { }

  ngOnInit() { }

  createUser() {
    this.user.password = sha256(this.user.password);
    console.log(this.user);
    this.userService.CreateUser(this.user).subscribe(data => {
      if (data) {
        this.snackBar.open("Usuario creado exitosamente", 'X', {
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
          duration: 2000,
        });
      }
      this.user = { name: '', surname: '', email: '', password: '', dni: null, dateBirth: null, phone: null, idRol: 0 };
      console.log(data);
    });
  }

  clearForms() {
    this.user = { name: '', surname: '', email: '', password: '', dni: null, dateBirth: null, phone: null, idRol: 0 };
  }

}

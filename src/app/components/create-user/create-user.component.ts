import { Component, OnInit } from '@angular/core';
import { client } from 'src/app/models/client';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent implements OnInit {
  user: client = {
    name: '',
    surname: '',
    email: '',
    password: '',
    dni: 0,
    birthdate: new Date(),
  };

  constructor() {}

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  products: any[] = [1,2,3,3,4,5,61,2];
  cantProducts: number = 0;
  cantMessage: number = 0;

  constructor(private userService: UserService) 
  { }

  ngOnInit(): void {
  }

  logOut() {
    this.userService.LogOut();
  }

  addProduct() {
    this.cantProducts++;
  }

  addMessage() {
    this.cantMessage++;
  }
}

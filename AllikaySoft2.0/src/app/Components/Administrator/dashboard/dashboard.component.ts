import { Component, OnInit } from '@angular/core';
import {User} from '../../../Models/Generics/User';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user: User;
  constructor(private router: Router) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('userAd'));
    console.log(this.user);
  }


  salir() {
    this.router.navigate(['login']);
    localStorage.clear();
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  currentNav: string = '';
  constructor(private routes: Router) { }

  ngOnInit(): void {
  }
  navClick(current:string) {
    this.currentNav = current;
  }

}

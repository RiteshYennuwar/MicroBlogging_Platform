import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  isloggedin=false;
  constructor( private router:Router) { 

    if (typeof localStorage !== 'undefined' && localStorage.getItem('Loginuser')) {
      this.isloggedin = true;}

  }

  ngOnInit(): void {
  }
  navbarCollapsed = true;
 
  toggleNavbarCollapsing() {
      this.navbarCollapsed = !this.navbarCollapsed;
  }
  onLogout(){
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem('Loginuser');
    }
    this.isloggedin=false;
    this.router.navigate(['/']);
  }
}

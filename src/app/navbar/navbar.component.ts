import { Component, OnInit } from '@angular/core';
import { faBars, faHouse } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  faBars = faBars
  faHouse = faHouse
  // faBars = faBars
  // faBars = faBars

  appName = "Mon Application"

  constructor() { }

  ngOnInit(): void {
  }

}

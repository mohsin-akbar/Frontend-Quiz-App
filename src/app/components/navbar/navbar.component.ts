import { Component, OnInit } from '@angular/core';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  constructor(public service:UserserviceService){}
  ngOnInit(): void {}

 public logout(){
    this.service.logout();
    window.location.reload();
  }
  
 

}

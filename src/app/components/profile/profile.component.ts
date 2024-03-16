import { Component, OnInit } from '@angular/core';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  user=null;
  
  constructor(public service:UserserviceService){}
  ngOnInit(): void {
      this.user=this.service.getUser();
  }
  

}

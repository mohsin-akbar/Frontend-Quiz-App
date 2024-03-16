import { Component, OnInit } from '@angular/core';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-normal-profile',
  templateUrl: './normal-profile.component.html',
  styleUrls: ['./normal-profile.component.css']
})
export class NormalProfileComponent implements OnInit {
  user=null;
  
  
  
  constructor(public service:UserserviceService){}
  ngOnInit(): void {
      this.user=this.service.getUser();
  }
}

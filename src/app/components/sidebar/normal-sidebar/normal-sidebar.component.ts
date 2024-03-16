import { Component } from '@angular/core';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-normal-sidebar',
  templateUrl: './normal-sidebar.component.html',
  styleUrls: ['./normal-sidebar.component.css']
})
export class NormalSidebarComponent {
  constructor(private service:UserserviceService){}
   logout(){
    this.service.logout();
    window.location.reload();
  }
}

import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-user-quizes',
  templateUrl: './user-quizes.component.html',
  styleUrls: ['./user-quizes.component.css']
})
export class UserQuizesComponent implements OnInit {
 
    quiz:any;
    constructor(private userService:UserserviceService,private route:Router,private activatedRoute:ActivatedRoute){}
    ngOnInit(): void {
           var cid= this.activatedRoute.snapshot.paramMap.get('cid');
  
       this.userService.getQuizesByCid(cid).subscribe(
        Response=>{
          console.log(Response);
          this.quiz=Response;
        },
        error=>{
          console.warn(error);
        }
       )
  }

}

import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../normal/user-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-user-category',
  templateUrl: './user-category.component.html',
  styleUrls: ['./user-category.component.css']
})
export class UserCategoryComponent implements OnInit {

    categories:any;

    constructor(private userService:UserserviceService,private snak:MatSnackBar){}
    ngOnInit(): void {
      this.userService.getAllCategories().subscribe(
        Response=>{
          console.log(Response);
          this.categories=Response;
        },
        error=>{
          console.log(error);
        }
    )
  }

}

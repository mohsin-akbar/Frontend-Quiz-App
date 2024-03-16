import { Component, OnInit } from '@angular/core';
import { AdminDashbordComponent } from '../admin-dashbord/admin-dashbord.component';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.css']
})
export class ViewCategoriesComponent implements OnInit{
    categories:any;

  constructor(private adminService:AdminServiceService,private snak:MatSnackBar){}
  ngOnInit(): void {
    this.adminService.getAllCategories().subscribe(
      Response=>{
        console.log(Response);
        this.categories=Response;
      },
      error=>{
        console.log(error);
      }
  )
  }

  deleteCategory(cid){
//sweet alert 
Swal.fire(//can pass object and these property
  {
    icon:'info',
    title:'Are you sure!!',
    confirmButtonText:'Delete',
    showCancelButton:true,
  }
).then((result)=>{//these call back function is for confirmation
  if(result.isConfirmed){
      //delete
      
   this.adminService.deleteCat(cid).subscribe(
    Response=>{
      console.log(Response)
      this.categories = this.categories.filter((c) => c.cid !== cid);
    },
    error=>{
      console.log(error);
      this.snak.open('Not deleted!!','OK');
    }
    
   )
  }
})

  }

 
}
    



import { Component,OnInit } from '@angular/core';
import { MatSelect } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-get-users',
  templateUrl: './get-users.component.html',
  styleUrls: ['./get-users.component.css']
})
export class GetUsersComponent implements OnInit{
  data:any;
  constructor(private adminService:AdminServiceService,private snak:MatSnackBar){}
  ngOnInit(): void {
      this.adminService.getAllUsers().subscribe(
        Response=>{
          console.log(Response);
          this.data=Response;
        },
        error=>{
          console.log(error);

        }
      )
  }
  //deleting user
  deleteUser(id){

// sweet alett showing
Swal.fire(
  {
    icon:'info',
    title:'Are You Sure!!',
    confirmButtonText:'Delete',
    showCancelButton:true,

  }
).then((result)=>{
  if(result.isConfirmed){
    //delete
    this.adminService.deleteUserById(id).subscribe(
      Response=>{
        console.log(Response);
        Swal.fire('Success!' ,'User deleted successuly!','success');
        this.data=this.data.filter((d)=>d.id!==id);
      },
      error=>{
        console.log(error);
        this.snak.open('user not delted!!','OK',{
        duration:3000
        })
      }
    )

  }
})

  }

}

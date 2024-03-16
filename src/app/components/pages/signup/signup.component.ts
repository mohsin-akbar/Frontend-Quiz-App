import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserserviceService } from 'src/app/services/userservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  data={
    firstName:'',
    lastName:'',
    email:'',
    username:'',
    password:'',
    phone:'',
  }

  constructor(private route:Router,private service:UserserviceService,private snack:MatSnackBar){}

  singup(){

      if(this.data.email==''&&this.data.username==''&&this.data.password==''){
            this.snack.open("You cant leave feilds as empty!","OK")
            return
      }

      this.service.createUser(this.data).subscribe(
        Response=>{
          console.log(Response);
          Swal.fire('Success','User is registerd successfully!','success');
        },
        error=>{
          console.warn(error);
          // this.snack.open("Something went wrong!","OK")
          Swal.fire('failed!!','Something went Wrong!','warning')
        }
      )
  }

}

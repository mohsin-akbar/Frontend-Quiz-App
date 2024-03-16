import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserserviceService } from 'src/app/services/userservice.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
credential={
  username:'',
  password:''
}
  constructor(private service:UserserviceService,private snak:MatSnackBar,private router:Router){}

  login(){
    console.log("clicked!!!!!!")

       if(this.credential.username.trim()==''||this.credential.username==null){
            this.snak.open('Username Required!!','',{
              duration:3000
             
            });
            return;
       }
       
       if(this.credential.password.trim()==''||this.credential.password==null){
        this.snak.open('Password Required!!','',{
          duration:3000
        });
        return;
   }
       this.service.loginUser(this.credential).subscribe(
        (Data:any)=>{
          console.log(Data)
          // Swal.fire('Logged In!','your are succefully login!!','success')
          //login

          this.service.tokenSaved(Data.token);//jaise hi token mile save karo aur intercepter me dalo taki 
          // ye sari request ke sath jaye INTERCEPTER

          this.service.getCurrentUser().subscribe((user:any)=>{
            this.service.setUser(user);
            // console.log(user);

              //redirect:// ADMIN:admin dashbord
              //redirect:////NORMAL normal dashbord

              if(this.service.getUserRole()=='ADMIN'){
                //REDIRECT TO ADMIN PAGE DASHBORD
                // window.location.href='/admin-dashbord'
                this.router.navigate(['admin-dashbord']);
              }else if(this.service.getUserRole()=='NORMAL'){
                //redirect to noraml dashbord
                // window.location.href='/normal-dashbord'
                this.router.navigate(['normal-dashbord']);
              }else{
                this.service.logout();
              }

          })
        },
        error=>{
          console.log(error)
           Swal.fire('Failed to log in','something went wrong!','error')
        }
       )
  }

}

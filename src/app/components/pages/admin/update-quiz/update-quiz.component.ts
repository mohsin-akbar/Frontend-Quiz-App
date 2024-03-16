import { Component,OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent implements OnInit{

  data;
   categories;

  constructor(private adminService:AdminServiceService,private route:ActivatedRoute,private sank:MatSnackBar){}
  ngOnInit(): void {
   var qid=this.route.snapshot.paramMap.get("qid");//ya param.qid kar sakte ho 
     this.adminService.getQuizById(qid).subscribe(
         (Response:any)=>{
            console.log(Response);
           this.data=Response;
          },
          error=>{
            console.log(error);
            this.sank.open("Check your console !!","Cancel")

          }
     )
// for gating category to update but not done by something resea
     this.adminService.getAllCategories().subscribe(
      (Response:any)=>{
        this.categories=Response;
        console.log(Response);1
      },
      error=>{
        console.log(error);
         this.sank.open("Categories not loaded from server!",'OK',{
          duration:3000
         })
      }
     )
  }
  //update Categories
 

  //end update cate

  updateQuiz(){
    if(this.data.title.trim()==''||this.data.title==null||this.data.description==null||this.data.maxMarks==null||this.data.noOfQuestion==null){
      this.sank.open("you cant leave fields as empty!",'OK',{
        duration:3000
      });
      return ;
    }
      this.adminService.updateQuizByQuiz(this.data).subscribe(
        Response=>{
          console.log(Response);
          Swal.fire('Success','Your Quiz is updated!!','success');
        },
        error=>{
          console.log(error);
          Swal.fire('Failed!','something went wrong!','error');
        }
      )
  }

}

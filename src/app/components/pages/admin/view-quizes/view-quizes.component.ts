import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quizes',
  templateUrl: './view-quizes.component.html',
  styleUrls: ['./view-quizes.component.css']
})
export class ViewQuizesComponent implements OnInit {
  quiz:any;
  constructor(private adminService:AdminServiceService,private route:Router){}
  ngOnInit(): void {
     this.adminService.getAllQuizes().subscribe(
      Response=>{
        console.log(Response);
        this.quiz=Response;
      },
      error=>{
        console.warn(error);
      }
     )
  }

  deleteQuiz(qid){
   //sweet alert before deleting
   Swal.fire(
    { 
      icon:'info',
      title:'Are you sure!',
      confirmButtonText:'Delete',
      showCancelButton:true,

    }
   ).then((result)=>{
    if(result.isConfirmed){
      //delete kro
      this.adminService.deleteQuizById(qid).subscribe(
        Response=>{
          console.log(Response);
          Swal.fire('Deleted!','Your Quiz is deleted','success');
          this.quiz=this.quiz.filter((q)=>q.qid!==qid);
        },
        error=>{
          console.warn(error);
          Swal.fire('Failed!!','Server is not responding!','error');
  
        }
        
      )
    }
   })
  }

  updateQuiz(qid){
       this.route.navigate(['admin-dashbord/update-quiz',qid]);
  }


}

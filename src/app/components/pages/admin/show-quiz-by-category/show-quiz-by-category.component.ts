import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-show-quiz-by-category',
  templateUrl: './show-quiz-by-category.component.html',
  styleUrls: ['./show-quiz-by-category.component.css']
})
export class ShowQuizByCategoryComponent implements OnInit {
  quiz:any;
  constructor(private adminService:AdminServiceService,private route:Router,private activatedRoute:ActivatedRoute){}
  ngOnInit(): void {
         var cid= this.activatedRoute.snapshot.paramMap.get('cid');

     this.adminService.getQuizesByCid(cid).subscribe(
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

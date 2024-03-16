import { HtmlParser } from '@angular/compiler';
import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionServiceService } from 'src/app/services/question-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-question-admin',
  templateUrl: './view-question-admin.component.html',
  styleUrls: ['./view-question-admin.component.css']
})
export class ViewQuestionAdminComponent implements OnInit {
   qid:any;
 
  questions;
 
  constructor(private qservice:QuestionServiceService,private route:ActivatedRoute){}
  ngOnInit(): void {
    this.qid= this.route.snapshot.paramMap.get('qid');
 
   console.log(this.qid);
   this.qservice.getQuestionByQuizId(this.qid).subscribe(
    (Response:any)=>{
      console.log(Response);
      this.questions=Response;
    },
    (error)=>{
      console.log(error);
    }
   )
  }

  //delete question
  deleteQuestion(quesId){

    Swal.fire(
      {
        icon:'info',
        title:'Are you sure!!',
        confirmButtonText:'Delete',
        showCancelButton:true,
      }
    ).then((result)=>{
      if(result.isConfirmed){
        //delte
        this.qservice.deleteQuestionById(quesId).subscribe(
          Response=>{
            console.log(Response);
            Swal.fire('success','Your Question is deleted!!','success');
            this.questions=this.questions.filter((q)=>q.quesId!==quesId);
  
          },
          error=>{
            console.log(error);
          }
          
        )
      }
    })
    
  }

  //update Question
  
 

}

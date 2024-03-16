import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { QuestionServiceService } from 'src/app/services/question-service.service';
import { UserserviceService } from 'src/app/services/userservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-questions',
  templateUrl: './user-questions.component.html',
  styleUrls: ['./user-questions.component.css']
})
export class UserQuestionsComponent implements OnInit {
  qid: any;
  // marksGot=0;
  // attempted=0;
  givenAnswer=0;
  // correctAnswer=0;

  data={
    marksGot:0,
    correctAnswer:0,
    attempted:0
  }
  
  isSubmit=false;
timer;

  questions;
  constructor(private qservice: UserserviceService,private service:QuestionServiceService, private route: ActivatedRoute, private snak: MatSnackBar,private locStratergy:LocationStrategy) { }
  ngOnInit(): void {
//preventig back button in quiz
 this.preventBackButton();

    this.qid = this.route.snapshot.paramMap.get('qid');

    console.log(this.qid);
    Swal.fire({
      icon:'info',
      title:'Are you sure! if you start the quiz then you cant back!',
      showCancelButton:true,
      confirmButtonText:'start anyway!'
    }).then((result)=>{
      if(result.isConfirmed){
        this.qservice.getQuestionByQuizId(this.qid).subscribe(
          Response => {
            console.log(Response);
            this.questions = Response;
            this.timer=this.questions.length*2*60;
            // this.questions.forEach((q) => {// ye maine sirf client side par ek property question me jodne ke liye likhi thi
            //   q['givenAnswer']='';
            // });
            this.startTimer();
          },
          error => {
            console.log(error);
          }
        )
      }
    })
    
   
  }
 
  doSubmit() {
    Swal.fire({
      icon:'info',
      title:'Are you sure! ',
      showCancelButton:true,
      confirmButtonText:'Submit anyway!'
    }).then((result)=>{
      if(result.isConfirmed){

        this.isSubmit=true;
        // this.evalQuiz();// for client side ke calculateion ke liye
        this.evalQuiz2();
   
      }
    })
  }

  preventBackButton(){
    history.pushState(null,null,window.location.href);
    this.locStratergy.onPopState(()=>{
      history.pushState(null,null,window.location.href);
    });
  }

  startTimer(){
      let t=window.setInterval(()=>{
        if(this.timer<=0){
            this.evalQuiz2();//for server comparision
            clearInterval(t);
        }else{
          this.timer--;
        }
      },1000)
  }

  //format timer
  formatTimer(){
    let mm=Math.floor(this.timer/60);
    let ss=this.timer-mm*60;
    return `${mm} min : ${ss} sec`
  }

  // evalQuiz(){//ye sari calculation  ham agr server me kare to hi thik rehega ye chij hmare client side par hi hogi
  //      //code here 
  //      this.isSubmit=true;
  //      this.questions.forEach((q)=>{
  //       if(q.givenAnswer==q.answer){
  //         this.correctAnswer++;
  //         let singleMarks=this.questions[0].quiz.maxMarks/this.questions.length;
  //         this.marksGot+=singleMarks;
  //       }
  //       if(q.givenAnswer.trim()!=''){
  //         this.attempted++;
  //       }
  //     })
   

  //     console.log('correct Answer:'+this.correctAnswer);
  //     console.log('marks got:'+this.marksGot);
  //     console.log('attempted:'+this.attempted);
  // }


  evalQuiz2(){
    this.service.submitQuiz(this.questions).subscribe(
      (Response:any)=>{
        console.log(Response);
        this.data=Response;
      },
      error=>{
        console.log(error);
      }
    )
  }

}




import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionServiceService } from 'src/app/services/question-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-question',
  templateUrl: './update-question.component.html',
  styleUrls: ['./update-question.component.css']
})
export class UpdateQuestionComponent implements OnInit {
  data:any;
  constructor(private qservice:QuestionServiceService,private route:ActivatedRoute){}
  ngOnInit(): void {
   var quesId= this.route.snapshot.paramMap.get('quesId');
    this.qservice.getQuestionById(quesId).subscribe(
      Response=>{
        console.log(Response)
        this.data=Response;
      },
     error=>{
      console.log(error);
     }
     
      
    )
  }
  submitUpdateQuestion(){
    this.qservice.updateQuestionById(this.data).subscribe(
     Response=>{
      console.log(Response)
      Swal.fire('Success','Your question is updated!','success');
     },
     error=>{
      console.log(error);
      Swal.fire('Faild','Your question is not updated!','error');
     }
    )
  }

}

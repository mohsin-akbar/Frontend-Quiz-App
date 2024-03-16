import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionServiceService } from 'src/app/services/question-service.service';
import Swal from 'sweetalert2';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrls: ['./add-questions.component.css']
})
export class AddQuestionsComponent implements OnInit{
  public Editor = ClassicEditor;

  questions={
    content:'',
    image:"default.png",
    option1:"",
    option2:"",
    option3:"",
    option4:"",
    answer:"",
    quiz:{
      qid:""
    }
  };

  

  
  constructor(private service:QuestionServiceService,private route:ActivatedRoute){}
  ngOnInit(): void {
      this.questions.quiz.qid=this.route.snapshot.paramMap.get('qid');
      
  }
  addQuestion(){
    this.service.createQuestion(this.questions).subscribe(
      Response=>{
        console.log(Response);
        Swal.fire('Success!','your question is added succesfully!','success');
      },
      error=>{
        console.warn(error);
        Swal.fire('Error!','Something Went Wrong!','error');
      }
    )
  }

}

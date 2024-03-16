import { Component ,OnInit} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit {
  data=
  {
 
  title:'',
  description:'',
  maxMarks:'',
  noOfQuestion:'',
  active:true,
  category:{
    cid:'',
  },
  
}

  categories=[];
  constructor(private adminService:AdminServiceService,private snak:MatSnackBar){}
ngOnInit(): void {
     this.adminService.getAllCategories().subscribe(
      (Response:any)=>{
        this.categories=Response;
        console.log(Response);
      },
      error=>{
        console.log(error);
         this.snak.open("Categories not loaded from server!",'OK',{
          duration:3000
         })
      }
     )
}

//adding quiz form
createQuiz(){
  this.adminService.addQuiz(this.data).subscribe(
    Response=>{
      console.log(Response);
      Swal.fire('Success!','your quiz is added','success');
    },
    error=>{
      console.log(error);
      Swal.fire('Failed!','your quiz is not added','error');
    }
  )
}


}

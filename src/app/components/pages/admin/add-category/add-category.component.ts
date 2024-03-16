import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {
category={
  title:'',
  description:''
}

  constructor(private service:AdminServiceService,private snak:MatSnackBar){}
  createCategory(){
       console.log('category submitted')
      if(this.category.title.trim()=='' || this.category.title==null){
          this.snak.open("title required!!",'OK',{
            duration:3000
          });
          return;
      }

      //description not null
      if(this.category.description.trim()=='' || this.category.description==null){
        this.snak.open("description required!!",'OK',{
          duration:3000
        });
        return;
    }

       this.service.addCategory(this.category).subscribe(
        Response=>{
          console.log(Response);
          Swal.fire('Success!!','New Category Added..','success');
        },
        error=>{
          console.warn(error);
          Swal.fire('Failed','something went wrong..','error');
        }
       )
  }

}

import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import Swal from 'sweetalert2';

import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-instruction',
  templateUrl: './instruction.component.html',
  styleUrls: ['./instruction.component.css']
})
export class InstructionComponent implements OnInit{
  qid;
  quiz;
  constructor(private _route:ActivatedRoute,private service:UserserviceService){}
  
  ngOnInit(): void {
    this.qid=this._route.snapshot.paramMap.get("qid");
  
        this.service.getQuizeById(this.qid).subscribe(
          Response=>{
            console.log(Response);
            this.quiz=Response;
          },
          error=>{
            console.log(error);
            Swal.fire('OOPs','Failed to load!!','error');
          }
        )
      }
    
   
     
  }


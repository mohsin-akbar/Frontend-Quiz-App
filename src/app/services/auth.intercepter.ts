import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { UserserviceService } from "./userservice.service";
import { Injectable } from "@angular/core";
@Injectable()
export class MyIntercepter implements HttpInterceptor{
    constructor(private service :UserserviceService){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       
//add token from (localStorage)
          let authReq=req;//intercept ka req 
          const token=  this.service.getToken();
          if(token!=null){
         authReq=   authReq.clone({setHeaders:{Authorization:`Bearer ${token}`}});//Authorization is key so it should be as it is
          }
          return next.handle(authReq);
    }
    
}

//making array of authIntercepter Provider jo module me provideer me dalege
export const authIntercepterProvider=[
    {
        provide:HTTP_INTERCEPTORS,
        useClass:MyIntercepter,
        multi:true
    }
]

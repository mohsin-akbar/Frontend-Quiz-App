import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserserviceService } from './userservice.service';

@Injectable({
  providedIn:'root'
})
export class AdminGuard implements CanActivate{
  constructor(private service:UserserviceService,private router:Router){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
  
    //guard the admin componet 
    if(this.service.isLoggedIn()&&this.service.getUserRole()=='ADMIN'){
      return true;
    }
    this.router.navigate(['login']);
   return false;
  }

}

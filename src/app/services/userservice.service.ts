import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
    


baseUrl='http://localhost:8080/api/user';
generateTokenUrl='http://localhost:8080';

categoryUrl='http://localhost:8080/category';
quizUrl='http://localhost:8080/quiz';
questionUrl='http://localhost:8080/question';

  constructor(private http:HttpClient) { }

  createUser(data:any){
    return  this.http.post(`${this.baseUrl}/create`,data);
  }

  loginUser(data:any){
    return this.http.post(`${this.generateTokenUrl}/generate-token`,data);
  }
//for saving token in localStorage for conventional state user /client
  public tokenSaved(token){
        localStorage.setItem('token',token) ;
        return true;
  }
//checking token valid or not
  public isLoggedIn(){
       let tokenStr=localStorage.getItem("token")
       if(tokenStr==undefined||tokenStr==''||tokenStr==null){
        return false;
       }else{
        return true;
       }
  }
  //Logout: removeItem token
  public logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
  }
//getting token
  public getToken(){
    return localStorage.getItem('token');
  }

  //setting user
  public setUser(user){
      localStorage.setItem('user',JSON.stringify(user));
  }

  //getting User
  public getUser(){
    let userStr=localStorage.getItem("user");
    if(userStr!=null){
      return JSON.parse(userStr)
    }else{
      this.logout();
      return null;
    }
  }

  //getting userRole
  public getUserRole(){
    let user=this.getUser();
    return user.authorities[0].authority;
  }

  public getCurrentUser(){
    return this.http.get(`${this.generateTokenUrl}/current-user`);
  }

  getAllCategories(){
    return this.http.get(`${this.categoryUrl}/`);
  }

  getQuizesByCid(cid){
    return this.http.get(`${this.quizUrl}/category/`+cid);
  }
  getQuestionByQuizId(qid){
    return this.http.get(`${this.questionUrl}/quiz/`+qid);
  }

  quizSubmit(questions){
    return this.http.post(`${this.baseUrl}/quizSubmit/`,questions);
  }
  getQuizeById(qid){
    return this.http.get(`${this.quizUrl}/`+qid);
  }

}

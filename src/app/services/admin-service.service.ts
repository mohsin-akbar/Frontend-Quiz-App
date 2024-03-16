import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
  

  constructor(private route:HttpClient) { }
  
   categoryUrl='http://localhost:8080/category';
   quizUrl='http://localhost:8080/quiz';
   userUrl='http://localhost:8080/api/user';
   
   getAllCategories(){
    return this.route.get(`${this.categoryUrl}/`);
   }
//adding category to the server
   addCategory(category) {
    return this.route.post(`${this.categoryUrl}/`,category);
  }
  deleteCat(cid){
    return this.route.delete(`${this.categoryUrl}/`+cid);
  }
  getAllQuizes(){
    return this.route.get(`${this.quizUrl}/`);
  }
  deleteQuizById(qid){
    return this.route.delete(`${this.quizUrl}/`+qid);
  }
  getQuizById(qid){
    return this.route.get(`${this.quizUrl}/`+qid);
  }
  getQuizesByCid(cid){
    return this.route.get(`${this.quizUrl}/category/`+cid);
  }
  updateQuizByQuiz(data){
    return this.route.put(`${this.quizUrl}/`,data);
  }
  addQuiz(data){
    return this.route.post(`${this.quizUrl}/`,data);
  }
  getAllUsers(){
    return this.route.get(`${this.userUrl}/`);
  }
  deleteUserById(id){
    return this.route.delete(`${this.userUrl}/`+id);
  }

}

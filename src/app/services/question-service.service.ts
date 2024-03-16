import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionServiceService {
   questionUrl='http://localhost:8080/question';
  constructor(private http:HttpClient) { }

  getQuestionByQuizId(qid){
    return this.http.get(`${this.questionUrl}/quiz/`+qid);
  }

  deleteQuestionById(quesId){
    return this.http.delete(`${this.questionUrl}/`+quesId);
  }

  getQuestionById(quesId){
    return this.http.get(`${this.questionUrl}/`+quesId);
  }
  //udpate question
  updateQuestionById(data){
    return this.http.put(`${this.questionUrl}/`,data);
  }

  createQuestion(data){
    return this.http.post(`${this.questionUrl}/`,data);
  }
  submitQuiz(data){
    return this.http.post(`${this.questionUrl}/eval-quiz/`,data);
  }
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/pages/signup/signup.component';
import { LoginComponent } from './components/pages/login/login.component';
import { AdminDashbordComponent } from './components/pages/admin/admin-dashbord/admin-dashbord.component';
import { NormalDashbordComponent } from './components/pages/normal/normal-dashbord/normal-dashbord.component';
import { AdminGuard } from './services/admin.guard';
import { NormalGurad } from './services/noraml.guard';
import { ProfileComponent } from './components/profile/profile.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { NormalProfileComponent } from './components/profile/normal-profile/normal-profile.component';
import { NormalWelcomeComponent } from './components/welcome/normal-welcome/normal-welcome.component';
import { ViewCategoriesComponent } from './components/pages/admin/view-categories/view-categories.component';
import { AddCategoryComponent } from './components/pages/admin/add-category/add-category.component';
import { ViewQuizesComponent } from './components/pages/admin/view-quizes/view-quizes.component';
import { UpdateQuizComponent } from './components/pages/admin/update-quiz/update-quiz.component';
import { AddQuizComponent } from './components/pages/admin/add-quiz/add-quiz.component';
import { GetUsersComponent } from './components/pages/admin/get-users/get-users.component';
import { ViewQuestionAdminComponent } from './components/pages/view-question-admin/view-question-admin.component';
import { AddQuestionsComponent } from './components/pages/add-questions/add-questions.component';
import { UpdateQuestionComponent } from './components/pages/update-question/update-question.component';
import { ShowQuizByCategoryComponent } from './components/pages/admin/show-quiz-by-category/show-quiz-by-category.component';
import { UserCategoryComponent } from './components/pages/user-category/user-category.component';
import { UserQuizesComponent } from './components/pages/user-quizes/user-quizes.component';
import { UserQuestionsComponent } from './components/pages/user-questions/user-questions.component';
import { InstructionComponent } from './components/pages/normal/instruction/instruction.component';

const routes: Routes = [
 {
  path:'',
  component:HomeComponent,
  pathMatch:'full'
 },
 {
 path:'signup',
 component:SignupComponent,
 pathMatch:'full'
},
{
  path:'login',
  component:LoginComponent,
  pathMatch:'full'
 },
 {
  path:'admin-dashbord',
  component:AdminDashbordComponent,
  canActivate:[AdminGuard],
  children:[
    {
      path:'',
      component:WelcomeComponent,
    },
    {
      path:'profile',
      component:ProfileComponent,
    },
    {
      path:'categories',
      component:ViewCategoriesComponent,
     },
     {
      path:'add-category',
      component:AddCategoryComponent,
     },
     {
      path:'quizzes',
      component:ViewQuizesComponent,
     },
     {
      path:'update-quiz/:qid',
      component:UpdateQuizComponent,
     },
     {
      path:'add-quiz',
      component:AddQuizComponent,
     },
     {
      path:'get-users',
      component:GetUsersComponent,
     },
     {
      path:'view-questions/:qid',
      component:ViewQuestionAdminComponent,
     },
     {
      path:'update-question/:quesId',
      component:UpdateQuestionComponent,
     },
     {
      path:'add-question/:qid',
      component:AddQuestionsComponent,
     },
     {
      path:'view-quizes/:cid',
      component:ShowQuizByCategoryComponent,
     }
    //children wale yhi jodege 
  ]
 },
 {
  path:'normal-dashbord',
  component:NormalDashbordComponent,
  canActivate:[NormalGurad],
   children:[
    {
      path:'',
      component:NormalWelcomeComponent,
    },
    {
      path:'profile',
      component:NormalProfileComponent,
    },
    {
      path:'categories',
      component:UserCategoryComponent,
    },
    {
      path:'view-quizes/:cid',
      component:UserQuizesComponent,
    },
   
    {
      path:'view_instruction/:qid',
      component:InstructionComponent
    }
    //children wale yhi jodege 
   ]
 },
 {
  path:'start/:qid',
  component:UserQuestionsComponent,
  canActivate:[NormalGurad]
},
 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

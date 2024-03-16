import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatButtonModule} from '@angular/material/button';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { LoginComponent } from './components/pages/login/login.component';
import { SignupComponent } from './components/pages/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { UserserviceService } from './services/userservice.service';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { authIntercepterProvider } from './services/auth.intercepter';
import { AdminDashbordComponent } from './components/pages/admin/admin-dashbord/admin-dashbord.component';
import { NormalDashbordComponent } from './components/pages/normal/normal-dashbord/normal-dashbord.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {MatListModule} from '@angular/material/list';
import { ProfileComponent } from './components/profile/profile.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { NormalWelcomeComponent } from './components/welcome/normal-welcome/normal-welcome.component';
import { NormalProfileComponent } from './components/profile/normal-profile/normal-profile.component';
import { NormalSidebarComponent } from './components/sidebar/normal-sidebar/normal-sidebar.component';
import { AddCategoryComponent } from './components/pages/admin/add-category/add-category.component';
import { ViewCategoriesComponent } from './components/pages/admin/view-categories/view-categories.component';
import { AddQuizComponent } from './components/pages/admin/add-quiz/add-quiz.component';
import { ViewQuizesComponent } from './components/pages/admin/view-quizes/view-quizes.component';
import { UpdateQuizComponent } from './components/pages/admin/update-quiz/update-quiz.component';
import { UpdateCategoryComponent } from './components/pages/admin/update-category/update-category.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import { GetUsersComponent } from './components/pages/admin/get-users/get-users.component';
import { QuestionQuizComponent } from './components/pages/question-quiz/question-quiz.component';
import { AddQuestionsComponent } from './components/pages/add-questions/add-questions.component';
import { ViewToUserQuestionComponent } from './components/pages/normal/view-to-user-question/view-to-user-question.component';
import { ViewQuestionAdminComponent } from './components/pages/view-question-admin/view-question-admin.component';
import { UpdateQuestionComponent } from './components/pages/update-question/update-question.component';
import { ShowQuizByCategoryComponent } from './components/pages/admin/show-quiz-by-category/show-quiz-by-category.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { UserCategoryComponent } from './components/pages/user-category/user-category.component';
import { UserQuizesComponent } from './components/pages/user-quizes/user-quizes.component';
import { UserQuestionsComponent } from './components/pages/user-questions/user-questions.component';
import { ResultComponent } from './components/pages/result/result.component';
import {MatRadioModule} from '@angular/material/radio';
import { InstructionComponent } from './components/pages/normal/instruction/instruction.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { NgxUiLoaderHttpModule } from 'ngx-ui-loader';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    AdminDashbordComponent,
    NormalDashbordComponent,
    SidebarComponent,
    ProfileComponent,
    WelcomeComponent,
   
    NormalWelcomeComponent,
    NormalProfileComponent,
    NormalSidebarComponent,
    AddCategoryComponent,
    ViewCategoriesComponent,
    AddQuizComponent,
    ViewQuizesComponent,
    UpdateQuizComponent,
    UpdateCategoryComponent,
    GetUsersComponent,
    QuestionQuizComponent,
    AddQuestionsComponent,
    ViewToUserQuestionComponent,
    ViewQuestionAdminComponent,
    UpdateQuestionComponent,
    ShowQuizByCategoryComponent,
    UserCategoryComponent,
    UserQuizesComponent,
    UserQuestionsComponent,
    ResultComponent,
    InstructionComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
     NgbModule ,
     MatButtonModule,
     MatToolbarModule,
     MatIconModule,
     MatCardModule,
     FormsModule,
     HttpClientModule,
     MatSnackBarModule,
     MatInputModule,
     MatFormFieldModule,
     MatListModule,
     MatSlideToggleModule,
     MatSelectModule,
     CKEditorModule,
     MatRadioModule,
     MatProgressSpinnerModule,
     NgxUiLoaderModule,
     NgxUiLoaderHttpModule.forRoot({
      showForeground:true,
     })


  
  ],
  providers: [UserserviceService ,authIntercepterProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CssQuizComponent } from './css-quiz/css-quiz.component';
import { HtmlQuizComponent } from './html-quiz/html-quiz.component';
import { HeaderComponent } from './header/header.component';
import { JavaQuizComponent } from './java-quiz/java-quiz.component';
import { ResultComponent } from './result/result.component';
import { TakeQuizComponent } from './take-quiz/take-quiz.component';
import { RouterModule, Routes } from '@angular/router';
const appRoute:Routes=[
  {path:'',component:TakeQuizComponent},
  {path:'htmlQuiz',component:HtmlQuizComponent},
  {path:'javaQuiz',component:JavaQuizComponent},
  {path:'cssQuiz',component:CssQuizComponent},
  {path:'result/:incorrect/:correct/:notAttempted',component:ResultComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    CssQuizComponent,
    HtmlQuizComponent,
    HeaderComponent,
    JavaQuizComponent,
    ResultComponent,
    TakeQuizComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

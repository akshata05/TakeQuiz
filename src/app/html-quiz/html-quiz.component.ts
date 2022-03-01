import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { timer, Timestamp } from 'rxjs';

import  *  as  data  from  './html_question.json';
import  *  as  answer  from  './html_answer.json';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-html-quiz',
  templateUrl: './html-quiz.component.html',
  styleUrls: ['./html-quiz.component.css']
})
export class HtmlQuizComponent implements OnInit {

  @ViewChild('myForm')
  myForm!: ElementRef;
 
  questions:  any  = (data  as  any).default;
 answers:  any  = (answer  as  any).default ;

  timeLeft: number = 0;
  timeLeftSeconds:number=10;
  interval:any;

  correct:number=0;
  incorrect:number=0;
  notAttempted:number=0;
  
   userSelected:any=[];
   actual:any=[];
isDisabled=false;
display="none";
button="hidden";
timerOn="block";
  constructor(private router:Router) { 
    this.startTimer();
   
  }

  ngOnInit(): void {
    console.log(data);
  }
 


 startTimer() {
     this.interval = setInterval(() => {
      if (this.timeLeftSeconds - 1 == 0 && this.timeLeft>0) {
        this.timeLeft -= 1;
        this.timeLeftSeconds = 59
      } 
      else if(this.timeLeftSeconds>0) this.timeLeftSeconds -= 1
      if (this.timeLeft=== 0 && this.timeLeftSeconds == 0) {
        this.myForm.nativeElement.click();
        
        this.evaluateAnswer();
        clearInterval(this.interval);
        ;}
     },1000)
   }
   evaluateAnswer(){
     this.timerOn="none";
    this.isDisabled=true;
    this.display="block";
    this.button="visible";
    var flagCorrect=false;
    var flagIncorrect=false;
    var radioButtons:any;
    for(let question of this.questions){
      radioButtons  = document.querySelectorAll('input[name="'+question.id+'"]');
      console.log(question.id); var key=question.id;
      console.log("key="+key);
      var value=this.answers[0][key].correct;
      this.actual.push(value);
      for(let radiobutton of radioButtons){
       
        
        if(radiobutton.checked && radiobutton.value===value)
        {
          this.userSelected.push(radiobutton.value);
          this.correct++;
          flagCorrect=true;
          break;
        }
        else if(radiobutton.checked && radiobutton.value!==value)
        {
          this.userSelected.push(radiobutton.value);
          this.incorrect++;
          flagIncorrect=true;
          break;
        }
      
        
      }
      if(!(flagCorrect || flagIncorrect)){
        this.userSelected.push("Not Attempted");
        this.notAttempted++;
      }
      flagCorrect=false;
      flagIncorrect=false;

    }
    console.log("incorrect="+this.incorrect+"correct="+this.correct+"not Attempted="+this.notAttempted);
   // this.router.navigate(['/result',this.incorrect,this.correct,this.notAttempted,this.actual,this,this.userSelected]);
   }

   getResult(){
     
    this.router.navigate(['/result',this.incorrect,this.correct,this.notAttempted]);
   }



}

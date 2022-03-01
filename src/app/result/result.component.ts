import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  result: {incorrect:number,correct:number,notAttempted:number};
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.result={
      incorrect:this.route.snapshot.params['incorrect'],
      correct:this.route.snapshot.params['correct'],
      notAttempted:this.route.snapshot.params['notAttempted']
      
          };
  }

}

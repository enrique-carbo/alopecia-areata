import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-salt',
  templateUrl: './salt.component.html',
  styleUrls: ['./salt.component.css']
})
export class SaltComponent implements OnInit {

  public saltScoreResult:Number = 0

  isValidFields:Boolean = false

  constructor() { }

  ngOnInit(): void {
    
  }

  patientForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    identification: new FormControl('')
  })

  saltScore = new FormGroup({
    leftSide: new FormControl(),
    rightSide: new FormControl (),
    topScalp: new FormControl(),
    backScalp: new FormControl()
  })

  saltScoreCalc = () => {
    console.log(this.saltScore)
    console.log(this.saltScore.status)

    if(this.saltScore.value.leftSide && this.saltScore.value.rightSide &&
      this.saltScore.value.backScalp && this.saltScore.value.topScalp)

    this.saltScoreResult = Math.round((this.saltScore.value.leftSide * 0.18) + (this.saltScore.value.rightSide * 0.18) +
    (this.saltScore.value.backScalp * 0.24) + (this.saltScore.value.topScalp * 0.40))
    console.log(this.saltScoreResult)
  }

  resetFields = () => {
    this.patientForm.reset()
    this.saltScore.reset()
    this.saltScoreResult = 0
    
  }

   //Print Page
   printThisPage() {
    window.print()
  }

}

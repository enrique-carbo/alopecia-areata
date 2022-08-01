import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


interface Response {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-dlqi',
  templateUrl: './dlqi.component.html',
  styleUrls: ['./dlqi.component.css']
})
export class DlqiComponent implements OnInit {

  public dlqiScoreResult:Number = 0 

  constructor() { }

  ngOnInit(): void {    
  }

  patientForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    identification: new FormControl('')
  })

  dlqiForm = new FormGroup({
    selectedQuestion1: new FormControl(),
    selectedQuestion2: new FormControl(),
    selectedQuestion3: new FormControl(),
    selectedQuestion4: new FormControl(),
    selectedQuestion5: new FormControl(),
    selectedQuestion6: new FormControl(),
    selectedQuestion7: new FormControl(),
    selectedQuestion8: new FormControl(),
    selectedQuestion9: new FormControl(),
    selectedQuestion10: new FormControl()
  })

  responses1: Response[] = [
    {value: 3, viewValue: "Very much"},
    {value: 2, viewValue: "A lot"},
    {value: 1, viewValue: "A little"},
    {value: 0, viewValue: "Not at all"}
  ]

  responses2: Response[] = [
    {value: 3, viewValue: "Very much"},
    {value: 2, viewValue: "A lot"},
    {value: 1, viewValue: "A little"},
    {value: 0, viewValue: "Not at all"},
    {value: 0, viewValue: "Not relevant"}
  ]

  //Print Page
  printThisPage() {
    window.print()
  }


  //Reset Fields
  resetFields = () => {
    this.patientForm.reset()
    this.dlqiForm.reset()
    this.dlqiScoreResult = 0
    
  }

  dlqiScoreCalculation = () => {
    let pre = "this.dlqiForm.value."
    console.log( `${pre}selectedQuestion1`)
    console.log(this.dlqiForm)

    this.dlqiScoreResult = this.dlqiForm.value.selectedQuestion1 + this.dlqiForm.value.selectedQuestion2 +
    this.dlqiForm.value.selectedQuestion3 + this.dlqiForm.value.selectedQuestion4 + this.dlqiForm.value.selectedQuestion5 +
    this.dlqiForm.value.selectedQuestion6 + this.dlqiForm.value.selectedQuestion7 + this.dlqiForm.value.selectedQuestion8 +
    this.dlqiForm.value.selectedQuestion9 + this.dlqiForm.value.selectedQuestion10  
  }

}

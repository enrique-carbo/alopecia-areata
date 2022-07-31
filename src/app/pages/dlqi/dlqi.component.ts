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

}

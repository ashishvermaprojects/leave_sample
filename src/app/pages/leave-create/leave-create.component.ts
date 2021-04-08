import { Component, OnInit } from '@angular/core';
import { HttpsService } from 'src/app/shared/services/https/https.service';

@Component({
  selector: 'app-leave-create',
  templateUrl: './leave-create.component.html',
  styleUrls: ['./leave-create.component.css']
})
export class LeaveCreateComponent implements OnInit {
  priorities: any[] = [1, 2, 3, 4, 5];
  leaveModel: {
    title: string,
    code: string,
    priority: number,
    is_caary_forward: boolean,
    is_proof_required: boolean,
    purpose: any[]
  } =
    {
      title: null,
      code: null,
      priority: null,
      is_caary_forward: false,
      is_proof_required: false,
      purpose: ['']
    };
  errors: {
    title: boolean,
    code: boolean,
    codeMax: boolean,
    purpose: boolean,
    blankPurpose: boolean
  } =
    {
      title: false,
      code: false,
      codeMax: false,
      purpose: false,
      blankPurpose: false
    };
  colCountByScreen: object;

  constructor(private http: HttpsService) {
    this.colCountByScreen = {
      xs: 1,
      sm: 2,
      md: 3,
      lg: 4
    };
  }

  ngOnInit() {
  }

  addPurpose() {
    if (this.leaveModel.purpose[this.leaveModel.purpose.length - 1] || !this.leaveModel.purpose.length) {
      this.leaveModel.purpose.length = this.leaveModel.purpose.length + 1;
    } else {
      this.errors.blankPurpose = true;
      setTimeout(() => {
        this.errors.blankPurpose = false;
      }, 2000);
    }
  }

  deletePurpose(i) {
    this.leaveModel.purpose.splice(i, 1)
  }

  setChange() {
    console.log(this.leaveModel.purpose[this.leaveModel.purpose.length - 1])
    if (this.leaveModel.purpose[this.leaveModel.purpose.length - 1]) { this.errors.blankPurpose = false; }
    console.log(this.leaveModel.purpose[this.leaveModel.purpose.length - 1])
  }

  save() {
    console.log(this.leaveModel.purpose[0])
    if (!this.leaveModel.title) this.errors.title = true; else this.errors.title = false;
    if (!this.leaveModel.code) this.errors.code = true; else this.errors.code = false;
    if (this.leaveModel.code && this.leaveModel.code.split('').length > 2) this.errors.codeMax = true; else this.errors.codeMax = false;
    if (!this.leaveModel.purpose || (this.leaveModel.purpose && !this.leaveModel.purpose.length) || (this.leaveModel.purpose && this.leaveModel.purpose.length && !this.leaveModel.purpose[0])) this.errors.purpose = true; else this.errors.purpose = false;
    let errorKeys:any[] = Object.keys(this.errors);
    let isError:boolean;
    errorKeys.forEach((key:any) => {
      if(this.errors[key] === true) {isError = true}
    })
    !isError && this.http.saveData(this.leaveModel).subscribe((res: any) => {

    })
  }

}

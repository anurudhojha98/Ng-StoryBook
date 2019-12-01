import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }
  hide = true;
  isValid = true;
  loginObj:any = {};
  ngOnInit() {
  }
  onSubmitForm(form) {
    if (form.pristine || form.untouched || form.invalid) {
      this.isValid = false;
    }
  }
  login() {
  }


}

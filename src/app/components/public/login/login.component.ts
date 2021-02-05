import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    ) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      email: '',
      password: ''
    })
  }

  login(){
    console.log(this.form.getRawValue());

    if(this.form.valid){
      /* const f */
    }
  }

}

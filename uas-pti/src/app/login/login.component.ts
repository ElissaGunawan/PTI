import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { SHA512 } from 'crypto-js';
import { Router } from '@angular/router';
import { dataLogin } from 'src/app/_shared/models/mahasiswa-result';
import { ServiceService } from 'src/app/_shared/services/Service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	
	dataLogin: dataLogin = {
		username: '',
		password: '',
	};

  constructor(
  	private http: HttpClient,
	private router: Router,
	private login: ServiceService
  ) { }

  ngOnInit() {
  }

  Login(){
  	this.login.login(this.dataLogin).subscribe(
		(response) => {
			if (response['token'] != null) {
				localStorage.setItem('uas-pti-token', response['token']);
				this.router.navigate(['home']);
			}
		},
	    (error) => alert(error.error.message)
	)
  }
}

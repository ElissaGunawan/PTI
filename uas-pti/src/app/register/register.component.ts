import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { SHA512 } from 'crypto-js';
import { Router } from '@angular/router';
import { dataRegister } from 'src/app/_shared/models/mahasiswa-result';
import { ServiceService } from 'src/app/_shared/services/Service.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  	register: dataRegister = {
  		username: '',
        telepon: '',
        email: '',
        nama_lengkap: '',
        alamat: '',
        tanggal_lahir: '',
        foto: '',
        password: ''
	}
	constructor(
	  private http: HttpClient,
	  private router: Router,
	  private signup: ServiceService
	) 
	  { }

	  ngOnInit() {

	  }

	  signUp(){
	  	this.signup.signUp(this.register).subscribe(
				(response) => {
					if (response['token'] != null) {
						localStorage.setItem('uas-pti-token', response['token']);
						this.router.navigate(['home']);
					}
				},
			    (error) => alert(error.error.info)
			)
	  }
}

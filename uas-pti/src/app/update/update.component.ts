import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { dataUpdate } from 'src/app/_shared/models/mahasiswa-result';
import { PutDataServiceService } from 'src/app/_shared/services/put-data-service.service';
import * as jwt_decode from 'jwt-decode';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SHA512 } from 'crypto-js';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
 
 	updateUser: FormGroup;
	
  constructor(
  		private http: HttpClient,
	  	private router: Router,
	  	public activatedRoute: ActivatedRoute,
	  	private update: PutDataServiceService,
	  	private formBuilder: FormBuilder
	) { }

  ngOnInit() {
  	var token = localStorage.getItem('uas-pti-token');
	var decoded = jwt_decode(token);
	console.log(decoded);

	let user_name = decoded.user.user_name; 
	let formBuilder = new FormBuilder;

	this.updateUser = this.formBuilder.group({
		user_name: [decoded.user.user_name],
		telepon: [decoded.user.telepon],
		email: [decoded.user.email],
		nama_lengkap: [decoded.user.nama_lengkap],
		alamat: [decoded.user.alamat],
		tanggal_lahir: [decoded.user.tanggal_lahir],
		foto: [decoded.user.foto],
		password: [decoded.user.password]
	})

	console.log(localStorage.getItem('uas-pti-token'));
  }
	get(){
	  	this.http.put('https://umn-pti2019.herokuapp.com/api/update', {
			"user_name": this.updateUser.user_name,
			"telepon": this.updateUser.telepon,
			"email": this.updateUser.email,
			"nama_lengkap": this.updateUser.nama_lengkap,
			"alamat": this.updateUser.alamat,
			"tanggal_lahir": this.updateUser.tanggal_lahir,
			"foto": this.updateUser.foto,
			"password": SHA512(this.updateUser.password).toString()
		}, {
			headers: {
				"Content-Type": "application/json",
				"Authorization": "Bearer" + localStorage.getItem('uas-pti-token')
			}
		}).subscribe(
		(response) => {
			if(response.token != null) {						
				localStorage.setItem('uas-pti-token', response.token);
				this.router.navigate(['login']);
			}
		},
		(error) => alert(error.error.info)
		)
	  }
}

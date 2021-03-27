import { Injectable } from '@angular/core';
import { dataRegister } from 'src/app/_shared/models/mahasiswa-result';
import { dataLogin } from 'src/app/_shared/models/mahasiswa-result';
import { dataHome } from 'src/app/_shared/models/mahasiswa-result';
import { HttpClient } from '@angular/common/http';
import { SHA512 } from 'crypto-js';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(
  		  private http: HttpClient,
  		  ) { }

  signUp(data : dataRegister){
  	return this.http.post('https://umn-pti2019.herokuapp.com/api/register', {
				"user_name": data.username,
				"telepon": data.telepon,
				"email": data.email,
				"nama_lengkap": data.nama_lengkap,
				"alamat": data.alamat,
				"tanggal_lahir": data.tanggal_lahir,
				"foto": data.foto,
				"password": SHA512(data.password).toString()
			}, {
				headers: {
					"Content-Type": "application/json"
				}
			})
  }


  login(data : dataLogin){
  	return this.http.post('https://umn-pti2019.herokuapp.com/api/login', {
		"user_name": data.username,
		"password": SHA512(data.password).toString(),
		"remember_me": data.remember_me
	})
  }
}

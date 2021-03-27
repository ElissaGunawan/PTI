import { Injectable } from '@angular/core';
import { dataHome } from 'src/app/_shared/models/mahasiswa-result';
import { MahasiswaResult } from 'src/app/_shared/models/mahasiswa-result';
import { HttpClient } from '@angular/common/http';
import { SHA512 } from 'crypto-js';
@Injectable({
  providedIn: 'root'
})
export class GetDataServiceService {

  constructor(
  	private http : HttpClient,
  	) { }

  home(data : dataHome){
  	return this.http.get('https://umn-pti2019.herokuapp.com/api/mahasiswa?sort=nama_lengkap&order=desc', {
		headers: {
			"Content-Type": "application/json",
			"Authorization": "Bearer" + localStorage.getItem('uas-pti-token')
		}
	})
}

	homeDetail(data: MahasiswaResult, nim: string){
		return this.http.get('https://umn-pti2019.herokuapp.com/api/mahasiswa/' + nim, {
		headers: {
			"Content-Type": "application/json",
			"Authorization": "Bearer" + localStorage.getItem('uas-pti-token')
		}
	})
	}
}
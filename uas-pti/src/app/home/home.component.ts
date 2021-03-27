import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { dataHome } from 'src/app/_shared/models/mahasiswa-result';
import { GetDataServiceService } from 'src/app/_shared/services/get-data-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  home : dataHome;

  constructor(
	  	private http: HttpClient,
	  	private router: Router,
	  	private awal: GetDataServiceService,
	) 
	  { }

  ngOnInit() {
  	if (localStorage.getItem('uas-pti-token') == null) {
  		this.router.navigate(['login']);
  	}
  	this.getData();
  }

  getData(){
	this.awal.home(this.home).subscribe(
		(response) => {
			// console.log(response);
			this.home = response;
			// console.log(this.home.result.mahasiswa);
		},
	    (error) => {
	    	localStorage.removeItem('uas-pti-token');
	    	this.router.navigate(['login']);
		}
	)
  }

  logout(){
  	localStorage.removeItem('uas-pti-token');
	this.router.navigate(['login']);
  }
}

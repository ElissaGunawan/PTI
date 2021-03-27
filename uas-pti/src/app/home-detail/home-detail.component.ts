import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { MahasiswaResult } from 'src/app/_shared/models/mahasiswa-result';
import { GetDataServiceService } from 'src/app/_shared/services/get-data-service.service';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css']
})
export class HomeDetailComponent implements OnInit {
	mahasiswa: MahasiswaResult;
	currentNIM: string;
  constructor(
	  	private http: HttpClient,
	  	private router: Router,
	  	public activatedRoute: ActivatedRoute,
	  	private detail: GetDataServiceService,
	) { }

  ngOnInit() {
  	if (localStorage.getItem('uas-pti-token') == null) {
  		this.router.navigate(['login']);
  	}
  	this.currentNIM = this.activatedRoute.snapshot.paramMap.get("nim");
  	this.getData();
  }

  getData(){
	this.detail.homeDetail(this.mahasiswa, this.currentNIM).subscribe(
		(response) => {
			console.log(response);
			this.mahasiswa = response;
			console.log(this.mahasiswa);
		}
	)
  }
}

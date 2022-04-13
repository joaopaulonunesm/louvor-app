import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-repertorio',
  templateUrl: './repertorio.page.html',
  styleUrls: ['./repertorio.page.scss'],
})
export class RepertorioPage implements OnInit {

  constructor(private httpClient: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  salvarRepositorio(){

  }

  cancelar(){
    this.router.navigateByUrl('/tabs/repertorios');
  }

}

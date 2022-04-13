import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-musica',
  templateUrl: './musica.page.html',
  styleUrls: ['./musica.page.scss'],
})
export class MusicaPage implements OnInit {

  constructor(private httpClient: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  salvarMusica(){

  }

  cancelar(){
    this.router.navigateByUrl('/tabs/musicas');
  }

}

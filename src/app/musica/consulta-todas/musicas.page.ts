import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMusica } from 'src/app/models/IMusica.model';
import { DadosService } from 'src/app/services/dados.service';
import { MusicaService } from 'src/app/services/musica.service';

@Component({
  selector: 'app-musicas',
  templateUrl: './musicas.page.html',
  styleUrls: ['./musicas.page.scss'],
})
export class MusicasPage implements OnInit {

  todasMusicas: IMusica[] = [];

  musicas: IMusica[] = [];

  constructor(private router: Router, 
              private dadoService: DadosService,
              private musicaService: MusicaService) { }

  ngOnInit() {
    this.musicaService.buscarTodas().subscribe(data => {
      this.todasMusicas = data;
      this.musicas = this.todasMusicas;
    });
  }

  buscarMusicas(event){
    this.musicas= [];
    this.musicas = this.todasMusicas.filter(musica =>   musica.nome.toLowerCase().includes(event.detail.value.toLowerCase()));
  }

  criar(){
      this.router.navigateByUrl("/musica")
  }

  consultar(musica){
    this.dadoService.guardarDado(this.dadoService.MUSICA_INDEX, musica);
    this.router.navigateByUrl("/consulta-musica");
  }
}

import { Component, OnInit } from '@angular/core';
import { IMusica } from 'src/app/models/IMusica.model';
import { DadosService } from 'src/app/services/dados.service';

@Component({
  selector: 'app-consulta-musica',
  templateUrl: './consulta-musica.page.html',
  styleUrls: ['./consulta-musica.page.scss'],
})
export class ConsultaMusicaPage implements OnInit {

  musica: IMusica;

  constructor(private dadoService: DadosService) { }

  ngOnInit() {
    this.musica = this.dadoService.obterDado(this.dadoService.MUSICA_INDEX);
  }

}

import { Component, OnInit } from '@angular/core';
import { DadosService } from 'src/app/services/dados.service';
import { IRepertorio } from 'src/app/models/IRepertorio.model';

@Component({
  selector: 'app-consulta-repertorio',
  templateUrl: './consulta-repertorio.page.html',
  styleUrls: ['./consulta-repertorio.page.scss'],
})
export class ConsultaRepertorioPage implements OnInit {

  repertorio: IRepertorio;

  constructor(private dadoService: DadosService) { }

  ngOnInit() {
    this.repertorio = this.dadoService.obterDado(this.dadoService.REPERTORIO_INDEX);
  }

}

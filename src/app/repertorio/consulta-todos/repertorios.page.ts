import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IRepertorio, IRepertorioApi } from 'src/app/models/IRepertorio.model';
import { DadosService } from 'src/app/services/dados.service';
import { RepertorioService } from 'src/app/services/repertorio.service';

@Component({
  selector: 'app-repertorios',
  templateUrl: './repertorios.page.html',
  styleUrls: ['./repertorios.page.scss'],
})
export class RepertoriosPage implements OnInit {

  repertoriosApi: IRepertorioApi;

  repertorios: IRepertorio[];

  repertorioVigente: IRepertorio;

  constructor(private repertorioService: RepertorioService, 
              private router: Router, 
              private dadoService: DadosService) { }

  ngOnInit() {
    this.repertorioService.buscarTodos().subscribe(data => {
      this.repertoriosApi = data;
      this.repertorios = this.repertoriosApi.repertorios;
      this.repertorioVigente = this.repertoriosApi.repertorioVigente;
    });
  }

  criar() {
    this.router.navigateByUrl("/repertorio")
  }

  consultar(repertorio) {
    this.dadoService.guardarDado(this.dadoService.REPERTORIO_INDEX, repertorio);
    this.router.navigateByUrl("/consulta-repertorio");
  }
}

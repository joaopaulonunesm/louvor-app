import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  public MUSICA_INDEX = "musica";
  public REPERTORIO_INDEX = "repertorio";

  private dados: any = [];

  constructor() { }

  guardarDado(index: string, dado: any){
    if(index){
      this.dados[index] = dado;
    }
  }

  obterDado(index: string): any{
    return this.dados[index];
  }
}

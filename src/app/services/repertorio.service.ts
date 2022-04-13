import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { IRepertorioApi } from '../models/IRepertorio.model';

@Injectable({
  providedIn: 'root'
})
export class RepertorioService {

  repertorio: IRepertorioApi;

  constructor(private httpClient: HttpClient, private toastController: ToastController) { }

  buscarTodos(): Observable<IRepertorioApi> {
    return this.httpClient.get("http://localhost:8080/repertorios")
      .pipe(
        map(retorno => retorno),
        catchError(erro => this.exibirErro(erro, 'Houve um problema ao buscar os repertórios, por favor tente mais tarde!'))
      );
  }

  async exibirErro(erro, mensagem) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 2000,
      color: 'danger'
    });
    toast.present();
    return null;
  }
}

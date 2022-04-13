import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { IMusica } from '../models/IMusica.model';

@Injectable({
  providedIn: 'root'
})
export class MusicaService {

  musicas: IMusica[] = [];

  constructor(private httpClient: HttpClient, private toastController: ToastController) { }

  buscarTodas(): Observable<IMusica[]>{
    return this.httpClient.get("http://localhost:8080/musicas")
    .pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro, 'Houve um problema ao buscar musicas, por favor tente mais tarde!'))
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

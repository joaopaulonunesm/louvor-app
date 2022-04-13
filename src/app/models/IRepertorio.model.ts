import { IMusica } from "./IMusica.model";

export interface IRepertorio {
    id: string,
    mes: string,
    musicas: IMusica[],
    vigente: boolean;
}

export interface IRepertorioApi {
    repertorioVigente: IRepertorio,
    repertorios: IRepertorio[]
}
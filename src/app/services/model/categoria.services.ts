
import { API_CONFIG } from './../../../config/api.config';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Rx';
import { CategoriaDTO } from '../../../models/categoria.dto';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class CategoriaService{

  constructor(public http: HttpClient){

  }

  findall() : Observable<CategoriaDTO[]>{
    return this.http.get<CategoriaDTO[]>(`${API_CONFIG.baseUrl}/categorias`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_PATH } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(private httpClient: HttpClient) { }

   obterTodos(){
    return  this.httpClient.get(`${API_PATH}cadastro`);
  }

  inserirCadastro(cadastro: any){
    return this.httpClient.post(`${API_PATH}cadastro`,cadastro);
  }
}
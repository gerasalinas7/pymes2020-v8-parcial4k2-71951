import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contrato } from './contrato';

@Injectable(
  {providedIn: "root"}
)
export class ContratosService {

  resourceUrl: string;
  constructor(private httpClient: HttpClient) { 
      this.resourceUrl = "https://pavii.ddns.net/api/contratos/";
  }


get() {
    return this.httpClient.get(this.resourceUrl);
  }

post(obj:Contrato) {
    return this.httpClient.post(this.resourceUrl, obj);
  }
}
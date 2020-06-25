import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
}
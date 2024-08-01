import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {LocalStorageService} from "./local-storage/local-storage.service";

@Injectable({
  providedIn: 'root'
})
export class ParametrageService {

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private localStorage: LocalStorageService
  ) { }


}

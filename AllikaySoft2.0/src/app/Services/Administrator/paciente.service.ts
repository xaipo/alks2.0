import { Injectable } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {GLOBAL} from '../Generics/global';
@Injectable()
export class PacienteService {
  public url: string;

  constructor(private _http: Http) {
    this.url = GLOBAL.url;
  }

  getAll(){
    return this._http.get(this.url+'/paciente')
      .map(res=>res.json());
  }
  getByCedula(ci){
    return this._http.get(this.url+'/paciente?cedula='+ci)
      .map(res=>res.json());
  }
  save(obj_to_register){

    let params = JSON.stringify(obj_to_register);
    let headers = new Headers({'Content-Type':'application/json'});


    return this._http.post(this.url+'/paciente', params, {headers: headers})
      .map(res=>res.json());
  }

  update(obj_to_update){

    let params = JSON.stringify(obj_to_update);
    let headers = new Headers({'Content-Type':'application/json'});


    return this._http.put(this.url+'/pacientes/'+obj_to_update._id, params, {headers: headers})
      .map(res=>res.json());
  }

}

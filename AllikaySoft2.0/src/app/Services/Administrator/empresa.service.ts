import { Injectable } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {GLOBAL} from '../Generics/global';
@Injectable()
export class EmpresaService {
  public url: string;

  constructor(private _http: Http) {
    this.url = GLOBAL.url;
  }
  getByDescription(desc){
    return this._http.get(this.url+'/empresa?nombre_empresa='+desc)
      .map(res=>res.json());
  }
  getAll(){
    return this._http.get(this.url+'/empresa')
      .map(res=>res.json());
  }

  save(obj_to_register){

    let params = JSON.stringify(obj_to_register);
    let headers = new Headers({'Content-Type':'application/json'});


    return this._http.post(this.url+'/empresa', params, {headers: headers})
      .map(res=>res.json());
  }

  update(obj_to_update){

    let params = JSON.stringify(obj_to_update);
    let headers = new Headers({'Content-Type':'application/json'});


    return this._http.put(this.url+'/empresa/'+obj_to_update._id, params, {headers: headers})
      .map(res=>res.json());
  }

}

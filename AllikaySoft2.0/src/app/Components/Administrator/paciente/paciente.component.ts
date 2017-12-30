import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {PaisService} from "../../../Services/Administrator/pais.service";
import {Paciente} from "../../../Models/Administrator/Paciente";
import {ProvinciaService} from "../../../Services/Administrator/provincia.service";
import {CiudadService} from "../../../Services/Administrator/ciudad.service";

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css'],
  providers:[PaisService,ProvinciaService,CiudadService]
})
export class PacienteComponent implements OnInit {
  filteredStates: Observable<any[]>;
  cedula_pasaporte: boolean;
  paises:any;
  newPaciente:Paciente;
  es:any;
  ciudades:any;

  constructor(private _paisesService: PaisService, private _provinciaService:ProvinciaService, private _ciudadService:CiudadService) {
    this.cedula_pasaporte=true;
    this.newPaciente= new Paciente('','','','','','','',new Date(),0,'','','','','','');
    this.es = {
      firstDayOfWeek: 1,
      dayNames: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
      dayNamesShort: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
      dayNamesMin: ["D", "L", "M", "X", "J", "V", "S"],
      monthNames: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
      monthNamesShort: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
      today: 'Hoy',
      clear: 'Borrar'
    }
    this.getPaises();
  }

  ngOnInit() {
  }

  getPaises(){
    this._paisesService.getAll().subscribe(response => {
        this.paises = response;
        console.log(this.paises);
      },
      error=> {
        var errorMessage = <any>error;
        if (errorMessage != null) {
          //this.status = 'error';
        }
      }
    );

  }

  objs:any[];
  filteredObjSingle:any[];
  public empleado:any;

  filterSingle(event) {
    let query = event.query;
    this._paisesService.getAll().subscribe(objs => {
      //var auxObjs = objs;
      this.filteredObjSingle = this.filter(query, objs);
    });
  }

  filter(query, objs:any[]):any[] {
    //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
    let filtered:any[] = [];
    for (let i = 0; i < objs.length; i++) {
      let empleado = objs[i];
      if (empleado.nombre_pais.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(empleado);
      }
    }
    return filtered;
  }
  objs2:any[];
  filteredObjSingle2:any[];
  public empleado2:any;

  filterSingle2(event) {
    let query = event.query;
    this._provinciaService.getAll().subscribe(objs => {
      //var auxObjs = objs;
      this.filteredObjSingle2 = this.filter2(query, objs);
    });
  }

  filter2(query, objs:any[]):any[] {
    //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
    let filtered:any[] = [];
    for (let i = 0; i < objs.length; i++) {
      let empleado2 = objs[i];
      if (empleado2.nombre_provincia.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(empleado2);
        this.setCity(empleado2._id);
      }
    }
    //this.setCity(empleado2._id);
    return filtered;

  }
  setCity (_id:any){
    this._ciudadService.getBydId(_id).subscribe(response => {
        this.ciudades = response;
        console.log(this.ciudades);
      },
      error=> {
        var errorMessage = <any>error;
        if (errorMessage != null) {
          //this.status = 'error';
        }
      }
    );
  }

  guardar() {
    console.log(this.newPaciente);
  }

  cancelar() {

  }

}




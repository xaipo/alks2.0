import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {PaisService} from "../../../Services/Administrator/pais.service";
import {Paciente} from "../../../Models/Administrator/Paciente";
import {ProvinciaService} from "../../../Services/Administrator/provincia.service";
import {CiudadService} from "../../../Services/Administrator/ciudad.service";
import {EstadoCivilService} from "../../../Services/Administrator/estado-civil.service";
import {NivelEstudioService} from "../../../Services/Administrator/nivel-estudio.service";
import {PuestoTrabajoService} from "../../../Services/Administrator/puesto-trabajo.service";
import {PuestoTrabajo} from "../../../Models/Administrator/PuestoTrabajo";
import {EmpresaService} from "../../../Services/Administrator/empresa.service";
import {DependenciaService} from "../../../Services/Administrator/dependencia.service";
import {CargoService} from "../../../Services/Administrator/cargo.service";
import {JornadaService} from "../../../Services/Administrator/jornada.service";

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css'],
  providers:[PaisService,
    ProvinciaService,
    CiudadService,
    EstadoCivilService,
    NivelEstudioService,
    EmpresaService,
    DependenciaService,
    PuestoTrabajoService,
    CargoService,
    JornadaService]
})
export class PacienteComponent implements OnInit {
  filteredStates: Observable<any[]>;
  cedula_pasaporte: boolean;
  paises:any;
  estadosCivil:any;
  nivelesEstudio:any;
  newPaciente:Paciente;
  es:any;
  ciudades:any;
  sexo:any;
  newPuesto:PuestoTrabajo;
  dependencias:any;
  cargos:any;
  jornadas:any;
  constructor(private _paisesService: PaisService,
              private _provinciaService:ProvinciaService,
              private _ciudadService:CiudadService,
              private  _estadoCivilService:EstadoCivilService,
              private _nivelEstudio:NivelEstudioService,
              private _empresaService:EmpresaService,
              private _DependenciaService:DependenciaService,
              private _cargoService:CargoService,
              private _puestoTrabajoService:PuestoTrabajoService,
              private _jornadaService:JornadaService) {
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

    this.newPuesto=new PuestoTrabajo('','UNACH',new Date(),'','','','','','','','','','');
    this.getPaises();
    this.getEstadoCivil();
    this.getNivelEstudio();
    this.sexo=[{code:'H',description:'Hombre'},{code:'M',description:'Mujer'}]
    this.getEmpresa(this.newPuesto.empresa);
    this.getJornadaService();

  }

  ngOnInit() {
  }
  getEmpresa(desc){
    this._empresaService.getByDescription(desc).subscribe(response => {
        this.newPuesto.empresa = response[0];
        console.log(this.newPuesto.empresa);
        this.getDependencia(this.newPuesto.empresa._id);
      },
      error=> {
        var errorMessage = <any>error;
        if (errorMessage != null) {
          //this.status = 'error';
        }
      }
    );

  }

  getDependencia(id){

    this._DependenciaService.getAllbyId(id).subscribe(response => {
        this.dependencias = response;
        console.log(this.dependencias);
        console.log(id);
      },
      error=> {
        var errorMessage = <any>error;
        if (errorMessage != null) {
          //this.status = 'error';
        }
      }
    );
  }
  getCargo(){

    this._cargoService.getById(this.newPuesto.dependencia).subscribe(response => {
        this.cargos = response;
      console.log(this.cargos);
      },
      error=> {
        var errorMessage = <any>error;
        if (errorMessage != null) {
          //this.status = 'error';
        }
      }
    );
  }
  getPaises(){
    this._paisesService.getAll().subscribe(response => {
        this.paises = response;

      },
      error=> {
        var errorMessage = <any>error;
        if (errorMessage != null) {
          //this.status = 'error';
        }
      }
    );

  }
  getEstadoCivil(){
    this._estadoCivilService.getAll().subscribe(response => {
        this.estadosCivil = response;
       // console.log(this.paises);
      },
      error=> {
        var errorMessage = <any>error;
        if (errorMessage != null) {
          //this.status = 'error';
        }
      }
    );

  }
  getNivelEstudio(){
    this._nivelEstudio.getAll().subscribe(response => {
        this.nivelesEstudio = response;
        // console.log(this.paises);
      },
      error=> {
        var errorMessage = <any>error;
        if (errorMessage != null) {
          //this.status = 'error';
        }
      }
    );

  }

  getJornadaService(){

    this._jornadaService.getAll().subscribe(response => {
        this.jornadas = response;
        // console.log(this.paises);
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
    console.log(this.newPuesto);
  }

  cancelar() {

  }

}




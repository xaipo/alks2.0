/**
 * Created by xaipo on 12/30/2017.
 */
export class Paciente {
  constructor(

    public cedula: string,
    public primer_nombre: string,
    public segundo_nombre: string,
    public primer_apellido: string,
    public segundo_apellido: string,
    public pais: any,
    public sexo: string,
    public fecha_nacimiento:Date,
    public edad :number,
    public telefono: string,
    public ciudad:  any,
    public estado_civil: any,
    public nivel_estudio: any,
    public puesto_trabajo:any,
    public historias_clinicas:any,

  ) {}
}

export class Expte {
    constructor(
      public id: number,
      public expte: string,
      public tipoExpte: string,
      public estado: string,
      public juzgado: string,
      public fechaInicio: string,
      public ultimoMovimiento: string,
      public honorarios: number,
      public audiencia?: string,
      public observaciones?: string,
      public fechaFin?: string
    ) {}
  }
  
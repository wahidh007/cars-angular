export class Car {
  id: number;
  prop: string;
  marque: string;
  dateCirulation : Date;

  constructor(id: number, prop: string, marque: string, dateCirulation : Date) {
    this.id = id;
    this.prop = prop;
    this.marque = marque;
    this.dateCirulation = dateCirulation;
  }
}

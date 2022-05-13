export class Car {
  id: string;
  prop: string;
  marque: string;
  dateCirulation : Date;

  constructor(id: string, prop: string, marque: string, dateCirulation : Date) {
    this.id = id;
    this.prop = prop;
    this.marque = marque;
    this.dateCirulation = dateCirulation;
  }
}

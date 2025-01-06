import { Injectable } from "@angular/core";

export interface CarServiceInterface {
  execute(): {
    brand: string;
    model: string;
    year: number;
  }
}

@Injectable({ providedIn: 'root' })
export class CarService implements CarServiceInterface {
  execute() {
    return {
      brand: 'Honda',
      model: 'Accord',
      year: 2022,
    };
  }
}
import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent {

  constructor() { }

  heroes: string[] = ['Superman', 'Batman', 'Acuaman', 'Thor'];
  heroeBorrado: string = '';

  borrarHeroe(){
    this.heroeBorrado = this.heroes.shift() || '';
    
  }



}

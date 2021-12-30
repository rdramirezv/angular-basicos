import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  // styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman','Ironman','Hulk','Thor','Capitán América'];
  heroesBorrados: string = '';
  
  borrarHeroe() {
    console.log('Borrando ...');
    this.heroesBorrados = this.heroes.shift() || '';
  }



}

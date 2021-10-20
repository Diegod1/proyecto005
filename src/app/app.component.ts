import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mensaje = '';
  actualizar(t: any){
    this.mensaje = `${t}(Se actualiza cada 1O)`;
  }
}


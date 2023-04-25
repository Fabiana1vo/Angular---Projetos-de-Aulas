import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent {

  value : number = 0

  incrementa(){
    this.value++;
  }

  decrementa(){
    this.value--;
  }
}

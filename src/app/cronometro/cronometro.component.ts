import{ Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//import { EventEmitter } from 'stream';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent implements OnInit {
  segundo=0;
  @Input() inicio!:string;
  @Output() muliplo10  = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    this.segundo = Number(this.inicio);
    setInterval(()=> {
      this.segundo++;
    if (this.segundo % 10 == 0)
        this.muliplo10.emit(this.segundo);
    },1000)
  }

}

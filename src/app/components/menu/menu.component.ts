import { Component, OnInit } from '@angular/core';
import {Componente} from "../../common/interfaces";
import {Data} from "@angular/router";
import {DataService} from "../../services/data.service";
import {errorContext} from "rxjs/internal/util/errorContext";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent  implements OnInit {

  componentes: Componente[] = [];
  constructor(private dataServices: DataService) { }

  ngOnInit() {
    this.cargarComponente();
  }


  private cargarComponente(){
    this.dataServices.getComponente().subscribe(
      {
      next: (data: Componente[]) => {
        this.componentes = data;
    },
      error: err => {
        console.log(err);
    },
      complete: () => {
        console.log("Complete");
    }}
    )
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
})
export class SlidesPage implements OnInit {
slides: {img: string; titulo: string, desc:string}[]=[
  {
    img: '/assets/icon/placeholder.png',
    titulo: 'Comparte Fotos',
    desc: 'Mira y comparte tus mejores fotos en un segundo'
  },{
    img: '/assets/icon/music.png',
    titulo: 'Musica maestro',
    desc: 'Lleva tu musica alla donde vayas'
  },{
    img: '/assets/icon/calendar.png',
    titulo: 'Calendario',
    desc: 'No olvides nada con este magnifico calendario'
  }
];
  constructor() { }

  ngOnInit() {
  }

}

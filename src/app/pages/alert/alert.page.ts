import { Component, OnInit } from '@angular/core';
import {AlertController} from "@ionic/angular";

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {
  titulo: string = '';

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async mostrarAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Titulo Alert',
      subHeader: 'subtitulo alert',
      message: 'alrta alerta alerta',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () =>{
            console.log("cancelar");
          }
        },
        {
          text: 'ok',
          handler: () =>{
            console.log("Ok");
          },
        }
      ]
     }
    );
    await alert.present();
  }

  async mostrarTitulo() {
    const alert = await this.alertCtrl.create({
      header: 'alert con imput',
      subHeader: 'escribe el titulo',
      inputs: [
        {
          name: 'nombre',
          type: 'text',
          placeholder: 'nombre'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () =>{
            console.log("cancelar");
          }
        },
        {
          text: 'ok',
          handler: (data) =>{
            console.log("Ok confirm y data: ")
            console.log(data);
            this.titulo = data.nombre;
          },
        }
      ]
    });
    await alert.present();
  }
}

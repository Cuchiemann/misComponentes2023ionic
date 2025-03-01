import { Component, OnInit } from '@angular/core';
import {ActionSheetController, AlertController} from "@ionic/angular";

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

  constructor(private actionSheetCtrl: ActionSheetController) { }

  ngOnInit() {
  }

  async mostrarActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'albums',
      backdropDismiss: false,
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: 'trash',
          cssClass: 'rojo',
          handler: () =>{
            console.log("Delete pulsado");
          }
        },
        {
          text: 'Share',
          icon: 'share-social',
          handler: () =>{
            console.log("Share pulsado");
          }
        },
        {
          text: 'Play',
          icon: 'caret-forward-circle',
          handler: () =>{
            console.log("Play pulsado");
          }
        },
        {
          text: 'Favorite',
          icon: 'heart',
          handler: () =>{
            console.log("favorite pulsado");
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          icon: 'close',
          handler: () =>{
            console.log("cancel pulsado");
          }
        }
      ]
    }
    );
    await actionSheet.present();
  }
}

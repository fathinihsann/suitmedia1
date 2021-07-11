import { Screen2Page } from './../screen2/screen2.page';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @Input() nama;

  constructor(private router:Router, public modalCtrl: ModalController) {}

  ngOninit(): void{
  }

  async next(){
  const modal = await this.modalCtrl.create({
    component: Screen2Page,
    cssClass: 'my-custom-class',
    componentProps:{
      'nama': this.nama
    }
  })
  // this.router.navigate(['screen2'])
  // this.print = this.nama;
return await modal.present();

}

}

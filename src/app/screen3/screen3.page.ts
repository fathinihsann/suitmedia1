import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Screen2Page } from '../screen2/screen2.page';

@Component({
  selector: 'app-screen3',
  templateUrl: './screen3.page.html',
  styleUrls: ['./screen3.page.scss'],
})
export class Screen3Page implements OnInit {

  @Input() nama;
  @Input() guestoutput;
  @Input() eventouput

  constructor(private router:Router, public modalCtrl:ModalController) { }

  ngOnInit() {
  }

  dismiss() {
    this.modalCtrl.dismiss({
      'dismissed':true
    });
  }

  async event(){
    const modal = await this.modalCtrl.create({
      component: Screen2Page,
      cssClass: 'my-custom-class',
      componentProps:{
        'nama':this.nama,
        'eventoutput': this.eventouput
      }
    })
    // this.router.navigate(['screen2'])
    // this.print = this.nama;
  return await modal.present();
  }

  // event() {
  //   this.router.navigate(['screen2'])
  // }
}

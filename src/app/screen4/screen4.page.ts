import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
// import { Screen2Page } from '../screen2/screen2.page';

@Component({
  selector: 'app-screen4',
  templateUrl: './screen4.page.html',
  styleUrls: ['./screen4.page.scss'],
})
export class Screen4Page implements OnInit {

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

  async guest(){
    this.modalCtrl.dismiss({
      'dismissed':true
    });
  }
  //   const modal = await this.modalCtrl.create({
  //     component: Screen2Page,
  //     cssClass: 'my-custom-class',
  //     componentProps:{
  //       'nama':this.guestoutput
  //     }
  //   })
  //   // this.router.navigate(['screen2'])
  //   // this.print = this.nama;
  // return await modal.present();
  }

  // guest() {
  //   this.router.navigate(['screen2'])
  // }


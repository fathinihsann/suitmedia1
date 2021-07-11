import { Screen3Page } from './../screen3/screen3.page';
import { Screen4Page } from './../screen4/screen4.page';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-screen2',
  templateUrl: './screen2.page.html',
  styleUrls: ['./screen2.page.scss'],
})
export class Screen2Page implements OnInit {

  @Input() nama;
  @Input() guestoutput;
  @Input() eventoutput

  // @Output() newItemEvent = new EventEmitter<string>();
  constructor(private router:Router, public modalCtrl:ModalController) { }

  ngOnInit() {
  }

  // addNewItem(value: string) {
  //   this.newItemEvent.emit(value);
  // }

  dismiss() {
    this.modalCtrl.dismiss({
      'dismissed':true
    });
  }

  async event(){
    const modal = await this.modalCtrl.create({
      component: Screen3Page,
      cssClass: 'my-custom-class',
      componentProps:{
      }
    })
    // this.router.navigate(['screen2'])
    // this.print = this.nama;
  return await modal.present();
  }

  async guest(){
    const modal = await this.modalCtrl.create({
      component: Screen4Page,
      cssClass: 'my-custom-class',
      componentProps:{
      }
    })
    // this.router.navigate(['screen2'])
    // this.print = this.nama;
  return await modal.present();
  }

  // event(){
  //   this.router.navigate(['screen3'])
  // }

  // guest(){
  //   this.router.navigate(['screen4'])
  // }
}

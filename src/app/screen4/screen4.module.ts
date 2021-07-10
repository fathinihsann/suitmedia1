import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Screen4PageRoutingModule } from './screen4-routing.module';

import { Screen4Page } from './screen4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Screen4PageRoutingModule
  ],
  declarations: [Screen4Page]
})
export class Screen4PageModule {}

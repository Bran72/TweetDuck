import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewtweetPage } from './newtweet';

@NgModule({
  declarations: [
    NewtweetPage,
  ],
  imports: [
    IonicPageModule.forChild(NewtweetPage),
  ],
})
export class NewtweetPageModule {}

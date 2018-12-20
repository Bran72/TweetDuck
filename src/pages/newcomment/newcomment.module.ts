import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewcommentPage } from './newcomment';

@NgModule({
  declarations: [
    NewcommentPage,
  ],
  imports: [
    IonicPageModule.forChild(NewcommentPage),
  ],
})
export class NewcommentPageModule {}

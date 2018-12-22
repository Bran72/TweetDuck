import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserImagePage } from './user-image';

@NgModule({
  declarations: [
    UserImagePage,
  ],
  imports: [
    IonicPageModule.forChild(UserImagePage),
  ],
})
export class UserImagePageModule {}

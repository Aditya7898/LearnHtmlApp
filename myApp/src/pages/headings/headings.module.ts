import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HeadingsPage } from './headings';

@NgModule({
  declarations: [
    HeadingsPage,
  ],
  imports: [
    IonicPageModule.forChild(HeadingsPage),
  ],
})
export class HeadingsPageModule {}

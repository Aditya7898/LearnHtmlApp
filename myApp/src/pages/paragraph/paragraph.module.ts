import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ParagraphPage } from './paragraph';

@NgModule({
  declarations: [ParagraphPage],
  imports: [IonicPageModule.forChild(ParagraphPage)],
  exports: [ParagraphPage]
})
export class ParagraphPageModule {}

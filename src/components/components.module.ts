import { NgModule } from '@angular/core';
import { IonicModule } from "ionic-angular";
import { TransactionComponent } from './transaction/transaction';
@NgModule({
	declarations: [TransactionComponent],
	imports: [IonicModule],
	exports: [TransactionComponent]
})
export class ComponentsModule {}

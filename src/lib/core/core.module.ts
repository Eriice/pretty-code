import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import { PrettyPrinterService as PrettyPrinter } from "../service/pretty-printer.service";
import { CopierService } from '../service/copier.service';
import { LoggerService } from "../service/logger.service";
import {MatButtonModule} from '@angular/material';
@NgModule({
  declarations: [CoreComponent],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    CoreComponent
  ],
  providers: [
    PrettyPrinter,
    CopierService,
    LoggerService,
  ],
  entryComponents: [ CoreComponent ],
})
export class CoreModule { }

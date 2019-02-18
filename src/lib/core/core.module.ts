import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import { PrettyPrinterService as PrettyPrinter } from "../service/pretty-printer.service";
import { CopierService } from '../service/copier.service';
import { LoggerService } from "../service/logger.service";

// copy module
import { MatButtonModule, MatIconModule } from '@angular/material';
// import { MatIconRegistry } from "@angular/material";
// import { DomSanitizer } from "@angular/platform-browser";

@NgModule({
  declarations: [CoreComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule
    // MatIconRegistry,
    // DomSanitizer
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

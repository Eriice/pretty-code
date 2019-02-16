import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from "../core/core.module";
import { CodeExampleComponent } from './code-example.component';
import { HeaderComponent } from "../header/header.component";
import { MatSnackBarModule } from "@angular/material";

@NgModule({
  declarations: [
    CodeExampleComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    MatSnackBarModule
  ],
  exports: [
    CodeExampleComponent
  ],
  entryComponents: [ CodeExampleComponent ],
})
export class CodeExampleModule { }

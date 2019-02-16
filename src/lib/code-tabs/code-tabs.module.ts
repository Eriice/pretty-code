import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { CodeTabsComponent } from './code-tabs.component';
import { MatCardModule, MatTabsModule, MatSnackBarModule } from '@angular/material';

@NgModule({
  declarations: [CodeTabsComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatTabsModule,
    MatSnackBarModule,
    CoreModule
  ],
  exports: [
    CodeTabsComponent
  ]
})
export class CodeTabsModule{
}
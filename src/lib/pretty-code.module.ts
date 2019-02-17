import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from './core/core.module';
import { CodeExampleModule } from './code-example/code-example.module'
import { CodeTabsModule } from './code-tabs/code-tabs.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CoreModule,
    CodeExampleModule,
    CodeTabsModule,
  ]
})
export class PrettyCodeModule { }

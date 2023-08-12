import { NgModule } from '@angular/core';

import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@NgModule({
  imports: [
    CardModule,
    InputTextModule,
    ButtonModule
  ],
  exports: [
    CardModule,
    InputTextModule,
    ButtonModule
  ]
})
export class PrimeNgModule { }

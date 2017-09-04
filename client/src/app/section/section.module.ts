import { NgModule } from '@angular/core';

import { Section1Component } from './section1.component';

import { SectionRoutingModule } from './section-routing.module';

@NgModule({
  imports: [ SectionRoutingModule ],
  declarations: [
    Section1Component
  ]
})
export class SectionModule { }

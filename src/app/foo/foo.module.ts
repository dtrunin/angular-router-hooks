import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FooComponent} from "./foo.component";
import {FooRoutingModule} from "./foo-routing.module";



@NgModule({
  declarations: [FooComponent],
  imports: [
    CommonModule, FooRoutingModule
  ]
})
export class FooModule { }

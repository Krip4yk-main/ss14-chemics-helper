import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import {ReactiveFormsModule} from "@angular/forms";
import {TemplatesModule} from "../templates/templates.module";
import {DropdownModule} from "primeng/dropdown";
import {TooltipModule} from "primeng/tooltip";

@NgModule({
  declarations: [HomeComponent],
    imports: [CommonModule, SharedModule, ReactiveFormsModule, TemplatesModule, DropdownModule, TooltipModule]
})
export class HomeModule {}

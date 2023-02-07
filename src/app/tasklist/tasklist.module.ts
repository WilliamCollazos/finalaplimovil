import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { TasklistPageRoutingModule } from './tasklist-routing.module';

import { TasklistPage } from './tasklist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    IonicModule,
    TasklistPageRoutingModule
  ],
  declarations: [TasklistPage]
})
export class TasklistPageModule {}

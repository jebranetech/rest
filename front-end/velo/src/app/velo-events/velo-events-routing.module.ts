import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VeloEventsComponent } from './velo-events.component';

const routes: Routes = [{ path: '', component: VeloEventsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VeloEventsRoutingModule { }

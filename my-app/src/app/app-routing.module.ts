import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomemadeComponent } from './homemade/homemade.component';
import { QccComponent } from './qcc/qcc.component';

const routes: Routes = [
  
  { path: '', component: HomemadeComponent },
  { path: 'qcc', component: QccComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { ViewComponent } from '../users/view/view.component';
import { CreateComponent } from '../users/create/create.component';

const routes: Routes = [
 
  {path:"create", component:CreateComponent},
  {path:"view", component:ViewComponent}
];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]

})
export class UsersRoutingModule { }

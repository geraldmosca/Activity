import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { UserDataComponent } from './user/user-data/user-data.component';

const routes: Routes = [
  {path: "", component: UserProfileComponent,
    children:[
      {path: "register", component:UserDataComponent}
    ]
}]
  
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes)],
  ],
  exports: [RouterModule]


})
export class AppRoutingModule { }

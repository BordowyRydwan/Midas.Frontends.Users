import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptyRouteComponent } from "./empty-route/empty-route.component";
import { UserProfileComponent } from "./views/user-profile/user-profile.component";
import { SessionGuard } from "./guards/session.guard";
import { APP_BASE_HREF } from "@angular/common";
import { UserProfileEditComponent } from "./views/user-profile-edit/user-profile-edit.component";
import { UserEmailChangeComponent } from "./views/user-email-change/user-email-change.component";

const routes: Routes = [
  { path: 'users/profile', component: UserProfileComponent, canActivate: [ SessionGuard ]},
  { path: 'users/profile/edit', component: UserProfileEditComponent, canActivate: [ SessionGuard ]},
  { path: 'users/profile/edit-email', component: UserEmailChangeComponent, canActivate: [ SessionGuard ]},
  { path: '**', component: EmptyRouteComponent },
];

@NgModule({
  declarations: [EmptyRouteComponent],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
  ],
})
export class AppRoutingModule { }

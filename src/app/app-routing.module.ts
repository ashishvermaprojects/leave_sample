import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent, ResetPasswordFormComponent, CreateAccountFormComponent, ChangePasswordFormComponent } from './shared/components';
import { AuthGuardService } from './shared/services';
import { ProfileComponent } from './pages/profile/profile.component';
import { DxDataGridModule, DxFormModule } from 'devextreme-angular';
import { LeaveListComponent } from './pages/leave-list/leave-list.component';
import { LeaveCreateComponent } from './pages/leave-create/leave-create.component';
import { DxTextBoxModule,DxSelectBoxModule,DxButtonModule,DxCheckBoxModule } from 'devextreme-angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LeaveDeleteComponent } from './pages/leave-delete/leave-delete.component';

const routes: Routes = [
  {
    path: 'leave/delete',
    component: LeaveDeleteComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'leave/create',
    component: LeaveCreateComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'leave/list',
    component: LeaveListComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'login-form',
    component: LoginFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'reset-password',
    component: ResetPasswordFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'create-account',
    component: CreateAccountFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'change-password/:recoveryCode',
    component: ChangePasswordFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), DxDataGridModule, DxFormModule, DxTextBoxModule, DxButtonModule, DxSelectBoxModule, DxCheckBoxModule, CommonModule, FormsModule, HttpClientModule],
  providers: [AuthGuardService],
  exports: [RouterModule],
  declarations: [ ProfileComponent, LeaveListComponent, LeaveCreateComponent, LeaveDeleteComponent]
})
export class AppRoutingModule { }

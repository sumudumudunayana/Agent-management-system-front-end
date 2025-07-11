import { Routes } from '@angular/router';
import { HeropageComponent } from './pages/heropage/heropage.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { ListingComponent } from './pages/listing/listing.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AdminAddComponent } from './pages/admin-add/admin-add.component';
import { AdminManageComponent } from './pages/admin-manage/admin-manage.component';
import { AgentComponent } from './pages/agent/agent.component';
import { AgentAddComponent } from './pages/agent-add/agent-add.component';
import { AgentManageComponent } from './pages/agent-manage/agent-manage.component';
import { AppointmentComponent } from './pages/appointment/appointment.component';
import { AppointmentAddComponent } from './pages/appointment-add/appointment-add.component';
import { AppointmentManageComponent } from './pages/appointment-manage/appointment-manage.component';
import { ClientComponent } from './pages/client/client.component';
import { ClientManageComponent } from './pages/client-manage/client-manage.component';
import { ClientAddComponent } from './pages/client-add/client-add.component';
import { UserComponent } from './pages/user/user.component';
import { UserManageComponent } from './pages/user-manage/user-manage.component';
import { UserAddComponent } from './pages/user-add/user-add.component';
import { ReviewComponent } from './pages/review/review.component';
import { ReviewAddComponent } from './pages/review-add/review-add.component';
import { ReviewManageComponent } from './pages/review-manage/review-manage.component';
import { ReviewViewComponent } from './pages/review-view/review-view.component';
import { UserViewComponent } from './pages/user-view/user-view.component';

export const routes: Routes = [
  {
    path: '',
    component: HeropageComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'navbar',
    component: NavbarComponent,
  },
  {
    path: 'admin-page',
    component: AdminComponent,
  },
  {
    path: 'add-admin',
    component: AdminAddComponent,
  },
  {
    path: 'manage-admin',
    component: AdminManageComponent,
  },
  {
    path: 'agent',
    component: AgentComponent,
  },
  {
    path: 'add-agent',
    component: AgentAddComponent,
  },
  {
    path: 'manage-agent',
    component: AgentManageComponent,
  },
  {
    path: 'view-agent',
    component: ListingComponent,
  },
  {
    path: 'appointment',
    component: AppointmentComponent,
  },
  {
    path: 'add-appointment',
    component: AppointmentAddComponent,
  },
  {
    path: 'manage-appointment',
    component: AppointmentManageComponent,
  },
  {
    path: 'client',
    component: ClientComponent,
  },
  {
    path: 'manage-client',
    component: ClientManageComponent,
  },
  {
    path: 'add-client',
    component: ClientAddComponent,
  },
  {
    path: 'user',
    component: UserComponent,
  },
  {
    path: 'manage-user',
    component: UserManageComponent,
  },
  {
    path: 'add-user',
    component: UserAddComponent,
  },
  {
    path: 'view-user',
    component: UserViewComponent,
  },
  {
    path: 'review',
    component: ReviewComponent,
  },
  {
    path: 'add-review',
    component: ReviewAddComponent,
  },
  {
    path: 'manage-review',
    component: ReviewManageComponent,
  },
  {
    path: 'view-review',
    component: ReviewViewComponent,
  },

];

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainSectionComponent } from './main-section/main-section.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/main-section',
    pathMatch: 'full',
  },
  {
    path: 'main-section',
    component: MainSectionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

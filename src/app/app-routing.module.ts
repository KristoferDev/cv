import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./components/profile/profile.module').then(
        mod => mod.ProfileModule
      )
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./components/about/about.module').then(mod => mod.AboutModule)
  },
  {
    path: 'projects',
    loadChildren: () =>
      import('./components/projects/projects.module').then(
        mod => mod.ProjectsModule
      )
  },
  { path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

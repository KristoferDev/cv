import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:"home",
    loadChildren: () => import('./components/profile/profile.module').then(mod => mod.ProfileModule)
  },
  {
    path:"language",
    loadChildren: () => import('./components/language/language.module').then(mod => mod.LanguageModule)
  },
  {
    path:"contact",
    loadChildren: () => import('./components/contact/contact.module').then(mod => mod.ContactModule)
  },
  {
    path:"about",
    loadChildren: () => import('./components/about/about.module').then(mod => mod.AboutModule)
  },
  {
    path:"experience",
    loadChildren: () => import('./components/experience/experience.module').then(mod => mod.ExperienceModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

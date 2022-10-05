import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './contactus.component';
import { PageNotFoundComponent } from './pagenotfound.component';
// import { PreloadAllModules } from '@angular/router'

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'company', loadChildren: () => import('./company/company.module').then(mod => mod.CompanyModule) },
  { path: 'person', loadChildren: () => import('./person/person.module').then(mod => mod.PersonModule) },
  { path: 'student', loadChildren: () => import('./student/student.module').then(mod => mod.StudentModule) },
  { path: 'user', loadChildren: () => import('./user/user.module').then(mod => mod.UserModule) },
  { path: 'contactus', component: ContactusComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  //-------- PreLoading Strategy (Load All Module) ---------
  // imports: [RouterModule.forRoot(routes, {
  //   preloadingStrategy: PreloadAllModules
  // })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

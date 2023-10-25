import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { ErrorRoutingModule } from './error-routing/error-routing.module';
import { GridComponent } from './grid/grid.component';
import { FormComponent } from './form/form.component';

export const routes: Routes = [
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'grid', component: GridComponent, data: { text: 'Grid' } },
  { path: 'form', component: FormComponent },
  { path: '', redirectTo: '/grid', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent } // must always be last
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ErrorRoutingModule],
  exports: [RouterModule, ErrorRoutingModule]
})
export class AppRoutingModule {
}

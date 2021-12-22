import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/admin/product/product.component';
import { IndexComponent } from './components/frontend/index/index.component';
import { HomeComponent } from './components/home/home.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LayoutfrontComponent } from './components/layoutfront/layoutfront.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: LayoutfrontComponent, children: [
    {path: '', component: IndexComponent},
  ]},
  {path: 'admin', component: LayoutComponent, canActivateChild: [AuthGuard], children: [
    {path: '', component: HomeComponent},
    {path: 'product', component: ProductComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

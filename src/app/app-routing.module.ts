import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AuthGuard } from './security/auth.guard';

const routes: Routes = [
  {path: "", redirectTo: "login", pathMatch: "full"},
  {path: "login", component: LoginComponent},
  {
    path: "products", 
    loadChildren: () => import("./modules/products/products.module").then(x=> x.ProductsModule), 
    canLoad: [AuthGuard]
  },
  {
    path: "sale", 
    loadChildren: () => import("./modules/sale/sale.module").then(x=> x.SaleModule), 
    canLoad: [AuthGuard]
  },
  {path: "**", component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

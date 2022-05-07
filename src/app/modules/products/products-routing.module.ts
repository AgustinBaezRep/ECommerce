import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from 'src/app/components/notfound/notfound.component';
import { AboutComponent } from './pages/about/about.component';
import { ChartComponent } from './pages/chart/chart.component';
import { DetailComponent } from './pages/detail/detail.component';
import { DetailedissuesComponent } from './pages/detailedissues/detailedissues.component';
import { HomeComponent } from './pages/home/home.component';
import { IssuesComponent } from './pages/issues/issues.component';
import { ProductsComponent } from './products.component';

const routes: Routes = [
  {path: '', component: ProductsComponent, children: [
    {path: "", redirectTo: "home", pathMatch: "full"},
    {path: 'home', component: HomeComponent},
    {path: 'detail', component: DetailComponent},
    {path: 'chart', component: ChartComponent},
    {path: 'about', component: AboutComponent},
    {path: 'issues', component: IssuesComponent},
    {path: 'detailissue', component: DetailedissuesComponent}
  ]},
    {path: "**", component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }

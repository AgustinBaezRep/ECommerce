import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../modules/shared/shared.module';
import { ProductsRoutingModule } from './products-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { IssuesComponent } from './pages/issues/issues.component';
import { DetailedissuesComponent } from './pages/detailedissues/detailedissues.component';
import { ChartComponent } from './pages/chart/chart.component';
import { DetailComponent } from './pages/detail/detail.component';
import { ProductsComponent } from './products.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    IssuesComponent,
    DetailedissuesComponent,
    ChartComponent,
    DetailComponent,
    ProductsComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule
  ]
})
export class ProductsModule { }

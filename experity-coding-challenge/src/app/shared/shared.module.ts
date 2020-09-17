import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



@NgModule({
  declarations: [LayoutComponent, HeaderComponent, FooterComponent, PageNotFoundComponent],
  imports: [
    CommonModule
  ],
  exports:[
    LayoutComponent
  ]
})
export class SharedModule { }

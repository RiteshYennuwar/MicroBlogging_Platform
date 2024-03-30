import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

import { BlogsModule } from './blogs/blogs.module';
import { StaticpagesModule } from './staticpages/staticpages.module';
import { AccountserviceService } from './account/accountservice.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AccountModule } from './account/account.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BlogsModule,
    StaticpagesModule,
    AccountModule,
    AppRoutingModule,

  ],
  providers: [

    AccountserviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

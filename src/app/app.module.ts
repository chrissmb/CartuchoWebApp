import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { InvalidPageComponent } from './layout/invalid-page/invalid-page.component';
import { LoginComponent } from './layout/login/login.component';
import { AuthService } from './core/service/auth.service';
import { MessageBoxService } from './shared/ui-components/message-box/message-box.service';
import { ErroService } from './core/service/erro.service';


@NgModule({
  declarations: [
    AppComponent,
    ContentLayoutComponent,
    InvalidPageComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
  ],
  providers: [
    AuthService,
    MessageBoxService,
    ErroService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

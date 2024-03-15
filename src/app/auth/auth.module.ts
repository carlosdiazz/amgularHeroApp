import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPagesComponent } from './pages/login-pages/login-pages.component';
import { RegisterPagesComponent } from './pages/register-pages/register-pages.component';
import { LayoutPagesComponent } from './pages/layout-pages/layout-pages.component';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [
    LoginPagesComponent,
    RegisterPagesComponent,
    LayoutPagesComponent,
  ],
  imports: [CommonModule, AuthRoutingModule],
})
export class AuthModule {}

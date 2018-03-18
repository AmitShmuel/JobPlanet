import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import {AppRoutingModule} from './app-routing.module';
import {AuthComponent} from './auth/auth.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BlockUIModule} from 'ng-block-ui';
import {AuthService} from './auth/auth.service';
import {BlockUiService} from './utils/block-ui/block-ui.service';
import {BlockUiComponent} from './utils/block-ui/block-ui.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/layout/header/header.component';
import { MainComponent } from './home/layout/main/main.component';
import { FooterComponent } from './home/layout/footer/footer.component';
import {ToastModule, ToastOptions} from 'ng2-toastr';
import {ErrorHandlerService} from './shared/error-handler.service';
import {CustomToastOption} from './utils/custom-toast-options.model';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RegisterFormComponent } from './auth/register/register-form/register-form.component';
import { ErrorComponent } from './error/error.component';
import { NavComponent } from './home/layout/nav/nav.component';
import { SearchQuestionsComponent } from './search-questions/search-questions.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MomentModule} from 'angular2-moment';
import { SearchFormComponent } from './search-questions/search-form/search-form.component';
import {WebApiService} from './shared/web-api.service';
import {AuthInterceptor} from './auth/auth.interceptor';
import {AngularMultiSelectModule} from 'angular2-multiselect-dropdown';


@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        AuthComponent,
        BlockUiComponent,
        HomeComponent,
        HeaderComponent,
        MainComponent,
        FooterComponent,
        RegisterFormComponent,
        ErrorComponent,
        NavComponent,
        SearchQuestionsComponent,
        DashboardComponent,
        SearchFormComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule,
        AngularFontAwesomeModule,
        BlockUIModule,
        MomentModule,
        AngularMultiSelectModule,
        ToastModule.forRoot(),
    ],
    providers: [
        AuthService,
        BlockUiService,
        ErrorHandlerService,
        WebApiService,
        {provide: ToastOptions, useClass: CustomToastOption},
        {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
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
import {ErrorHandlerService} from './utils/error-handler.service';
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
import {CookieModule} from 'ngx-cookie';
import {StarRatingModule} from 'angular-star-rating';
import { QuestionListComponent } from './shared/question-list/question-list.component';
import { QuestionItemComponent } from './shared/question-list/question-item/question-item.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {OrderModule} from 'ngx-order-pipe';
import { RankingColorDirective } from './directives/ranking-color.directive';
import { RankValueComponent } from './shared/rank-value/rank-value.component';
import { PublishedQuestionsComponent } from './published-questions/published-questions.component';
import { PublishQuestionFormComponent } from './published-questions/publish-question-form/publish-question-form.component';
import { MyQuestionsComponent } from './my-questions/my-questions.component';
import {FileDropModule} from 'ngx-file-drop';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { QuestionDetailComponent } from './shared/question-list/question-detail/question-detail.component';
import { QuestionStateButtonComponent } from './shared/question-state-button/question-state-button.component';
import {TruncateModule} from 'ng2-truncate';
import {CKEditorModule} from 'ng2-ckeditor';
import {ConfirmationPopoverModule} from 'angular-confirmation-popover';
import {SantisizeHtmlPipe} from './pipes/santisize-html.pipe';
import {CandidateGuard} from './auth/candidate-guard.service';
import {RecruiterGuard} from './auth/recruiter-guard.service';
import {MatRadioModule} from '@angular/material';
import { MyPositionsComponent } from './my-positions/my-positions.component';
import { PublishPositionFormComponent } from './my-positions/publish-position-form/publish-position-form.component';
import { PositionListComponent } from './shared/position-list/position-list.component';
import { PositionItemComponent } from './shared/position-list/position-item/position-item.component';
import { PositionDetailComponent } from './shared/position-list/position-detail/position-detail.component';
import { CreateTestComponent } from './create-test/create-test.component';
import { CreateTestFormComponent } from './create-test/create-test-form/create-test-form.component';
import { PositionCardsComponent } from './shared/position-list/position-cards/position-cards.component';
import { MatchHeightDirective } from './directives/match-height.directive';
import { QuestionCardsComponent } from './shared/question-list/question-cards/question-cards.component';
import { FileUploaderComponent } from './shared/file-uploader/file-uploader.component';
import { PositionContentComponent } from './shared/position-list/position-detail/position-content/position-content.component';
import { PositionTestsComponent } from './shared/position-list/position-detail/position-tests/position-tests.component';
import { TestListComponent } from './shared/test-list/test-list.component';
import { TestItemComponent } from './shared/test-list/test-item/test-item.component';
import { TestDetailComponent } from './shared/test-list/test-detail/test-detail.component';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { TestModeComponent } from './test-mode/test-mode.component';
import {TestModeService} from './test-mode/test-mode.service';
import { TestModeHeaderComponent } from './test-mode/layout/test-mode-header/test-mode-header.component';
import {FormWizardModule} from 'angular2-wizard/dist';
import { TestModeMainComponent } from './test-mode/layout/test-mode-main/test-mode-main.component';
import {ModalDialogModule} from 'ngx-modal-dialog';
import { CustomDialogComponent } from './utils/custom-dialog/custom-dialog.component';
import { QuitTestDialogComponent } from './test-mode/quit-test-dialog/quit-test-dialog.component';
import {NotificationsService} from './notifications/notifications.service';
import { NotificationsComponent } from './notifications/notifications.component';
import { NotificationListComponent } from './notifications/notification-list/notification-list.component';
import { NotificationItemComponent } from './notifications/notification-list/notification-item/notification-item.component';
import { PendingSolutionsComponent } from './shared/position-list/position-detail/pending-solutions/pending-solutions.component';
import { TestFeedbackComponent } from './shared/position-list/position-detail/test-feedback/test-feedback.component';
import {PositionDetailService} from './shared/position-list/position-detail/position-detail.service';
import { NotificationDetailComponent } from './notifications/notification-list/notification-detail/notification-detail.component';
import {UtilsService} from './utils/utils.service';
import { SantisizeUrlPipe } from './pipes/santisize-url.pipe';
import { AnimatedLoaderEllipsisComponent } from './utils/animated-loader-ellipsis/animated-loader-ellipsis.component';
import { AnimatedLoaderSpinnerComponent } from './utils/animated-loader-spinner/animated-loader-spinner.component';
import {SfxService} from './utils/sfx.service';
import { StatisticsComponent } from './shared/position-list/position-detail/statistics/statistics.component';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import { KeysPipe } from './pipes/keys.pipe';
import { CandidateDashboardComponent } from './dashboard/candidate-dashboard/candidate-dashboard.component';
import { RecruiterDashboardComponent } from './dashboard/recruiter-dashboard/recruiter-dashboard.component';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';

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
        SearchFormComponent,
        QuestionListComponent,
        QuestionItemComponent,
        RankingColorDirective,
        RankValueComponent,
        PublishedQuestionsComponent,
        PublishQuestionFormComponent,
        MyQuestionsComponent,
        QuestionDetailComponent,
        QuestionStateButtonComponent,
        SantisizeHtmlPipe,
        MyPositionsComponent,
        PublishPositionFormComponent,
        PositionListComponent,
        PositionItemComponent,
        PositionDetailComponent,
        CreateTestComponent,
        CreateTestFormComponent,
        PositionCardsComponent,
        MatchHeightDirective,
        QuestionCardsComponent,
        FileUploaderComponent,
        PositionContentComponent,
        PositionTestsComponent,
        TestListComponent,
        TestItemComponent,
        TestDetailComponent,
        ProfileSettingsComponent,
        TestModeComponent,
        TestModeHeaderComponent,
        TestModeMainComponent,
        CustomDialogComponent,
        QuitTestDialogComponent,
        NotificationsComponent,
        NotificationListComponent,
        PendingSolutionsComponent,
        TestFeedbackComponent,
        NotificationItemComponent,
        NotificationDetailComponent,
        SantisizeUrlPipe,
        AnimatedLoaderEllipsisComponent,
        AnimatedLoaderSpinnerComponent,
        StatisticsComponent,
        KeysPipe,
        CandidateDashboardComponent,
        RecruiterDashboardComponent,
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
        NgxPaginationModule,
        OrderModule,
        FileDropModule,
        TruncateModule,
        CKEditorModule,
        ConfirmationPopoverModule.forRoot(),
        NgbModule.forRoot(),
        CookieModule.forRoot(),
        ToastModule.forRoot(),
        StarRatingModule.forRoot(),
        MatRadioModule,
        FormWizardModule,
        ModalDialogModule.forRoot(),
        NgxChartsModule,
    ],
    providers: [
        AuthService,
        BlockUiService,
        NotificationsService,
        ErrorHandlerService,
        WebApiService,
        CandidateGuard,
        RecruiterGuard,
        TestModeService,
        UtilsService,
        PositionDetailService,
        SfxService,
        {provide: ToastOptions, useClass: CustomToastOption},
        {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},

        //Allow refresing the app in production
        {provide: LocationStrategy, useClass: HashLocationStrategy},
    ],
    entryComponents: [
        QuestionDetailComponent,
        TestDetailComponent,
        ProfileSettingsComponent,
        CustomDialogComponent,
        QuitTestDialogComponent,
        NotificationsComponent,
        NotificationDetailComponent,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

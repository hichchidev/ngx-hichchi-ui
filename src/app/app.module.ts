import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HcCommonModule, HcFormControlModule } from "ngx-hichchi-ui";
import { HomeComponent } from "./pages/home/home.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { NgOptimizedImage } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [AppComponent, HomeComponent, ContactComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgOptimizedImage,
        HcCommonModule,
        HcFormControlModule,
        ReactiveFormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}


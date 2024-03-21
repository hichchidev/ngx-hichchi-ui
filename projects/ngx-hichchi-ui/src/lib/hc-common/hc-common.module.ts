import { NgModule } from "@angular/core";
import {
    LayoutComponent,
    LayoutHeaderComponent,
    LayoutSidenavComponent,
    LayoutContentComponent,
    LayoutFooterComponent,
    SectionComponent,
    SpinnerComponent,
    ErrorComponent,
} from "./components";
import { NgClass, NgComponentOutlet, NgForOf, NgIf, NgStyle, NgTemplateOutlet } from "@angular/common";
import { HeaderLogoDirective, MenuDirective, MenuItemDirective, SectionHeadingDirective } from "./directives";
import { RouterLink, RouterOutlet } from "@angular/router";
import { NgScrollbarModule } from "ngx-scrollbar";
import { FormsModule } from "@angular/forms";
import { HeaderMenuComponent } from "./components/layout/layout-header/header-menu/header-menu.component";
import { HeaderMenuPopupComponent } from "./components/layout/layout-header/header-menu/header-menu-popup/header-menu-popup.component";

@NgModule({
    declarations: [
        SpinnerComponent,
        ErrorComponent,
        LayoutComponent,
        LayoutHeaderComponent,
        HeaderLogoDirective,
        LayoutSidenavComponent,
        MenuDirective,
        MenuItemDirective,
        LayoutContentComponent,
        LayoutFooterComponent,
        SectionComponent,
        SectionHeadingDirective,
        HeaderMenuComponent,
        HeaderMenuPopupComponent,
    ],
    imports: [
        NgIf,
        NgTemplateOutlet,
        NgComponentOutlet,
        RouterOutlet,
        NgScrollbarModule,
        NgForOf,
        RouterLink,
        NgClass,
        FormsModule,
        NgStyle,
    ],
    exports: [
        SpinnerComponent,
        ErrorComponent,
        LayoutComponent,
        LayoutHeaderComponent,
        HeaderLogoDirective,
        LayoutSidenavComponent,
        MenuDirective,
        MenuItemDirective,
        LayoutContentComponent,
        LayoutFooterComponent,
        SectionComponent,
        SectionHeadingDirective,
    ],
})
export class HcCommonModule {}

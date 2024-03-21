import { AfterViewInit, Component, ContentChild, ElementRef } from "@angular/core";
import { LayoutHeaderComponent } from "./layout-header/layout-header.component";
import { LayoutSidenavComponent } from "./layout-sidenav/layout-sidenav.component";
import { LayoutContentComponent } from "./layout-content/layout-content.component";

@Component({
    selector: "hc-layout",
    templateUrl: "./layout.component.html",
    styleUrls: ["./layout.component.scss"],
})
export class LayoutComponent implements AfterViewInit {
    @ContentChild(LayoutHeaderComponent, { read: ElementRef }) header?: ElementRef<HTMLElement>;

    @ContentChild(LayoutSidenavComponent, { read: ElementRef }) sidenav?: ElementRef<HTMLElement>;

    @ContentChild(LayoutContentComponent, { read: ElementRef }) content?: ElementRef<HTMLElement>;

    ngAfterViewInit(): void {
        const header = this.header!.nativeElement;
        const menu = this.sidenav!.nativeElement;
        const content = this.content!.nativeElement;
        menu.style.top = header.clientHeight + "px";
        menu.style.height = "calc(100% - " + header.clientHeight + "px)";
        content.style.top = header.clientHeight + "px";
        content.style.left = menu.clientWidth + "px";
        content.style.height = "calc(100% - " + header.clientHeight + "px)";
        content.style.width = "calc(100% - " + menu.clientWidth + "px)";
    }
}


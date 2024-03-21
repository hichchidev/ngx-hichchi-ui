import { Component, ContentChild, ElementRef } from "@angular/core";
import { LayoutFooterComponent } from "../layout-footer/layout-footer.component";

@Component({
    selector: "hc-layout-content",
    templateUrl: "./layout-content.component.html",
    styleUrls: ["./layout-content.component.scss"],
})
export class LayoutContentComponent {
    @ContentChild(LayoutFooterComponent, { read: ElementRef }) footer?: ElementRef<HTMLElement>;
}

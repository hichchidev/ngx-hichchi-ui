import { Component, ContentChild, ElementRef, Input, OnInit } from "@angular/core";
import { HeaderLogoDirective } from "../../../directives";
import { MenuOptions } from "../../../interfaces";

@Component({
    selector: "hc-layout-header",
    templateUrl: "./layout-header.component.html",
    styleUrls: ["./layout-header.component.scss"],
})
export class LayoutHeaderComponent implements OnInit {
    /**
     * The size (height) of the header
     */
    @Input() size: number = 80;

    /**
     * The url of the logo
     */
    @Input() logo?: string;

    /**
     * The title of the header
     */
    @Input() title?: string;

    /**
     * The menu options of the header
     */
    @Input() menu?: MenuOptions;

    @ContentChild(HeaderLogoDirective) headerLogo?: HeaderLogoDirective;

    constructor(private el: ElementRef) {}

    ngOnInit(): void {
        this.el.nativeElement.style.setProperty("height", this.size + "px");
    }
}

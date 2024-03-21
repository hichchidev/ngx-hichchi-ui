import { Component, ElementRef, Input, OnInit } from "@angular/core";

@Component({
    selector: "hc-layout-footer",
    templateUrl: "./layout-footer.component.html",
    styleUrls: ["./layout-footer.component.scss"],
})
export class LayoutFooterComponent implements OnInit {
    /**
     * The size (height) of the footer
     * @type {number}
     * @default 40
     */
    @Input() size: number = 40;

    constructor(private el: ElementRef) {}

    ngOnInit(): void {
        this.el.nativeElement.style.setProperty("height", this.size + "px");
    }
}


import { Component, Input } from "@angular/core";

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: "hc-spinner",
    templateUrl: "./spinner.component.html",
    styleUrls: ["./spinner.component.scss"],
})
export class SpinnerComponent {
    /**
     * The size of the spinner
     * @type {string | number}
     * @default 50
     */
    @Input() size: string | number = 50;

    /**
     * The width of the spinner
     * @type {string | number}
     * @default 5
     */
    @Input() width: string | number = 5;

    /**
     * Weather to invert the spinner
     * @type {boolean}
     * @default false
     */
    @Input() invert: boolean = false;
}

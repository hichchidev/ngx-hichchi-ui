import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: "hc-error",
    templateUrl: "./error.component.html",
    styleUrls: ["./error.component.scss"],
})
export class ErrorComponent {
    /**
     * The title of the error
     * @type {string}
     * @default "Something went wrong!"
     */
    @Input() title: string = "Something went wrong!";

    /**
     * The message of the error
     * @type {string}
     * @default "Please try refreshing it again."
     */
    @Input() message: string = "Please try refreshing it again.";

    /**
     * On refresh
     * @type {EventEmitter<MouseEvent>}
     * @default false
     */
    @Output() onRefresh: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

    refresh(e: MouseEvent): void {
        this.onRefresh.emit(e);
    }
}

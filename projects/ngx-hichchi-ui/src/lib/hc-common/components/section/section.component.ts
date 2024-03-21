import {
    Component,
    ContentChild,
    EventEmitter,
    HostBinding,
    Input,
    OnChanges,
    Output,
    SimpleChanges,
} from "@angular/core";
import { SectionHeadingDirective } from "../../directives";

@Component({
    selector: "hc-section",
    templateUrl: "./section.component.html",
    styleUrls: ["./section.component.scss"],
})
export class SectionComponent implements OnChanges {
    /**
     * If the section is full screen
     * @type {boolean}
     * @default false
     */
    @Input() full: boolean = false;

    /**
     * If the section is transparent
     * @type {boolean}
     * @default false
     */
    @Input() transparent: boolean = false;

    /**
     * If the section is loading
     * @type {boolean}
     * @default false
     */
    @Input() loading: boolean = false;

    /**
     * If the section has error
     * @type {boolean}
     * @default false
     */
    @Input() error: boolean = false;

    /**
     * On refresh
     * @type {EventEmitter<MouseEvent>}
     */
    @Output() onRefresh: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

    @ContentChild(SectionHeadingDirective) heading?: SectionHeadingDirective;

    @HostBinding("class.app-section-loading") get appSectionLoading(): boolean {
        return this.loading;
    }

    @HostBinding("class.app-section-error") get appSectionError(): boolean {
        return this.loading;
    }

    @HostBinding("class.app-section-full") get appSectionFull(): boolean {
        return this.full;
    }

    @HostBinding("class.app-section-transparent") get appSectionTransparent(): boolean {
        return this.transparent;
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes["loading"]) {
            this.loading = changes["loading"].currentValue;
        }
        if (changes["error"]) {
            this.error = changes["error"].currentValue;
        }
    }

    refresh(e: MouseEvent): void {
        this.onRefresh.emit(e);
    }
}

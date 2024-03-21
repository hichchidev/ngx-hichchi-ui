import {
    Component,
    ContentChild,
    ElementRef,
    EventEmitter,
    Input,
    OnInit,
    Output,
    TrackByFunction,
} from "@angular/core";
import { MenuItem } from "../../../interfaces";
import { MenuDirective, MenuItemDirective } from "../../../directives";

@Component({
    selector: "hc-layout-sidenav",
    templateUrl: "./layout-sidenav.component.html",
    styleUrls: ["./layout-sidenav.component.scss"],
})
export class LayoutSidenavComponent implements OnInit {
    /**
     * The size (width) of the sidenav
     * @type {number}
     * @default 300
     */
    @Input() size: number = 300;

    /**
     * The menu items
     * @type {MenuItem[]}
     * @default undefined
     */
    @Input() menuItems?: MenuItem<string | number>[];

    /**
     * The active index
     * @type {number}
     * @default 0
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    @Input() activeIndex: number = 0;

    /**
     * The track by function
     * @type {TrackByFunction<any>}
     * @default undefined
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    @Input() trackBy: TrackByFunction<any> = (_index: number, item: any) => item;

    /**
     * On active index change
     * @type {EventEmitter<number>}
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    @Output() activeIndexChange: EventEmitter<number> = new EventEmitter<number>();

    @ContentChild(MenuDirective) menuDirective?: MenuDirective;

    @ContentChild(MenuItemDirective) menuItemDirective?: MenuItemDirective;

    constructor(private el: ElementRef) {}

    ngOnInit(): void {
        this.el.nativeElement.style.setProperty("width", this.size + "px");
    }

    activate(index: number): void {
        this.activeIndex = index;
    }

    onClick(e: MouseEvent, index: number, item: MenuItem): void {
        item.action?.(e);
        this.activate(index);
    }
}

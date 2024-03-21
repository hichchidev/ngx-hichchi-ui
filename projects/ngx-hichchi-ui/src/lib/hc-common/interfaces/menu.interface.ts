export interface MenuItem<KEY = unknown> {
    key?: KEY;
    label?: string;
    icon?: string;
    active?: boolean;
    action?: (event?: unknown) => void;
    routerLink?: string | string[];
    items?: Partial<MenuItem>[];
    separator?: boolean;
    hidden?: boolean;
}

export interface MenuOptions<KEY = unknown> {
    show?: boolean;
    image?: string;
    items: MenuItem<KEY>[];
}

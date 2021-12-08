export interface INavLink<T = unknown> {
    path: string;
    label: string;
    disabled?: boolean;
    data?: T;
}

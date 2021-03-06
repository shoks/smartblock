/// <reference types="react" />
import { Extension, ExtensionProps } from '../types';
export default class BulletList extends Extension {
    constructor(props?: ExtensionProps);
    readonly name: string;
    readonly group: string;
    readonly showMenu: boolean;
    readonly schema: {
        content: string;
        group: string;
        parseDOM: {
            tag: string;
            getAttrs(dom: any): {
                id: any;
            };
        }[];
        attrs: {
            id: {
                default: string;
            };
        };
        toDOM(node: any): (string | number | {
            class: any;
        })[];
    };
    readonly icon: JSX.Element;
    readonly hideBlockMenuOnFocus: boolean;
    active(state: any): boolean;
    enable(state: any): boolean;
    onClick(state: any, dispatch: any): boolean;
    customMenu({ state, dispatch }: {
        state: any;
        dispatch: any;
    }): JSX.Element;
}

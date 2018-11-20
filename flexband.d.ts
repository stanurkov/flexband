import * as React from 'react';

export interface FlexBandProps {
    direction?: "row" | "column" | "row-reverse" | "column-reverse",
    align?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "stretch",
    justify?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly", 
    flow?: string,
    wrap?: "wrap" | "nowrap" | "wrap-reverse",
    alignItems?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch",
    fullWidth?: boolean,
    fullHeight?: boolean,
    style?: CSSStyleDeclaration 
}

export interface FlexBandItemProps {
    margin?: number | string,
    minWidth?: number | string,
    width?: number | string,
    grow?: number | string,
    shrink?: number | string,
    basis?: number | 'auto',
    align?: "auto" | "flex-start" | "flex-end" | "center" | "baseline" | "stretch",
    order?: number | string,
    style?: CSSStyleDeclaration
}

// declare module 'react';

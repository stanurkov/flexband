import * as React from 'react';
import * as PropTypes from 'prop-types';
import { FlexBandProps, FlexBandItemProps } from './flexband';

const defaultMargin = 0;

function objectWithout( object: any, exclude: any ) {
    let i, j;
    for (i in exclude) {
        if (typeof object[i] !== 'undefined') {
            const newObject: any = {};
            for (j in object) {
                if (!(exclude[j])) {
                    newObject[j] = object[j];
                }
            }
            return newObject;
        }
    }
    return object;
}

export default class FlexBand extends React.Component<FlexBandProps> {

    render() {
        const style: any = {display: "flex", flexWrap: "wrap"};
        const {
            direction,
            align,
            justify,
            flow,
            wrap,
            alignItems,
            fullWidth,
            fullHeight,
        } = this.props;

        const other = objectWithout(this.props, flexBandPropTypes);

        // const other: FlexBandProps = this.props;

        let pStyle = this.props.style;

        if (pStyle) {
            let i: any;
            for (i in pStyle) {
                style[i] = pStyle[i];
            }
        }

        if (direction) {
            style.flexDirection = direction;
        }

        if (fullWidth) {
            style.width = "100%";
        }

        if (fullHeight) {
            style.height = "100%";
        }

        if (align) {
            style.alignContent = align;
        }

        if (alignItems) {
            style.alignItems = alignItems;
        }

        if (justify) {
            style.justifyContent = justify;
        }

        if (wrap) {
            style.flexWrap = wrap;
        }

        if (flow) {
            style.flexFlow = flow;
        }


        return (
            <div {...other} style={style}>
                {this.props.children}
            </div>
        );
    }
}




const flexBandPropTypes = {
    direction: PropTypes.string,
    align: PropTypes.string,
    justify: PropTypes.string,
    flow: PropTypes.string,
    wrap: PropTypes.string,
    alignItems: PropTypes.string,
    fullWidth: PropTypes.bool,
    fullHeight: PropTypes.bool,
}

export class FlexBandItem extends React.Component<FlexBandItemProps> {

    render() {
        const {
            margin,
            minWidth,
            width,
            style,
            grow,
            shrink,
            basis,
            align,
            order,
        }: any = this.props;

        const other = objectWithout(this.props, flexBandItemPropTypes);

        const pStyle: any = {display: "inline-block", width: width, minWidth: minWidth };

        if (margin || !other || !other.className) 
            pStyle.margin = margin || defaultMargin;

        if (style) {
            for (let i in style) {
                pStyle[i] = style[i];
            }
        }

        if (grow)  
            pStyle.flexGrow = grow;

        if (align)  
            pStyle.alignSelf = align;

        if (basis)
            pStyle.flexBasis = basis;

        if (shrink)
            pStyle.flexShrink = shrink;

        if (order)
            pStyle.order = order;
       

        return (
            <div {...other} style={pStyle}>
                {this.props.children}
            </div>
        );
    }
}

const flexBandItemPropTypes = {
    margin: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    minWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    grow: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    shrink: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    basis: PropTypes.string,
    align: PropTypes.string,
    order: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}
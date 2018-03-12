import React, {Component} from 'react';
import PropTypes from 'prop-types';

const defaultMargin = 0;

function objectWithout( object, exclude ) {
    let i, j;
    for (i in exclude) {
        if (typeof object[i] !== 'undefined') {
            const newObject = {};
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


export default class FlexBand extends Component {

    render() {
        const style = {display: "flex", flexWrap: "wrap",};
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

        const other = objectWithout(this.props, FlexBand.propTypes);

        let pStyle = this.props.style;

        if (pStyle) {
            for (let i in pStyle) {
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

FlexBand.propTypes = {
    direction: PropTypes.string,
    align: PropTypes.string,
    justify: PropTypes.string,
    flow: PropTypes.string,
    wrap: PropTypes.string,
    alignItems: PropTypes.string,
    fullWidth: PropTypes.bool,
    fullHeight: PropTypes.bool,
}

export class FlexBandItem extends Component {

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
        } = this.props;

        const other = objectWithout(this.props, FlexBandItem.propTypes);

        const pStyle = {display: "inline-block", width: width, minWidth: minWidth };

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

FlexBandItem.propTypes = {
    margin: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
    minWidth: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
    width: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
    grow: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
    shrink: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
    basis: PropTypes.string,
    align: PropTypes.string,
    order: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
}
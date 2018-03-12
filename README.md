# flexband


[![MIT][mit-image]][mit-url]

> React Flexbox Wrapper Components 


[mit-image]: https://github.com/stanurkov/observed-object/blob/master/mit.svg
[mit-url]: https://github.com/stanurkov/flexband/blob/master/LICENSE

## Introduction

Use FlexBand JSX element instead as a flex container of traditional \<div style={{display: "flex", ...etc}}>. It is possible to use "direction", "wrap", "flow" JSX attributes for setting correspondint flex-* CSS values, as well as "justify" (justify-content), "align" (align-content) and "alignItems" (align-items).

FlexBandItem is a flexbox item with property shortcuts for order, grow (for flex-grow),  shrink (for flex-shrink), basis (for flex-basis) and align (for align-self)

## Example

```
<FlexBand direction="column">
  <FlexBandItem grow="1">
    Item 1
  </FlexBandItem>
  <FlexBandItem grow="1">
    Item 2
  </FlexBandItem>
  <FlexBandItem grow="2"> 
    Item 3
  </FlexBandItem>
</FlexBand>
 

```


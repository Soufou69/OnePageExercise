import { style, globalStyle, keyframes } from '@vanilla-extract/css';

export const rectangle = style({
    textAlign: 'center',
    height: 190,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

});

export const band = style({
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    marginTop: '150px'
});
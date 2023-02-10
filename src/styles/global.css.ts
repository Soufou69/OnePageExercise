import { style, globalStyle, keyframes } from '@vanilla-extract/css';

export const rect = style({
    height: 50,
    width: 30,
    borderRadius: '5px',
    border: '2px solid #293866',
});
export const rectVert = style({
    height: 50,
    width: 30,
    borderRadius: '5px',
    border: '2px solid #487F66',
});

export const gridRect = style({
    display: 'grid',
    gridGap: '20px',
    gridTemplateColumns: 'repeat(2, 1fr)',
    
});

export const bbs = style({
    border: '2px solid blue',
})

export const circle = style({
    textAlign: 'center',
    borderRadius: '100%',
    width: 70,
    height: 70,
    position: 'relative',
    left: 'calc(50% - 35px)',
    bottom: 'calc(50% + 35px)',
    border: '2px solid #2b4ab1',
    display: 'grid',
    fontSize: '50px',
    background: '#14111C',
    color: '#2b4ab1',
    justifyContent: 'center',
    alignItems: 'center',
});

export const circleVert = style({
    textAlign: 'center',
    borderRadius: '100%',
    width: 70,
    height: 70,
    position: 'relative',
    left: 'calc(50% - 35px)',
    bottom: 'calc(50% + 35px)',
    border: '2px solid #487F66',
    display: 'grid',
    fontSize: '50px',
    background: '#14111C',
    color: '#487F66',
    justifyContent: 'center',
    alignItems: 'center',
});
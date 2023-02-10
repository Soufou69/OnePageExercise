import { style, globalStyle, keyframes } from '@vanilla-extract/css';

globalStyle('h3',{
    fontSize: '1.5em',
    fontWeight: 'normal',
    width: '60%',
    textAlign: 'center',
});

export const hero = style({
    width: '100%',
    height: '100vh',
    background: '#13111C',
});

export const container = style({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
});

export const hr = style({
    width: '20%',
    background: '#487F66'
});

export const circle = style({
    borderRadius : '100%',
    height: 50,
    width: 50,
    border: '3px #487F66 solid',
    textAlign: 'center',
    display: 'grid',
    alignItems: 'center',
    background: '#14231E',
    marginBottom: 90,
});

export const num = style({
    margin: 0,
    fontSize: 25,
    color: '#487F66',
    fontWeight: 'normal',
  });

export const margin0 = style({
    margin: 0,
});

export const textBlue = style({
    color: '#487F66',
});

export const card = style({
    width: '60%',
    height: 150,
    borderRadius: '15px',
    border: '3px solid #487F66',
    marginBottom: 32,
    padding: 10,
    boxShadow: '0 0 17px 2px #487F66;',
    display: 'flex',
    overflow:'hidden',
    position: 'relative',
});

export const cards = style({
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    justifyContent: 'space-between',
    width: '80%',
    justifyItems: 'center',

});

export const titleCard = style({
    color : '#487F66',

});

export const contentCard = style({
    color: '#b4b9b4',
});

export const flex = style({
    display: 'flex',
  });

  export const flexRow = style({
    flexDirection: 'row',
  });
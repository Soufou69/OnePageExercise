import { style, globalStyle, keyframes } from '@vanilla-extract/css';

globalStyle('body, html', {
    margin: 0,
    padding: 0,
    height: '100%'
});

globalStyle('body',{
    backgroundColor: "#241e35",
    color: 'white',
    fontFamily: 'Roboto, sans-serif',
});

globalStyle('h1',{
    fontSize: '4em',
    marginBottom: 0,
});
globalStyle('h3',{
    fontSize: '1.5em'
});
globalStyle('h4',{
    fontSize: '1.5em',
    fontWeight: 'normal',
    color: '#ffffff63'
});

globalStyle('nav ul li',{
    display: 'inline',
    padding: 15,
});

globalStyle('nav > ul > li',{
    display: 'inline',
    padding: 15,
});

export const siteName = style({
});

export const hero1 = style({
    width: '100%',
    height: '100vh',
    background: 'linear-gradient(90deg, rgb(41, 35, 57) 0%, rgb(39, 26, 55) 55%, rgb(67, 22, 89) 100%)',
});

export const list = style({
    listStyle: 'none',
    margin : 0,
});

export const navbar = style({
    width: "100%",
    minHeight: 150,
    position: 'sticky',
    

});

export const link = style({
    selectors: {
        'nav li a > &:hover:not(:active)':{
            color : 'white',
        },
      'nav li a > &': {
        textDecoration: 'none',
        color: '#ffffff63',
      }
    }
  });

  export const navbarContainer = style({
    width: "70%",
    marginLeft: "15%",
    display: 'flex',
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  });

  export const heros = style({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flexWrap: 'nowrap',
    alignItems: 'stretch',
  });

  export const heroContentContainer = style({
    display: 'flex',
    justifyContent: 'flex-end',
  });

  export const containerFlexListCenter50 = style({
    width: '45%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  });

  const gradientAnim = keyframes({
    '0%': { backgroundPosition: '0% 100%' },
    '50%': { backgroundPosition: '100% 0%' },
    '100%': { backgroundPosition: '0% 50%' },
  });

  export const btn = style({
    selectors: {
        '&:hover:not(:active)':{
            animation: `${gradientAnim} 3s ease`
        }
    },
    width:150,
    height: 35,
    lineHeight: '35px',
    padding: 4,
    background: 'rgb(0,0,0,0)',
    backgroundSize: '600% 600%',
    backgroundImage: 'linear-gradient(90deg, rgba(133,59,206,1) 0%, rgba(35,14,45,1) 50%, rgba(38,31,58,1) 100%)',
    borderRadius:"5px",
    textAlign: 'center',
    animation: `${gradientAnim} 4.5s ease infinite`
  });

  export const spanArnaque = style({
    display: 'inline-block',
    color: 'white',
    width: '100%',
    height: '100%',
  });

  export const image = style({
    maxWidth: '90%',
    width: '100%'
  });

  export const imageWrapper = style({
    width: '50%'
  });

  export const navbarFixed = style({
    position: 'fixed',
    width: "100%",
    minHeight: 150, 

  });
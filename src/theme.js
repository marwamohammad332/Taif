import { createTheme, Paper } from "@mui/material";


const lightPalette = {
    mode: 'light',
    primary: {
        main: '#264764',
        light: '#7B9BB8',
        lighter: '#c6d0dc',
        dark: '#173146',
        darker: '#0F172A',
        contrastText: '#fff',
        hover: '#d5dfeb'
    },
    secondary: {
        main: '#EDF4FF',
        light: '#f6f9ff',
        dark: '#E2EFFF',
        darker: '#CEE5FF',
        contrastText: '#fff',
    },
    tertiary: {
        main: '#42474D',
        dark: '#18232c'
    },
    navBackground: {
        main: '#F7F9FF'
    },
    Footerbg:{
        main:'#EDF4FF'
    },
    white: {
        main: '#ffffff',
        dark: '#ffffff33',
        light: '#ffffffe6',
        hover: '#d6d0d0'
    },
    warning: {
        main: '#B34045',
        dark: '#291715',
        light: '#FEDAD7',
        hover: '#b45358'
    },
    success: {
        main: '#506761',
        light: '#CBE5DC'
    },
    background: {
        default: '#f9f2f2'
    },
    text: {
        primary: '#42474D',
        dark:'#0E1D29'
    }
}
const darkPalette = {
    mode: 'dark',
    primary: {
        main: '#7B9BB8',

        hover: '#d5dfeb'
    },
    secondary: {
        main: '#3F5F7D',

        contrastText: '#fff',
    },
    tertiary: {
        main: '#42474D',
        dark: '#18232c'
    },

    white: {
        main: '#ffffff',
        dark: '#ffffff33',
        light: '#ffffffe6',
        hover: '#d6d0d0'
    },
    warning: {
        main: '#B34045',
        dark: '#291715',
        light: '#FEDAD7',
        hover: '#b45358'
    },
    success: {
        main: '#506761',
        light: '#CBE5DC'
    },
    navBackground: {
        main: '#141E27EB'
    },Footerbg:{
        main:'#141E27'
    },
    background: {
        default: '#141E27',
        paper:'#233342'

    },
    text: {
        primary: '#A0B2C6'
    }
}
export const getTheme = (mode) => {
    return createTheme({
        palette: mode === 'light' ? lightPalette : darkPalette,
        typography: {
            h2: {
                fontSize: '3rem',
                lineHeight: '3rem',
            },
            h3: {
                fontSize: '2rem',
                lineHeight: '2.5rem',
                fontWeight: '700'
            },
            h4:{
                fontSize: '1rem',
                lineHeight: '2rem',
                fontWeight: '600'
            },
             h5:{
                fontSize: '0.875rem',
                lineHeight: '1.25rem',
                fontWeight: '600'
            },
            body1: {
                fontSize: '1rem',
                lineHeight: '1.5rem'
            },
            body2: {
                fontSize: '0.75rem',//12px
                lineHeight: '1rem',
            },
            button: {
                fontSize: '1rem',
                lineHeight: '1.5rem',
                letterSpacing: '0.013rem',
                textTransform: "uppercase",
                fontWeight: 500

            }
        },
        shape:{
            borderRadius:4
        },
        components:{
            MuiTextField:{
                defaultProps:{
                    fullWidth:true,
                    margin:'normal',
                }
            }
        }
    });
}

 
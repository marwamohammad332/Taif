import { createTheme } from "@mui/material";

const theme = createTheme({
    palette:{
       primary:{
        main: '#264764',
        light: '#7B9BB8',
        lighter:'#c6d0dc',
        dark: '#173146',
        darker:'#0F172A',
        contrastText: '#fff',
        hover:'#d5dfeb'
    },
    secondary:{
        main: '#EDF4FF',
        light: '#ffffff',
        dark: '#E2EFFF',
        darker:'#CEE5FF',
        contrastText: '#fff',
    },
    tertiary:{
        main:'#42474D',
        dark:'#18232c'
    },
    navBackground:{
        main:'#F7F9FF'
    },
    white:{
        main:'#ffffff',
        dark:'#ffffff33',
        light:'#ffffffe6',
        hover:'#d6d0d0'
    },
    warning:{
        main:'#B34045',
        dark:'#291715',
        light:'#FEDAD7',
        hover:'#b45358'
    },
    success:{
        main:'#506761',
        light:'#CBE5DC'
    }
}
});
export default theme;
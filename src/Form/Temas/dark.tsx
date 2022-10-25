import { createTheme} from '@mui/material'

export const darktheme = createTheme({
     palette: {
        primary: {
            main: 'yellow[700]',
            dark: 'yellow[900]',
            light: 'yellow[1200]',
            contrastText: 'white',
        },
        secondary: {
            main: 'cyan[700]',
            dark: 'cyan[900]',
            light: 'cyan[1200]',
            contrastText: 'dark',
        },
        background:{
            default: 'black',
            paper: 'white'
        }
     }
});

import { createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
    palette: {
        primary: { main: '#0073BE' },
        secondary: { main: '#83D0F5' },
    },
    overrides: {
        MuiTableHead: {
            root: {
                backgroundColor: '#0073BE',
            }
        }
    }
});

export default theme;
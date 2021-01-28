import { makeStyles } from '@material-ui/styles';

export const pageCanvasStyle = makeStyles(theme => ({
    root: {
        paddingTop: '100px',
        paddingLeft: '20px',
        paddingRight: '20px',
        paddingBottom: '30px',
        [theme.breakpoints.down('sm')]: {
            padding: '0',
            paddingTop: '60px'
        },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    }
}));
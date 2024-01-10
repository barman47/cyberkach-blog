'use client';

import Image  from 'next/image';
import Link  from 'next/link';
import { Box, Button, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

import { LIGHT_GREY, OFF_BLACK } from './theme';

const useStyles = makeStyles()(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        padding: theme.spacing(15, 5),
        height: '100%',

        '& img': {
            width: '40%',

            [theme.breakpoints.down('sm')]: {
                width: '80%'
            }
        },

        '& h2': {
            color: OFF_BLACK,
            fontWeight: 600,
            marginTop: theme.spacing(3),

            [theme.breakpoints.down('sm')]: {
                fontSize: theme.spacing(4)
            }
        },

        '& p': {
            marginBottom: theme.spacing(3),
            marginTop: theme.spacing(3),

            [theme.breakpoints.down('sm')]: {
                fontSize: theme.spacing(1.2)
            }
        },

        '& small': {
            color: LIGHT_GREY,
            position: 'absolute',
            bottom: 10
        }
    }
}));

const NotFoundPage = () => {
    const { classes } = useStyles();

    return (
        <Box component="main" className={classes.root}>
            <Image 
                width={100}
                height={300}
                src="/assets/img/404.svg" 
                alt="404" 
            />
            <Typography variant="h2">PAGE NOT FOUND</Typography>
            <Typography variant="subtitle2" component="p">THE PAGE YOU ARE LOOKING FOR CAN&#39;T BE FOUND!</Typography>
            <Button variant="contained" color="primary" component={Link} href="/">Take Me Home</Button>
            <Typography variant="subtitle2" component="small">&copy; Copyright {new Date().getFullYear()}, CyberKach - All Rights Reserved</Typography>
        </Box>
    );
};

export default NotFoundPage;
'use client';

import { Box, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

import { LIGHT_GREY, OFF_WHITE } from '../theme';

const useStyles = makeStyles()(theme => ({
    root: {
        backgroundImage: `url(/assets/img/about.jpg)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        color: OFF_WHITE,

        '& div': {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            flexDirection: 'column',
            padding: theme.spacing(4),
        }
    },

    header: {
        fontWeight: 500
    },

    text: {
        color: LIGHT_GREY,
        fontSize: theme.spacing(2.5),
        marginBottom: theme.spacing(5),
        marginTop: theme.spacing(5),
    },

    button: {
        alignSelf: 'flexStart',
        backgroundColor: 'transparent',
        border: `1px solid ${OFF_WHITE}`,
        color: OFF_WHITE,
        width: '15%',
        '&:hover': {
            backgroundColor: 'transparent',
            border: `1px solid ${OFF_WHITE}`,
            color: OFF_WHITE,
        },
        [theme.breakpoints.down('md')]: {
            width: '20%',
        },
        [theme.breakpoints.down('md')]: {
            width: '20%',
        },
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        }
    }
}));

const AboutUs: React.FC<{}> = () => {
    const { classes } = useStyles();

    return (
        <Box component="section" className={classes.root}>
            <Box component="div">
                <Typography variant="h4" className={classes.header}>About CyberKach</Typography>
                <Typography variant="body2" component="p" className={classes.text}>
                    CyberKach is a cybersecurity education hub committed to empowering individuals and organizations with essential cybersecurity knowledge. Our mission is to deliver comprehensive security education through our blog, &#39;The CyberKach Podcast,&#39; and specialized training programs. With the motto &#39;cybersecurity at your fingertips,&#39; CyberKach is dedicated to making the journey to an effective security program seamless for our audience.
                </Typography>
            </Box>
        </Box>
    );
};

export default AboutUs;
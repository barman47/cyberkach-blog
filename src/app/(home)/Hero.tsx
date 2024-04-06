'use client';

import { makeStyles } from 'tss-react/mui';
import { Box, Typography } from '@mui/material';

import { OFF_WHITE } from '../theme';

const useStyles = makeStyles()(theme => ({
    banner: {
        marginTop: theme.spacing(9.4),
        position: 'relative',
        top: 0,
        height: '70vh',
        width: '100vw',

        [theme.breakpoints.down('md')]: {
            marginTop: theme.spacing(8)
        },

        [theme.breakpoints.down('sm')]: {
            height: '50vh',
            marginTop: theme.spacing(7),
            paddingTop: theme.spacing(4)
        }
    },

    fullscreenVideoWrap: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100% !important',
        height: '100%',
        overflow: 'hidden',
        zIndex: -1
    },

    reponsiveVideo: {
        minWidth: '100%',
        minHeight: '100%',
        objectFit: 'cover',
        objectPosition: 'center',

        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },

    mobileVideo: {
        display: 'none',
        minWidth: '100%',
        minHeight: '100%',
        objectFit: 'cover',
        objectPosition: 'center',
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        }
    },

    overlayContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
    },

    text: {
        marginLeft: theme.spacing(5),
        width: '50%',
        color: OFF_WHITE,
        fontSize: theme.spacing(3),

        [theme.breakpoints.down('md')]: {
            top: '40%',
            width: '65%',
            fontSize: theme.spacing(2.5),
        },

        [theme.breakpoints.down('sm')]: {
            left: 20,
            top: '33%',
            width: '90%',
            fontSize: theme.spacing(2),
        }
    },

    img: {
        height: '90%',
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    }
}));

const Hero: React.FC<{}> = () => {
    const { classes, cx } = useStyles();

    return (
        <div className={cx('animate__animated animate__fadeIn', classes.banner)}>
            <div className={classes.fullscreenVideoWrap}>
                <Box component="div" className={classes.overlayContainer}>
                    <Typography variant="body1" className={classes.text}>
                        Embrace cybersecurity excellence with Cyberkach, where our focus is on empowering through education. Dive into our blog, tune into &#39;The Cyberkach Podcast&#39; for insightful discussions, and enroll in specialized security training to ensure you and your organization stay resilient in the face of evolving threats.
                    </Typography>
                </Box>
                    <video autoPlay loop muted playsInline className={classes.reponsiveVideo}>
                        <source src="/assets/vid/video1.mp4" type="video/mp4"></source>
                        <source src="/assets/vid/video1.webm" type="video/webm"></source>
                    </video>
                    <video poster="/assets/img/video1.PNG" playsInline className={classes.mobileVideo}>
                        <source src="/assets/vid/video1.mp4" type="video/mp4"></source>
                        <source src="/assets/vid/video1.webm" type="video/webm"></source>
                    </video>
            </div>
        </div>
    );
};

export default Hero;
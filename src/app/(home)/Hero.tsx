'use client';

import { makeStyles } from 'tss-react/mui';
import { Typography } from '@mui/material';

import { OFF_WHITE } from '../theme';

const useStyles = makeStyles()(theme => ({
    banner: {
        position: 'relative',
        top: 0,
        height: '70vh',
        width: '100vw',

        [theme.breakpoints.down('sm')]: {
            height: '50vh',
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
        objectFit: 'fill',

        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },

    mobileVideo: {
        display: 'none',
        minWidth: '100%',
        minHeight: '100%',
        objectFit: 'fill',
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        }
    },

    content: {
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        color: OFF_WHITE,
        paddingLeft: theme.spacing(10),
        paddingRight: theme.spacing(10),
        height: '100%',
        width: '100vw',
        [theme.breakpoints.down('md')]: {
            paddingLeft: theme.spacing(5),
            paddingRight: theme.spacing(5)
        },
        [theme.breakpoints.down('sm')]: {
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2)
        }
    },

    header: {
        color: theme.palette.primary.main,
        fontWeight: 600
    },

    subHeader: {
        color: OFF_WHITE,
        fontStyle: 'italic',
        fontWeight: 500
    },

    text: {
        position: 'absolute',
        top: '45%',
        left: 50,
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
        {/* <div className={classes.banner}> */}
            <div className={classes.fullscreenVideoWrap}>
                <video autoPlay loop muted playsInline className={classes.reponsiveVideo}>
                    <source src="/assets/vid/video1.mp4" type="video/mp4"></source>
                    <source src="/assets/vid/video1.webm" type="video/webm"></source>
                </video>
                <video poster="/assets/img/video1.PNG" playsInline className={classes.mobileVideo}>
                    <source src="/assets/vid/video1.mp4" type="video/mp4"></source>
                    <source src="/assets/vid/video1.webm" type="video/webm"></source>
                </video>
            </div>
            
            <Typography variant="body1" className={classes.text}>
                Embrace cybersecurity excellence with CyberKach, where our focus is on empowering through education. Dive into our blog, tune into &#39;The CyberKach Podcast&#39; for insightful discussions, and enroll in specialized security training to ensure you and your organization stay resilient in the face of evolving threats.
            </Typography>
        </div>
    );
};

export default Hero;
'use client';

import * as React from 'react';
import Image from 'next/image';
import { 
    Box,
    Divider,
    Stack,
    Typography,
    useMediaQuery,
    useTheme
} from '@mui/material';
import { makeStyles } from 'tss-react/mui';

import { Podcast } from '@/interfaces';
import PodcastItem from './Podcast';
import { WHITE } from '../theme';

const useStyles = makeStyles()(theme => ({
    root: {
        marginTop: theme.spacing(15),
        marginBottom: theme.spacing(5),

        [theme.breakpoints.down('md')]: {
            marginTop: theme.spacing(10)
        }
    },

    content: {
        paddingLeft: theme.spacing(5),
        paddingRight: theme.spacing(5),

        [theme.breakpoints.down('sm')]: {
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2)
        }
    },

    header: {
        background: 'linear-gradient(110.51deg, #D11715 0.84%, #0E0707 78.87%)',
        color: WHITE,
        width: '100%',
        height: theme.spacing(35),
        marginBottom: theme.spacing(5),
        padding: theme.spacing(5),

        [theme.breakpoints.down('md')]: {
            height: theme.spacing(30)
        },

        [theme.breakpoints.down('sm')]: {
            height: theme.spacing(15),
            marginBottom: theme.spacing(2),
            padding: theme.spacing(2),
        }
    },

    titleContainer: {
        alignSelf: 'flex-start'
    },

    title: {
        margin: '0 !important',

        [theme.breakpoints.down('md')]: {
            fontSize: theme.spacing(3)
        },

        [theme.breakpoints.down('sm')]: {
            fontSize: `${theme.spacing(1.7)} !important`
        }
    },
    
    subtitle: {
        margin: '0 !important',

        [theme.breakpoints.down('md')]: {
            fontSize: theme.spacing(1.5)
        },

        [theme.breakpoints.down('sm')]: {
            fontSize: `${theme.spacing(1)} !important`
        }
    },

    logo: {
        height: theme.spacing(27),
        width: 'auto',

        [theme.breakpoints.down('md')]: {
            height: theme.spacing(22)
        },

        [theme.breakpoints.down('sm')]: {
            height: theme.spacing(12)
        }
    },

    link: {
        color: theme.palette.info.main
    }
}));

interface Props {
    podcasts: Podcast[];
}

const Podcasts: React.FC<Props> = ({ podcasts }) => {
    const { classes } = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box component="main" className={classes.root}>
            <Box component="header" className={classes.header}>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Box component="div" className={classes.titleContainer}>
                        <Typography variant="h4" className={classes.title}>The CyberKach Podcast</Typography>
                        {/* <Typography variant="h6" className={classes.subtitle}>Onyekachi Okereke | Cyberkach.com</Typography> */}
                    </Box>
                    <Image 
                        src="/assets/img/logo-grey.png"
                        width={200}
                        height={200}
                        alt="Cyberkach logo"
                        className={classes.logo}
                    />
                </Stack>
            </Box>
            <Box component="section" className={classes.content}>
                <Stack direction={matches ? 'column-reverse' : 'row'} alignItems={matches ? 'start' : 'center'} justifyContent="space-between" spacing={2}>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>Episodes</Typography>
                    <Typography variant="body1" component="p">To access all episodes of The CyberKach Podcast on Spotify, <a className={classes.link} href="https://open.spotify.com/show/5EHlEIx63ZtUX828ycRXYl?si=c7776f20b06243d0" rel="noreferrer" target="_blank">click here.</a></Typography>
                </Stack>
                <Stack direction="column" component="div" spacing={2} mt={matches ? 1 : 3}>
                    {podcasts ? podcasts.map(podcast => (
                        <React.Fragment key={podcast._id}>
                            <PodcastItem podcast={podcast} />
                            <Divider />
                        </React.Fragment>
                    ))
                    :
                    <Typography variant="h5">No Podcasts at this time</Typography>
                    }
                </Stack>
            </Box>
        </Box>
    );
};

export default Podcasts;
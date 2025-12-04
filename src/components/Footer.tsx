'use client';

import NextLink from 'next/link';
import Image from 'next/image';

import { makeStyles } from 'tss-react/mui';
import { 
    Box,
    Divider,
    Link,
    IconButton,
    Stack,
    Tooltip,
    Typography,
    Zoom,
    useTheme,
    useMediaQuery
} from '@mui/material';
import { Email, MapMarker, Phone, Linkedin, Twitter } from 'mdi-material-ui';

import { LIGHT_GREY, OFF_WHITE } from '@/app/theme';
import NewsletterForm from './NewsLetterForm';

const useStyles = makeStyles()(theme => ({
    root: {
        backgroundColor: '#222222',
        color: LIGHT_GREY,
        display: 'flex',
        flexDirection: 'column'
    },

    contactContainer: {
        [theme.breakpoints.down('md')]: {
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)'
        },
        [theme.breakpoints.down('sm')]: {
            gridTemplateColumns: '1fr'
        }
    },

    contact: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: theme.spacing(10),
        [theme.breakpoints.down('md')]: {
            padding: theme.spacing(3),
            width: '100%'
        }
    },

    buttonContainer: {
        backgroundColor: theme.palette.primary.main,
        color: OFF_WHITE,
        marginBottom: theme.spacing(3),
        '&:hover': {
            backgroundColor: OFF_WHITE,
            color: theme.palette.primary.main
        }
    },

    phone: {
        backgroundColor: '#252525'
    },

    email: {
        backgroundColor: '#1c1c1c'
    },

    location: {
        backgroundColor: '#252525'
    },

    link: {
        color: LIGHT_GREY,
        textDecoration: 'none'
    },

    privacy: {
        marginTop: theme.spacing(2)
    },

    socialContainer: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        justifyContent: 'center',
        columnGap: theme.spacing(2)
    },
    
    social: {
        display: 'flex',
        flexDirection: 'row',
        color: LIGHT_GREY,
        border: `1px solid ${LIGHT_GREY}`,
        '&:hover': {
            borderColor: 'transparent',
            color: OFF_WHITE
        }
    },

    linkedIn: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },

    linkedInIcon: {
        '&:hover': {
            backgroundColor: '#0a66c2',
            borderColor: '#0a66c2'
        }
    },

    twitterIcon: {
        '&:hover': {
            backgroundColor: '#1da1f2',
            borderColor: '#1da1f2'
        }
    },

    divider: {
        backgroundColor: LIGHT_GREY,
        marginTop: theme.spacing(4)
    },

    newsletter: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

        [theme.breakpoints.down('sm')]: {
            padding: `${theme.spacing(2)} !important`
        }
    },

    newsletterTitle: {
        color: LIGHT_GREY,
        fontWeight: 500,
        
        [theme.breakpoints.down('sm')]: {
            fontSize: theme.spacing(3),
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(2),
            textAlign: 'center'
        }
    },

    copyright: {
        padding: theme.spacing(2)
    },

    septem: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            
        },

        [theme.breakpoints.down('sm')]: {
            justifyContent: 'center',
            marginTop: theme.spacing(2)
        }
    },

    septemStacksLogo: {
        objectFit: 'cover',
        cursor: 'pointer',
        height: 'auto',
        width: 'auto'
    }
}));

const Footer = () => {
    const { classes, cx } = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <Box component="footer" className={classes.root}>
            <Stack direction="row" justifyContent="center" className={classes.contactContainer}>
                <Box component="div" className={(cx(classes.contact, classes.phone))}>
                    <Tooltip title="Call Cyberkach" TransitionComponent={Zoom} TransitionProps={{ timeout: 300 }}>
                        <IconButton
                            size="large"
                            className={classes.buttonContainer}
                            onClick={() => {
                                window.open('tel:+2348033817154')
                            }}
                        >
                            <Phone fontSize="inherit" />
                        </IconButton>
                    </Tooltip>
                    <Typography variant="body2">
                        <a className={classes.link} href="tel:+2348033817154">(+234) 803 381 7154</a>
                    </Typography>
                </Box>
                <Box component="div" className={(cx(classes.contact, classes.email))}>
                    <Tooltip title="Email Cyberkach" TransitionComponent={Zoom} TransitionProps={{ timeout: 300 }}>
                        <IconButton
                            size="large"
                            className={classes.buttonContainer} 
                            onClick={() => {
                                window.open('mailto:hello@Cyberkach.com')
                            }}
                        >
                            <Email fontSize="inherit" />
                        </IconButton>
                    </Tooltip>
                    <Typography variant="body2">
                        <a className={classes.link} href="mailto:hello@Cyberkach.com">hello@Cyberkach.com</a>
                    </Typography>
                </Box>
                <Box component="div" className={(cx(classes.contact, classes.location))}>
                    <IconButton
                        size="large"
                        className={classes.buttonContainer}
                    >
                        <MapMarker fontSize="inherit" />
                    </IconButton>
                    <Typography variant="body2">
                        <Typography variant="subtitle2" component="span" className={classes.link}>Lagos, Nigeria</Typography>
                    </Typography>
                </Box>
            </Stack >
            <br />
            <Stack direction="row" spacing={5} justifyContent="center">
                <Link href="/" className={classes.link} component={NextLink} variant="body1">Cyberkach.com</Link>
                <Typography variant="body1">| |</Typography>
                <Link href="privacyPolicy" className={classes.link} component={NextLink} variant="body1" target="_blank" rel="noopener noreferrer">Privacy Policy</Link>
            </Stack>
            <br />
            <Box component="section" className={classes.newsletter}>
                <Stack direction="column" gap={3}>
                    <Typography variant="h6" className={classes.newsletterTitle}>Subscribe to the Cyberkach Newsletter</Typography>
                    <NewsletterForm
                        placeholderColor={LIGHT_GREY}
                        helperTextColor={LIGHT_GREY}
                    />
                </Stack>
            </Box>
            <br />
            <Typography align="center" variant="h6">Connect With Us</Typography>
            <Stack direction="row" spacing={2} justifyContent="center">
                <div className={classes.linkedIn}>
                    <Tooltip title="Connect with us on LinkedIn" TransitionComponent={Zoom} TransitionProps={{ timeout: 300 }}>
                        <IconButton 
                            size="large"
                            className={cx(classes.linkedInIcon, classes.social)}
                            onClick={() => {
                                window.open('https://www.linkedin.com/company/Cyberkach/', '_blank', 'noopener,noreferrer')
                            }}
                        >
                            <Linkedin />
                        </IconButton>
                    </Tooltip>
                </div>
                <div>
                    <Tooltip title="Follow Cyberkach on Twitter" TransitionComponent={Zoom} TransitionProps={{ timeout: 300 }}>
                        <IconButton 
                            size="large"
                            className={cx(classes.twitterIcon, classes.social)}
                            onClick={() => {
                                window.open('https://twitter.com/TheCyberkach', '_blank', 'noopener,noreferrer')
                            }}
                        >
                            <Twitter />
                        </IconButton>
                    </Tooltip>
                </div>
            </Stack>
            <Divider className={classes.divider} />
            <Stack direction={matches ? 'column' : 'row'} justifyContent="space-between" className={classes.copyright}>
                <Typography variant="body2">
                    &copy; Copyright {new Date().getFullYear()}, Cyberkach - All Rights Reserved
                </Typography>
                <Box className={classes.septem}>
                    <Typography variant="body2">
                        Powered by &nbsp;&nbsp;
                    </Typography>
                    <Tooltip title="https://septemstacks.com" TransitionComponent={Zoom} TransitionProps={{ timeout: 300 }}>
                        <Image 
                            width={100}
                            height={50}
                            src="/assets/img/septem-logo.png" 
                            alt="Septem Stacks LLC" 
                            className={classes.septemStacksLogo}
                            onClick={() => {
                                window.open('https://septemstacks.com', '_blank', 'noopener,noreferrer')
                            }}
                        />
                    </Tooltip>
                </Box>
            </Stack>
        </Box>
    );
};

export default Footer;
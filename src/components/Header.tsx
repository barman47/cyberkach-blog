'use client';

import * as React from 'react';
import Image from 'next/image';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import {
    AppBar,
    Button,
    Grid,
    IconButton,
    Link,
    Slide,
    Stack,
    Toolbar,
    useScrollTrigger
} from '@mui/material';
import { Menu } from 'mdi-material-ui';
import { makeStyles } from 'tss-react/mui';
import { WHITE } from '@/app/theme';

import MobileNav from './MobileNav';


interface HideOnScrollProps {
    children: React.ReactElement;
};

const HideOnScroll: React.FC<HideOnScrollProps> = ({ children }: HideOnScrollProps) => {
    const trigger = useScrollTrigger();

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

const useStyles = makeStyles()(theme => ({
    root: {
        background: WHITE,
        boxShadow: `0px 1px 0px #e5e9f2`
    },

    nav: {
        [theme.breakpoints.down('md')]: { 
            display: 'none'
        }
    },

    logo: {
        width: 'auto',
        height: 'auto',
        objectFit: 'cover',
        [theme.breakpoints.down('md')]: {
            width: theme.spacing(10)
        }
    },

    smallLogo: {
        width: theme.spacing(8),
        height: 'auto',
        objectFit: 'cover',
        [theme.breakpoints.down('md')]: {
            width: theme.spacing(5)
        }
    },

    link: {
        color: theme.palette.text.primary,
        fontSize: theme.spacing(1.7),
        fontWeight: 600
    },

    mobileMenu: {
        display: 'none',
        [theme.breakpoints.down('md')]: { 
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between'
        }
    },

    menuButton: {
        color: theme.palette.primary.main
    },

    mobileNav: {
        display: 'none',
        flexDirection: 'row',
        justifyContent: 'space-between',
        
        [theme.breakpoints.down('md')]: {
            display: 'flex',
            width: '100%'
        }
    }
}));

const Header = () => {
    const {classes} = useStyles();
    const pathname = usePathname();
    
    const [drawerOpen, setDrawerOpen] = React.useState(false);
    const [isBlog, setIsBlog] = React.useState(false);

    React.useEffect(() => {
        if (pathname.includes('/blog') || pathname.includes('/podcasts')) {
            setIsBlog(true);
        } else {
            setIsBlog(false);
        }
    }, [pathname]);

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };


    return (
        <HideOnScroll>
            <AppBar className={classes.root} elevation={0}>
                <Toolbar>
                    <Grid container direction="row" alignItems="center" spacing={10} className={classes.nav}>
                        <Grid item xs={2}>
                            <Link href="/" component={NextLink}>
                                <Image 
                                    width={150}
                                    height={10}
                                    src={isBlog ? "/assets/img/icon-small.png" : "/assets/img/logo.png"} 
                                    alt="CyberKach Logo" 
                                    className={isBlog ? classes.smallLogo : classes.logo} 
                                    priority
                                />
                            </Link>
                        </Grid>
                        <Grid item xs={8}>
                            <Stack direction="row" justifyContent="center" spacing={10}>
                                <Stack>
                                    <Link underline="hover" href="/" className={classes.link} component={NextLink} variant="body1">Home</Link>
                                </Stack>
                                <Stack>
                                    <Link underline="hover" href="/blog" className={classes.link} component={NextLink} variant="body1">Blog</Link>
                                </Stack>
                                <Stack>
                                    <Link underline="hover" href="/podcasts" className={classes.link} component={NextLink} variant="body1">Podcasts</Link>
                                </Stack>
                            </Stack>
                        </Grid>
                        <Grid item xs={2}>
                            <Button variant="outlined" component={NextLink} color="primary" href="/contactUs" size="medium">Contact Us</Button>
                        </Grid>
                    </Grid>
                    <div className={classes.mobileNav}>
                        <Link href="/" component={NextLink}>
                            <Image 
                                width={150}
                                height={10}
                                src={isBlog ? "/assets/img/icon-small.png" : "/assets/img/logo.png"} 
                                alt="CyberKach Logo" 
                                className={isBlog ? classes.smallLogo : classes.logo} 
                                priority
                            />
                        </Link>
                        <IconButton edge="start" className={classes.menuButton} color="primary" aria-label="menu" onClick={toggleDrawer} >
                            <Menu />
                        </IconButton>
                    </div>
                    <MobileNav toggleDrawer={toggleDrawer} drawerOpen={drawerOpen} />
                </Toolbar>
            </AppBar>
        </HideOnScroll>
    );
};

export default Header;
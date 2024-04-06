import Link  from 'next/link';
import Image  from 'next/image';
import {
    Box,
    List, 
    ListItemText, 
    ListItemIcon, 
    SwipeableDrawer,
    Typography
} from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { Home, Microphone, NewspaperVariant, Phone } from 'mdi-material-ui';

import ListItemLink from './ListItemLink';

import { LIGHT_GREY } from '@/app/theme';

const useStyles = makeStyles()(theme => ({
    drawer: {
        width: '60%'
    },

    drawerLogo: {
        height: theme.spacing(13),
        width: '60%',
        objectFit: 'cover'
    },

    menuButton: {
        color: theme.palette.primary.main
    },

    copyright: {
        color: LIGHT_GREY,
        display: 'inline-block',
        position: 'absolute',
        bottom: 10,
        textAlign: 'center',
        width: '100%'
    }
}));

interface Props {
    toggleDrawer: () => void;
    drawerOpen: boolean;
}

const MobileNav:React.FC<Props> = ({ toggleDrawer, drawerOpen }) => {
    const { classes } = useStyles();
    return (
        <Box component="section">
            <SwipeableDrawer 
                disableBackdropTransition 
                PaperProps={{ className: classes.drawer }} 
                anchor="left" 
                open={drawerOpen} 
                onClose={toggleDrawer}
                onOpen={() => {}}
            >
                <Link href="/">
                    <Image 
                        width={200}
                        height={50}
                        src="/assets/img/logo-full.png" 
                        alt="Cyberkach Logo" 
                        className={classes.drawerLogo} 
                    />
                </Link>
                <List>
                    <ListItemLink href="/" onClick={toggleDrawer}>
                        <ListItemIcon>
                            <Home />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItemLink>
                    <ListItemLink href="/blog" onClick={toggleDrawer}>
                        <ListItemIcon>
                            <NewspaperVariant />
                        </ListItemIcon>
                        <ListItemText primary="Blog" />
                    </ListItemLink>
                    <ListItemLink href="/podcasts" onClick={toggleDrawer}>
                        <ListItemIcon>
                            <Microphone />
                        </ListItemIcon>
                        <ListItemText primary="Podcasts" />
                    </ListItemLink>
                    <ListItemLink href="/contactUs" onClick={toggleDrawer}>
                        <ListItemIcon>
                            <Phone />
                        </ListItemIcon>
                        <ListItemText primary="Contact Us" />
                    </ListItemLink>
                </List>
                <Typography variant="subtitle2" className={classes.copyright} >&copy; Copyright Cyberkach {new Date().getFullYear()}</Typography>
            </SwipeableDrawer>
        </Box>
    );
}

export default MobileNav;
'use client';

import * as React from 'react';
import Link from 'next/link';
import { Button, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

import { OFF_WHITE } from '../theme';

const useStyles = makeStyles()((theme) => ({
    root: {
        backgroundColor: theme.palette.primary.main,
        borderRadius: '5px',
        boxShadow: theme.shadows[10],
        color: OFF_WHITE,
        padding: theme.spacing(5),
        position: 'fixed',
        bottom: 20,
        left: 20,
        width: '20vw',

        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(2),
            width: '80%'
        }
    },

    link: {
        color: OFF_WHITE
    },
    
    button: {
        marginTop: theme.spacing(2)
    }
}));

const PrivacyPopup:React.FC<{}> = () => {
    const { classes } = useStyles();
    const [open, setOpen] = React.useState(false);

    React.useEffect(() => {
        if (!localStorage.getItem('cyberkacyPrivacyPolicy')) {
            setOpen(true);   
        }
        // eslint-disable-next-line
    }, []);

    const closePolicy = () => {
        localStorage.setItem('cyberkacyPrivacyPolicy', 'true')
        setOpen(false);
    };

    return (
        <>
            {open && 
                <div className={classes.root}>
                    <Typography variant="subtitle2">
                        By using our website, you agree to the processing of your data as stipulated in the CyberKach <Link className={classes.link} href="privacyPolicy" target="_blank">Privacy Policy.</Link>
                    </Typography>
                    <Button
                        className={classes.button}
                        variant="contained"
                        onClick={closePolicy}
                        color="secondary"
                    >
                        I Agree
                    </Button>
                </div>
            }
        </>
    );
}

export default PrivacyPopup;
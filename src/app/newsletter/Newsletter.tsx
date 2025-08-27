'use client';

import * as React from 'react';
import { makeStyles } from 'tss-react/mui';
import { Paper, Stack, Typography } from '@mui/material';
import NewsletterForm from '@/components/NewsLetterForm';

const useStyles = makeStyles()(theme => ({
    container: {
        overflowX: 'clip',
    },

    root: {
        width: '35dvw',
        margin: '10rem auto 5rem auto',
        padding: theme.spacing(5),
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            alignItems: 'center'
        }
    },

    header: {
        fontWeight: 600,
        textAlign: 'center',

        [theme.breakpoints.down('sm')]: {
            fontSize: theme.spacing(3),
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(2)
        }
    },

    text: {
        marginBottom: theme.spacing(2),
        fontWeight: 500
    }
}));

const Newsletter: React.FC<{}> = () => {
    const { classes } = useStyles();
    return (
        <>
            <Stack component={Paper} direction="column" gap={2} className={classes.root}>
                <Typography variant="h4" className={classes.header}>Stay Ahead in Cybersecurity</Typography>
                <Typography variant="subtitle2" className={classes.text}>
                    Join the Cyberkach Newsletter to receive the latest cybersecurity news, industry insights, exclusive expert analysis, and actionable security tips delivered directly to your inbox.
                </Typography>
                <NewsletterForm />
            </Stack>
        </>
    );
};

export default Newsletter;
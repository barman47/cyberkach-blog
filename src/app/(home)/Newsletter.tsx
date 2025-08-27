'use client';

import * as React from 'react';
import Image from 'next/image';
import { makeStyles } from 'tss-react/mui';
import Typography from '@mui/material/Typography';

import { OFF_WHITE } from '../theme';
import NewsletterForm from '@/components/NewsLetterForm';

const useStyles = makeStyles()(theme => ({
    container: {
        overflowX: 'clip',
    },

    root: {
        backgroundColor: 'rgba(209, 23, 21, 0.5)',
        color: OFF_WHITE,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: theme.spacing(5),
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            alignItems: 'center'
        }
    },

    image: {
        width: '35%',
        height: 'auto',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        }
    },

    right: {
        color: OFF_WHITE
    },

    header: {
        fontWeight: 500,
        [theme.breakpoints.down('sm')]: {
            fontSize: theme.spacing(3),
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(2),
            textAlign: 'center'
        }
    },

    text: {
        marginBottom: theme.spacing(2)
    }
}));

const Newsletter: React.FC<{}> = () => {
    const { classes } = useStyles();

    return (
        <section className={classes.container}>
            <section className={classes.root}>
                <Image 
                    className={classes.image} 
                    src="/assets/img/newsletter.svg" 
                    alt="Cyberkach Newsletter" 
                    width={0}
                    height={0}
                />
                <div className={classes.right}>
                    <Typography variant="h4" className={classes.header}>Join Our Newsletter</Typography>
                    <Typography variant="subtitle2" className={classes.text}>
                        Join our newsletter to receive all our cyber content and news first-hand
                    </Typography>
                    <NewsletterForm />
                </div>
            </section>
        </section>
    );
};

export default Newsletter;
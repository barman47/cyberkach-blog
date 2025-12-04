'use client';

import * as React from 'react';
import { makeStyles } from 'tss-react/mui';
import { Box, Paper, Stack, Typography } from '@mui/material';
import toast from 'react-hot-toast';

import NewsletterForm from '@/components/NewsLetterForm';

const useStyles = makeStyles()(theme => ({
    root: {
        width: '35dvw',
        margin: '10rem auto 5rem auto',
        padding: theme.spacing(5),

        [theme.breakpoints.down('md')]: {
            margin: '6rem auto 3rem auto',
            width: '70dvw'
        },

        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            alignItems: 'center',
            padding: theme.spacing(2),
            margin: '5rem auto 2rem auto',
            width: '90dvw'
        }
    },

    title: {
        color: '#111827',
        fontSize: '2.25rem',
        fontWeight: 700,
        textAlign: 'center',

        [theme.breakpoints.down('sm')]: {
            fontSize: theme.spacing(3.5)
        }
    },

    subTitle: {
        color: '#374151',
        fontSize: '1.5rem',
        fontWeight: 600,
        textAlign: 'center'
    },

    text1: {
        color: '#374151',
        fontSize: '1.125rem',
        textAlign: 'center'
    },
    
    text2: {
        color: theme.palette.primary.main,
        fontSize: '1.125rem',
        fontWeight: 600,
        textAlign: 'center'
    },
}));

const AiSecurityBenchmark: React.FC<{}> = () => {
    const { classes } = useStyles();

    const downloadTemplate = () => {
        const link = document.createElement('a');
        link.href= '/cyberkach.com-monthly-threat-report-december-2025.pdf';
        link.download = 'cyberkach.com-monthly-threat-report-december-2025.pdf';
        link.click();

        toast.success('Download started');
    };

    return (
        <>
            <Stack component={Paper} direction="column" gap={4} className={classes.root}>
                <Stack direction="column" gap={2}>
                    <Typography variant="h4" className={classes.title}>Free Report: Low Confidence, High Risk</Typography>
                    <Typography variant="h6" className={classes.subTitle}>Benchmarking Organizational AI Security Readiness</Typography>
                </Stack>
                <Stack direction="column" gap={2}>
                    <Typography variant="body1" className={classes.text1}>A unique analysis of how ready organizations are for deploying AI - and where hidden security gaps are emerging.</Typography>
                    <Typography variant="body1" className={classes.text2}>Download the full report to understand today’s real AI risks and learn how to build readiness for tomorrow.</Typography>
                </Stack>
                <Box component="div" sx={{ width: '100%' }}>
                    <NewsletterForm
                        buttonText="Download Report"
                        showFooterText
                        callBack={downloadTemplate}
                    />
                </Box>
            </Stack>
        </>
    );
};

export default AiSecurityBenchmark;
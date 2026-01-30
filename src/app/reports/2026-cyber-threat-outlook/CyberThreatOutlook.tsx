'use client';

import * as React from 'react';
import { makeStyles } from 'tss-react/mui';
import { Box, Paper, Stack, Typography } from '@mui/material';
import toast from 'react-hot-toast';
import NewsletterForm from '@/components/NewsLetterForm';

const useStyles = makeStyles()(theme => ({
    root: {
        width: '40dvw',
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
        color: theme.palette.secondary.main,
        fontSize: '1.125rem',
        fontWeight: 600,
        textAlign: 'center'
    },

    downloadText: {
        color: theme.palette.primary.main,
        fontSize: '1.125rem',
        fontWeight: 600,
        textAlign: 'center'
    },

    footerText: {
        color: '#374151',
        fontSize: '1rem',
        fontWeight: 400,
        textAlign: 'center'        
    }
}));

const CyberThreatOutlook: React.FC<{}> = () => {
    const { classes } = useStyles();

    const downloadTemplate = () => {
        const link = document.createElement('a');
        link.href= '/Cyberkach_2026_Cyber_Threat_Outlook.pdf';
        link.download = 'Cyberkach_2026_Cyber_Threat_Outlook.pdf';
        link.click();

        toast.success('Download started');
    };

    return (
        <>
            <Stack component={Paper} direction="column" gap={4} className={classes.root}>
                <Stack direction="column" gap={2}>
                    <Typography variant="h4" className={classes.title}>2026 Cyber Threat Outlook</Typography>
                    <Typography variant="h6" className={classes.subTitle}>An Analysis of 2025 Cyber Incidents and Emerging Risks for 2026</Typography>
                </Stack>
                <Stack direction="column" gap={2}>
                    <Typography variant="body1" className={classes.text1}>
                        <strong>The 2026 Cyber Threat Outlook</strong>  examines how the most significant cyber incidents of 2025 are reshaping the global threat landscape. It explores the financial, operational, regulatory, and geopolitical consequences of modern cyber attacks, and outlines what organisations should expect as cyber risk escalates in 2026.
                    </Typography>
                    <Typography variant="body1" className={classes.downloadText}>
                        Download the report to explore the data and trends that will shape cybersecurity in 2026.
                    </Typography>
                    <Box component="div" sx={{ width: '100%' }}>
                        <NewsletterForm
                            buttonText="Download Report"
                            showFooterText
                            callBack={downloadTemplate}
                        />
                    </Box>
                    <br />
                    <Typography variant="h6" className={classes.footerText}><em>An Analysis of 2025 Cyber Incidents and Emerging Risks for 2026</em></Typography>
                    <Typography variant="body1" className={classes.footerText}><em>Cyberkach provides research-driven cybersecurity insights to help organisations understand risk, improve resilience, and make informed security decisions.</em></Typography>
                </Stack>
            </Stack>
        </>
    );
};

export default CyberThreatOutlook;
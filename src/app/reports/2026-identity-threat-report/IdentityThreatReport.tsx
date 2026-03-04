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

const IdentityThreatReport: React.FC<{}> = () => {
    const { classes } = useStyles();

    const downloadTemplate = () => {
        const link = document.createElement('a');
        link.href= '/CyberKach_2026_Identity_Threat_Report-The_Industrialisation_of_Access-Based_Attacks.pdf';
        link.download = 'CyberKach_2026_Identity_Threat_Report-The_Industrialisation_of_Access-Based_Attacks.pdf';
        link.click();

        toast.success('Download started');
    };

    return (
        <>
            <Stack component={Paper} direction="column" gap={4} className={classes.root}>
                <Stack direction="column" gap={2}>
                    <Typography variant="h4" className={classes.title}>Identity Threat Report</Typography>
                    <Typography variant="h6" className={classes.subTitle}>The Industrialisation of Access-Based Attacks</Typography>
                </Stack>
                <Stack direction="column" gap={2}>
                    <Typography variant="body1" className={classes.text1}>
                        The 2026 Identity Threat Report examines how cybercrime has evolved into an access-driven economy where stolen identities are harvested, packaged, and sold. Drawing on breach intelligence, underground access markets, and real-world intrusion data, the report shows how modern breaches increasingly begin with a valid login. It explores the rise of account takeover, session hijacking, MFA bypass techniques, and the growing industrialisation of identity-based attacks, outlining what organisations must do as identity becomes the new perimeter.
                    </Typography>
                    <Typography variant="body1" className={classes.downloadText}>
                        Download the report to understand how identity compromise is reshaping cyber risk in 2026.
                    </Typography>
                    <Box component="div" sx={{ width: '100%' }}>
                        <NewsletterForm
                            buttonText="Download Report"
                            showFooterText
                            callBack={downloadTemplate}
                            showSucessToast={false}
                        />
                    </Box>
                    {/* <br />
                    <Typography variant="h6" className={classes.footerText}><em>An Analysis of 2025 Cyber Incidents and Emerging Risks for 2026</em></Typography>
                    <Typography variant="body1" className={classes.footerText}><em>Cyberkach provides research-driven cybersecurity insights to help organisations understand risk, improve resilience, and make informed security decisions.</em></Typography> */}
                </Stack>
            </Stack>
        </>
    );
};

export default IdentityThreatReport;
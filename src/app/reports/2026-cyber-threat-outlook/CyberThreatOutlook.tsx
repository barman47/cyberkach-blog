'use client';

import * as React from 'react';
import { makeStyles } from 'tss-react/mui';
import { Link, Paper, Stack, Typography } from '@mui/material';
import toast from 'react-hot-toast';

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
        fontSize: '1.125rem'
    },
    
    text2: {
        color: theme.palette.secondary.main,
        fontSize: '1.125rem',
        fontWeight: 600
    },

    link: {
        color: theme.palette.primary.main,
        fontSize: '1.125rem',
        fontWeight: 600
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
                        <strong>The 2026 Cyber Threat Outlook</strong> examines how the most significant cyber incidents of 2025 are reshaping the global threat landscape, analysing major ransomware attacks, large-scale data breaches, supply-chain compromises, and early AI-enabled cyber operations. It explores the financial, operational, regulatory, and geopolitical consequences of modern cyber attacks, and outlines what organisations should expect as cyber risk intensifies in 2026.
                    </Typography>
                    <Typography variant="body1" className={classes.text2}>Download the Full Report</Typography>
                    <Typography variant="body1" className={classes.text1}>The 2026 Cyber Threat Outlook provides detailed incident analysis, emerging threat predictions, and strategic insights to help organisations anticipate risk and strengthen cyber resilience.</Typography>
                    <Link
                        href="#!"
                        // href="/Cyberkach_2026_Cyber_Threat_Outlook.pdf"
                        underline="hover"
                        onClick={downloadTemplate} className={classes.link}
                    >
                        👉 Download the report to explore the data, trends, and lessons shaping cybersecurity in 2026.
                    </Link>
                    <br /><br />
                    <Typography variant="h6" className={classes.subTitle}><em>An Analysis of 2025 Cyber Incidents and Emerging Risks for 2026</em></Typography>
                    <Typography variant="body1" className={classes.text1}><em>Cyberkach provides research-driven cybersecurity insights to help organisations understand risk, improve resilience, and make informed security decisions.</em></Typography>
                </Stack>
            </Stack>
        </>
    );
};

export default CyberThreatOutlook;
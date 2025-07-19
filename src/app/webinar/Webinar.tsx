'use client';

import * as React from 'react';
import { Box, Button, Container, FormControlLabel, Radio, RadioGroup, Stack, TextField, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { ContentPaste, Download, FileDocument, Shield } from 'mdi-material-ui';
import toast from 'react-hot-toast';
import axios from 'axios';

import { Feedback, validateAddFeedback } from '@/utils/validation/contact';

const BLUE = '#1A73E8';

const useStyles = makeStyles()((theme) => ({
    root: {
        marginBottom: theme.spacing(15),
        marginTop: theme.spacing(15)
    },

    title: {
        color: '#111827',
        fontSize: '3rem',
        fontWeight: 700,
        textAlign: 'center',

        [theme.breakpoints.down('md')]: {
            fontSize: '2.5rem'
        },

        [theme.breakpoints.down('sm')]: {
            fontSize: '1.5rem'
        }
    },

    secondTitle: {
        color: theme.palette.primary.main,
        fontWeight: 600,
        textAlign: 'center',

        [theme.breakpoints.down('sm')]: {
            fontSize: '1.5rem'
        }
    },
    
    subTitle: {
        color: '#374151',
        fontSize: '1.5rem',
        fontWeight: 500,
        textAlign: 'center',

        [theme.breakpoints.down('sm')]: {
            fontSize: '1rem'
        }
    },

    icon: {
        color: BLUE
    },

    header: {
        color: BLUE,
        fontWeight: 700,
        fontSize: '1.875rem',

        [theme.breakpoints.down('sm')]: {
            fontSize: '1.5rem'
        }
    },

    text: {
        color: '#374151',
        fontSize: '1.125rem',
        marginTop: '1rem',

        [theme.breakpoints.down('sm')]: {
            fontSize: '1rem',
            marginTop: '0.5rem',
        }
    },

    paper: {
        borderRadius: '12px',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        padding: '3rem',

        [theme.breakpoints.down('sm')]: {
            padding: '1rem'
        }
    },

    webinarDetailsTitle: {
        color: '#1f2937',
        fontSize: '1.5rem',
        fontWeight: 600,

        [theme.breakpoints.down('sm')]: {
            fontSize: '1rem'
        }
    },

    listItem: {
        color: '#374151',
        fontSize: '1.125rem',

        [theme.breakpoints.down('sm')]: {
            fontSize: '1rem'
        }
    },

    speakers: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        rowGap: '1rem',

        [theme.breakpoints.down('sm')]: {
            gridTemplateColumns: '1fr',
        }
    },

    speakerName: {
        color: '#374151',
        fontWeight: 600,
        fontSize: '1.125rem'
    },

    speakerPosition: {
        color: '#6b7280',
        fontSize: '0.875rem'
    },

    label: {
        color: '#374151',
        fontSize: '0.875rem',
        fontWeight: 700
    }
}));

const OTHER = 'Other';

const ROLES: string[] = [
    'CISO',
    'Security Leader / Manager',
    'Engineer / Developer',
    'Data Scientist / AI Practitioner',
    'Consultant',
    OTHER
];

const Webinar: React.FC<{}> = () => {
    const { classes } = useStyles();

    const [role, setRole] = React.useState('');
    const [otherRole, setOtherRole] = React.useState('');
    const [mostValuableInsight, setMostValuableInsight] = React.useState('');
    const [challenges, setChallenges] = React.useState('');
    const [futureTopics, setFutureTopics] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const [surveyCompleted, setSurveyCompleted] = React.useState(false);
    const [errors, setErrors] = React.useState<Feedback>({} as Feedback);

    const scrollToDownloadButton = () => {
        const downloadButton = document.querySelector('#download-button') as HTMLElement;
        if (downloadButton) {
            downloadButton.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrors({} as Feedback);

        const data: Feedback = {
            role: role === OTHER ? otherRole : role,
            mostValuableInsight,
            challenges,
            futureTopics
        };

        const { errors, isValid } = validateAddFeedback(data);

         if (!isValid) {
            toast.error('Invalid Information');
            return setErrors({ ...errors});
        }

        setLoading(true);
        try {
            await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/feedback`, data);
            toast.success("Feeback sent successfully");
            setLoading(false);
            setRole('');
            setOtherRole('');
            setMostValuableInsight('')
            setChallenges('');
            setFutureTopics('');
            setSurveyCompleted(true);
            scrollToDownloadButton();
        } catch (error: any) {
            setLoading(false);
            console.error(error);
            console.log(error?.message);
            if (error.message) {
                return toast.error(error.message);
            }
            if (axios.isAxiosError(error) && error.response) {
                return toast.error(error.response.data.errors.msg);
            }
            return toast.error('Error Sending Feedback!');
        }
    };

    const downloadTemplate = () => {
        const link = document.createElement('a');
        link.href= '/templatesforcyberkachwebinarpage.zip';
        link.download = 'templatesforcyberkachwebinarpage.zip';
        link.click();

        toast.success('Download started');
    };

    return (
        <Container component="main" className={classes.root}>
            <Stack direction="column" gap={3}>
                <Stack direction="column" gap={3}>
                    <Typography variant="h4" className={classes.title}>Thank You for Attending the Cyberkach AI Security Webinar Series!</Typography>
                    <Typography variant="h2" className={classes.subTitle}>We hope you found the sessions insightful.</Typography>
                    <Typography variant="h2" className={classes.subTitle}>As promised, we&#39;ve prepared a free AI Security Policy Pack to help you strengthen AI governance. Before you download it, we&#39;d appreciate your quick feedback below.</Typography>
                </Stack>
                <Box component="section" className={classes.paper}>
                    <form noValidate onSubmit={onSubmit}>
                        <Stack direction="column" gap={4}>
                            <Typography variant="h4" className={classes.secondTitle}>Your Feedback Matters!</Typography>
                            <Stack direction="column" gap={1}>
                                <Typography variant="body2" component="p" className={classes.label}>What role best describes you?</Typography>
                                <RadioGroup
                                    aria-labelledby="role-radio-group-label"
                                    defaultValue="female"
                                    name="radio-buttons-group"
                                >
                                    {ROLES.map((item, index) => {
                                        if (index === ROLES.length - 1) {
                                            return (
                                                <Stack key={index} direction="row" alignItems="center">
                                                    <FormControlLabel value={item} control={<Radio onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRole(e.target.value)} />} label={item} />
                                                    <TextField
                                                        type="text"
                                                        size="small"
                                                        placeholder="Please specify"
                                                        value={otherRole}
                                                        onChange={(e) => setOtherRole(e.target.value)}
                                                        error={!!errors.role}
                                                        helperText={errors.role ?? ''}
                                                        disabled={loading || role !== OTHER}
                                                    />
                                                </Stack>
                                            );
                                        }
                                        return (
                                            <FormControlLabel key={item} value={item} control={<Radio onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRole(e.target.value)} checked={role === item} />} label={item} sx={{ alignSelf: 'flex-start' }} />
                                        );
                                    })}
                                </RadioGroup>
                            </Stack>
                            <Stack direction="column" gap={1}>
                                <Typography variant="body2" component="p" className={classes.label}>What was the most valuable insight or idea you took away from the webinar(s)?</Typography>
                                <TextField
                                    type="text"
                                    size="medium"
                                    placeholder="Share your key learning points"
                                    value={mostValuableInsight}
                                    onChange={(e) => setMostValuableInsight(e.target.value)}
                                    error={!!errors.mostValuableInsight}
                                    helperText={errors.mostValuableInsight ?? ''}
                                    disabled={loading}
                                    multiline
                                    minRows={5}
                                />
                            </Stack>
                            <Stack direction="column" gap={1}>
                                <Typography variant="body2" component="p" className={classes.label}>What challenges are you currently facing with AI security?</Typography>
                                <TextField
                                    type="text"
                                    size="medium"
                                    placeholder="Describe your challenges"
                                    value={challenges}
                                    onChange={(e) => setChallenges(e.target.value)}
                                    error={!!errors.challenges}
                                    helperText={errors.challenges ?? ''}
                                    disabled={loading}
                                    multiline
                                    minRows={5}
                                />
                            </Stack>
                            <Stack direction="column" gap={1}>
                                <Typography variant="body2" component="p" className={classes.label}>What topics would you like to see covered in future webinars or whitepapers?</Typography>
                                <TextField
                                    type="text"
                                    size="medium"
                                    placeholder="Suggest topics..."
                                    value={futureTopics}
                                    onChange={(e) => setFutureTopics(e.target.value)}
                                    error={!!errors.futureTopics}
                                    helperText={errors.futureTopics ?? ''}
                                    disabled={loading}
                                    multiline
                                    minRows={5}
                                />
                            </Stack>
                            <Button
                                type="submit"
                                size="medium"
                                variant="contained"
                                color="primary"
                                sx={{ alignSelf: 'flex-start' }}
                                disabled={loading}
                            >
                                {loading ? 'Submiting Feedback . . .' : 'Submit Feedback'}
                            </Button>
                            <Typography variant="h6" className={classes.text}>Once you complete the survey, you&#39;ll get access to the AI Security Policy Pack.</Typography>
                        </Stack>
                    </form>
                </Box>
                <Box component="section" className={classes.paper}>
                    <Stack direction="column" alignItems="center" gap={3}>
                        <Typography variant="h4" className={classes.secondTitle}>Download Your Free AI Security Policy Pack</Typography>
                        <Typography variant="body1" component="p">This exclusive pack includes essential templates to help you build robust AI governance:</Typography>
                        <Stack direction="column" gap={1}>
                            <Stack direction="row" gap={1} alignItems="center"><FileDocument color="info" /><Typography variant="body1" component="p">AI Policy Template</Typography></Stack>
                            <Stack direction="row" gap={1} alignItems="center"><Shield color="info" /><Typography variant="body1" component="p">AI Security Policy Template</Typography></Stack>
                            <Stack direction="row" gap={1} alignItems="center"><ContentPaste color="info" /><Typography variant="body1" component="p">AI Readiness Checklist</Typography></Stack>
                        </Stack>
                        <Typography variant="body1" component="p">Complete the survey above to unlock your exclusive policy pack.</Typography>
                        <Button
                            type="submit"
                            size="medium"
                            variant="contained"
                            color="primary"
                            disabled={!surveyCompleted}
                            startIcon={<Download />}
                            onClick={downloadTemplate}
                            id="download-button"
                        >
                            Download Policy Pack
                        </Button>
                    </Stack>
                </Box>
            </Stack>
        </Container>
    );
};

export default Webinar;
'use client';

import * as React from 'react';
import NextLink from 'next/link';
import { Box, Button, Divider, Stack, Typography, useMediaQuery } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { AccountCircle, ArrowRight, CalendarMonthOutline, CheckCircle, ClockTimeOne, MapMarker } from 'mdi-material-ui';
// import toast from 'react-hot-toast';
// import axios from 'axios';

// import { Reservation, validateAddReservation } from '@/utils/validation/contact';

const BLUE = '#1A73E8';

const useStyles = makeStyles()((theme) => ({
    root: {
        marginTop: theme.spacing(9),
        padding: theme.spacing(3),

        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(1)
        }
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
    
    subTitle: {
        color: '#374151',
        fontSize: '1.5rem',
        fontWeight: 500,
        textAlign: 'center',

        [theme.breakpoints.down('sm')]: {
            fontSize: '1.3rem'
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

    // label: {
    //     color: '#374151',
    //     fontSize: '0.875rem',
    //     fontWeight: 700
    // },

    // formContainer: {
    //     margin: 'auto',
    //     width: '40vw',

    //     [theme.breakpoints.down('md')]: {
    //         width: '60vw'
    //     },

    //     [theme.breakpoints.down('sm')]: {
    //         width: '100%'
    //     }
    // }
}));

const Webinar: React.FC<{}> = () => {
    const { classes, theme } = useStyles();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    // const [firstName, setFirstName] = React.useState('');
    // const [lastName, setLastName] = React.useState('');
    // const [email, setEmail] = React.useState('');
    // const [loading, setLoading] = React.useState(false);
    // const [errors, setErrors] = React.useState<Reservation>({} as Reservation);

    // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //     setErrors({} as Reservation);

    //     const data: Reservation = {
    //         firstName,
    //         lastName,
    //         email
    //     };

    //     const { errors, isValid } = validateAddReservation(data);

    //      if (!isValid) {
    //         toast.error('Invalid Information');
    //         return setErrors({ ...errors});
    //     }

    //     setLoading(true);
    //     try {
    //         await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/reservation`, data);
    //         toast.success("Reservation created successfully");
    //         setLoading(false);
    //         setFirstName('');
    //         setLastName('');
    //         setEmail('');
    //     } catch (error: any) {
    //         setLoading(false);
    //         console.error(error);
    //         console.log(error?.message);
    //         if (error.message) {
    //             return toast.error(error.message);
    //         }
    //         if (axios.isAxiosError(error) && error.response) {
    //             return toast.error(error.response.data.errors.msg);
    //         }
    //         return toast.error('Sending Failed!');
    //     }
    // };

    return (
        <Box component="main" className={classes.root}>
            <Stack direction="column" gap={3}>
                <Stack direction="column">
                    <Typography variant="h4" className={classes.subTitle}>The CyberKach Webinar Series 2025</Typography>
                    <Typography variant="h2" className={classes.title}>AI Security in Practice: Real Voices, Real Risks, Real Solutions</Typography>
                </Stack>
                <Stack direction={isMobile ? 'column' : 'row'} justifyContent="center" gap={2}>
                    <Stack direction="row" gap={1}>
                        <CalendarMonthOutline className={classes.icon} />
                        <Typography variant="body1" component="p">June 25, July 2, July 9, 2025</Typography>
                    </Stack>
                    <Stack direction="row" gap={1}>
                        <ClockTimeOne className={classes.icon} />
                        <Typography variant="body1" component="p">13:00 GMT+1</Typography>
                    </Stack>
                    <Stack direction="row" gap={1}>
                        <MapMarker className={classes.icon} />
                        <Typography variant="body1" component="p">Zoom Webinars Online</Typography>
                    </Stack>
                </Stack>
                <Box alignSelf="center">
                    <Button
                        size="large"
                        color="primary"
                        variant="contained"
                        startIcon={"🔐"}
                        LinkComponent={NextLink}
                        href="https://zoom.us/webinar/register/WN_VAnd_SLlQOqAQyBYh6rQAg"
                        target="_blank"
                    >
                        Register Now
                    </Button>
                </Box>
                <Box component="section" className={classes.paper}>
                    <Typography variant="h5" className={classes.header}>What to Expect</Typography>
                    <Typography variant="body2" component="p" className={classes.text}>This 3-part live webinar series brings together cybersecurity leaders, AI innovators, and risk managers to explore how artificial intelligence is reshaping security — from coding to compliance to the supply chain.</Typography>
                    <Typography variant="body2" component="p" className={classes.text}>Each session is designed for hands-on practitioners and professionals navigating the fast-evolving AI landscape.</Typography>
                </Box>
                <Box component="section" className={classes.paper}>
                    <Typography variant="h5" className={classes.header}>Webinar Lineup</Typography>
                    <Stack direction="column" gap={4}>
                        <Stack direction="column" gap={1}>
                            <Stack direction="row" alignItems="center" gap={1}>
                                <CheckCircle sx={{ color: '#22c55d' }} />
                                <Typography variant="h4" className={classes.webinarDetailsTitle}>Day 1 - June 25, 2025</Typography>
                            </Stack>
                            <Typography variant="body2" component="p" className={classes.listItem}><strong>“Vibe Coding”: Managing Security Risks in AI-Enhanced Products</strong></Typography>
                            <Typography variant="body2" component="p" className={classes.listItem}>AI copilots, developer assistants, and LLM-integrated apps are redefining how we build software. But are we introducing new risks?</Typography>
                            <Stack direction="row" alignItems="center" gap={1}>
                                <ArrowRight sx={{ color: BLUE }} />
                                <Typography variant="body2" component="p" className={classes.listItem}>Emerging threats from AI-generated code</Typography>
                            </Stack>
                            <Stack direction="row" alignItems="center" gap={1}>
                                <ArrowRight sx={{ color: BLUE }} />
                                <Typography variant="body2" component="p" className={classes.listItem}>Risk management in fast-paced dev environments</Typography>
                            </Stack>
                        </Stack>
                        <Divider />
                        <Stack direction="column" gap={1}>
                            <Stack direction="row" alignItems="center" gap={1}>
                                <CheckCircle sx={{ color: '#22c55d' }} />
                                <Typography variant="h4" className={classes.webinarDetailsTitle}>Day 2 - July 2, 2025</Typography>
                            </Stack>
                            <Typography variant="body2" component="p" className={classes.listItem}><strong>Third-Party AI Tools: A New Frontier for Supply Chain Risk</strong></Typography>
                            <Typography variant="body2" component="p" className={classes.listItem}>When your vendors, tools, and platforms all integrate AI — where does your attack surface end?</Typography>
                            <Stack direction="row" alignItems="center" gap={1}>
                                <ArrowRight sx={{ color: BLUE }} />
                                <Typography variant="body2" component="p" className={classes.listItem}>Mapping exposure to third-party AI tools</Typography>
                            </Stack>
                            <Stack direction="row" alignItems="center" gap={1}>
                                <ArrowRight sx={{ color: BLUE }} />
                                <Typography variant="body2" component="p" className={classes.listItem}>Real-world breaches and vendor chain risks</Typography>
                            </Stack>
                            <Stack direction="row" alignItems="center" gap={1}>
                                <ArrowRight sx={{ color: BLUE }} />
                                <Typography variant="body2" component="p" className={classes.listItem}>Frameworks for AI-driven TPRM</Typography>
                            </Stack>
                        </Stack>
                        <Divider />
                        <Stack direction="column" gap={1}>
                            <Stack direction="row" alignItems="center" gap={1}>
                                <CheckCircle sx={{ color: '#22c55d' }} />
                                <Typography variant="h4" className={classes.webinarDetailsTitle}>Day 3 - July 9, 2025</Typography>
                            </Stack>
                            <Typography variant="body2" component="p" className={classes.listItem}><strong>AI Governance: What Security Leaders Must Get Right</strong></Typography>
                            <Stack direction="row" alignItems="center" gap={1}>
                                <ArrowRight sx={{ color: BLUE }} />
                                <Typography variant="body2" component="p" className={classes.listItem}>Building trustworthy, explainable AI</Typography>
                            </Stack>
                            <Stack direction="row" alignItems="center" gap={1}>
                                <ArrowRight sx={{ color: BLUE }} />
                                <Typography variant="body2" component="p" className={classes.listItem}>Aligning security, legal, and ethics in governance</Typography>
                            </Stack>
                            <Stack direction="row" alignItems="center" gap={1}>
                                <ArrowRight sx={{ color: BLUE }} />
                                <Typography variant="body2" component="p" className={classes.listItem}>Executive strategies for resilient AI adoption</Typography>
                            </Stack>
                        </Stack>
                        <Box alignSelf="center">
                            <Button
                                size="large"
                                color="primary"
                                variant="contained"
                                startIcon={"🎟️"}
                                LinkComponent={NextLink}
                                href="https://zoom.us/webinar/register/WN_VAnd_SLlQOqAQyBYh6rQAg"
                                target="_blank"
                            >
                                Register Now
                            </Button>
                        </Box>
                    </Stack>
                </Box>
                <Box component="section" className={classes.paper}>
                    <Typography variant="h5" className={classes.header}>Featured Speakers</Typography>
                    <Box component="div" className={classes.speakers}>
                        <Stack direction="row" gap={1}>
                            <AccountCircle sx={{ color: BLUE }} />
                            <Stack direction="column">
                                <Typography variant="body1" component="p" className={classes.speakerName}>Charles Onochie</Typography>
                                <Typography variant="body2" component="p" className={classes.speakerPosition}>VP of Information Security & Global CISO, GAN</Typography>
                            </Stack>
                        </Stack>
                        <Stack direction="row" gap={1}>
                            <AccountCircle sx={{ color: BLUE }} />
                            <Stack direction="column">
                                <Typography variant="body1" component="p" className={classes.speakerName}>Marcal Santos</Typography>
                                <Typography variant="body2" component="p" className={classes.speakerPosition}>vCISO & Founder, SecureLeap</Typography>
                            </Stack>
                        </Stack>
                        <Stack direction="row" gap={1}>
                            <AccountCircle sx={{ color: BLUE }} />
                            <Stack direction="column">
                                <Typography variant="body1" component="p" className={classes.speakerName}>Gbolabo Awelewa</Typography>
                                <Typography variant="body2" component="p" className={classes.speakerPosition}>Chief Solutions Officer, Cybervergent</Typography>
                            </Stack>
                        </Stack>
                        <Stack direction="row" gap={1}>
                            <AccountCircle sx={{ color: BLUE }} />
                            <Stack direction="column">
                                <Typography variant="body1" component="p" className={classes.speakerName}>Orakwe John</Typography>
                                <Typography variant="body2" component="p" className={classes.speakerPosition}>AI Programs Lead</Typography>
                            </Stack>
                        </Stack>
                        <Stack direction="row" gap={1}>
                            <AccountCircle sx={{ color: BLUE }} />
                            <Stack direction="column">
                                <Typography variant="body1" component="p" className={classes.speakerName}>Helen Oluyemi</Typography>
                                <Typography variant="body2" component="p" className={classes.speakerPosition}>Information Security Manager, Pollinate</Typography>
                            </Stack>
                        </Stack>
                        <Stack direction="row" gap={1}>
                            <AccountCircle sx={{ color: BLUE }} />
                            <Stack direction="column">
                                <Typography variant="body1" component="p" className={classes.speakerName}>Emmanuel Agidi</Typography>
                                <Typography variant="body2" component="p" className={classes.speakerPosition}>Manager of Digital Audit, PWC UK</Typography>
                            </Stack>
                        </Stack>
                        <Stack direction="row" gap={1}>
                            <AccountCircle sx={{ color: BLUE }} />
                            <Stack direction="column">
                                <Typography variant="body1" component="p" className={classes.speakerName}>Rypson Ugwuzor</Typography>
                                <Typography variant="body2" component="p" className={classes.speakerPosition}>Manager, Cyber Security & Intelligent Automation, KPMG</Typography>
                            </Stack>
                        </Stack>
                    </Box>
                </Box>
                <Box component="section" className={classes.paper}>
                    <Typography variant="h5" className={classes.header}>Why Attend?</Typography>
                    <Typography variant="body2" component="p" className={classes.text}>Stay ahead of AI-driven threats</Typography>
                    <Typography variant="body2" component="p" className={classes.text}>Hear directly from leaders doing the work</Typography>
                    <Typography variant="body2" component="p" className={classes.text}>Get actionable ideas to bring to your team</Typography>
                    <Typography variant="body2" component="p" className={classes.text}>Connect with like-minded professionals</Typography>
                </Box>
                {/*<Box component="section" className={classes.paper} id="form">
                    <Stack direction="column" alignItems="stretch" gap={3} className={classes.formContainer}>
                        <Typography variant="h5" className={classes.header} sx={{ textAlign: 'center' }}>Register Now for the Webinar Series</Typography>
                        <form noValidate onSubmit={handleSubmit}>
                            <Stack direction="column" gap={4}>
                                <Stack direction="column" gap={1}>
                                    <Typography variant="body2" component="p" className={classes.label}>First Name:</Typography>
                                    <TextField
                                        type="text"
                                        size="medium"
                                        placeholder="Your First Name"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        error={!!errors.firstName}
                                        helperText={errors.firstName ?? ''}
                                        disabled={loading}
                                    />
                                </Stack>
                                <Stack direction="column" gap={1}>
                                    <Typography variant="body2" component="p" className={classes.label}>Last Name:</Typography>
                                    <TextField
                                        type="text"
                                        size="medium"
                                        placeholder="Your Last Name"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        error={!!errors.lastName}
                                        helperText={errors.lastName ?? ''}
                                        disabled={loading}
                                    />
                                </Stack>
                                <Stack direction="column" gap={1}>
                                    <Typography variant="body2" component="p" className={classes.label}>Email Address:</Typography>
                                    <TextField
                                        type="email"
                                        size="medium"
                                        placeholder="email@example.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        error={!!errors.email}
                                        helperText={errors.email ?? ''}
                                        disabled={loading}
                                    />
                                </Stack>
                                <Typography variant="body2" component="p">
                                    We handle your data with care. Please see our <Link component={NextLink} underline="hover" href="/privacyPolicy" target="_blank" sx={{ color: BLUE }}>Privacy Policy</Link>
                                </Typography>
                                <Box alignSelf="center">
                                    <Button
                                        type="submit"
                                        size="large"
                                        color="primary"
                                        variant="contained"
                                        disabled={loading}
                                    >
                                        {loading ? <><CircularProgress size={24} />&nbsp;&nbsp;REGISTER NOW</> : 'Register Now'}
                                    </Button>
                                </Box>
                            </Stack>
                        </form>
                    </Stack>
                </Box>*/}
            </Stack>
        </Box>
    );
};

export default Webinar;
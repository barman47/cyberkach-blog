'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { makeStyles } from 'tss-react/mui';
import {
    Box,
    Button,
    CircularProgress,
    Checkbox,
    FormHelperText,
    Grid,
    FormControl,
    IconButton,
    MenuItem,
    Select,
    Typography,
    TextField,
    Tooltip,
    Zoom,
    Stack
} from '@mui/material';
import { Phone, Email, MapMarker, Linkedin, Twitter } from 'mdi-material-ui';
import toast from 'react-hot-toast';
import axios, { AxiosError } from 'axios';

import validateContact, { ContactData } from '../../utils/validation/contact/add';
import { LIGHT_GREY, OFF_WHITE } from '../theme';

const useStyles = makeStyles()(theme => ({
    root: {
        marginTop: theme.spacing(10),
        padding: theme.spacing(5),
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(3)
        }
    },

    form: {
        marginTop: theme.spacing(4)
    },

    link: {
        color: theme.palette.primary.main
    },

    image: {
        width: '80%',
        height: 'auto',

        [theme.breakpoints.down('lg')]: {
            width: '100%'
        }
    },

    contactItem: {
        color: LIGHT_GREY,
        cursor: 'pointer',
        '&:hover': {
            textDecoration: 'underline'
        }
    },

    icon: {
        position: 'relative',
        top: 7,
        marginRight: theme.spacing(2)
    },

    social: {
        display: 'flex',
        flexDirection: 'row',
        width: '20%',
        [theme.breakpoints.down('lg')]: {
            width: '40%'
        },
        [theme.breakpoints.down('md')]: {
            width: '50%'
        },
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'center',
            width: '100%'
        },
    },

    iconButton: {
        backgroundColor: theme.palette.primary.main,
        color: OFF_WHITE,
        marginRight: theme.spacing(2),

        '&:hover': {
            backgroundColor: 'rgba(209, 23, 21, 0.2)',
            color: theme.palette.primary.main
        }
    }
}));

const ContactUs = () => {
    const { classes } = useStyles();

    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [subject, setSubject] = React.useState('');
    const [message, setMessage] = React.useState('');
    const [errors, setErrors] = React.useState<ContactData>({} as ContactData);
    const [checked, setChecked] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const subjects = [
        'Enquire About CyberKach Services',
        'Request for Quotation',
        'Sponsor the CyberKach Podcast',
        'Others'
    ];

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setErrors({} as ContactData);

        const data = {
            name,
            email,
            subject,
            message
        };
        const { errors, isValid } = validateContact(data);

        if (!isValid) {
            toast.error('Invalid Information');
            return setErrors({ ...errors});
        }

        setLoading(true);
        setErrors({} as ContactData);
        try {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/contact`, data);
            toast.success(res.data.msg);
            setLoading(false);
            setName('');
            setEmail('');
            setSubject('');
            setMessage('');
            setChecked(false);
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
            return toast.error('Sending Failed!');
        }
    };

    return (
        <Box component="main" className={classes.root}>
            <Grid container direction="row" spacing={5}>
                <Grid item xs={12} md={6} lg={6} xl={6}>
                    <Typography variant="h4">Let&#39;s talk</Typography>
                    <Typography variant="body2">Please contact us and we&#39;d get back to you in no time!</Typography>
                    <form onSubmit={handleSubmit} className={classes.form} noValidate>
                        <Grid container direction="column" spacing={5}>
                            <Grid item>
                                <TextField
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    type="text"
                                    variant="outlined"
                                    label="Your Name"
                                    helperText={errors.name || "e.g. John Doe"}
                                    fullWidth
                                    required
                                    error={errors.name ? true : false}
                                    disabled={loading}
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="text"
                                    variant="outlined"
                                    label="Your Email"
                                    helperText={errors.email || "e.g. johndoe@gmail.com"}
                                    fullWidth
                                    required
                                    error={errors.email ? true : false}
                                    disabled={loading}
                                />
                            </Grid>
                            <Grid item>
                                <FormControl
                                    variant="outlined"
                                    error={errors.subject ? true : false }
                                    fullWidth
                                    required
                                >
                                    <Select
                                        labelId="subject"
                                        value={subject}
                                        onChange={(e) => setSubject(e.target.value)}
                                        disabled={loading}
                                        displayEmpty
                                    >
                                        <MenuItem value="" selected disabled> Message Subject *</MenuItem>
                                        {subjects.map((item, index) => (
                                            <MenuItem key={index} value={item}>{item}</MenuItem>
                                        ))}
                                    </Select>
                                    <FormHelperText>{errors.subject || 'Select a reason for which your are contacting us.'}</FormHelperText>
                                </FormControl>
                            </Grid>
                            <Grid item>
                                <TextField
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    type="text"
                                    variant="filled"
                                    label="Your Message . . . "
                                    helperText={errors.message}
                                    fullWidth
                                    multiline
                                    required
                                    rows={5}
                                    error={errors.message ? true : false}
                                    disabled={loading}
                                />
                            </Grid>
                            <Grid item>
                                <Checkbox
                                    checked={checked}
                                    color="primary"
                                    onChange={() => setChecked(!checked)}
                                    inputProps={{ 'aria-label': 'check box with default' }}
                                />
                                <Typography variant="subtitle2" component="span">
                                    By providing your details, you agree to the processing of your data as stipulated in the cyberkach
                                    &nbsp;<Link className={classes.link} href="privacyPolicy" target="_blank">privacy policy</Link>
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Button
                                    variant="contained"
                                    type="submit"
                                    color="primary"
                                    disabled={!checked || loading ? true : false}
                                >
                                    {loading ? <CircularProgress size={24} /> : 'Send Message'}
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
                <Grid item xs={12} md={6} lg={6} xl={6}>
                    <Stack direction="column" spacing={5} alignItems="flex-start">
                        <Image 
                            src="/assets/img/contact.svg" 
                            alt="Contact CyberKach" 
                            className={classes.image} 
                            width={0}
                            height={0}
                        />
                        <Tooltip title="Call CyberKach" TransitionComponent={Zoom} TransitionProps={{ timeout: 0 }}>
                            <Typography
                                variant="subtitle2"
                                onClick={() => {
                                    window.open('tel:+2348033817154')
                                }}
                                className={classes.contactItem}

                            >
                                <Phone className={classes.icon} />
                                (+234) 803 381 7154
                            </Typography>
                        </Tooltip>
                        <Tooltip title="Call CyberKach" TransitionComponent={Zoom} TransitionProps={{ timeout: 300 }}>
                            <Typography
                                variant="subtitle2"
                                onClick={() => {
                                    window.open('mailto:hello@cyberkach.com')
                                }}
                                className={classes.contactItem}

                            >
                                <Email className={classes.icon} />
                                hello@cyberkach.com
                            </Typography>
                        </Tooltip>
                        <Typography
                            variant="subtitle2"
                            className={classes.contactItem}
                        >
                            <MapMarker className={classes.icon} />
                            Lagos, Nigeria
                        </Typography>
                        <Box component="div" className={classes.social}>
                            <Tooltip title="Connect with us on LinkedIn" TransitionComponent={Zoom} TransitionProps={{ timeout: 300 }}>
                                <IconButton
                                    aria-label="LinkedIn"
                                    className={classes.iconButton}
                                    onClick={() => {
                                        window.open('https://www.linkedin.com/company/cyberkach/', '_blank', 'noopener,noreferrer')
                                    }}
                                >
                                    <Linkedin />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Follow us on Twitter" TransitionComponent={Zoom} TransitionProps={{ timeout: 300 }}>
                                <IconButton
                                    aria-label="Twitter"
                                    className={classes.iconButton}
                                    onClick={() => {
                                        window.open('https://twitter.com/TheCyberKach', '_blank', 'noopener,noreferrer')
                                    }}
                                >
                                    <Twitter />
                                </IconButton>
                            </Tooltip>
                        </Box>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    );
}

export default ContactUs;

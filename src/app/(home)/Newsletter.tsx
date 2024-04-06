'use client';

import * as React from 'react';
import Image from 'next/image';
import { makeStyles } from 'tss-react/mui';
import {
    Button,
    CircularProgress,
    Grid,
    TextField,
    Typography
} from '@mui/material';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

import validateAddContact, { AddContactData } from '@/utils/validation/contact/add';
import { OFF_WHITE } from '../theme';

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

    const [email, setEmail] = React.useState('');
    const [name, setName] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const [errors, setErrors] = React.useState<AddContactData>({} as AddContactData);

    const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setErrors({} as AddContactData);
        const { errors, isValid } = validateAddContact({ name, email });

        if (!isValid) {
            toast.error('Invalid contact details');
            return setErrors(errors);
        }
        setLoading(true);
        setErrors({} as AddContactData);
        try {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/addContact`, { email, name });
            setLoading(false);
            toast.success(res.data.msg);
            setEmail('');
            setName('');
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
            return toast.error('Failed to add contact!');
        }
    };

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
                    <Typography variant="h4" className={classes.header}>
                        Join Our Newsletter
                    </Typography>
                    <Typography variant="subtitle2" className={classes.text}>
                        Join our newsletter to receive all our cyber content and news first-hand
                    </Typography>

                    <form noValidate onSubmit={handleFormSubmit}>
                        <Grid container direction="column" spacing={5}>
                            <Grid item>
                                <TextField 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email"
                                    variant="outlined" 
                                    label="Email Address" 
                                    helperText={errors.email || "e.g. john@gmail.com"}
                                    fullWidth
                                    required
                                    error={errors.email ? true : false}
                                    disabled={loading}
                                />
                            </Grid>
                            <Grid item>
                                <TextField 
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    type="text"
                                    variant="outlined" 
                                    label="Your Full Name" 
                                    helperText={errors.name || 'e.g. John Doe'}
                                    fullWidth
                                    required
                                    error={errors.name ? true : false}
                                    disabled={loading}
                                />
                            </Grid>
                            <Grid item>
                                <Button 
                                    variant="contained"
                                    fullWidth
                                    size="large"
                                    color="primary"
                                    type="submit"
                                    disabled={loading}
                                    disableElevation
                                >
                                    {loading ? <CircularProgress size={24} /> : 'Subscribe'}
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </section>
            <Toaster />
        </section>
    );
};

export default Newsletter;
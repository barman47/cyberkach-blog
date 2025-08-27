'use client';

import * as React from 'react';
import {
    Button,
    CircularProgress,
    Stack,
    TextField
} from '@mui/material';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

import validateAddContact, { AddContactData } from '@/utils/validation/contact/add';

interface Props {
    placeholderColor?: string;
    helperTextColor?: string;
}

const NewsletterForm: React.FC<Props> = ({ placeholderColor, helperTextColor }) => {
    const [email, setEmail] = React.useState('');
    // const [name, setName] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const [errors, setErrors] = React.useState<AddContactData>({} as AddContactData);

    const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setErrors({} as AddContactData);
        const { errors, isValid } = validateAddContact({ email });

        if (!isValid) {
            toast.error('Invalid contact details');
            return setErrors(errors);
        }
        setLoading(true);
        setErrors({} as AddContactData);
        try {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/addContact`, { email });
            setLoading(false);
            toast.success(res.data.msg);
            setEmail('');
            // setName('');
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
        <>
            <Stack component="form" direction="column" gap={2} noValidate onSubmit={handleFormSubmit}>
                <TextField 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    variant="outlined" 
                    label="Email Address"
                    placeholder="Enter your email address"
                    helperText={errors.email || "e.g. john@gmail.com"}
                    fullWidth
                    required
                    error={errors.email ? true : false}
                    disabled={loading}
                    sx={{
                        '& .MuiInputLabel-root': {
                            color: placeholderColor,
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                            color: placeholderColor,
                        },
                        '& .MuiOutlinedInput-input::placeholder': {
                            color: placeholderColor,
                            opacity: placeholderColor ? 1 : undefined,
                        },
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: placeholderColor,
                        },
                        '& .MuiFormHelperText-root': {
                            color: helperTextColor,
                        },
                    }}
                />
                {/* <TextField 
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
                /> */}
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
            </Stack>
            <Toaster />
        </>
    );
};

export default NewsletterForm;
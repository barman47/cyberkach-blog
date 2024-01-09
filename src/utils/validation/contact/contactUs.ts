import Validator from 'validator';

import { isEmpty } from '@/utils/isEmpty';
import { ErrorObject } from '@/utils/constants';

export type ContactData = {
    name: string;
    email: string;
    subject: string;
    message: string;
}

const validateContactUs = (data: ContactData): ErrorObject<ContactData> => {
    const errors = {} as ContactData;

    data.name = !isEmpty(data.name) ?  data.name : '';
    data.email = !isEmpty(data.email) ?  data.email : '';
    data.subject = !isEmpty(data.subject) ?  data.subject : '';
    data.message = !isEmpty(data.message) ?  data.message : '';

    if (Validator.isEmpty(data.name)) {
        errors.name = 'Your name is required';
    }

    if (Validator.isEmpty(data.email)) {
        errors.email = 'Email Address is required!';
    }
    if (!Validator.isEmail(data.email)) {
        errors.email = 'Invalid Email Address!';
    }

    if (Validator.isEmpty(data.subject)) {
        errors.subject = 'Message subject is required!';
    }

    if (Validator.isEmpty(data.message)) {
        errors.message = 'Your message is required!';
    }
   
    return {
        errors,
        isValid: isEmpty(errors)
    } as ErrorObject<ContactData>;
};

export default validateContactUs;
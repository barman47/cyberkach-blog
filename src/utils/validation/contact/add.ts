import Validator from 'validator';

import { isEmpty } from '@/utils/isEmpty';
import { ErrorObject } from '@/utils/constants';

export type AddContactData = {
    name: string;
    email: string;
}

const validateAddContact = (data: AddContactData): ErrorObject<AddContactData> => {
    const errors = {} as AddContactData;

    data.email = !isEmpty(data.email) ?  data.email : '';
    data.name = !isEmpty(data.name) ?  data.name : '';
    
    if (!Validator.isEmail(data.email)) {
        errors.email = 'Invalid email Address!';
    }
    if (Validator.isEmpty(data.email)) {
        errors.email = 'Your email address is required!';
    }

    if (Validator.isEmpty(data.name)) {
        errors.name = 'Your name is required!';
    }
    
   
    return {
        errors,
        isValid: isEmpty(errors)
    } as ErrorObject<AddContactData>;
};

export default validateAddContact;
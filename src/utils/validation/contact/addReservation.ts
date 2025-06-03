import Validator from 'validator';

import { isEmpty } from '@/utils/isEmpty';
import { ErrorObject } from '@/utils/constants';

export interface Reservation {
    firstName: string;
    lastName: string;
    email: string;
}

export const validateAddReservation = (data: Reservation): ErrorObject<Reservation> => {
    const errors = {} as Reservation;

    data.firstName = !isEmpty(data.firstName) ?  data.firstName : '';
    data.lastName = !isEmpty(data.lastName) ?  data.lastName : '';
    data.email = !isEmpty(data.email) ?  data.email : '';

    if (Validator.isEmpty(data.firstName)) {
        errors.firstName = 'First name is required!';
    }

    if (Validator.isEmpty(data.lastName)) {
        errors.lastName = 'Last name is required!';
    }

    if (Validator.isEmpty(data.email)) {
        errors.email = 'Email Address is required!';
    }
    if (!Validator.isEmail(data.email)) {
        errors.email = 'Invalid Email Address!';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    } as ErrorObject<Reservation>;
};
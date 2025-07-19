import Validator from 'validator';

import { isEmpty } from '@/utils/isEmpty';
import { ErrorObject } from '@/utils/constants';

export interface Feedback {
    role: string;
    challenges: string;
    mostValuableInsight: string;
    futureTopics?: string;
}

export const validateAddFeedback = (data: Feedback): ErrorObject<Feedback> => {
    const errors = {} as Feedback;

    data.role = !isEmpty(data.role) ?  data.role : '';
    data.challenges = !isEmpty(data.challenges) ?  data.challenges : '';
    data.mostValuableInsight = !isEmpty(data.mostValuableInsight) ?  data.mostValuableInsight : '';

    if (Validator.isEmpty(data.role)) {
        errors.role = 'Your role is required!';
    }

    if (Validator.isEmpty(data.challenges)) {
        errors.challenges = 'This field is required!';
    }

    if (Validator.isEmpty(data.mostValuableInsight)) {
        errors.mostValuableInsight = 'This field is required!';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    } as ErrorObject<Feedback>;
};
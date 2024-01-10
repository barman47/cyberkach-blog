import axios from 'axios';

export const handleError = (error: any, rejectWithValue: any, msg: string) => {
    if (error.message === 'Network Error') {
        return  rejectWithValue({
            data: { msg: 'Network Error' },
            success: false,
            statusCode: 503
        });
    }

    if (axios.isAxiosError(error) && error.response) {
        return rejectWithValue({
            data: error.response.data.errors,
            success: false,
            statusCode: error.response.status
        });
    }
    return rejectWithValue({
        data: { msg },
        success: false,
        statusCode: 500
    });
};
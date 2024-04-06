import { Metadata } from 'next';

import ContactUs from './ContactUs';

export const metadata: Metadata = {
    title: 'Contact Us',
    description: 'Cyberkach is a security consulting firm which assists clients achieve effective cyber programs and provides security awareness trainings.',
}

const ContactUsPage: React.FC<{}> = async () => {

	return (
		<ContactUs />
	);
}

export default ContactUsPage;
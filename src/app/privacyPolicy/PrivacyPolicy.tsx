'use client';

import { Metadata } from 'next';
import { makeStyles } from 'tss-react/mui';
import { 
    List,
    ListItem,
    ListItemText,
    Typography
} from '@mui/material';

export const metadata: Metadata = {
    title: 'Privacy Policy | CyberKach.com'
}

const useStyles = makeStyles()(theme => ({
    root: {
        marginTop: theme.spacing(15)
    },

    header: {
        color: theme.palette.primary.main,
        fontWeight: 500,
        textAlign: 'center'
    }
}));

const PrivacyPolicy: React.FC<{}> = () => {
    const { classes } = useStyles();

    return (
        <section className={classes.root}>
            <Typography variant="h4" className={classes.header}>Privacy Policy</Typography>
            <List component="ul">
                <ListItem>
                    <ListItemText
                        inset 
                        primary="1.	INTRODUCTION"
                        secondary="CyberKach (“us”, “we”, or “our”) understands the criticality of privacy in handling your (“Data subject”) personal data. Hence, we want you to engage with us knowing that we value your Personal Data and that we protect it."
                    />
                </ListItem>
                <ListItem>
                    <ListItemText 
                        inset
                        secondary="Here you will find details of how we process your Personal Data, the purposes for which we process it, your rights regarding the data we process and how you can contact us."
                    />
                </ListItem>

                <ListItem>
                    <ListItemText 
                        inset
                        primary="2.	COLLECTABLE PERSONAL DATA"
                        secondary="Personal information refers to data that could identify a specific individual such as names, addresses, e-mail addresses, and telephone numbers. Depending on your medium of interaction with CyberKach (online, offline, mobile phone, etc.), we collect various types of information from you, as described below."
                    />
                </ListItem>
                <ListItem>
                    <List component="ul">
                        <ListItem>
                            <ListItemText inset primary="•	Contact information- This includes any information you provide to CyberKach that would allow us to contact you personally, such as your name, residential address, e-mail address, phone number or next-of-kin information" />
                        </ListItem>
                        <ListItem>
                            <ListItemText inset primary="•	Payment and Financial information: Any information that we need to make payments to you, including bank details such as bank name and branch, account name and number, etc." />
                        </ListItem>
                        <ListItem>
                            <ListItemText inset primary="•	Demographic information & interests- Any information that describes your demographic or behavioral characteristics. Examples include your date of birth, age or age range, gender, geographic location (e.g. Postcode/zip code), hobbies and interests, and or lifestyle information. We could use such information for improving the quality of our service offerings." />
                        </ListItem>
                        <ListItem>
                            <ListItemText inset primary="•	Sensitive Personal Data. We do not seek to collect or otherwise process sensitive personal data in the ordinary course of our business. Sensitive information includes a number of types of data relating to race, ethnicity, political opinions, religious or other similar beliefs, trade union membership, physical or mental health, sexual tendencies or criminal record. Where it becomes necessary to process your sensitive personal data for any reason, we rely on your prior express consent for any processing which is voluntary. We may enhance personal information we collect from you with information we obtain from third parties that are entitled to share that information; for example, information from other agencies, search information providers or public sources (e.g. for due diligence purposes), but in each case as permitted by applicable laws." />
                        </ListItem>
                    </List>
                </ListItem>

                <ListItem>
                    <ListItemText 
                        inset 
                        primary="3.	CONDITION FOR PROCESSING PERSONAL DATA:"
                        secondary="•	CYBERKACH Personnel or any third party acting on its behalf shall only process your personal data if at least one of these conditions are met."
                    />
                </ListItem>
                <ListItem>
                    <List component="ul">
                        <ListItem>
                            <ListItemText inset primary="Consent: this refers to any freely given, specific, informed and unambiguous indication through a statement or clear affirmative action that signifies your agreement to the processing of your Personal Data by CyberKach" />
                        </ListItem>
                        <ListItem>
                            <ListItemText inset primary="Contract: processing is necessary for the performance of a contract or entering a contract at the request of the Data Subject only." />
                        </ListItem>
                        <ListItem>
                            <ListItemText inset primary="•	Legal obligation: processing is necessary for compliance with a legal obligation to which CyberKach is subject." />
                        </ListItem>
                        <ListItem>
                            <ListItemText inset primary="•	Vital interest: processing is necessary in order to protect the vital interests of the Individual or of another natural person." />
                        </ListItem>
                        <ListItem>
                            <ListItemText inset primary="•	Public interest: processing is necessary for the performance of a task carried out in the public interest or in the exercise of official authority vested in CyberKach" />
                        </ListItem>
                        <ListItem>
                            <ListItemText inset primary="•	Proper Motives: CyberKach shall not seek consent that may engender direct or indirect propagation of atrocities, hate, child rights violation, criminal acts and anti-social conduct" />
                        </ListItem>
                    </List>
                </ListItem>

                <ListItem>
                    <ListItemText 
                        inset 
                        primary="4.	HOW WE USE YOUR PERSONAL DATA" 
                        secondary="To the extent permissible under applicable law, we may use your information for the following legitimate actions:"
                    />
                </ListItem>
                <ListItem>
                    <List component="ul">
                        <ListItem>
                            <ListItemText inset primary="●	Provide any information and services that you have requested;" />
                        </ListItem>
                        <ListItem>
                            <ListItemText inset primary="●	Compare information for accuracy and to verify it with third parties" />
                        </ListItem>
                        <ListItem>
                            <ListItemText inset primary="●	Manage our relationships with you" />
                        </ListItem>
                        <ListItem>
                            <ListItemText inset primary="●	Recruitment processing and human capital management" />
                        </ListItem>
                        <ListItem>
                            <ListItemText inset primary="●	Processing of employee benefit plan" />
                        </ListItem>
                        <ListItem>
                            <ListItemText inset primary="●	To monitor, carry out statistical analysis and benchmarking, provided that in such circumstances it is on an aggregated basis which will not be linked back to you or any living individual;" />
                        </ListItem>
                    </List>
                </ListItem>

                <ListItem>
                    <ListItemText 
                        inset
                        primary="5.	USER RIGHTS"
                        secondary="You have rights when it comes to our handling of their Personal Data. Those rights include:"
                    />
                </ListItem>
                <ListItem>
                    <List component="ul">
                        <ListItem>
                            <ListItemText inset primary="•	The right to request for access to their Personal Data where those requests are reasonable and permitted by law or regulation. CyberKach shall provide reasonable and accessible means for Individuals to submit their requests, which do not have to take any specific form and can be submitted by any method." />
                        </ListItem>
                        <ListItem>
                            <ListItemText inset primary="•	The right to request that CyberKach erase your Personal Data if it is no longer valid or necessary for the purposes for which it was collected or if it is incomplete or inaccurate." />
                        </ListItem>
                        <ListItem>
                            <ListItemText inset primary="•	The right to rectify or amend inaccurate or incomplete Personal Data." />
                        </ListItem>
                        <ListItem>
                            <ListItemText inset primary="•	The right to withdraw your Consent at any time. This can be initiated by contacting CyberKach." />
                        </ListItem>
                        <ListItem>
                            <ListItemText inset primary="•	The right to object to CyberKach’s processing of your Personal Data if there are compelling legitimate grounds to do so and to the extent permitted by law or regulation." />
                        </ListItem>
                        <ListItem>
                            <ListItemText inset primary="•	The right to receive your Personal Data in a commonly used and machine-readable format and the right to transmit these data to another Data Controller when the processing is based on (explicit) consent or when the processing is necessary for the performance of a contract." />
                        </ListItem>
                        <ListItem>
                            <ListItemText inset primary="•	The right to lodge a complaint with the National IT Development Agency (NITDA) where you believe our processing of your data violates the requirements of the Nigeria Data Protection Regulation 2019 (NDPR)." />
                        </ListItem>
                    </List>
                </ListItem>

                <ListItem>
                    <ListItemText 
                        inset 
                        primary="6.	DATA COLLECTION METHODS" 
                    />
                </ListItem>
                <ListItem>
                    <List component="ul">
                        <ListItem>
                            <ListItemText inset primary="●	Electronic Messages: We keep record of your interactions with us via electronic media (such as email, text messages, etc.) in a secure manner while maintaining accuracy. When necessitated by legal or vital obligations, we archive these communications." />
                        </ListItem>
                        <ListItem>
                            <ListItemText inset primary="●	Hard Copy Forms: We maintain accurate records of the information that you provide to us via hard copy forms in a secure manner. When necessitated by legal or vital obligations, we archive these communications." />
                        </ListItem>
                        <ListItem>
                            <ListItemText inset primary="●	Web Forms: We keep record of your personal details provided via the CyberKach website. Typically, such details are processed for the specific reasons they are collected and are kept in a secure manner." />
                        </ListItem>
                    </List>
                </ListItem>
                <ListItem>
                    <ListItemText 
                        inset 
                        primary="7.	TRANSFER OF PERSONAL DATA" 
                        secondary="Personal data collected by CyberKach may be transferred among its various divisions and affiliated companies, around the world, as well as transferred to select partners with your consent. The following describes the various scenarios for which we may share your Personal Data to a third party."
                    />
                </ListItem>
                <ListItem>
                    <List component="ul">
                        <ListItem>
                            <ListItemText 
                                inset 
                                primary="●	Transfer for Service Provision: We employ other companies and individuals to perform functions on our behalf as service providers. Service providers, and their selected staff, are only allowed to access and use your Personal Data on Our behalf for the specific tasks that they have been requested to carry out, based on our instructions, and are required to keep your Personal Data confidential and secure." 
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText 
                                inset 
                                primary="●	Transfer as a legal requirement: We may share your information with other parties when required by law or as necessary to protect our service. We may also share your information in connection with a transfer of assets, or if we are otherwise involved in a merger or transfer." 
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText 
                                inset 
                                primary="●	Inter-Company transfers: Your Personal Data may be transferred to or accessible by other entities within the CyberKach. However, these entities will be bound by the terms of this Policy." 
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText 
                                inset 
                                primary="●	Out of Country Transfer: Your Personal Data may be transferred to a foreign country for storage or processing where it is necessary to do so in line with the permissible conditions defined by the NDPR. We will ensure that appropriate safeguards are in place to ensure the protection of your Personal Data being stored or processed out of the country." 
                            />
                        </ListItem>
                    </List>
                </ListItem>
                <ListItem>
                    <ListItemText inset primary="8.	HOW WE ENSURE PROTECTION OF YOUR PERSONAL DATA" />
                </ListItem>
                <ListItem>
                    <List component="ul">
                        <ListItem>
                            <ListItemText inset primary="•	We use appropriate measures (including physical access controls and secure software and operating environments) to keep your Personal Data confidential and secure. Please note, however, that these protections do not apply to information you choose to share in public areas such as third-party social networks." />
                        </ListItem>
                        <ListItem>
                            <ListItemText inset primary="•	Data Retention Policy: We ensure that your personal data are not retained for longer than necessary as determined by our data retention policy to reduce the likelihood/severity of a data breach." />
                        </ListItem>
                        <ListItem>
                            <ListItemText inset primary="•	Personal Data Breach Notification: CYBERKACH will inform relevant authorities and if necessary affected individuals of personal data breach within 72 hours of being aware of the breach where Personal Breach refers to a breach of security leading to the accidental or unlawful destruction, loss, alteration, unauthorized disclosure of, or access to, personal data. This includes breaches that are the result of both accidental and deliberate causes." />
                        </ListItem>
                    </List>
                </ListItem>
                <ListItem>
                    <ListItemText 
                        inset 
                        primary="9.	CHANGES TO THIS NOTICE" 
                        secondary="If we change the way We handle your Personal Data, we will update this Notice. We reserve the right to make changes to our practices and this Notice at any time, please check back frequently to see any updates or changes to our Notice." 
                    />
                </ListItem>
                <ListItem>
                    <ListItemText 
                        inset 
                        primary="10.	DATA CONTROLLER & CONTACT" 
                        secondary="Any question regarding this policy can be addressed to CYBERKACH at: (hello@cyberkach.com)" 
                    />
                </ListItem>
            </List>
        </section>
    );
}

export default PrivacyPolicy;
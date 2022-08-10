import React from 'react'
import { Box, Container, Typography, Stack } from '@mui/material'
import { Link } from 'react-scroll'
const Terms = () => {
    return (
        <Box>
            <Container maxWidth='md' sx={{ py: 10 }}>
                <Typography sx={{ fontSize: '26px', fontWeight: "600" }}>
                    Terms of Service
                </Typography>
                <Typography sx={{ fontSize: '16px', fontWeight: "600", mt: 5 }}>
                    Effective Date: August 2020
                </Typography>
                <Box sx={{ pt: 5 }}>
                    <Typography sx={{ fontSize: '22px', fontWeight: "600", pb: 3 }}>
                        Our mission
                    </Typography>
                    <Typography sx={{ mb: 3 }}>
                        Our mission at Ample AI is to empower citizen data scientists, data science practitioners and business users to harness the power of machine learning. We strongly believe that machine learning is capable of delivering business outcomes like improving customer experience, making data-driven decisions and operational efficiency benefiting the organization and its customers.
                    </Typography>
                    <Typography sx={{ mb: 3 }}>
                        Welcome to the Ample AI’s Terms of Service agreement. These Terms of Service (the “Terms”) govern your access to and use of our automated machine learning tools (the “AutoML Service”), software and platform (collectively the “Services”). Please review the following terms carefully. You acknowledge and agree that it is your responsibility to review these Terms of Service.
                    </Typography>
                    <Typography sx={{ mb: 3 }}>
                        By accessing or using the Services, you signify your agreement to be legally bound by these Terms of Service. If you do not agree to be bound by these Terms of Service in their entirety, you may not access or use the Services.
                    </Typography>
                    <Typography sx={{ mb: 3 }}>
                        As used in these Terms of Service, “we,” “us,” “our”, “ours” and “Ample AI” means the applicable contracting party Ample AI, and “you,” “your” or “yours” refer to you the user who agrees to be bound by these Terms and, if you access the Services on behalf of your organization, to that entity. If you are using the Services on behalf of an entity you represent and warrant that you are authorized to accept these Terms on such organization’s behalf and, by accepting these Terms, you are hereby binding such organization to the Terms.
                    </Typography>
                </Box>
                <Stack spacing={3}>
                    <Link style={{ cursor: 'pointer', fontWeight: 600 }} smooth={true} to="def">Definitions</Link>
                    <Link style={{ cursor: 'pointer', fontWeight: 600 }} smooth={true} to="elig">Eligibility</Link>
                    <Link style={{ cursor: 'pointer', fontWeight: 600 }} smooth={true} to="acc">Account Terms</Link>
                    <Link style={{ cursor: 'pointer', fontWeight: 600 }} smooth={true} to="del">Delivery of Services</Link>
                    <Link style={{ cursor: 'pointer', fontWeight: 600 }} smooth={true} to="rest">Restrictions</Link>
                    <Link style={{ cursor: 'pointer', fontWeight: 600 }} smooth={true} to="fee">Fees, Subscription Term and Payments</Link>
                    <Link style={{ cursor: 'pointer', fontWeight: 600 }} smooth={true} to="upg">Upgrades and Downgrades</Link>
                    <Link style={{ cursor: 'pointer', fontWeight: 600 }} smooth={true} to="sus">Suspension and Termination</Link>
                    <Link style={{ cursor: 'pointer', fontWeight: 600 }} smooth={true} to="lic">License</Link>
                    <Link style={{ cursor: 'pointer', fontWeight: 600 }} smooth={true} to="cha">Changes and Updates</Link>
                    <Link style={{ cursor: 'pointer', fontWeight: 600 }} smooth={true} to="licgr">License Grant</Link>
                    <Link style={{ cursor: 'pointer', fontWeight: 600 }} smooth={true} to="int">Intellectual Property</Link>
                    <Link style={{ cursor: 'pointer', fontWeight: 600 }} smooth={true} to="gov">Governing Law</Link>
                    <Link style={{ cursor: 'pointer', fontWeight: 600 }} smooth={true} to="lim">LIMITATION OF LIABILITY</Link>
                    <Link style={{ cursor: 'pointer', fontWeight: 600 }} smooth={true} to="warr">WARRANTY DISCLAIMER</Link>
                    <Link style={{ cursor: 'pointer', fontWeight: 600 }} smooth={true} to="gen">General Terms</Link>
                </Stack>
            </Container>
            <section id='def'>
                <Container maxWidth='md' sx={{ py: 4 }}>
                    <Typography sx={{ fontSize: 22, fontWeight: 600, mb: 3 }}>
                        Definitions
                    </Typography>
                    <Typography sx={{ mb: 3 }}>
                        <b>“Authorized Users”</b> means employees or agents of Customer selected by Customer to access and use the Services.
                    </Typography>
                    <Typography sx={{ mb: 3 }}>
                        <b>“Agreement”</b> means these Terms of Service and all materials referred or linked to in here.
                    </Typography>
                    <Typography sx={{ mb: 3 }}>
                        <b>“Billing Period”</b> means the period for which you agree to prepay fees under an Order Form, which will be the same as the Subscription Term as specified in the Order Form.
                    </Typography>
                    <Typography sx={{ mb: 3 }}>
                        <b>“Customer”</b> refers to an entity using the Services from Ample AI under the terms governed by an written agreement and under an Order Form
                    </Typography>
                    <Typography sx={{ mb: 3 }}>
                        <b>“Customer Data”</b> means the data made available by Customer and its Authorized Users for processing by, or use within, the Services.
                    </Typography>
                    <Typography sx={{ mb: 3 }}>
                        <b>“Contract”</b> refers to an written agreement between the Customer and Company permitting the use of the Services
                    </Typography>
                    <Typography sx={{ mb: 3 }}>
                        <b>“Order Form”</b> means an order form or similar agreement, including any exhibits or attachments thereto, for the provision of Ample AI Services, entered into by the parties and governed by these Terms and other such related signed  agreements.
                    </Typography>
                    <Typography sx={{ mb: 3 }}>
                        <b>“Site”</b> refers to the Ample AI website, developed, operated and maintained by us, which can be accessed at https://ample.ai or another designated URL.
                    </Typography>
                    <Typography sx={{ mb: 3 }}>
                        <b>“Services”</b> refers to our automated machine learning tools (the “AutoML Service”), applications, application programming interface (the “API”) and platform accessed via the Site, in which users can develop and deploy machine learning (“ML”) models with no code.
                    </Typography>
                    <Typography sx={{ mb: 3 }}>
                        <b>“Service Effective Date”</b> means the date the Services begin for you
                    </Typography>
                    <Typography sx={{ mb: 3 }}>
                        <b>“Subscription Fee”</b> means the amount you pay for the Services
                    </Typography>
                    <Typography sx={{ mb: 3 }}>
                        <b>“Subscription Service”</b> means all of the Services that you have subscribed to under an Order Form
                    </Typography>
                    <Typography sx={{ mb: 3 }}>
                        <b>“Subscription Term”</b> means the initial term of your subscription to the applicable Subscription Service, as specified on your Order Form(s), and each subsequent renewal term (if any). For Free Services, the Subscription Term will be the period during which you have an account to access the free Services.
                    </Typography>
                    <Typography sx={{ mb: 3 }}>
                        <b>“Ample AI”, “we,” “us,” or “our”</b> refers to the Ample AI as a contracting entity.
                    </Typography>
                    <Typography sx={{ mb: 3 }}>
                        <b>“You”, “your” or “Customer”</b> means the person or entity using the Subscription Service and identified in the applicable Ample AI Site account, billing statement, or Order Form as the customer.
                    </Typography>
                    <Typography sx={{ mb: 3 }}>
                        The following Terms of Service apply when you view, visit or use the Services via our website located at https://ample.ai and other designated URLs.
                    </Typography>
                </Container>
            </section>
            <section id='elig'>
                <Container maxWidth='md' sx={{ py: 4 }}>
                    <Typography sx={{ fontSize: 22, fontWeight: 600, mb: 3 }}>
                        Eligibility
                    </Typography>
                    <Typography sx={{ mb: 3 }}>
                        You can only use the Service if
                    </Typography>
                    <ol>
                        <li style={{ paddingBottom: 15 }}>you are of legal age (be at least eighteen (18) years old) and are otherwise fully competent to enter into the terms, contracts, conditions, obligations, representations, and warranties set forth in these Terms, and to abide by and comply with these Terms. If you are not of legal age and gain unauthorized access to the Service, access may be terminated without warning;</li>
                        <li style={{ paddingBottom: 15 }}>you register with the Site. You agree to keep your password confidential and will be responsible for all use of your account and password. We reserve the right to remove, reclaim, or change a username you select if we determine, in our sole discretion, that such username is inappropriate, obscene, or otherwise objectionable;</li>
                        <li style={{ paddingBottom: 15 }}>agree to these terms;</li>
                        <li style={{ paddingBottom: 15 }}>you are not located in a country embargoed by United States or other applicable law from receiving the Services, or are not on the U.S. Department of Commerce’s Denied Persons List or Entity List, or not on the U.S. Treasury Department’s list of Specially Designated Nationals.</li>
                    </ol>
                </Container>
            </section>

            <section id='acc'>
                <Container maxWidth='md' sx={{ py: 4 }}>
                    <Typography sx={{ fontSize: 22, fontWeight: 600, mb: 3 }}>
                        Account Terms
                    </Typography>
                    <Typography sx={{ mb: 3 }}>
                        By using the Site and Services, you represent and warrant that:
                    </Typography>
                    <ol>
                        <li style={{ paddingBottom: 15 }}>to access and use the Services, you must register for an Ample AI account (“Account”) by providing your full legal name, organization address you represent, phone number, a valid business email address, and any other information indicated as required. Ample AI reserves the right to reject your application for an Account, or cancel an existing Account, for any reason, in our sole discretion;</li>
                        <li style={{ paddingBottom: 15 }}>all registration information you submit will be true, accurate, current, and complete;</li>
                        <li style={{ paddingBottom: 15 }}>you will maintain the accuracy of such information and promptly update such registration information as necessary;</li>
                        <li style={{ paddingBottom: 15 }}>if you are a user who signs up for the Services on the Site, and created an Account which may include a unique username or business email  and a password to access the Services and to receive messages from Ample AI;</li>
                        <li style={{ paddingBottom: 15 }}>you agree to notify us immediately of any unauthorized use of your password and/or account;</li>
                        <li style={{ paddingBottom: 15 }}>Ample AI, its employees, agents, officers, directors, affiliates, consultants and partners will not be responsible for any liabilities, losses, or damages arising out of the unauthorized use of your member name, password and/or account;</li>
                        <li style={{ paddingBottom: 15 }}>you have the legal capacity and you agree to comply with these Terms and Conditions;</li>
                        <li style={{ paddingBottom: 15 }}>you will not access the Site and Services  through automated or non-human means, whether through a bot, script, or otherwise;</li>
                        <li style={{ paddingBottom: 15 }}>you will not use the Site and Services for any illegal or unauthorized purpose;</li>
                        <li style={{ paddingBottom: 15 }}>your use of the Site and Services will not violate any applicable law or regulation.</li>
                    </ol>
                    <Typography sx={{ mb: 3 }}>If you provide any information that is untrue, inacxcurate, not current, or incomplete, we have the right to suspend or terminate your account and refuse any and all current or future use of the Site and Services (or any portion thereof).</Typography>
                </Container>
            </section>
            <section id='del'>
                <Container maxWidth='md' sx={{ py: 4 }}>
                    <Box>
                        <Typography sx={{ fontSize: '22px', fontWeight: "600" }}>
                            Delivery of Services
                        </Typography>

                        <Box sx={{ mt: 5 }}>
                            <Typography sx={{ fontSize: '16px', fontWeight: 600, mb: 3 }}>
                                Access to the Services
                            </Typography>
                            <Typography>
                                During the Subscription Term, we will provide you and your Authorized Users access to use the Subscription Service as described in this Agreement and the applicable Order Form. We may provide some or all elements of the Subscription Service through third party service providers or open source frameworks. Your Authorized Users may access and use the Subscription Service provided that, all such access, use and receipt by the Authorized Users is subject to and in compliance with the Agreement and you shall at all times remain liable for the Authorized Users’ compliance with the Agreement.
                            </Typography>
                        </Box>
                        <Box sx={{ mt: 5 }}>
                            <Typography sx={{ fontSize: '16px', fontWeight: 600, mb: 3 }}>
                                Additional Features
                            </Typography>
                            <Typography>
                                You may subscribe to additional features of the Subscription Service by placing an additional Order Form or activating the additional features from within your Ample AI account (if this option is made available by us.). This Agreement will apply to all additional Order Form(s) and all additional features that you purchase or activate from within your Ample AI account.
                            </Typography>
                        </Box>
                        <Box sx={{ mt: 5 }}>
                            <Typography sx={{ fontSize: '16px', fontWeight: 600, mb: 3 }}>
                                Services Uptime
                            </Typography>
                            <Typography sx={{ mb: 3 }}>
                                We will use commercially reasonable efforts to offer a service uptime for our Subscription Service in a given calendar month. All availability calculations will be based on our system records. Customer’s sole and exclusive remedy for failure to meet availability or support commitments, in the event there are three (3) or more consecutive calendar months during which the service uptime falls below the committed uptime, Customer will be entitled to receive a credit equal to the prorated amount of fees applicable to the downtime as measured within three (3) or more consecutive calendar months during which the Service Uptime fell below committed uptime, the credit shall be applied against an invoice or fees for the following renewal Subscription Term, provided Customer requests such credit within fifteen (15) days of the end of the relevant calendar month. The ‘Services Uptime’ section does not apply to any of our free Services.
                            </Typography>
                            <Typography sx={{ mb: 3 }}>
                                Following exclusions apply to Services Uptime commitment:
                            </Typography>
                            <ol>
                                <li style={{ paddingBottom: 15 }}>Unavailability caused by circumstances beyond our reasonable control, including, without limitation, act of God, acts of government, emergencies, natural disasters, flood, fire, civil unrest or acts of terror;</li>
                                <li style={{ paddingBottom: 15 }}>Interruptions or delays in providing the service resulting from telecommunications or internet service provider failures; </li>
                                <li style={{ paddingBottom: 15 }}>Any interruption or unavailability resulting from the misuse or improper use of the Services.</li>
                            </ol>
                        </Box>
                        <Box sx={{ mt: 5 }}>
                            <Typography sx={{ fontSize: '16px', fontWeight: 600, mb: 3 }}>
                                Customer Data
                            </Typography>
                            <Typography>
                                You retain all ownership rights in Customer Data. Notwithstanding the foregoing, you acknowledge and agree that Ample AI may collect usage data regarding your Authorized Users use of the Subscription Services and that such usage data may occasionally contain input provided by an Authorized User (e.g., it may contain the queries entered by an Authorized User) but will not contain Customer Data or Customer results. Ample AI will not share or publicly make available any Usage Data that identifies Customer, or any of its Authorized Users.
                            </Typography>
                        </Box>
                        <Box sx={{ mt: 5 }}>
                            <Typography sx={{ fontSize: '16px', fontWeight: 600, mb: 3 }}>
                                Protecting Customer Data
                            </Typography>
                            <Typography>
                                The protection of Customer Data is a top priority for us. We shall maintain administrative, physical, technical and other commercially reasonable safeguards. Those safeguards will include measures for preventing unauthorized access, use, modification, deletion and disclosure of Customer Data by our personnel. We do not share Customer Data with any of our third party service providers. Customer is solely responsible for adequate security, protection and backup of Customer Data when in Customer’s or its representatives’ possession or control. We are not responsible for what Customer’s Authorized Users do with Customer Data.
                            </Typography>
                        </Box>
                        <Box sx={{ mt: 5 }}>
                            <Typography sx={{ fontSize: '16px', fontWeight: 600, mb: 3 }}>
                                Feedback
                            </Typography>
                            <Typography>
                                If you offer feedback to Ample AI, Customer hereby grants Ample AI (for itself and all of its Authorized Users and other Customer agents and employees)  an unlimited, perpetual, irrevocable, royalty‑free, fully‑paid, sublicensable, assignable, non‑exclusive, worldwide license to use or incorporate into the Ample AI Services any such feedback, comments, suggestions, communications, and requests for improvements or enhancements or any other purpose relating to the Site and the Services without any obligation to Customer.
                            </Typography>
                        </Box>

                    </Box>
                </Container>
            </section>

            <section id='rest'>
                <Container maxWidth='md' sx={{ py: 4 }}>
                    <Typography sx={{ fontSize: 22, fontWeight: 600, mb: 3 }}>
                        Restrictions
                    </Typography>
                    <Typography sx={{ mb: 3 }}>
                        You represent and warrant that you will comply with all laws and regulations applicable to your use of the Services.
                    </Typography>
                    <Typography sx={{ mb: 3 }}>
                        You shall not (and shall not permit your Authorized Users to):
                    </Typography>
                    <ol>
                        <li style={{ paddingBottom: 15 }}>access the Service for any reason other than to conduct normal business operations of the Customer solely as permitted by the normal functionality of the Services;</li>
                        <li style={{ paddingBottom: 15 }}>you may not purchase, use, or access the Services for the purpose of building a competitive product or service or for any other competitive purposes;</li>
                        <li style={{ paddingBottom: 15 }}>collect or harvest any personal data of any user of the Site or the Services;</li>
                        <li style={{ paddingBottom: 15 }}>use the Site or the Services for the solicitation of business in the course of trade or in connection with a commercial enterprise;</li>
                        <li style={{ paddingBottom: 15 }}>distribute any part or parts of the Site or the Services without our explicit written permission (we grant the operators of public search engines permission to use spiders to copy materials from the site for the sole purpose of creating publicly-available searchable indices but retain the right to revoke this permission at any time on a general or specific basis);</li>
                        <li style={{ paddingBottom: 15 }}>use the Services for any unlawful purpose or for the promotion of illegal activities;</li>
                        <li style={{ paddingBottom: 15 }}>attempt to, or harass, abuse or harm another person or group;</li>
                        <li style={{ paddingBottom: 15 }}>use another user’s account without permission;</li>
                        <li style={{ paddingBottom: 15 }}>intentionally allow another user to access your account;</li>
                        <li style={{ paddingBottom: 15 }}>provide false or inaccurate information when registering an account;</li>
                        <li style={{ paddingBottom: 15 }}>interfere or attempt to interfere with the proper functioning of the Services;</li>
                        <li style={{ paddingBottom: 15 }}>make any automated use of the Site, the Services or the related systems, or take any action that we deem to impose or to potentially impose an unreasonable or disproportionately large load on our servers or network infrastructure;</li>
                        <li style={{ paddingBottom: 15 }}>bypass any robot exclusion headers or other measures we take to restrict access to the Services, or use any software, technology, or device to scrape, spider, or crawl the Services or harvest or manipulate data; </li>
                        <li style={{ paddingBottom: 15 }}>circumvent, disable or otherwise interfere with any security-related features of the Services or features that prevent or restrict use or copying of content, or enforce limitations on use of the Services or the content accessible via the Services; or </li>
                        <li style={{ paddingBottom: 15 }}>publish or link to malicious content of any sort, including that intended to damage or disrupt another user’s browser or computer;</li>
                        <li style={{ paddingBottom: 15 }}>copy, modify, disassemble, decompile, reverse engineer, or attempt to view or discover the source code of the Ample AI Services, in whole or in part, or permit or authorize a third party to do so, except to the extent such activities are expressly permitted by these Terms or by law notwithstanding this prohibition;</li>
                        <li style={{ paddingBottom: 15 }}>sell, resell, license, sublicense, distribute, rent, lease, or otherwise provide access to the Ample AI Services to any third party except to the extent explicitly authorized in writing by Ample AI;</li>
                        <li style={{ paddingBottom: 15 }}>use the Ample AI Services to develop or offer a service made available to any third party that could reasonably be seen to serve as a substitute for such third party’s possible subscription to any Ample AI platform, product or service;</li>
                        <li style={{ paddingBottom: 15 }}>transfer or assign any of your rights hereunder; or</li>
                        <li style={{ paddingBottom: 15 }}>during any free trial period granted by Ample AI, including during the use of any pre-released service, use the Ample AI Services for any purpose other than to evaluate the desirability of entering into a paid subscription to the Ample AI Services (in which case we reserve the right to charge you for such use at our standard pricing).</li>
                    </ol>
                </Container>
            </section>

            <section id='fee'>
                <Container maxWidth='md' sx={{ py: 4 }}>
                    <Typography sx={{ fontSize: '22px', fontWeight: "600" }}>
                        Fees, Subscription Term and Payments
                    </Typography>

                    <Box sx={{ mt: 5 }}>
                        <Typography sx={{ fontSize: '16px', fontWeight: 600, mb: 3 }}>
                            Fees
                        </Typography>
                        <Typography>
                            Our services are available on a subscription basis. Your subscription will automatically renew based on your subscription, charged to the credit card last used by you or we may send you an invoice. We reserve the right to change the subscription fee and renewal terms. You will pay all fees specified in the Order Form.
                        </Typography>
                    </Box>
                    <Box sx={{ mt: 5 }}>
                        <Typography sx={{ fontSize: '16px', fontWeight: 600, mb: 3 }}>
                            Subscription
                        </Typography>
                        <ol>
                            <li style={{ paddingBottom: 15 }}>Ample AI offers free subscription term with limited features for the Services;</li>
                            <li style={{ paddingBottom: 15 }}>A free subscription continues until terminated;</li>
                            <li style={{ paddingBottom: 15 }}>Paid subscription has a term that may expire or be terminated;</li>
                            <li style={{ paddingBottom: 15 }}>Subscription Term is for a period of twelve (12) months or longer as agreed upon on the Order Form;</li>
                            <li style={{ paddingBottom: 15 }}>The Subscription Fee will remain fixed during the Subscription Term unless you upgrade to a higher subscription plan.</li>
                        </ol>
                    </Box>
                    <Box sx={{ mt: 5 }}>
                        <Typography sx={{ fontSize: '16px', fontWeight: 600, mb: 3 }}>
                            Payments
                        </Typography>
                        <ol>
                            <li style={{ paddingBottom: 15 }}>Billing frequency will be annual or twelve (12) months or longer as agreed upon on the Order Form;</li>
                            <li style={{ paddingBottom: 15 }}>The paid subscription is not refunded if you terminate your subscription without cause;</li>
                            <li style={{ paddingBottom: 15 }}>
                                Payment by credit card
                                <Typography sx={{ mt: 2 }}>If you are paying by credit card, you authorize us to charge your credit card or bank account for all fees payable during the Subscription Term. You further authorize us to use a third party to process payments, and consent to the disclosure of your payment information to such third party solely for the purpose of processing payments due to us;</Typography>
                            </li>
                            <li style={{ paddingBottom: 15 }}>
                                Payment for an invoice
                                <Typography sx={{ mt: 2 }}>If you are paying by invoice, we will invoice you no more than forty-five (45) days before the beginning of the Subscription Term and each subsequent Billing Period. All amounts invoiced are due and payable within thirty (30) days from the date of the invoice, unless otherwise specified in the Order Form;</Typography>
                            </li>
                            <li style={{ paddingBottom: 15 }}>
                                Payment Information
                                <Typography sx={{ mt: 2 }}>You agree to keep your contact information, billing information and credit card information (where applicable) up to date.  All fees are due and payable in advance throughout the Subscription Term. All amounts paid are non-refundable, except as specifically provided for in this Agreement;</Typography>
                            </li>
                            <li style={{ paddingBottom: 15 }}>All fees are exclusive of taxes. You agree to pay any taxes applicable to your use of the Subscription Service.</li>
                        </ol>
                    </Box>
                </Container>
            </section>

            <section id='upg'>
                <Container maxWidth='md' sx={{ py: 4 }}>
                    <Typography sx={{ fontSize: 22, fontWeight: 600, mb: 3 }}>
                        Upgrades and Downgrades
                    </Typography>
                    <ol>
                        <li style={{ paddingBottom: 15 }}>For any upgrade or downgrade, new fees will be charged based on the current prevailing Ample AI fees for the Services as solely determined by Ample AI;</li>
                        <li style={{ paddingBottom: 15 }}>There will not be any pro rating or refund in case of an downgrade during the Billing Period;</li>
                        <li style={{ paddingBottom: 15 }}>Downgrading of Services may result in loss of features provided by the Services. Ample AI is not responsible and does not accept any liability for such loss.</li>
                    </ol>
                </Container>
            </section>

            <section id='sus'>
                <Container maxWidth='md' sx={{ py: 4 }}>
                    <Typography sx={{ fontSize: 22, fontWeight: 600, mb: 3 }}>
                        Suspension and Termination
                    </Typography>
                    <ol>
                        <li style={{ paddingBottom: 15 }}>Either party can give the other notice of non-renewal at least thirty (30) days before the end of a Subscription Term to stop the subscriptions from automatically renewing;</li>
                        <li style={{ paddingBottom: 15 }}>Such non-renewal or termination will result in the deactivation or disablement of your account and access to it, and the deletion of Customer Data you uploaded through use of the Services;</li>
                        <li style={{ paddingBottom: 15 }}>You agree to pay any fees payable to Ample AI for the period prior to the effective date of termination;</li>
                        <li style={{ paddingBottom: 15 }}>If you provide us notice of non-renewal or terminate a Subscription Service in the middle of a billing period, you will not receive a refund unless you are terminating these Terms for any of the following reasons: (a) we have materially breached these Terms and failed to address that breach within 30 days after you have so notified us in writing; (b) a refund is required by law; or (c) we, in our sole discretion, determine a refund is appropriate;</li>
                        <li style={{ paddingBottom: 15 }}>If this Agreement is terminated by you in accordance with this section, we will refund You any prepaid fees covering the remainder of the Subscription Term after the effective date of termination;</li>
                        <li style={{ paddingBottom: 15 }}>We will not issue a refund unless the termination is due to our material, unaddressed breach or a refund is required by law;</li>
                        <li style={{ paddingBottom: 15 }}>We may terminate your Subscription Service at the end of a billing period by providing no less than thirty (30) day prior written notice to you. Ample AI may terminate your Subscription Service for any reason by providing at least sixty (60) days written notice to you and will provide a pro rata refund for any period of time you did not use in that billing period;</li>
                        <li style={{ paddingBottom: 15 }}>We may limit, suspend, or terminate the Services to you: (a) if you fail to comply with these Terms; or (b) if you use the Services in a way that causes legal liability to us or disrupts others’ use of the Services.</li>
                    </ol>
                </Container>
            </section>

            <section id='lic'>
                <Container maxWidth='md' sx={{ py: 4 }}>
                    <Typography sx={{ fontSize: 22, fontWeight: 600, mb: 3 }}>
                        License
                    </Typography>
                    <Typography sx={{ mb: 3 }}>
                        You acknowledge and agree that we own and continue to own our Services including all related intellectual property rights of any kind related to the Site and Services in its entirety. We may make software components available, through our Site, as part of the Services. We grant to Customer a non-sublicensable, non-transferable, non-exclusive, limited license for Customer and its Authorized Users to use the object code version of these Services, but solely as necessary to use the Services and in accordance with the Terms.
                    </Typography>
                </Container>
            </section>

            <section id='cha'>
                <Container maxWidth='md' sx={{ py: 4 }}>
                    <Typography sx={{ fontSize: 22, fontWeight: 600, mb: 3 }}>
                        Changes and Updates
                    </Typography>
                    <Typography sx={{ mb: 3 }}>
                        We may change these Terms at any time for any reason, such as to reflect changes in applicable law or updates to Services, and to account for new Services or functionality. If an amendment is material, as determined by our sole discretion, we will notify you by email. The most up-to-date version of these Terms will be posted on our website at https://ample.ai/legal, and as and when we make any changes, we will update the effective date at the top of the Terms of Service page. We recommend that you check back periodically for any changes.
                    </Typography>
                    <Typography sx={{ mb: 3 }}>
                        We may constantly change and improve our Services. We may add, update, or remove functionality from the Ample AI platform provided to you at any time without prior notice. We may also limit, suspend, or discontinue functionality from Ample AI platform provided to you at our discretion. If we discontinue Ample AI platform functionality, we will give you a reasonable advance notice.
                    </Typography>
                </Container>
            </section>

            <section id='licgr'>
                <Container maxWidth='md' sx={{ py: 4 }}>
                    <Typography sx={{ fontSize: 22, fontWeight: 600, mb: 3 }}>
                        License Grant
                    </Typography>
                    <Typography sx={{ mb: 3 }}>
                        By posting any user content via the Services, you expressly grant, and you represent and warrant that you have a right to grant, to the Company a royalty-free, sublicensable, transferable, perpetual, irrevocable, non-exclusive, worldwide license to use, reproduce, modify, publish, list information regarding, edit, translate, distribute, publicly perform, publicly display, and make derivative works of all such user content and your name, voice, and/or likeness as contained in your user content, if applicable, in whole or in part, and in any form, media or technology, whether now known or hereafter developed, for use in connection with the Services.
                    </Typography>
                </Container>
            </section>

            <section id='int'>
                <Container maxWidth='md' sx={{ py: 4 }}>
                    <Typography sx={{ fontSize: 22, fontWeight: 600, mb: 3 }}>
                        Intellectual Property
                    </Typography>
                    <Typography sx={{ mb: 3 }}>
                        You acknowledge and agree that we retain ownership of all intellectual property rights of any kind related to the Site and Services in its entirety, including applicable copyrights, trademarks and other proprietary rights. All text, graphics, photographs, trademarks, logos, icons, user interfaces, sounds, music, videos, artwork, software and computer code (collectively, <b>“Content”</b>), including but not limited to the user experience, layout, design, color scheme, selection and arrangement of the Content present on the Site is owned by or licensed to us. Such Content is protected by copyright and trademark laws.
                    </Typography>
                    <Typography sx={{ mb: 3 }}>
                        As between Ample AI and you, all rights, title, and interest in and to all intellectual property rights in the Ample AI platform are owned exclusively by Ample AI notwithstanding any other provision in these Terms of Service. Except as otherwise expressly provided in these Terms of Service, Ample AI reserves all rights in the Ample AI platform and does not grant you any rights, express or implied
                    </Typography>
                    <Typography sx={{ mb: 3 }}>
                        Other product and company names that are mentioned on the Services may be trademarks of their respective owners. We reserve all rights that are not expressly granted to you under these Terms of Service.
                    </Typography>
                </Container>
            </section>

            <section id='gov'>
                <Container maxWidth='md' sx={{ py: 4 }}>
                    <Typography sx={{ fontSize: 22, fontWeight: 600, mb: 3 }}>
                        Governing Law
                    </Typography>
                    <Typography sx={{ mb: 3 }}>
                        These Terms of Service and your use of the Site are governed by the federal laws of the United States of America and the laws of the State of California, without regard to conflict of law provisions.
                    </Typography>
                    <Typography sx={{ mb: 3 }}>
                        If any part of this Terms of Service agreement is held or found to be invalid or unenforceable, that portion of the agreement will be construed as to be consistent with applicable law while the remaining portions of the agreement will remain in full force and effect. Any failure on our part to enforce any provision of this agreement will not be considered a waiver of our right to enforce such provision. Our rights under this agreement survive any transfer or termination of this agreement.
                    </Typography>
                </Container>
            </section>

            <section id='lim'>
                <Container maxWidth='md' sx={{ py: 4 }}>
                    <Typography sx={{ fontSize: 22, fontWeight: 600, mb: 3 }}>
                        LIMITATION OF LIABILITY
                    </Typography>
                    <Typography sx={{ mb: 3 }}>
                        TO THE EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL THE SITE, THE SERVICES, ITS AFFILIATES, DIRECTORS, OFFICERS, AGENTS OR EMPLOYEES, OR ITS LICENSORS OR PARTNERS, BE LIABLE TO YOU FOR ANY LOSS OF PROFITS, USE,  OR DATA, OR FOR ANY INCIDENTAL, INDIRECT, SPECIAL, CONSEQUENTIAL OR EXEMPLARY DAMAGES, HOWEVER ARISING, THAT RESULT FROM: (A) THE USE, DISCLOSURE, OR DISPLAY OF YOUR USER CONTENT; (B) YOUR USE OR INABILITY TO USE THE SERVICES; (C) THE SERVICES GENERALLY OR THE SOFTWARE OR SYSTEMS THAT MAKE THE SERVICES AVAILABLE; OR (D) ANY OTHER INTERACTIONS WITH USE OR WITH ANY OTHER USER OF THE SERVICES, WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE) OR ANY OTHER LEGAL THEORY, AND WHETHER OR NOT WE HAVE BEEN INFORMED OF THE POSSIBILITY OF SUCH DAMAGE, AND EVEN IF A REMEDY SET FORTH HEREIN IS FOUND TO HAVE FAILED OF ITS ESSENTIAL PURPOSE. IN ANY CASE, AMPLE AI, ITS AFFILIATES’, DIRECTORS, OFFICERS, AGENTS AND EMPLOYEES MAXIMUM CUMULATIVE LIABILITY AND YOUR EXCLUSIVE REMEDY FOR ANY CLAIMS ARISING OUT OF OR RELATED TO THIS AGREEMENT WILL NOT EXCEED THE LESSER OF (A) THE AMOUNT ACTUALLY PAID BY YOU FOR THE SERVICES (IF ANY) IN THE TWELVE (12) MONTHS PRECEDING THE EVENT OR CIRCUMSTANCES GIVING RISE TO SUCH CLAIMS AND (B) US$100. SOME JURISDICTIONS LIMIT OR DO NOT PERMIT DISCLAIMERS OF LIABILITY, SO THIS PROVISION MAY NOT APPLY TO YOU.
                    </Typography>
                </Container>
            </section>

            <section id='warr'>
                <Container maxWidth='md' sx={{ py: 4 }}>
                    <Typography sx={{ fontSize: 22, fontWeight: 600, mb: 3 }}>
                        WARRANTY DISCLAIMER
                    </Typography>
                    <Typography sx={{ mb: 3 }}>
                        THE SERVICE, IS PROVIDED “AS IS,” WITHOUT WARRANTY OF ANY KIND. WITHOUT LIMITING THE FOREGOING, WE EXPRESSLY DISCLAIM ALL WARRANTIES, WHETHER EXPRESS, IMPLIED OR STATUTORY, REGARDING THE SERVICE INCLUDING WITHOUT LIMITATION ANY WARRANTY OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, SECURITY, ACCURACY AND NON-INFRINGEMENT. WITHOUT LIMITING THE FOREGOING, WE MAKE NO WARRANTY OR REPRESENTATION THAT ACCESS TO OR OPERATION OF THE SERVICES WILL BE UNINTERRUPTED OR ERROR FREE. YOU ASSUME FULL RESPONSIBILITY AND RISK OF LOSS RESULTING FROM YOUR DOWNLOADING AND/OR USE OF FILES, INFORMATION, CONTENT OR OTHER MATERIAL OBTAINED FROM THE SERVICES. SOME JURISDICTIONS LIMIT OR DO NOT PERMIT DISCLAIMERS OF WARRANTY, SO THIS PROVISION MAY NOT APPLY TO YOU
                    </Typography>
                </Container>
            </section>

            <section id='gen'>
                <Container maxWidth='md' sx={{ py: 4 }}>
                    <Typography sx={{ fontSize: 22, fontWeight: 600, mb: 3 }}>
                        General Terms
                    </Typography>
                    <Box sx={{ mt: 5 }}>
                        <Typography sx={{ fontSize: '16px', fontWeight: 600, mb: 3 }}>
                            Links To Other Sites And/Or Materials
                        </Typography>
                        <Typography>
                            As part of the Service, we may provide you with convenient links to third party website(s) (“Third Party Sites”) as well as content or items belonging to or originating from third parties (the “Third Party Applications, Software or Content”). These links are provided as a courtesy to Services subscribers. We have no control over Third Party Sites or Third Party Applications, Software or Content or the promotions, materials, information, goods or services available on these Third Party Sites or Third Party Applications, Software or Content. Such Third Party Sites and Third Party Applications, Software or Content are not investigated, monitored or checked for accuracy, appropriateness, or completeness, and we are not responsible for any Third Party Sites accessed through the Site or any Third Party Applications, Software or Content posted on, available through or installed from the Site, including the content, accuracy, offensiveness, opinions, reliability, privacy practices or other policies of or contained in the Third Party Sites or the Third Party Applications, Software or Content.
                        </Typography>
                    </Box>
                    <Box sx={{ mt: 5 }}>
                        <Typography sx={{ fontSize: '16px', fontWeight: 600, mb: 3 }}>
                            Copyright Complaints
                        </Typography>
                        <Typography sx={{ mb: 3 }}>
                            Termination of Repeat Infringer Accounts
                        </Typography>
                        <Typography>
                            We respect the intellectual property rights of others and require that the users do the same. Pursuant to 17 U.S.C. 512(i) of the United States Copyright Act, we have adopted and implemented a policy that provides for the termination in appropriate circumstances of users of the Services who are repeat infringers. We may terminate access for participants or users who are found repeatedly to provide or upload protected third party content without necessary rights and permissions.
                        </Typography>
                    </Box>
                    <Box sx={{ mt: 5 }}>
                        <Typography sx={{ fontSize: '16px', fontWeight: 600, mb: 3 }}>
                            Email May Not Be Used To Provide Notice
                        </Typography>
                        <Typography>
                            Communications made through the Service’s email and messaging system will not constitute legal notice to the Site, the Services, or any of its officers, directors, employees, agents or representatives in any situation where legal notice is required by contract or any law or regulation.
                        </Typography>
                    </Box>
                    <Box sx={{ mt: 5 }}>
                        <Typography sx={{ fontSize: '16px', fontWeight: 600, mb: 3 }}>
                            User Consent To Receive Communications In Electronic Form
                        </Typography>
                        <Typography>
                            For contractual purposes, you: (a) consent to receive communications from us in an electronic form via the email address you have submitted; and (b) agree that all Terms of Service, agreements, notices, disclosures, and other communications that we provide to you electronically satisfy any legal requirement that such communications would satisfy if it were in writing. The foregoing does not affect your non-waivable rights.YOU ACKNOWLEDGE THAT YOU HAVE READ THESE TERMS OF SERVICE, UNDERSTAND THE TERMS OF SERVICE, AND WILL BE BOUND BY THESE TERMS AND CONDITIONS. YOU FURTHER ACKNOWLEDGE THAT THESE TERMS OF SERVICE TOGETHER WITH THE PRIVACY POLICY AT HTTP://AMPLE.AI/LEGAL REPRESENT THE COMPLETE AND EXCLUSIVE STATEMENT OF THE AGREEMENT BETWEEN US AND THAT IT SUPERSEDES ANY PROPOSAL OR PRIOR AGREEMENT ORAL OR WRITTEN, AND ANY OTHER COMMUNICATIONS BETWEEN US RELATING TO THE SUBJECT MATTER OF THIS AGREEMENT.
                        </Typography>
                    </Box>
                </Container>
            </section>
        </Box>
    )
}

export default Terms
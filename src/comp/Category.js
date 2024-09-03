import FilteringOfLeads from "../SIPLoans/FilteringOfLeads";
import catergoyImg from '../images/frontImg.jpg'
import CampaignGuidelinesImg from '../images/IMG_6590.png'
import OurCustomerImg from '../images/IMG_6595.png'
import PerformanceImg from '../images/IMG_6627.png'
import TeamImages from '../images/20240708_151210.jpg'
import salesSupportCenter from '../images/CategoryImages/20240708_152342.jpg'
import TrainingImg from '../images/CategoryImages/IMG_1361.jpg'

export const CategoryOBJ = [
    {
        title: "Advisories",
        imgSrc: catergoyImg,
        desc: "Stay informed with our advisory updates, providing essential information and guidance on our current developments",
        HaveContent: false,
        subCater: [
            {
                title: "Credit Cards", link: "/under-development",
                SemiCatP: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.  suscipit animi natus porro error repellendus. Sit, molestiae?',
            },
            {
                title: "Personal Loans", link: "/under-development",
                SemiCatP: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.  suscipit animi natus porro error repellendus. Sit, molestiae?',

            },
            {
                title: "SIP Loans", link: "/under-development",
                SemiCatP: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.  suscipit animi natus porro error repellendus. Sit, molestiae?',

            }
        ]
    },
    {
        title: "Campaign Guidelines",
         imgSrc: CampaignGuidelinesImg,
        desc: "Navigate your campaign with confidence using our comprehensive guidelines, offering strategic insights and practical advice.",
        HaveContent: true,
        subCater: [
            {
                title: "Credit Cards",
                content: [
                    { title: "Filtering of Leads", link: "/campaign/filtering-of-leads" },
                    { title: "Call Flow and Spiels", link: "/campaign/call-flow-and-spiels" },
                    { title: "Documentation", link: "/campaign/documentation" },
                    { title: "Exception of Handling", link: "/campaign/exception-handling" },
                ]
            },
            {
                title: "Personal Loans",
                content: [
                    { title: "Filtering of Leads", link: "/personal-loan/filtering-of-leads" },
                    { title: "Call Flow and Spiels", link: "/personal-loan/call-flow-and-spiels" },
                    { title: "Other Guidelines for DocuSign", link: "/personal-loan/other-guidlines-for-docusign" },
                    { title: "Documentation", link: "/personal-loan/documentation" },
                    { title: "Exception of Handling", link: "/personal-loan/exception-handling" },
                ]
            },
            {
                title: "SIP Loans",
                content: [
                    { title: "Filtering of Leads", link: "/SIP-loan/filtering-of-leads" },
                    { title: "Call Flow and Spiels", link: "/SIP-loan/call-flow-and-spiels" },
                    { title: "Documentation", link: "/SIP-loan/documentation" },
                    { title: "Exception of Handling", link: "/SIP-loan/exception-handling" },
                    { title: "Processing of Applications", link: "/SIP-loan/prcessing-of-applications" },
                ]
            }
        ]
    },


    {
        title: "Our Customer",
         imgSrc: OurCustomerImg,
        desc: "Our valued customers. We prioritize your needs, ensuring a seamless experience and personalized solutions every step of the way.",
        HaveContent: false,
        subCater: [
            { title: "Different Personas", link: "/under-development" },
            { title: "Competitor Analysis", link: "/under-development" },
            { title: "Competitor Products", link: "/under-development" },
            { title: "Key Differentiators", link: "/under-development" },
        ]
    },

    {
        title: "Performance",
         imgSrc: PerformanceImg,
         desc: 'Stay updated with our sales performance metrics, providing key insights into our sales activities, achievements, and areas for improvement. Monitor progress and drive excellence with our detailed performance reports.',
        HaveContent: false,
        subCater: [
            { title: "Sales Reports", link: "/under-development" },
            { title: "MIS", link: "/under-development" },
            { title: "Quality Monitoring Corner", link: "/under-development" },
            { title: "QM Guidelines", link: "/under-development" },
            { title: "Top QM Performers", link: "/under-development" },
            { title: "QM Grades", link: "/under-development" },
            { title: "Commendations", link: "/under-development" },
        ]
    },
    {
        title: "Team Updates",
         imgSrc: TeamImages,
        desc: "Keep track of the latest updates within your team, including team accomplishments, and important announcements. Stay connected and informed about the people driving our sales success.",
        HaveContent: false,
        subCater: [
            { title: "Table of Organization", link: "/under-development" },
            { title: "Top Performers", link: "/under-development" },
            { title: "Events", link: "/under-development" },
        ]
    },
    {
        title: "Sales Support Corner",
         imgSrc: salesSupportCenter,
        desc: "Discover valuable resources and support from our dedicated sales support team. Access tools, advisories tips, and assistance to enhance your sales strategies and streamline your processes for optimal performance.",
        HaveContent: false,
        subCater: [
            { title: "Announcements", link: "/under-development" },
            { title: "Transmittal and Assignment Process", link: "/under-development" },
            { title: "Validation Process", link: "/under-development" },
            { title: "Guide to Handling Verifs", link: "/under-development" },
            { title: "Guide to Handling Deficiencies", link: "/under-development" },
        ]
    },
    {
        title: "Training",
         imgSrc: TrainingImg,
        desc: "Empower your self with our specialized training programs, designed to enhance skills and foster professional growth the UTS way.",
        HaveContent: false,
        subCater: [
            { title: "Supported Products", link: "/under-development" },
            { title: "Credit Cards", link: "/under-development" },
            { title: "SIP Loans", link: "/under-development" },
            { title: "Personal Loan", link: "/under-development" },
            { title: "Deposit Products", link: "/under-development" },
            { title: "Other Bank Products", link: "/under-development" },
            { title: "Handling Objections", link: "/under-development" },
            { title: "Sales Tips for the Month", link: "/under-development" },
            { title: "FAQS", link: "/under-development" },
        ]
    },
];


export const innerContent = [
    {
        Category: 'Campaign Guidelines',
        SemiCat: 'Credit Cards',
        title: "Filtering of Leads", //
        content: [
            { title: "Check name and birth date of client. Exclude the following", link: "/campaign/filtering-of-leads" },
            { title: "Check Cardlink (PCNL, PCIC, PCCP and PCUS). Exclude the following", link: "/campaign/filtering-of-leads" },
            { title: "Check RM record in Salesforce.", link: "/campaign/filtering-of-leads" },
            { title: "Check if client is a Unibanker (N/Q - Unibanker and all other BPI subsidiaries such BPI MS/BPLAC/BFB/BPI Direct Banko)", link: "/campaign/filtering-of-leads" },
            { title: "Exclude clients with invalid number or no contact number", link: "/campaign/filtering-of-leads" },
            { title: "Check if client has existing application in CCFES", link: "/campaign/filtering-of-leads" },
            { title: "Check if with application from previous campaign (Not Qualified)", link: "/campaign/filtering-of-leads" },
            { title: "Filtering of Leads: SMS - Credit Card Campaign", link: "/campaign/filtering-of-leads" },
            { title: "Sample SMS", link: "/campaign/filtering-of-leads" },
            { title: "Reminders", link: "/campaign/filtering-of-leads" },
        ]
    },
    {
        Category: 'Campaign Guidelines',
        SemiCat: 'Credit Cards',
        title: "Call Flow And Spiels",
        content: [
            { title: "OPENING SPIEL", link: "/campaign/call-flow-and-spiels" },
            { title: "OUTBOUND", link: "/campaign/call-flow-and-spiels" },
            { title: "INBOUND", link: "/campaign/call-flow-and-spiels" },
           
            { title: "PURPOSE OF CALL", link: "/campaign/call-flow-and-spiels" },
            { title: "Data Privacy Spiel", link: "/campaign/call-flow-and-spiels" },            { title: "WARM CALLS", link: "/campaign/call-flow-and-spiels" },
            { title: "Client Initiated Request via Coffee Break", link: "/campaign/call-flow-and-spiels" },

          
            { title: "Client Initiated Request [e.g. SMS]", link: "/campaign/call-flow-and-spiels" },
            { title: "Branch Positive Leads", link: "/campaign/call-flow-and-spiels" },
            { title: "INBOUND CALLS", link: "/campaign/call-flow-and-spiels" },
           
            { title: "COLD CALLS", link: "/campaign/call-flow-and-spiels" },
            { title: "ITA for Loans", link: "/campaign/call-flow-and-spiels" },
            { title: "PQ CAMPAIGN", link: "/campaign/call-flow-and-spiels" },
            { title: "PROBING/SEGUE SPIELS", link: "/campaign/call-flow-and-spiels" },
            { title: "OPT-IN/OPT-OUT", link: "/campaign/call-flow-and-spiels" },
            { title: "CONFIRMATION OF PENDING APPLICATION", link: "/campaign/call-flow-and-spiels" },
            { title: "Product Presentation", link: "/campaign/call-flow-and-spiels" },
            { title: "Positive Identification (PID)", link: "/campaign/call-flow-and-spiels" },
            { title: "BPI Credit Card Application Filing", link: "/campaign/call-flow-and-spiels" },
            { title: "Cross-Selling of the BPI E-Credit Card", link: "/campaign/call-flow-and-spiels" },
            { title: "Reminders to Client Spiels", link: "/campaign/call-flow-and-spiels" },
            { title: "E-Statement Spiel", link: "/campaign/call-flow-and-spiels" },
            { title: "Delivery Instruction Spiel", link: "/campaign/call-flow-and-spiels" },
            { title: "Account Monitoring Spiel", link: "/campaign/call-flow-and-spiels" },
            { title: "Activation Spiel", link: "/campaign/call-flow-and-spiels" },
            { title: "Note", link: "/campaign/call-flow-and-spiels" },
            { title: "BPI Credit Card Application Terms and Conditions, and BPI’s Privacy Policy", link: "/campaign/call-flow-and-spiels" },
            { title: "Cross-Selling of Supplementary Card to Co-Depositor", link: "/campaign/call-flow-and-spiels" },
            { title: "Guidelines", link: "/campaign/call-flow-and-spiels" },
            { title: "Spiels", link: "/campaign/call-flow-and-spiels" },
            { title: "ECH Cross Selling Spiel", link: "/campaign/call-flow-and-spiels" },
            { title: "Recap Spiel", link: "/campaign/call-flow-and-spiels" },
            { title: "Reminder after recap", link: "/campaign/call-flow-and-spiels" },
            { title: "With incomplete ECH mandatory field/s", link: "/campaign/call-flow-and-spiels" },
            { title: "Closing Spiel", link: "/campaign/call-flow-and-spiels" },
            { title: "Outbound", link: "/campaign/call-flow-and-spiels" },
            { title: "Inbound", link: "/campaign/call-flow-and-spiels" },
        ]
    },
    {
        Category: 'Campaign Guidelines',
        SemiCat: 'Credit Cards',
        title: "Documentation",
        content: [
            { title: "Create Callback Cases for successful and unsuccessful call outs.", link: "/campaign/documentation" },
            { title: "Create Application Cases for Interested Calls.", link: "/campaign/documentation" },
            { title: "Indicate complete call out details in Salesforce Comments.", link: "/campaign/documentation" },
            { title: "CALLBACK CASES", link: "/campaign/documentation" },
            { title: "CREDIT CARD APPLICATION", link: "/campaign/documentation" },
            { title: "Callback Case", link: "/campaign/documentation" },
            { title: "Opt-in/Opt-out", link: "/campaign/documentation" },
            { title: "Contact Info Update", link: "/campaign/documentation" },
            { title: "Credit Card Application", link: "/campaign/documentation" },
            { title: "Salesforce Hierarchy", link: "/campaign/documentation" },
            { title: "Subject Field", link: "/campaign/documentation" },
            { title: "Case Comments", link: "/campaign/documentation" },
            { title: "OCIES", link: "/campaign/documentation" },

            { title: "Screenshots", link: "/campaign/documentation" },
            { title: "Attachments", link: "/campaign/documentation" },
            { title: "Verification", link: "/campaign/documentation" },
        ]
    },
    {
        Category: 'Campaign Guidelines',
        SemiCat: 'Credit Cards',
        title: "Exception of Handling",
        content: [
            { title: "Mother’s Maiden Name Discrepancy", link: "/campaign/exception-handling" },
            { title: "Name Discrepancy", link: "/campaign/exception-handling" },
            { title: "RM Number Discrepancy", link: "/campaign/exception-handling" },
            { title: "Scenario 1", link: "/campaign/exception-handling" },
            { title: "Scenario 2", link: "/campaign/exception-handling" },
            { title: "Other RM Discrepancies", link: "/campaign/exception-handling" },
            { title: "Other Discrepancies", link: "/campaign/exception-handling" },
            { title: "TIN/SSS Number", link: "/campaign/exception-handling" },
            { title: "For TIN", link: "/campaign/exception-handling" },
            { title: "For SSS Number", link: "/campaign/exception-handling" },
            { title: "Zip Code", link: "/campaign/exception-handling" },

            { title: "In case ZIP code field drop down in regression is incomplete/not found", link: "/campaign/exception-handling" },
            { title: "E-mail Address", link: "/campaign/exception-handling" },
          
            { title: "Employment Information", link: "/campaign/exception-handling" },
            { title: "Business Address", link: "/campaign/exception-handling" },

            { title: "Company Name", link: "/campaign/exception-handling" },
            { title: "Billing Address", link: "/campaign/exception-handling" },
            { title: "Address Formats", link: "/campaign/exception-handling" },
      


            { title: "FORMAT 1 (residential house)", link: "/campaign/exception-handling" },
            { title: "FORMAT 2 (apartment/condo)", link: "/campaign/exception-handling" },

            { title: "FORMAT 3 (company)", link: "/campaign/exception-handling" },
            { title: "FORMAT 4 (provincial): Indicate landmark if it can fit regression characters", link: "/campaign/exception-handling" },

      
        ]
    },

    //personal loans
    {
        Category: 'Campaign Guidelines',
        SemiCat: 'Personal Loans',
        title: "Filtering of Leads",
        content: [
            { title: "ALFES Status", link: "/personal-loan/filtering-of-leads" },
            { title: "Note", link: "/personal-loan/filtering-of-leads" },
        ]
    },


    {
        Category: 'Campaign Guidelines',
        SemiCat: 'Personal Loans',
        title: 'Call Flow And Spiels',
        content: [
            { title: "Opening Spiel", link: "/personal-loan/call-flow-and-spiels" },
            { title: "Purpose of Call", link: "/personal-loan/call-flow-and-spiels" },
            { title: "Call Recording", link: "/personal-loan/call-flow-and-spiels" },
            { title: "Hook", link: "/personal-loan/call-flow-and-spiels" },
            { title: "Source: Cold Calls", link: "/personal-loan/call-flow-and-spiels" },
            { title: "Confirmation of Pending Application", link: "/personal-loan/call-flow-and-spiels" },
            { title: "Positive Identification (PID)", link: "/personal-loan/call-flow-and-spiels" },
            { title: "PID PROCESS:", link: "/personal-loan/call-flow-and-spiels" },
            { title: "PID DETAILS:", link: "/personal-loan/call-flow-and-spiels" },
            { title: "PID DISCREPANCY HANDLING", link: "/personal-loan/call-flow-and-spiels" },
            { title: "Email Template:", link: "/personal-loan/call-flow-and-spiels" },
            { title: "FEES & CHARGES", link: "/personal-loan/call-flow-and-spiels" },
            { title: "Application Fulfillment", link: "/personal-loan/call-flow-and-spiels" },


            { title: "INSTRUCTIONS", link: "/personal-loan/call-flow-and-spiels" },
            { title: "(Mr/Ms. CUSTOMER NAME), I would just like to confirm several details from you.", link: "/personal-loan/call-flow-and-spiels" },
            { title: "SCHEDULE FOR SIGNING", link: "/personal-loan/call-flow-and-spiels" },
            { title: "PL Holiday Rate Break Promo – Refer to Annex A.", link: "/personal-loan/call-flow-and-spiels" },
            { title: "DocuSign", link: "/personal-loan/call-flow-and-spiels" },
            { title: "Conditions:", link: "/personal-loan/call-flow-and-spiels" },
            { title: "If DocuSign Conditions are NOT met:", link: "/personal-loan/call-flow-and-spiels" },
            { title: "Application Recap", link: "/personal-loan/call-flow-and-spiels" },
            { title: "With Settlement Account (SETA) Spiel:", link: "/personal-loan/call-flow-and-spiels" },
            { title: "No Settlement Account (SETA) Spiel:", link: "/personal-loan/call-flow-and-spiels" },
            { title: "Reminders to Client:", link: "/personal-loan/call-flow-and-spiels" },
            { title: "Terms and Conditions", link: "/personal-loan/call-flow-and-spiels" },
            { title: "Branch Signing:", link: "/personal-loan/call-flow-and-spiels" },

            { title: "Closing Spiel", link: "/personal-loan/call-flow-and-spiels" },
        ]
    },

    {
        Category: 'Campaign Guidelines',
        SemiCat: 'Personal Loans',
        title: "Other Guidelines for DocuSign",
        content: [
            { title: "Previously Approved Applications that remains unsigned/unbooked", link: "/under-development" },
            { title: "For clients who are currently abroad", link: "/under-development" },
        ]
    },


    {
        Category: 'Campaign Guidelines',
        SemiCat: 'Personal Loans',
        title: "Documentation",
        content: [
            { title: "Steps to Create Cases – Callback or Application", link: "/under-development" },
            { title: "Opt in/Opt out (for leads from Cold Calls)", link: "/under-development" },

            { title: "Contact Info Cases (for leads from Cold Calls)", link: "/under-development" },
            { title: "PL Callback Case", link: "/under-development" },
            { title: "PL Application Case", link: "/under-development" },
        ]
    },

    {
        Category: 'Campaign Guidelines',
        SemiCat: 'Personal Loans',
        title: "Exception of Handling",
        content: [
            { title: "Handling of Application with NO Active Deposit Account", link: "/under-development" },
            { title: "Handling of Personal Loan Call Back Requests of Preferred Clients", link: "/under-development" },
            { title: "Inbound handling: Confirmation of Pending/existing application", link: "/under-development" },
            { title: "Handling of Industries that are not Qualified for Personal Loans", link: "/under-development" },
            { title: "NAME DISCREPANCY", link: "/under-development" },
            { title: "RM NUMBER DISCREPANCY", link: "/under-development" },
            { title: "MARITAL STATUS", link: "/under-development" },
            { title: "TIN/SSS NUMBER", link: "/under-development" },
            { title: "BIRTHDATE DISCREPANCY", link: "/under-development" },
            { title: "MOTHER'S MAIDEN NAME DISCREPANCY", link: "/under-development" },
            { title: "Zip Code", link: "/under-development" },
            { title: "Business Address", link: "/under-development" },
            { title: "EMPLOYMENT INFORMATION", link: "/under-development" },
            { title: "COMPANY NAME", link: "/under-development" },
            { title: "Other Discrepancies", link: "/under-development" },
        ]
    },

    //sip loans


    {
        Category: 'Campaign Guidelines',
        SemiCat: 'SIP Loans',
        title: "Filtering of Leads",
        content: [
            { title: "Outbound Sales", link: "/under-development" },
            { title: "Outbound Sales Campaign Administrator/Outbound Sales In-Charge assigns the leads for call-out of Outbound Sales Associates (OSA).", link: "/under-development" },
            { title: "Customer Promo Code Checker", link: "/under-development" },
        ]
    },


    {
        Category: 'Campaign Guidelines',
        SemiCat: 'SIP Loans',
        title: "Documentation",
        content: [
            { title: "Call Back Request", link: "/under-development" },
            { title: "SIP Loan Application", link: "/under-development" },
            { title: "Service Request Hierarchy:", link: "/under-development" },
            { title: "Subject Field:", link: "/under-development" },
            { title: "Case Comments:", link: "/under-development" },
            { title: "Outbound", link: "/under-development" },
            { title: "PID", link: "/under-development" },
            { title: "OCIES", link: "/under-development" },
            { title: "Screenshots", link: "/under-development" },
            { title: "Attachments", link: "/under-development" },
            { title: "Balance Transfer", link: "/under-development" },
            { title: "SIP for School", link: "/under-development" },
            { title: "SIP for Hospital", link: "/under-development" },
            { title: "Non-Application Case for Inbound Calls:", link: "/under-development" },
            { title: "SIP for School", link: "/under-development" },
            { title: "SIP for Hospital", link: "/under-development" },

        ]
    },

    
    {
        Category: 'Campaign Guidelines',
        SemiCat: 'SIP Loans',
        title: "Exception of Handling",
        content: [
            { title: "SPECIAL HANDLING", link: "/under-development" },
            { title: "SIP Loan Application – AMF Reversal Requests", link: "/under-development" },
            { title: "AMF Reversal Parameters:", link: "/under-development" },
            { title: "AMF Reversal Process:", link: "/under-development" },
            { title: "List of Offer Codes:", link: "/under-development" },
            { title: "DTAS:", link: "/under-development" },
            { title: "SIP Loan Application Rejected Due to Insufficient Limit/Over Credit Limit", link: "/under-development" },
            { title: "SIP Loan Application Updates/Verification", link: "/under-development" },
            { title: "Resigned Unibanker – DOSRI Tagging Not Yet Lifted", link: "/under-development" },
            { title: "Do Not Call for Sales Requests", link: "/under-development" },
            { title: "PCH/ECH Balance Conversion", link: "/under-development" },
            { title: "Usage of Available Limit Instead of Madness Limit", link: "/under-development" },
            { title: "Card Restriction", link: "/under-development" },


            { title: "SIP Loan Applications with Insufficient Limits:", link: "/under-development" },
            { title: "OK to process under MADNESS LIMIT:", link: "/under-development" },
            { title: "OK to process under REGULAR LIMIT (up to Total Credit Limit only):", link: "/under-development" },
            { title: "For Balance Conversion over Credit Line/Limit, approval is needed.", link: "/under-development" },
            { title: "Notes:", link: "/under-development" },
            { title: "Posting of Transactions in Cardlink", link: "/under-development" },

            { title: "Pre-termination Fee Computation", link: "/under-development" },
            { title: "Effective Interest Rate Template", link: "/under-development" },
            { title: "Posting of Transactions in Cardlink", link: "/under-development" },

        ]
    },
]
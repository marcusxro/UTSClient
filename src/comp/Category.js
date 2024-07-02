import FilteringOfLeads from "../SIPLoans/FilteringOfLeads";

export const CategoryOBJ = [
    {
        title: "Advisories",
        desc: "Stay informed with our advisory updates, providing essential information and guidance on our current developments",
        HaveContent: false,
        subCater: [
            {
                title: "Credit Cards", link: "/under-development"
            },
            {
                title: "Personal Loans", link: "/under-development"
            },
            {
                title: "SIP Loans", link: "/under-development"
            }
        ]
    },
    {
        title: "Campaign Guidelines",
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
                    { title: "Documentation", link: "/SIP-loan/documentation" },
                    { title: "Exception of Handling", link: "/SIP-loan/exception-handling" },
                ]
            }
        ]
    },


    {
        title: "Our Customer",
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
        desc: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus nemo illum iusto architecto, labore eveniet dolore esse odio et, optio, ducimus dicta delectus dolor earum repellendus tempora nulla culpa aut.",
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
        desc: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus nemo illum iusto architecto, labore eveniet dolore esse odio et, optio, ducimus dicta delectus dolor earum repellendus tempora nulla culpa aut.",
        HaveContent: false,
        subCater: [
            { title: "Table of Organization", link: "/under-development" },
            { title: "Top Performers", link: "/under-development" },
        ]
    },
    {
        title: "Sales Support Corner",
        desc: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus nemo illum iusto architecto, labore eveniet dolore esse odio et, optio, ducimus dicta delectus dolor earum repellendus tempora nulla culpa aut.",
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
        title: "Filtering Of Leads",
        content: [
            { title: "Check name and birth date of client. Exclude the following", link: "/under-development" },
            { title: "Check Cardlink (PCNL, PCIC, PCCP and PCUS). Exclude the following", link: "/under-development" },
            { title: "Check RM record in Salesforce.", link: "/under-development" },
            { title: "Check if client is a Unibanker (N/Q - Unibanker and all other BPI subsidiaries such BPI MS/BPLAC/BFB/BPI Direct Banko)", link: "/under-development" },
            { title: "Exclude clients with invalid number or no contact number", link: "/under-development" },
            { title: "Check if client has existing application in CCFES", link: "/under-development" },
            { title: "Check if with application from previous campaign (Not Qualified)", link: "/under-development" },
            { title: "Filtering of Leads: SMS - Credit Card Campaign", link: "/under-development" },
            { title: "Sample SMS", link: "/under-development" },
            { title: "Reminders", link: "/under-development" },
        ]
    },
    {
        Category: 'Campaign Guidelines',
        title: "Call Flow And Spiels",
        content: [
            { title: "OPENING SPIEL", link: "/under-development" },
            { title: "OUTBOUND", link: "/under-development" },
            { title: "INBOUND", link: "/under-development" },
            { title: "PURPOSE OF CALL", link: "/under-development" },
            { title: "Data Privacy Spiel", link: "/under-development" },
            { title: "SOURCE", link: "/under-development" },
            { title: "WARM CALLS", link: "/under-development" },
            { title: "Client Initiated Request [e.g. SMS]", link: "/under-development" },
            { title: "Branch Positive Leads", link: "/under-development" },
            { title: "INBOUND CALLS", link: "/under-development" },
            { title: "COLD CALLS", link: "/under-development" },
            { title: "ITA for Loans", link: "/under-development" },
            { title: "PQ CAMPAIGN", link: "/under-development" },
            { title: "PROBING/SEGUE SPIELS", link: "/under-development" },
            { title: "OPT-IN/OPT-OUT", link: "/under-development" },
            { title: "CONFIRMATION OF PENDING APPLICATION", link: "/under-development" },
            { title: "Product Presentation", link: "/under-development" },
            { title: "Positive Identification (PID)", link: "/under-development" },
            { title: "BPI Credit Card Application Filing", link: "/under-development" },
            { title: "Cross-Selling of the BPI E-Credit Card", link: "/under-development" },
            { title: "Reminders to Client Spiels", link: "/under-development" },
            { title: "E-Statement Spiel", link: "/under-development" },
            { title: "Delivery Instruction Spiel", link: "/under-development" },
            { title: "Activation Spiel", link: "/under-development" },
            { title: "Note", link: "/under-development" },
            { title: "BPI Credit Card Application Terms and Conditions, and BPI’s Privacy Policy", link: "/under-development" },
            { title: "Cross-Selling of Supplementary Card to Co-Depositor", link: "/under-development" },
            { title: "Guidelines", link: "/under-development" },
            { title: "Spiels", link: "/under-development" },
            { title: "ECH Cross Selling Spiel", link: "/under-development" },
            { title: "Recap Spiel", link: "/under-development" },
            { title: "Reminder after recap", link: "/under-development" },
            { title: "With incomplete ECH mandatory field/s", link: "/under-development" },
            { title: "Closing Spiel", link: "/under-development" },
            { title: "Outbound", link: "/under-development" },
            { title: "Inbound", link: "/under-development" },
        ]
    },
]
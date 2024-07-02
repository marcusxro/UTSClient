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
            { title: "Check name and birth date of client. Exclude the following" },
            { title: "Check Cardlink (PCNL, PCIC, PCCP and PCUS). Exclude the following" },
            { title: "Check RM record in Salesforce." },
            { title: "Check if client is a Unibanker (N/Q - Unibanker and all other BPI subsidiaries such BPI MS/BPLAC/BFB/BPI Direct Banko)" },
            { title: "Exclude clients with invalid number or no contact number" },
            { title: "Check if client has existing application in CCFES" },
            { title: "Check if with application from previous campaign (Not Qualified)" },
            { title: "Filtering of Leads: SMS - Credit Card Campaign" },
            { title: "Sample SMS" },
            { title: "Reminders" },
        ]
    },

    {
        Category: 'Campaign Guidelines',
        title: "Call Flow And Spiels",
        content: [
            { title: "OPENING SPIEL" },
            { title: "OUTBOUND" },
            { title: "INBOUND" },
            { title: "PURPOSE OF CALL" },
            { title: "Data Privacy Spiel" },
            { title: "SOURCE" },
            { title: "WARM CALLS" },
            { title: "Client Initiated Request [e.g. SMS]" },
            { title: "Branch Positive Leads" },
            { title: "INBOUND CALLS" },
            { title: "COLD CALLS" },
            { title: "ITA for Loans" },
            { title: "PQ CAMPAIGN" },
            { title: "PROBING/SEGUE SPIELS" },
            { title: "OPT-IN/OPT-OUT" },
            { title: "CONFIRMATION OF PENDING APPLICATION" },
            { title: "Product Presentation" },
            { title: "Positive Identification (PID)" },
            { title: "BPI Credit Card Application Filing" },
            { title: "Cross-Selling of the BPI E-Credit Card" },
            { title: "Reminders to Client Spiels" },
            { title: "E-Statement Spiel" },
            { title: "Delivery Instruction Spiel" },
            { title: "Activation Spiel" },
            { title: "Note" },
            { title: "BPI Credit Card Application Terms and Conditions, and BPI’s Privacy Policy" },
            { title: "Cross-Selling of Supplementary Card to Co-Depositor" },
            { title: "Guidelines" },
            { title: "Spiels" },
            { title: "ECH Cross Selling Spiel" },
            { title: "Recap Spiel" },
            { title: "Reminder after recap" },
            { title: "With incomplete ECH mandatory field/s" },
            { title: "Closing Spiel" },
            { title: "Outbound" },
            { title: "Inbound" },
        ]
    },
]
const CampaignObject = {
    pageOne: {
        title: "A. Credit Cards",
        hasNextPage: true,
        hasPrevPage: false,
        content: [
            {
                title: "Filtering of Leads",
                link: "https://bpicomph.sharepoint.com/:w:/r/sites/UnsecuredLendingandCardsGroup/_layouts/15/Doc.aspx?sourcedoc=%7B54568E36-F2CA-4048-B19F-82D0D204021E%7D&file=Credit%20Card%20Campaign.docx&action=default&mobileredirect=true",
                details: [
                    "Check name and birth date of client. Exclude the following",
                    "Names with foreign sounding name (N/Q - Foreigner)",
                    "Master list name is company name (N/Q - Corp account/ business name)",
                    "Client is more than 60 years old (N/Q - Age) - can facilitate application if client is 60 years old at point of call",
                    "Client is less than 21 years old (N/Q - Age) - if included in the PQ Campaign, we can facilitate application for clients who will turn 21 within the year (please refer to email thread below)"
                ]
            },
            {
                title: "Check Cardlink (PCNL, PCIC, PCCP and PCUS). Exclude the following",
                details: [
                    "Client with active credit card already, or cancelled card with remaining balance in PCUS (Not Qualified)",
                    "Client with active BFB credit card, or cancelled card with remaining balance in PCUS (Not Qualified)",
                    "Check CCFES if the client has an existing application.",
                    "Files are saved in the server: Z:\\2024 Internal Sales\\2024 Campaign Folders\\2024 PQ Masterfiles and Deficiency Files"
                ],
                additionalDetails: [
                    "If included, do not proceed with the call out. Update callout status in the campaign database as No Call out_Excluded from call out - With Branch Deficiency",
                    "See ANNEX B on steps to check if the cancelled credit card is an Express Start Account."
                ]
            },
            {
                title: "Check RM record in Salesforce.",
                details: [
                    "Record with do not call for sales tagging (Don't call for sales)",
                    "Customer segment is Private Banking (Not Qualified)",
                    "Customer segment is Preferred Banking (Not Qualified for Invitation to Apply. For ITA for Loan Campaign/Coffee Break/Client Initiated Calls, OK to proceed.)"
                ]
            },
            {
                title: "Check if client is a Unibanker (N/Q - Unibanker and all other BPI subsidiaries such BPI MS/BPLAC/BFB/BPI Direct Banko)"
            },
            {
                title: "Exclude clients with invalid number or no contact number",
                details: [
                    "If incomplete number, international contact number or BPI Direct contact number - 8169548 (N/Q - No contact number)",
                    "If no contact number in Masterfile - includes 9999, 1234, etc. (N/Q - No contact number)"
                ]
            },
            {
                title: "Check if client has existing application in CCFES",
                details: [
                    "Curing - OK for call out",
                    "Deferred - OK for call out",
                    "Declined - valid for call out regardless of application date.",
                    "In Process - not valid for call out (Not Qualified)",
                    "Complete - not valid for call out (Not Qualified)"
                ]
            },
            {
                title: "Check if with application from previous campaign (Not Qualified)"
            }
        ]
    },


};


const pageTwo  = {
  
  pageTwo: {
    title: "SMS - Credit Card Campaign",
    hasNextPage: true,
    hasPrevPage: true,
    link: "https://bpicomph.sharepoint.com/:w:/r/sites/UnsecuredLendingandCardsGroup/_layouts/15/Doc.aspx?sourcedoc=%7B54568E36-F2CA-4048-B19F-82D0D204021E%7D&file=Credit%20Card%20Campaign.docx&action=default&mobileredirect=true",
    content: [
        "Campaign Admin checks mailbox for the SMS sent to Outbound Sales Mailbox. Filters all SMS reply for credit card application.",
        "Campaign Admin updates the status in the Campaign database.",
        "TSA handles the callback for interested clients.",
        "Sample SMS:",
        "\"Because you are a valued depositor of BPI, we're inviting you to apply for a BPI Credit Card. With a BPI Credit Card, you get the spending power to enjoy the lifestyle you deserve – conveniently and safely in more than a million stores globally and online. If you are interested to apply for a BPI Credit Card, just text BPICC(space)<name of client> and send to 09188910000 and expect a call from our team.\"",
        "Reminders: Get the promo code received by the client via SMS or eDM and verify the code versus the PQ Masterfile"
    ]
},

}


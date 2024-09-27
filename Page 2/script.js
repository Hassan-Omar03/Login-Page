var session_id = '1fbe71f9-c7f5-41df-8385-4f491247a001';
        var cookie_id = 'ab2d7139-8a1b-43d9-aa20-28863ee6a866';
        var campaign_data = {
            "campaignId": "hvume",
            "flowHash": "2c30808af94756b0cb8f0bf3f1ef7b30",
            "surveyV2": true,
            "surveyVersion": 5,
            "hospostPrepingComplete": false,
            "surveyQuestionCap": null,
            "surveyQuestionCapRoot": null,
            "surveySkipQuestionCap": null,
            "profanityBlockingEnabled": true
        };
        const register = new Register();
        const leadgenApp = new LEADGEN.tracker();
        window.onload = function init() {
            register.onInit();
        };
var fetchMethodJsonArray = [
    {
        "PublicID": "EA_AccidentalDeathAndDismemberment_Line",
        "Name": "Accidental Death And Dismemberment",
        "CodeIdentifier": "EA_AccidentalDeathAndDismemberment_Line",
        "ReferenceCode": "AccidentalDeathAndDismemberment",
        "Terms": [
            {
                "PublicID": "z56ig7813msmcfldvas83hbl349",
                "Type": "OptionEA_AccidentalDeathAndDismemberment_Line_LimitType",
                "Name": "Limit",
                "CoveragePublicID": "zjehk70oem1ov2m7c99mefko8e9",
                "PatternCodeIdentifier": "EA_AccidentalDeathAndDismemberment_Line_Limit",
                "ChosenTerm": "10000",
                "ChosenTermValue": "10000",
                "isAscendingBetter": true,
                "Updated": false,
                "Required": true,
                "ModelType": "Limit",
                "ReferenceCode": "Limit",
                "IsEditable": true
            }
        ],
        "Premium": {
            "Amount": 4,
            "Currency": "usd"
        },
        "Updated": false,
        "Selected": true,
        "Rejected": false,
        "Required": false,
        "Description": "Accidental Death And Dismemberment",
        "Amount": {
            "Amount": 4,
            "Currency": "usd"
        },
        "CoverageCategoryCode": "EA_MiscGrp",
        "CoverageCategoryDisplayName": "Miscellaneous Coverages Group",
        "HasTerms": true,
        "IsValid": true,
        "Priority": 3341
    },
    {
        "PublicID": "EA_CoverageExtendedToRentalCars",
        "Name": "Coverage Extended to Rental Cars",
        "CodeIdentifier": "EA_CoverageExtendedToRentalCars",
        "ReferenceCode": "CoverageExtendedToRentalCars",
        "Terms": [],
        "Premium": {
            "Amount": 0,
            "Currency": "usd"
        },
        "Updated": false,
        "Selected": true,
        "Rejected": false,
        "Required": true,
        "Description": "Coverage Extended to Rental Cars",
        "Amount": {
            "Amount": 0,
            "Currency": "usd"
        },
        "CoverageCategoryCode": "EA_MiscGrp",
        "CoverageCategoryDisplayName": "Miscellaneous Coverages Group",
        "HasTerms": false,
        "IsValid": true,
        "IsHiddenInVersion": true,
        "Priority": 3059,
        "UIGroup": "Included Covs"
    }
];
var setValue = fetchMethodJsonArray;
var dataRemoved = setValue.filter(function (el) {
    return el.ReferenceCode === "AccidentalDeathAndDismemberment";
});
console.log(dataRemoved);
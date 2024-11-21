function ReasonReader ({reasonNum}) {

    let reasonText;

    switch(parseInt(reasonNum)) {
        case 1:
            reasonText = "Graphic violence";
            break;
        case 2:
            reasonText = "Explicit sexual content";
            break;
        case 3:
            reasonText = "Sexualization of minors";
            break;
        case 4:
            reasonText = "Inciting hatred";
            break;
        case 5:
            reasonText = "Encouraging suicide or self-harm";
            break;
        case 6:
            reasonText = "Attempting to defraud";
            break;
        case 7:
            reasonText = "Advertising illegal products";
            break;
        case 8:
            reasonText = "Blatant copyright infringement";
            break;
        case 9:
            reasonText = "Other serious reason";
            break;
        default:
            reasonText = "Reason integer could not be interpreted";
    }

    return reasonText;
};


export default ReasonReader;

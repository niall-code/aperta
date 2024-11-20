const ReasonReader = (reasonNum) => {

    let reasonText;

    switch(reasonNum) {
        case 1:
            reasonText = "Graphic violence";
        case 2:
            reasonText = "Explicit sexual content";
        case 3:
            reasonText = "Sexualization of minors";
        case 4:
            reasonText = "Inciting hatred";
        case 5:
            reasonText = "Encouraging suicide or self-harm";
        case 6:
            reasonText = "Attempting to defraud";
        case 7:
            reasonText = "Advertising illegal products";
        case 8:
            reasonText = "Blatant copyright infringement";
        case 9:
            reasonText = "Other serious reason";
    }

    return reasonText;
};


export default ReasonReader;

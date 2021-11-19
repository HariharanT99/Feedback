$('textarea[name="con"]').prop("disabled", true);


//Product Category Validation
$('#cat-error').hide();

let catError = true;

$('#category').change(function () {
    validateCategory();
});

function validateCategory() {
    let catValue = $('#category').val();
    if (catValue.length == '') {
        $('#cat-error').show();
        catError = false;
    }
    else {
        $('#cat-error').hide();
        catError = true;
    }
}


//Product validation

$('#prod-error').hide();
let prodError = true;

$('#product').change(function () {
    validateProduct();
});

function validateProduct() {
    let prodValue = $('#product').val();
    if (prodValue.length == '') {
        $('#prod-error').show();
        prodError = false;
    }
    else {
        $('#prod-error').hide();
        prodError = true;
    }
}


//Satisfaction field validation

$('#sat-error').hide();

let satError = true;

$('input[type=radio]').change(function () {
    validateSatisfactory();
})

function validateSatisfactory() {
    var isValid = $("input[name=ratingRadioOptions]").is(":checked")

    let value = $('input[name="ratingRadioOptions"]:checked').val();
    if (!isValid) {
        $('#sat-error').show();
        satError = false;
    }
    else {

        $('#sat-error').hide();
        satError = true;
    }
}


//Comment Validation

$('#pro-error').hide();

let proError = true;

$('#pros').keyup(function () {
    validatePros();
});

function validatePros() {
    let pros = $('#pros').val();
    if (pros.length == '') {
        $('#pro-error').show();
        proError = false;
    }
    else {
        $('#pro-error').hide();
        proError = true;
    }
}

//Name title validation

$('#title-error').hide();

let titleError = true;

$('#nametitle').change(function () {
    validateTitle();
});

function validateTitle() {
    let pros = $('#nametitle').val();
    if (pros.length == '') {
        $('#title-error').show();
        titleError = false;
    }
    else {
        $('#title-error').hide();
        titleError = true;
    }
}

//Name Validation

$('#name-error').hide();

let nameError = true;

$('#name').keyup(function () {
    validateName();
});

function validateName() {
    let nameValue = $('#name').val();
    if (nameValue.length == '') {
        $('#name-error').show();
        nameError = false;
    }
    else if ((nameValue.length < 3) || (nameValue.length > 50)) {
        $('#name-error').show();
        $('#name-error').html
            ("** length of name must be between 3 and 50")
        nameError = false;

    }
    else {
        $('#name-error').hide();
        nameError = true;
    }
}

//Initial error

$('#initial-error').hide();

let initialError = true;

$('#initial').keyup(function () {
    validateInitial();
});

function validateInitial() {
    let initialValue = $('#initial').val();
    if (initialValue.length == '') {
        $('#initial-error').show();
        initialError = false;
    }
    else {
        $('#initial-error').hide();
        initialError = true;
    }
}


//Email validation
$('#email-error').hide();

let emailError = true;

$('#email').keyup(function () {
    validateEmail();
})

function validateEmail() {
    let Value = $('#email').val();
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    if (Value.length == '') {
        $('#email-error').show();
        emailError = false;
    }
    else if (!emailReg.test(Value)) {
        $('#email-error').show();
        $('#email-error').html
            ("** enter valid email")
        emailError = false;
    }
    else {
        $('#email-error').hide();
        emailError = true;
    }
}

//Street validation

$('#street-error').hide();

let streetError = true;

$('#street1').keyup(function () {
    validateStreet();
});

function validateStreet() {
    let Value = $('#street1').val();
    if (Value.length == '') {
        $('#street-error').show();
        streetError = false;
    }
    else {
        $('#street-error').hide();
        streetError = true;
    }
}

//City validation

$('#city-error').hide();

let cityError = true;

$('#city').keyup(function () {
    validateCity();
});

function validateCity() {
    let Value = $('#city').val();
    if (Value.length == '') {
        $('#city-error').show();
        cityError = false;
    }
    else {
        $('#city-error').hide();
        cityError = true;
    }
}

//Region Error

$('#reg-error').hide();

let regionError = true;

$('#region').keyup(function () {
    validateRegion();
});

function validateRegion() {
    let Value = $('#region').val();
    if (Value.length == '') {
        $('#reg-error').show();
        regionError = false;
    }
    else {
        $('#reg-error').hide();
        regionError = true;
    }
}

//Postal code validation

$('#zip-error').hide();

let postalCodeError = true;

$('#postal').keyup(function () {
    validatePostalCode();
});

function validatePostalCode() {
    let Value = $('#postal').val();
    if (Value.length == '') {
        $('#zip-error').show();
        postalCodeError = false;
    }
    else {
        $('#zip-error').hide();
        postalCodeError = true;
    }
}

//Coutry validation

$('#country-error').hide();

let countryError = true;

$('#country').change(function () {
    validateCountry();
});

function validateCountry() {
    let Value = $('#country').val();
    if (Value.length == '') {
        $('#country-error').show();
        countryError = false;
    }
    else {
        $('#country-error').hide();
        countryError = true;
    }
}

//File validation

$('#file-error').hide();

$('#fileinput').change(function () {
    validateFile();
})

function validateFile() {
    let file = $('#fileinput');
    file = file[0].files[0];

    if (file) {
        if ((file.type.split["/"][1] !== "pdf" || file.type.split["/"][1] !== "png") || (file.size > 500000)) {
            $('#file-error').show();
            $('#fileinput').val("");
        }
    }
}

//enable Cons

function ShowUnsatisfiedComment() {
    $('textarea[name="con"]').prop("disabled", false);
}




//Submit

$('#submitbtn').click(function () {
    console.log("Submit")

    validateCategory();
    validateProduct();
    validateSatisfactory();
    validatePros();
    validateTitle();
    validateName();
    validateInitial();
    validateEmail();
    validateStreet();
    validateCity();
    validateRegion();
    validatePostalCode();
    validateCountry();
})


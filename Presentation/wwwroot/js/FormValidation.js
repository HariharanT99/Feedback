$('textarea[name="con"]').prop("disabled", true);

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


$('#sat-error').hide();

let satError = true;

function validateSatisfactory() {
    var isValid = $("input[name=ratingRadioOptions]").is(":checked")

    let value = $('input[name="ratingRadioOptions"]:checked').val();
    if (!isValid) {
        $('#sat-error').show();
        satError = false;
    }
    else {
        if ((value == 4) || (value == 5)) {
            $('textarea[name="con"]').prop("disabled", false);
        }

        $('#sat-error').hide();
        satError = true;
    }
}


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

$('#inital-error').hide();


let initialError = true;

$('#name').keyup(function () {
    validateInitial();
});

function validateInitial() {
    let nameValue = $('#name').val();
    if (nameValue.length == '') {
        $('#name-error').show();
        initialError = false;
    }
    else {
        $('#name-error').hide();
        initialError = true;
    }
}


$('#street-error').hide();



$('#city-error').hide();



$('#reg-error').hide();


$('#zip-error').hide();


$('#count-error').hide();

$('#Zip-error').hide();

$('#Zip-error').hide();

$('#Zip-error').hide();

$('#Zip-error').hide();




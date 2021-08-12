// Wait for the DOM to be ready
//Code for functions from https://stackoverflow.com/questions/29451507/how-to-use-jquery-validator-to-determine-value-of-one-field-is-greater-than-anot/29451695

$(function validateForm() {
    // Initialize form validation on the registration form.
    // It has the name attribute "registration"
    $("#myForm").validate({

        rules: {
            x_start: {
                required: true
            },
            x_end: {
                required: true,
                greaterThan: "#x_start_in"
            },
            y_start: {
                required: true
            },
            y_end: {
                required: true,
                greaterThan2: "#y_start_in"
            }
        },

        messages: {
            x_end: {
                greaterThan: "Make sure x_start is less than x_end."
            },

            y_end: {
                greaterThan2: "Make sure y_start is less than y_end."
            }
        },

        submitHandler: function (form) {
        create_table();
    },
    });
});

$(document).ready(function() {
    $("input").attr({
       "max" : 50,        
       "min" : -50          
    });

    $.validator.addMethod("greaterThan", function (value, element, param) {
        var $otherElement = $(param);
        return parseInt(value, 10) > parseInt($otherElement.val(), 10);
    });
    
    $.validator.addMethod("greaterThan2", function (value, element, param) {
    var $otherElement = $(param);
    return parseInt(value, 10) > parseInt($otherElement.val(), 10);
    });
    
});



 



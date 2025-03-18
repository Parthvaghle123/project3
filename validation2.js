$(document).ready(function() {
    $('#show-payment-form').on('click', function() {
        $('#payment-form').show();
        $(this).hide();
    });

    $('#credit-card-form').on('submit', function(e) {
        e.preventDefault();
        $('#payment-form').hide();
        $('#thank-you-message').show();
    });

    // Cardholder Name - Allow only letters and spaces
    $('#cardholder_name').on('keypress', function(event) {
        if (!/^[a-zA-Z\s]+$/.test(event.key)) {
            event.preventDefault();
        }
    });

    // Card Number Formatting (Only numbers & Add Spaces)
    $('#card_number').on('input', function() {
        let value = this.value.replace(/\D/g, '').substring(0, 16);
        this.value = value.replace(/(.{4})/g, '$1 ').trim();
    });

    // Expiry Date Formatting (MM/YY)
    $('#expiry_date').on('input', function() {
        let value = this.value.replace(/\D/g, '');
        if (value.length > 2) {
            value = value.substring(0, 2) + '/' + value.substring(2, 4);
        }
        this.value = value;
        if (value.length === 5) {
            $('#cvv').focus();
        }
    });
});

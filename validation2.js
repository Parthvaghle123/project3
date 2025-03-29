$(document).ready(function() {
    $('#pay-now-btn').click(function() {
        if (validateForm()) { 
            $(this).html('<i class="fa fa-spinner fa-spin"></i>'); 
            $(this).prop('disabled', true); 
            $('#credit-card-form').submit();
        }
    });

    $('#cvv').focus(function() {
        $('#pay-now-btn').html('<i class="fa fa-credit-card"></i>'); 
    });

    $('#cvv').blur(function() {
        $('#pay-now-btn').html('<i class="fa fa-credit-card"></i> Pay Now');
    });

    $('#credit-card-form').submit(function(e) {
        e.preventDefault();

        setTimeout(function() {
            alert('Payment Successful!');
            $('#exampleModal').modal('hide');

            $('#pay-now-btn').html('<i class="fa fa-credit-card"></i> Pay Now');
            $('#pay-now-btn').prop('disabled', false);
        }, 2000);
    });

    $('#exampleModal').on('hidden.bs.modal', function () {
        $('#credit-card-form')[0].reset(); 
    });

    
    $('#cardholder_name').keypress(function(event) {
        if (!/^[a-zA-Z\s]+$/.test(event.key)) {
            event.preventDefault();
        }
    });


    $('#card_number').on('input', function() {
        let cardNumber = this.value.replace(/\D/g, '').substring(0, 16);
        this.value = cardNumber.replace(/(.{4})/g, '$1 ').trim();
    });


    $('#expiry_date').on('input', function() {
        let value = this.value.replace(/\D/g, '');
        if (value.length > 2) value = value.substring(0, 2) + '/' + value.substring(2, 4);
        this.value = value;
    });


    $('#cvv').on('input', function() {
        this.value = this.value.replace(/\D/g, '').substring(0, 4);
    });


    function validateForm() {
        let name = $('#cardholder_name').val().trim();
        let cardNumber = $('#card_number').val().replace(/\s/g, '');
        let expiryDate = $('#expiry_date').val();
        let cvv = $('#cvv').val();

        if (name.length < 3) {
            alert('Cardholder Name should be at least 3 characters.');
            return false;
        }

        if (cardNumber.length !== 16 || isNaN(cardNumber)) {
            alert('Please enter a valid 16-digit Card Number.');
            return false;
        }

        if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiryDate)) {
            alert('Please enter a valid Expiry Date (MM/YY).');
            return false;
        }

        if (cvv.length < 3 || cvv.length > 4 || isNaN(cvv)) {
            alert('Please enter a valid CVV (3 or 4 digits).');
            return false;
        }

        return true;
    }
});
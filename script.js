$(document).ready(function() {


    // POST DATA BUTTON
    $('#postData').on('click', function() {
        console.log('POST data clicked');

        var vars = {
            xid: $('#xid').val(),
            name: $('#name').val(),
            message: $('#message').val(),
            action: 'ADD'
        }
        $.ajax({
            url:'api.php',
            data: vars,
            type:'POST',
            dataType: 'json'
        })
        .done(function(result) {
            console.log(result);
        })
        .fail(function(xhr,textstatus) {
            console.log(xhr);
            console.log(textstatus);
        })
    }) // ----- END OF POST DATA BUTTON



    // GET DATA BUTTON
    $('#getData').on('click', function() {
        console.log('GET data clicked');

        var vars = {
            xid: $('#xid').val(),
            action: 'GET'
        }
        $.ajax({
            url:'api.php',
            type:'POST',
            dataType:'json'
        })
        .done(function(result) {
            console.log(result);
        })
        .fail(function(xhr,textstatus) {
            console.log(xhr);
            console.log(textstatus);
        })
    }) // ----- END OF REQUEST DATA BUTTON



}); // ----- END OF DOCUMENT.READY    
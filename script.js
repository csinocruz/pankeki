$(document).ready(function() {
    var vars = {
        action: 'GET'
    }
    $.ajax({
        url:'api.php',
        data: vars,
        type:'GET',
        dataType:'json'
    })
    .done(function(result) {
        for (i=result.response.length-1; i>0; i--) {
            var $th = $('<th>').text(result.response[i].name);
            var $td = $('<td>').text(result.response[i].message);
            var $row = $('<tr>').append($th,$td);
            $('tbody').append($row);
        }

    })
    .fail(function(xhr,textstatus) {
        console.log(xhr);
        console.log(textstatus);
    })


    // POST DATA BUTTON
    $('#postData').on('click', function() {
        var vars = {
            //xid: $('#xid').val(),
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
            var $th = $('<th>').text(result.name);
            var $td = $('<td>').text(result.message);
            var $row = $('<tr>').append($th,$td);
            $('table > tbody > tr:first').before($row);
        })
        .fail(function(xhr,textstatus) {
            console.log(xhr);
            console.log(textstatus);
        })
    }) // ----- END OF POST DATA BUTTON



    // GET DATA BUTTON
    // $('#getData').on('click', function() {
    //     var vars = {
            //xid: $('#xid').val(), only for testing/learning purposes
    //         action: 'GET'
    //     }
    //     $.ajax({
    //         url:'api.php',
    //         data: vars,
    //         type:'GET',
    //         dataType:'json'
    //     })
    //     .done(function(result) {
    //         for (i=0; i<result.response.length; i++) {
    //             var $th = $('<th>').text(result.response[i].name);
    //             var $td = $('<td>').text(result.response[i].message);
    //             var $row = $('<tr>').append($th,$td);
    //             $('tbody').append($row);
    //         }

    //     })
    //     .fail(function(xhr,textstatus) {
    //         console.log(xhr);
    //         console.log(textstatus);
    //     })
    // })



}); // ----- END OF DOCUMENT.READY    
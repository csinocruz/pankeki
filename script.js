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
            data: vars,
            type:'GET',
            dataType:'json'
        })
        .done(function(result) {
            console.log(result.response[0].name);
            // <tr>
            //     <th>Ailpein</th>
            //     <td>Powder dragée candy canes cookie sweet roll. 
            //     </td>
            // </tr>

            var $th = $('<th>').text(result.response[0].name);
            var $td = $('<td>').text(result.response[0].message);
            var $row = $('<tr>').append($th,$td);
            $('tbody').append($row);
        })
        .fail(function(xhr,textstatus) {
            console.log(xhr);
            console.log(textstatus);
        })
    }) // ----- END OF REQUEST DATA BUTTON



}); // ----- END OF DOCUMENT.READY    
$(document).ready(function() {
    console.log('hi :]');
    $('#postPancake').on('click', function() {
        var vars = {
            name: $('#name').val(),
            message: $('#message').val()
        }
        $.ajax({
            url:'api.php',
            data: vars,
            type:'POST'
        })
        .done(function(data) {
            console.log(data);
        })
        .fail(function(xhr,textstatus) {
            console.log(xhr);
            console.log(textstatus);
        })
    })

    // REQUEST PANCAKES BUTTON
    $('#getPancake').on('click', function() {
        var vars = {
            action: 'GET'
        }
        $.ajax({
            url:'api.php',
            data: vars,
            type:'POST',
            dataType: 'json'
        })
        .done(function(data) {
            console.log(data);
        })
        .fail(function(xhr,textstatus) {
            console.log(xhr);
            console.log(textstatus);
        })
    })
// END OF DOCUMENT.READY    
});
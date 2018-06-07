$(document).ready(function() {
    console.log('hi :]');
    $('button').on('click', function() {
        var vars = {
            name: $('#message').val()
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
});
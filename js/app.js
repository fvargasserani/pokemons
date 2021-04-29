$(document).ready(function () {
    pokeApiUrl = 'https://pokeapi.co/api/v2/pokemon/',
        $.ajax(pokeApiUrl, {
            success: function (response) {
                response.results.forEach(function (data) {
                    $('#pokemon-list').append('<p>' + data.name + '</p>' + "<a id='pokemon-info' href='" + data.url + "'><button>I'd like to know more about this pokemon!</button></a>");
                    $('#pokemon-info').click(function () {
                        window.location = $(this).attr('href');
                    })
                })
                $('#more-pokemons').click(function () {
                    top.location.href = response.next
                })
            }
        })
})
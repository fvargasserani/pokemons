$(document).ready(function () {
    pokeApiUrl = 'https://pokeapi.co/api/v2/pokemon/',
        $.ajax(pokeApiUrl, {
            success: function (response) {
                response.results.forEach(function (data) {
                    $('#name').append('<p>' + data.name + '</p>');
                    $('#pokemon-info').append("<button id='pokemon-info'>I'd like to know more about this pokemon!</button>").click(function () {
                        top.location.href = data.url
                    })
                    $('#more-pokemons').click(function () {
                        top.location.href = data.next
                    })
                })
            }
        })
})
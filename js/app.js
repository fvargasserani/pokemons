$(document).ready(function () {
    var pokemonsList = $('#pokemon-list')

    $('html').on('load', function () {
        var name = $('#name')
        var pokemonUrl = $('#url')

        $.ajax({
            url: 'https://pokeapi.co/api/v2/pokemon/',
            data: { limit: 20, order: 'asc' },
            success: function (results) {
                pokemonsList.show()
            },
            complete: function () {

            }
        })
    })
})
$(document).ready(function () {
    pokeApiUrl = 'https://pokeapi.co/api/v2/pokemon/',
        pokemon = this.value,
        $.ajax(pokeApiUrl, {
            success: function (data) {
                $('#pokemon-list').text(data.results)
                $('#pokemon-info').click(function () {
                    top.location.href = pokeApiUrl + pokemon + '/'
                    $('#more-pokemons').click(function () {
                        top.location.href = data.next
                    })
                })
            }
        })
})
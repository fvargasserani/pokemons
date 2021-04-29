$(document).ready(function () {
    pokeApiUrl = 'https://pokeapi.co/api/v2/pokemon/',
        pokemon = this.value,
        $.ajax(pokeApiUrl, {
            success: function (response) {
                response.results.forEach(function (data) {
                    $('#name').text(data.name);
                    $('#pokemon-info').click(function () {
                        top.location.href = data.url
                        $('#more-pokemons').click(function () {
                            top.location.href = data.next
                        })
                    })

                })
            }
        })
})
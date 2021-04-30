$(document).ready(function () {
    pokeApiUrl = 'https://pokeapi.co/api/v2/pokemon/',
        $.ajax(pokeApiUrl, {
            success: function (response) {
                response.results.forEach(function (data) {
                    $('#pokemon-list').append('<p>' + data.name + '</p>' + "<button type='button' class='btn btn-primary pokemon-info' data-bs-toggle='modal' data-bs-target='#pokemonModal' >I'd like to know more about this pokemon!</button>");
                })
                $('#more-pokemons').append("<button id='next20-pokemons'>I'd like to see more pokemons!</button>")
                $('#more-pokemons').click(function () {
                    window.location = response.next
                });

                $('.pokemon-info').click(function (event) {
                    event.preventDefault();
                    let modalUrl = ($(this).attr('url'));
                    $.ajax({
                        url: modalUrl,
                        context: document.body,
                        method: 'GET',
                        beforeSend: function () {
                            $('.empty').empty()
                        },
                        success: function (response) {
                            $('#about-pokemon').html((response.species.name));
                            response.abilities.forEach(function (a) {
                                $("#abilities").append("<p class='list-ability'>" + a.ability.name + "</p>")
                            });
                            response.types.forEach(function (t) {
                                $("#type").append("<p>" + t.type.name + "</p>")
                            });
                            response.moves.forEach(function (m, i) {
                                if (i < 5) {
                                    $("#moves").append("<p>" + m.move.name + "</p>")
                                }
                            });
                            response.game_indices.forEach(function (i) {
                                $("#generations").append("<p>" + i.version.name + "</p>")
                            });
                        }
                    });
                    $('.pokemon-info').modal('show');
                })
            }

        })
})




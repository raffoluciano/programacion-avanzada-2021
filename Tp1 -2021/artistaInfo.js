
var artistaName
var tema
var reproducciones
var linkImagen

$(document).ready(function() {
    var table = $('<table>').prop('class','table')
    
    var thead = $('<thead>')

    var tr = $('<tr>')
    tr.append($('<th>').prop('scope','col').text('Name'))
    tr.append($('<th>').prop('scope','col').text('Tema'))
    tr.append($('<th>').prop('scope','col').text('Reproducciones'))

    thead.append(tr)

    var tbody = $('<tbody>')

    var trBody = $('<tr>')

    trBody.append($('<td>').text(`${artistaName}`))
    trBody.append($('<td>').text(`${tema}`))
    trBody.append($('<td>').text(`${reproducciones}`))


    trBody.append(trBody)
    tbody.append(trBody)

    table.append(thead)
    table.append(tbody)

    $('#c1').append(table)

})

$(document).ready(function(){
    var img = $('<img>').prop('src',`${linkImagen}`).prop('class','card-img-top')
    var cardBody = $('<div>').prop('class','card-body')
    var cardText = $('<h1>').prop('class','card-title').text('Imagen album')

    $('#card1').append(img).append(cardBody).append(cardText)
})

function getDataArtist(){
    var url_string = window.location.href;
    var url = new URL(url_string);
    artistaName = url.searchParams.get("artistaName");
    tema = url.searchParams.get("tema");
    reproducciones = url.searchParams.get("reproducciones");
    linkImagen = url.searchParams.get("imagenLink");
    console.log('artistaName',artistaName);
    console.log('tema',tema);
    console.log('reproducciones',linkImagen)
}

getDataArtist()





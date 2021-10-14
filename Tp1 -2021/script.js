const url ="http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=187a694ea9c99762720cc236aa550f12&format=json"
const urlAlbums = 'https://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=rj&api_key=187a694ea9c99762720cc236aa550f12&format=json'
async function getData(url) {
    const response = await fetch(url);
    var data = await response.json();
    return data  
}

var albums
var primerosDiezArtistas = []


getData(urlAlbums).then((response) => {
    albums = response.topalbums.album,
    console.log(response),

    $(document).ready(function() {
        var primerosDiezArtistas = []

        for (let index = 0; index < 10; index++) {
            primerosDiezArtistas.push(albums[index]);     
        }

    
        var ul = $('<div>').prop('class','list-group')
    
        $(primerosDiezArtistas).each(function() {
            ul.append($("<a>").prop('id','a')
            .prop('href',`artistaInfo.html?artistaName=${this.artist.name}&tema=${this.name}&reproducciones=${this.playcount}&imagenLink=${this.image[2]['#text']}`)
            .prop('target','_blank')
            .prop('class','list-group-item list-group-item-action')
            .prop('value', this.name)
            .text(this.name.charAt(0).toUpperCase() + this.name.slice(1)));
        });


    
        $('#card').append(ul)

    })

})


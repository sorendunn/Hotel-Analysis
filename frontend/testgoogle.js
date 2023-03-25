function initMap(){
    const map = new google.maps.Map(document.getElementById("map"), {
        center: {lat: -33.866, lng: 151.196},
        zoom: 15, // can get users locatin in future perhaps
    });
}

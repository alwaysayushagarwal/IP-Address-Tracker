var ipDisplay = document.getElementById("ip-address");
var locationDisplay = document.getElementById("location");
var timezoneDisplay = document.getElementById("timezone");
var ispDisplay = document.getElementById("isp");

let ip = {

  apiKey: "at_6C0jy3OsGvOeOKJCchUCca9hmJ8FN",
  fetchIP: function (ip) {
    fetch("https://geo.ipify.org/api/v2/country,city?apiKey=" + this.apiKey + "&ipAddress=" + ip).then((response) => response.json()).then((data) => this.displayIp(data))
  },

  displayIp: function (data) {
    const { ip, isp } = data;
    const { city, country, lat, lng, timezone, postalCode } = data.location;

    ipDisplay.innerText = ip;
    locationDisplay.innerText = city + ", " + country + " " + postalCode;
    timezoneDisplay.innerText = "UTC " + timezone;
    ispDisplay.innerText = isp;

    popup.setLatLng([lat, lng]).setContent(city + ", " + country);
    marker.setLatLng([lat, lng]);
    map.setView([lat, lng], 12);
  },

  search: function () {
    this.fetchIP(document.getElementById("ip-input").value);
  }

}

document.getElementsByClassName("search-button").item(0).addEventListener("click", function () {
  ip.search();
});

document.getElementById("ip-input").addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    ip.search();
  }
})


var map = L.map('map').setView([28.63576, 77.22445], 3);
var marker = L.marker([28.63576, 77.22445]).addTo(map);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZWdnZXJ3YWxsIiwiYSI6ImNreHl1MjN0aTI0Ym4ybm96M2I2aHJoaTcifQ.0KQlD2cOs0H6JLRUc_31iA', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: 'your.mapbox.access.token'
}).addTo(map);

var popup = L.popup()
.setLatLng([ 28.63576, 77.22445])
.setContent("New Delhi, IN")
.openOn(map);


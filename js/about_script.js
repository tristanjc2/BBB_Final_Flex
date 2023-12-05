let myMap = L.map("map").setView([45.367584, -68.972168], 6.25);

L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
  maxZoom: 20,
}).addTo(myMap);

let maine = L.circle([43.8222, -70.4252], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: "0.4",
  radius: 10000,
}).addTo(myMap);

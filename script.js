document.addEventListener("keypress", function (event) {
   if (event.key === "Enter") {
      document.getElementById("searchbutt").click();
   }
});
let fun = () => {
   let city = document.getElementById("inputcity").value;
      city = city.trim();
   let promise1 = fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial`
   );
   promise1.then((res) => res.json()).then((data) => convert(data));
};
const convert = (data) => {
   let tempdata = {};
   tempdata["place"] = data.name;
   tempdata["temperature"] = Math.floor(
      ((Number(data.main.temp) - 32) * 5) / 9
   );
   tempdata["condition"] = data.weather[0].main;
   tempdata["tempmin"] = Math.floor(
      ((Number(data.main.temp_min) - 32) * 5) / 9
   );
   tempdata["tempmax"] = Math.floor(
      ((Number(data.main.temp_max) - 32) * 5) / 9
   );
   printa(tempdata);
};
const printa = (tempdata) => {
   document.getElementById("cityli").innerText = tempdata["place"];
   document.getElementById("temp").innerText = `${tempdata["temperature"]}°C`;
   document.getElementById("condition").innerText = tempdata["condition"];
   document.getElementById("min").innerText = `Min = ${tempdata["tempmin"]}°C`;
   document.getElementById("max").innerText = `Max = ${tempdata["tempmax"]}°C`;
};

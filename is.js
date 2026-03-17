function gettimes(){
    let city = document.getElementById("city").value;

let params = {
  country: "EG",
  city: city
}
axios.get("https://api.aladhan.com/v1/timingsByCity", {
  params: params
})
.then(function (response) {

  const timings = response.data.data.timings

  document.getElementById("fajrtime").innerHTML = timings.Fajr
document.getElementById("suntime").innerHTML = timings.Sunrise
document.getElementById("duhrtime").innerHTML = timings.Dhuhr
document.getElementById("asrtime").innerHTML = timings.Asr
document.getElementById("majribtime").innerHTML = timings.Maghrib
document.getElementById("ishatime").innerHTML = timings.Isha
document.getElementById("thirdtime").innerHTML = timings.Lastthird


let readdata=response.data.data.date.readable;
let weakday=response.data.data.date.hijri.weekday.ar;
document.getElementById("hisotry").innerHTML = weakday +"  |  "+ readdata


//   console.log(timings.Fajr)
//   console.log(readdata + weakday)

})
.catch(function (error) {
  console.log(error)
})





}

gettimes();

function changecity(){
      let cityname = document.getElementById("cityname");
      cityname.innerHTML=city.value

}

document.getElementById("city").addEventListener("change", function(){
    gettimes();
    changecity()

});

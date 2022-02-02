function prayerTime(latitude, longitude) {
  fetch(
    "http://api.aladhan.com/v1/calendar?latitude=" +
      latitude +
      "&longitude=" +
      longitude +
      "&method=4"
  )
    .then((response) => response.json())
    .then(function (response) {
      let date = new Date();
      let today = date.getDate() - 1;

      function fajr() {
        let fajr = document.getElementById("fajr");
        let fajrdata = response.data[0].timings.Fajr;
        let fajrTime = document.createElement("h3");
        fajr.appendChild(fajrTime);
        fajrTime.innerHTML = fajrdata;
      }

      function dhuhr() {
        let dhuhr = document.getElementById("dhuhr");
        let dhuhrdata = response.data[0].timings.Dhuhr;
        let dhuhrTime = document.createElement("h3");
        dhuhr.appendChild(dhuhrTime);
        dhuhrTime.innerHTML = dhuhrdata;
      }

      function asr() {
        let Asr = document.getElementById("asr");
        let Asrdata = response.data[0].timings.Asr;
        let asrTime = document.createElement("h3");
        Asr.appendChild(asrTime);
        asrTime.innerHTML = Asrdata;
      }

      function maghrib() {
        let maghrib = document.getElementById("maghrib");
        let maghribdata = response.data[0].timings.Maghrib;
        let maghribTime = document.createElement("h3");
        maghrib.appendChild(maghribTime);
        maghribTime.innerHTML = maghribdata;
      }

      function isha() {
        let isha = document.getElementById("isha");
        let ishadata = response.data[0].timings.Isha;
        let ishaTime = document.createElement("h3");
        isha.appendChild(ishaTime);
        ishaTime.innerHTML = ishadata;
      }

      fajr();
      dhuhr();
      asr();
      maghrib();
      isha();
    });
}

function success(position) {
  prayerTime(position.coords.latitude, position.coords.longitude);
}

function error() {
  prayerTime("-6.200000", "106.816666");
  alert(
    "karena anda tidak setuju melacak lokasi maka lokasi defaultnya adalah jakrta"
  );
}

function userLocation() {
  if (!navigator.geolocation) {
    alert(
      "Geolocation tidak didukung pada browser yang anda gunakan, silahkan gunakan browser lain"
    );
  } else {
    navigator.geolocation.getCurrentPosition(success, error);
  }
}

userLocation();

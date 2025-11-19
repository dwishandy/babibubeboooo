function birthDate() {
  var start = new Date("2011-11-28");
  var end = new Date();
  let seconds = Math.abs(start - end) / 1000;

  let year = end.getFullYear() - start.getFullYear();
  let temp = new Date(start);
  temp.setFullYear(start.getFullYear() + year);

  if (temp > end) {
    year--;
    temp.setFullYear(start.getFullYear() + year);
  }

  const diffMs = end - temp;
  const day = diffMs / (1000 * 60 * 60 * 24);

  hh = seconds % (24 * 3600);
  var hour = hh / 3600;

  hh %= 3600;
  var minute = hh / 60;

  hh %= 60;
  var rsecond = hh;

  document.getElementById("years-birth").innerHTML = parseInt(year) + " Tahun,";
  document.getElementById("days-birth").innerHTML = parseInt(day) + " Hari,";
  document.getElementById("hours-birth").innerHTML = parseInt(hour) + " Jam,";
  document.getElementById("minutes-birth").innerHTML =
    parseInt(minute) + " Menit,";
  document.getElementById("seconds-birth").innerHTML =
    parseInt(rsecond) + " Detik,";
}

function annivDate() {
  var x = new Date("May 24 2025 00:00:00");
  var y = new Date();
  let seconds = Math.abs(x - y) / 1000;

  var months = seconds / (30 * 24 * 3600);

  var days = seconds / (24 * 3600);

  hh = seconds % (24 * 3600);
  var hours = hh / 3600;

  hh %= 3600;
  var minutes = hh / 60;

  hh %= 60;
  var rseconds = hh;

  document.getElementById("month-anniv").innerHTML =
    parseInt(months) + " Bulan,";
  document.getElementById("days-anniv").innerHTML = parseInt(days) + " Hari,";
  document.getElementById("hours-anniv").innerHTML = parseInt(hours) + " Jam,";
  document.getElementById("minutes-anniv").innerHTML =
    parseInt(minutes) + " Menit,";
  document.getElementById("seconds-anniv").innerHTML =
    parseInt(rseconds) + " Detik,";
}

setInterval(birthDate, 1000);
setInterval(annivDate, 1000);

document.querySelectorAll(".gift-box").forEach((box) => {
  box.addEventListener("click", function () {
    if (!this.classList.contains("revealed")) {
      const giftImage = this.querySelector(".gift-image");
      const giftSrc = this.getAttribute("data-gift");

      giftImage.src = giftSrc;

      this.classList.add("revealed");

      document.querySelectorAll(".gift-box");
    }
  });
});

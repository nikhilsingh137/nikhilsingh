const targetDate = new Date("June 30, 2024 23:59:59").getTime();
function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;
  if (distance < 0) {
    document.getElementById("Day").innerHTML = "0";
    document.getElementById("Hour").innerHTML = "0";
    document.getElementById("Minutes").innerHTML = "0";
    document.getElementById("Second").innerHTML = "0";
    clearInterval(countdownInterval);
    return;
  }
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("Day").innerHTML = days + "<br/><h2>Days</h2>";
  document.getElementById("Hour").innerHTML = hours + "<br/><h2>Hours</h2>";
  document.getElementById("Minutes").innerHTML =
    minutes + "<br/><h2>Minutes</h2>";
  document.getElementById("Second").innerHTML =
    seconds + "<br/><h2>Seconds</h2>";
}

const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();

function myData() {
  const emailValue = document.getElementById("emailInput").value;
  const EmailError = document.getElementById("error");

  if (emailValue.trim() === "") {
    EmailError.textContent = "Please Enter Email";
    return false;
  } else {
    EmailError.textContent = "";
    return true;
  }
}

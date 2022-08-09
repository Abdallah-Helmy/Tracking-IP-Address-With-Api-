const inp = document.getElementById('input');
const btn = document.getElementById('btn');
const ip = document.querySelector('.results div:first-child h2');
const loca = document.querySelector('.results div:nth-child(2) h2');
const timezone = document.querySelector('.results div:nth-child(3) h2');
const isp = document.querySelector('.results div:last-child h2');
let req;

btn.addEventListener('click', function () {
  req = inp.value;
  request(req);
});

function request(req) {
  let myRequest = new XMLHttpRequest();
  myRequest.open('GET', `https://geo.ipify.org/api/v2/country,city?apiKey=at_sqMtOcRc6y9KZx7lawZFwbsiCX8pf&ipAddress=${req}`);
  myRequest.send();

  myRequest.onreadystatechange = function () {
    if (this.status == 200 && this.readyState == 4) {
      let myData = JSON.parse(this.responseText);

      // Your Information
      ip.textContent = myData.ip;
      loca.textContent = myData.location.city;
      timezone.textContent = `UTC ${myData.location.timezone}`;
      isp.textContent = myData.isp;

      inp.value = '';
    }
  };
}

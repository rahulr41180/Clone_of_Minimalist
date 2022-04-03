
var data = JSON.parse(localStorage.getItem("MinimalistCheckOutData"));
cartArr = JSON.parse(localStorage.getItem("MinimalistMainCartData"));
totalprc = JSON.parse(localStorage.getItem("MinimalistTotalPrice"));
var item = cartArr.length;

document.getElementById(
  "username"
).textContent = `Name : ${data.FName} ${data.LName}`;
document.getElementById(
  "add"
).innerHTML = `<b>Address :</b> ${data.HouseNo}, ${data.Apart}, ${data.Street}, ${data.LandMark}, ${data.City}, ${data.Area}, ${data.Pincode}`;
document.getElementById("cno").innerHTML = `<b>Phone :</b> ${data.ContactNo}`;
document.querySelector(
  "#ttlitem"
).innerHTML = `<b>Total</b> : ${item} Items.`;

document.getElementById(
  "totalprc"
).innerHTML = `<b>Amount</b> : Rs. ${roundOff(
  totalprc[totalprc.length - 1],
  2
)}`;

function roundOff(value, round) {
  return parseInt(value * 10 ** (round + 1)) -
    parseInt(value * 10 ** round) * 10 >
    4
    ? parseFloat(
        parseInt((value + parseFloat(1 / 10 ** round)) * 10 ** round)
      ) /
        10 ** round
    : parseFloat(parseInt(value * 10 ** round)) / 10 ** round;
}
document.getElementById("button").addEventListener("click", function (event) {
  event.preventDefault();
});

function onSubmit() {
  const input = document.getElementById("input").value;

  if (input <= 0) {
    alert("Tolong isi semua form dengan lengkap");
    return;
  } else {
    alert("Terima kasih telah mengisi form");
  }
}
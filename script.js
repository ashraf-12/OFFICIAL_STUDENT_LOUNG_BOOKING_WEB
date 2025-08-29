// Live English Clock
function updateClock() {
  const el = document.getElementById("clock");
  if (!el) return;
  const now = new Date();
  const opts = {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
    hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true
  };
  el.textContent = now.toLocaleString('en-GB', opts);
}
setInterval(updateClock, 1000);
updateClock();

function handleSubmit() {
  const start = new Date(document.getElementById("from").value);
  const end = new Date(document.getElementById("to").value);
  const now = new Date();
  
  if (end <= start) {
    alert("'Booking To' must be after 'Booking From'.");
    return false;
  }
  
  const diff = (start - now) / (1000*60*60);
  if (diff < 3) {
    alert("⚠️ Book at least 3 hours before the requested time.");
    return false;
  }
  
  setTimeout(() => {
    document.getElementById("bookingForm").reset();
    document.getElementById("successMessage").style.display = "block";
    setTimeout(() => {
      document.getElementById("successMessage").style.display = "none";
    }, 5000);
  }, 800);
  
  return true;
}
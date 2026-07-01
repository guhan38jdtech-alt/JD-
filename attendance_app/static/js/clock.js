function updateClock() {
  const now = new Date();

  // Format Time: HH:MM:SS AM/PM
  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  const timeStr = String(hours).padStart(2, '0') + ':' + minutes + ':' + seconds + ' ' + ampm;

  // Format Date: Monday, May 25, 2026
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const dayName = days[now.getDay()];
  const monthName = months[now.getMonth()];
  const dateNum = now.getDate();
  const year = now.getFullYear();
  const dateStr = monthName + ' ' + dateNum + ', ' + year;

  const timeEl = document.getElementById('live-time');
  const dateEl = document.getElementById('live-date');
  const dayEl = document.getElementById('live-day');

  if (timeEl) timeEl.textContent = timeStr;
  if (dateEl) dateEl.textContent = dateStr;
  if (dayEl) dayEl.textContent = dayName;
}

// Run immediately and then every second
document.addEventListener('DOMContentLoaded', () => {
  updateClock();
  setInterval(updateClock, 1000);
});

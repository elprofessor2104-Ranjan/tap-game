
let count = parseInt(localStorage.getItem('tapCount')) || 0;
document.getElementById('count').innerText = count;

document.getElementById('tapBtn').addEventListener('click', () => {
  count++;
  localStorage.setItem('tapCount', count);
  document.getElementById('count').innerText = count;
});

function openModal(id) {
  document.getElementById(id).style.display = 'flex';
}
function closeModals() {
  document.querySelectorAll('.modal').forEach(m => m.style.display = 'none');
}

document.getElementById('redeemBtn').onclick = () => openModal('redeemModal');
document.getElementById('readTCBtn').onclick = () => openModal('tcModal');

document.querySelectorAll('[data-close]').forEach(btn => {
  btn.addEventListener('click', closeModals);
});

document.getElementById('redeemNow').addEventListener('click', () => {
  const upi = document.getElementById('upiInput').value.trim();
  const msg = document.getElementById('redeemMsg');

  if (!upi.includes('@')) {
    msg.style.color = 'red';
    msg.innerText = 'Enter valid UPI ID';
    return;
  }

  if (count < 100000) {
    msg.style.color = 'red';
    msg.innerText = 'Minimum 1,00,000 points required to redeem!';
    return;
  }

  msg.style.color = 'green';
  msg.innerText = 'Redeemed Successfully!';
  count = 0;
  localStorage.setItem('tapCount', 0);
  document.getElementById('count').innerText = 0;
});

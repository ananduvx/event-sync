
const API_URL = 'http://localhost:8080/api/meetings';

let meetings = [];

fetch(API_URL)
  .then(res => res.json())
  .then(data => {
    meetings = data;
    render(meetings);
  });

function render(data) {
  const table = document.getElementById('tableBody');
  table.innerHTML = '';

  data.forEach(m => {
    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${m.client || ''}</td>
      <td>${m.time || ''}</td>
      <td class="${m.location && m.location.conflict ? 'conflict' : ''}">
        ${m.location ? m.location.value : ''}
      </td>
      <td class="${m.status && m.status.conflict ? 'conflict' : ''}">
        ${m.status ? m.status.value : ''}
      </td>
    `;

    row.onclick = () => showDetails(m);
    table.appendChild(row);
  });
}

function showDetails(m) {
  alert(
    "Location: " + JSON.stringify(m.location?.sourceValues) + "\n" +
    "Status: " + JSON.stringify(m.status?.sourceValues)
  );
}

document.getElementById('search').addEventListener('input', function(e) {
  const val = e.target.value.toLowerCase();
  const filtered = meetings.filter(m =>
    (m.client || '').toLowerCase().includes(val)
  );
  render(filtered);
});

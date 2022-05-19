let table = document.getElementById("contatos");

function showAll(){
  table.innerHTML = "";
  fetch('http://localhost:3000/ListAll')
  .then(response => response.json())
  .then(data => show(data));
}

function show(data) {
  for (const cont of data) {
    table.innerHTML += 
    `<tr>
      <td>${cont.name}</td>
      <td>${cont.contato}</td>
      <td>${cont.email}</td>
    </tr>`;
  }
}
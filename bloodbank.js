document.addEventListener("DOMContentLoaded", () => {
  fetch("bloodbanks.json") 
    .then(response => response.json())
    .then(data => {
      const tableBody = document.querySelector("#bloodbankTable tbody");

      data.forEach(bank => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${bank.name}</td>
          <td>${bank.location}</td>
          <td>${bank.contact}</td>
          <td>${bank.stock["A+"]}</td>
          <td>${bank.stock["B+"]}</td>
          <td>${bank.stock["O+"]}</td>
          <td>${bank.stock["AB+"]}</td>
        `;
        tableBody.appendChild(row);
      });
    })
    .catch(error => console.error("Error loading bloodbanks.json:", error));
});

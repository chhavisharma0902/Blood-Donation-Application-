// Fetch blood bank data from JSON file and display in table
fetch("bloodbanks.json")
  .then(response => response.json())
  .then(data => {
    const tbody = document.querySelector("#bloodbankTable tbody");

    data.forEach(bank => {
      const row = document.createElement("tr");

      row.innerHTML = `
        <td>${bank.name}</td>
        <td>${bank.location}</td>
        <td>${bank.contact}</td>
        <td>${bank.available["A+"]}</td>
        <td>${bank.available["B+"]}</td>
        <td>${bank.available["O+"]}</td>
        <td>${bank.available["AB+"]}</td>
      `;

      tbody.appendChild(row);
    });
  })
  .catch(error => console.error("Error loading bloodbanks.json:", error));

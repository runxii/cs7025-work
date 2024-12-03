//var lenormand = ["Rider", "Clover", "Ship", "House"];

//document.getElementById("lenormand-table").innerHTML = lenormand.toString();

// Get data from an external JSON file

let dataSource="js/data.json";


fetch(dataSource)
    .then((response)=>{
        if(!response.ok){
            throw new Error("Cannot fetch data from selected JSON file.");
        }
        return response.json();
    })
    // Parse JSON data
    .then((data)=>{
        // Create a table element
        let table = document.createElement('table');
        table.style.width = '100%';
        table.setAttribute('border', '1');

        // Create table header
        let thead = table.createTHead();
        let headerRow = thead.insertRow();
        let headers = ['Order', 'Name', 'General Meaning', 'Time', 'Influence'];
        headers.forEach(headerText => {
            let th = document.createElement('th');
            th.appendChild(document.createTextNode(headerText));
            headerRow.appendChild(th);
        });

        // Create table body
        let tbody = table.createTBody();
        data.forEach(card => {
            const row = document.createElement('tr');
            const cellOrder = document.createElement('td');
            const cellName=document.createElement('td');
            const cellMeaning=document.createElement('td');
            const cellTime=document.createElement('td');
            const cellInfluence=document.createElement('td');

            console.log(card);
            cellOrder.textContent=card.order;
            cellName.textContent=card.name;
            cellInfluence.textContent=card.influence;
            cellMeaning.textContent=card.meaning.general;
            cellTime.textContent=card.meaning.time;


            // Add a class to the order cell
            cellOrder.classList.add("cell-order");
            cellMeaning.classList.add("cell-meaning");
            cellTime.classList.add("cell-time");

            row.appendChild(cellOrder);
            row.appendChild(cellName);
            row.appendChild(cellMeaning);
            row.appendChild(cellTime);
            row.appendChild(cellInfluence);

            tbody.appendChild(row);
        });
        table.appendChild(thead);
        table.appendChild(tbody);
        // Append the table to the div with id 'lenormand-table'
        document.getElementById('lenormand-table').appendChild(table);
    })
    .catch((error)=>{
        console.error("There was a problem with data fetch: ",error);
    })

// function for get input value by "id"
function getInputValue(id) {
    let inputValue = document.getElementById(id).value;
    return inputValue;
}

// function for showing data of area calculation
function showCalculation(serial, name, area) {
    const tableBody = document.getElementById("tableBody");
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td class="py-2 pl-4">
        ${serial}.
    </td>
    <td class="py-2 pr-4">
        ${name}
    </td>
    <td class="py-2 px-4">
        ${area}cm<sup>2</sup>
    </td>
    <td class="py-2 mx-2 px-4 bg-sky-500 rounded-lg text-white text-center">
        Covert to m<sup>2</sup>
    </td>
    `
    tableBody.appendChild(tr);
}


function genrateRandomColor() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    const rgb = `rgb(${red},${green},${blue})`
    return rgb;
}

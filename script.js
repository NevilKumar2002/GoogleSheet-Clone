const table = document.getElementById("my-table");
const theadRow = document.getElementById("table-heading-row");
const tableBody = document.getElementById("table-body");
const SelectedCell = document.getElementById("cell-selected");
// buttons
const boldButton = document.getElementById("bold-button");
const italicButton = document.getElementById("italic-button");
const underlineButton = document.getElementById("underline-button");
const leftAlignment=document.getElementById("left-btn");
const centerAlignment=document.getElementById("center-btn");
const rightAlignment= document.getElementById("right-btn");
const fontStyleDropdown= document.getElementById("font-style-dropdown");
const fontSizeDropdown= document.getElementById("font-size-dropdown")

const bgColorInput = document.getElementById("bgColor");
const fontColorInput = document.getElementById("fontColor");


const transparent = "transparent";
const transparentBlue = "#ddddff";
let cols = 26;
let rows = 100;
let currentcell;
let previouscell;
function cellGenerate(typeofcell, tableRow, isinnerText, rowNumber) {
  for (let col = 0; col < cols; col++) {
    const cell = document.createElement(typeofcell);
    if (isinnerText) {
      cell.innerText = String.fromCharCode(col + 65);
      cell.setAttribute("id", String.fromCharCode(col + 65));
    } else {
      // cell.setAttribute("id", ${String.fromCharCode(col+65)}${rowNumber})
      cell.setAttribute("id", `${String.fromCharCode(col + 65)}${rowNumber}`);
      cell.setAttribute("contenteditable", true);

      cell.addEventListener("focus", (event) => {
        // console.log(event.target.id);// event event.target      event.target.id
        displayCellData(event.target);
        // console.log(event);
      });
    }

    tableRow.append(cell);
  }
}
cellGenerate("th", theadRow, true);

function setHeaderColor(colId, rowId, color) {
  // console.log(colId, rowId);
  const colHead = document.getElementById(colId);
  const rowHead = document.getElementById(rowId);
  colHead.style.backgroundColor = color;
  rowHead.style.backgroundColor = color;
}

function displayCellData(celldata) {
  // console.log(celldata);
  currentcell = celldata;
  if (previouscell) {
    setHeaderColor(
      previouscell.id[0],
      previouscell.id.substring(1),
      "transparent"
    );
    // console.log(previouscell.id.substring(1))
  }
   if (currentcell.style.fontWeight === "bold") {
    boldButton.style.backgroundColor = transparentBlue;
  } else {
    boldButton.style.backgroundColor = transparent;
  }
  if (currentcell.style.fontStyle === "italic") {
    italicButton.style.backgroundColor = transparentBlue;
  } else {
    italicButton.style.backgroundColor = transparent;
  }
  if (currentcell.style.textDecoration === "underline") {
    underlineButton.style.backgroundColor = transparentBlue;
  } else {
    underlineButton.style.backgroundColor = transparent;
  }


  setHeaderColor(celldata.id[0], celldata.id.substring(1), "#ddddff");

  SelectedCell.innerHTML = `${celldata.id} is selected`;
  // console.log(celldata);
  previouscell = currentcell;
  // console.log(previouscell)
}

for (let i = 1; i <= rows; i++) {
  const tr = document.createElement("tr");
  const th = document.createElement("th");
  th.innerText = i;
  th.setAttribute("id", i);
  tr.append(th);
  cellGenerate("td", tr, false, i);
  tableBody.append(tr);
}
// addEventListener('click')

boldButton.addEventListener("click", () => {
    if (currentcell.style.fontWeight === "bold") {
      currentcell.style.fontWeight = "normal";
      boldButton.style.backgroundColor = transparent;
    } else {
      currentcell.style.fontWeight = "bold";
      boldBtn.style.backgroundColor = transparentBlue;
    }
  });
  
  italicButton.addEventListener("click", () => {
    if (currentcell.style.fontStyle=== "italic") {
      currentcell.style.fontStyle = "normal";
      italicButton.style.backgroundColor = transparent;
    } else {
      currentcell.style.fontStyle = "italic";
      italicButton.style.backgroundColor = transparentBlue;
    }
  });
  underlineButton.addEventListener("click", () => {
    if (currentcell.style.textDecoration=== "underline") {
      currentcell.style.textDecoration= "none";
      underlineButton.style.backgroundColor = transparent;
    } else {
      currentcell.style.textDecoration = "underline";
      underlineButton.style.backgroundColor = transparentBlue;
    }
  });

leftAlignment.addEventListener('click', ()=>{
    currentcell.style.textAlign = "left";
})
rightAlignment.addEventListener("click", () => {
    currentcell.style.textAlign = "right";
  });
  
  centerAlignment.addEventListener("click", () => {
    currentcell.style.textAlign = "center";
  });

  
  fontStyleDropdown.addEventListener("change", () => {
   
    currentcell.style.fontFamily = fontStyleDropdown.value;
  });
  
  fontSizeDropdown.addEventListener("change", () => {
    currentcell.style.fontSize = fontSizeDropdown.value;
  });
  bgColorInput.addEventListener("input", () => {
    currentcell.style.backgroundColor = bgColorInput.value;
  });
  
  fontColorInput.addEventListener("input", () => {
    currentcell.style.color = fontColorInput.value;
  });
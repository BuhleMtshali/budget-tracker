let inputContainer = document.getElementById("input-content-container");
const addBtn = document.getElementById("add-btn");
addBtn.addEventListener("click", addItem);
//start of function

function addItem() {
  let inputField = `
        <div class="salary">
          <input
            type="number"
            id="total-salary"
            placeholder="Enter your Salary..."
          />
        </div>
        <div class="input">
          <input type="text" placeholder="Enter Item..." id="item" />
          <input type="number" placeholder="Enter Amount..." id="amount" />
          <button id="add-input">Add</button>
        </div>
        <div class="list-container">
          <input type="text" id="output-item" />
          <input type="number" id="output-number" />
        </div>
      `;
  inputContainer.innerHTML = inputField;
}

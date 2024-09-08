let inputContainer = document.getElementById("input-content-container");
const addBtn = document.getElementById("add-btn");
addBtn.addEventListener("click", toggleForm);

//start of function
let isFormVisible = false;

function toggleForm() {
  if (!isFormVisible) {
    addItem();
  } else {
    inputContainer.innerHTML = "";
  }
  isFormVisible = !isFormVisible;
}

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
           <div class="list-container" id="list-container">   
          </div>
          <div class="summary">
                        <label>Total Expenses:</label>
                        <input type="number" id="total-expenses" value="0" readonly />
                        <label>Amount Left:</label>
                        <input type="number" id="total-left" value="0" readonly />
                        </div>
                        </div>
      `;
  inputContainer.innerHTML = inputField;
  let totalExpenses = 0;
  //second function
  document.getElementById("add-input").addEventListener("click", () => {
    let itemValue = document.getElementById("item").value;
    let amountValue = parseFloat(document.getElementById("amount").value);
    let salaryValue = parseFloat(document.getElementById("total-salary").value);

    if (itemValue && amountValue && salaryValue) {
      let list = document.getElementById("list-container");
      //creating a new list for the output
      let newItem = `<div class="list-item">
                        <input type="text" id="output-item" value="${itemValue}" readonly />
                        <input type="number" id="output-number" value="${amountValue}" readonly />
                        `;
      list.innerHTML += newItem;
      //updating total expenses
      totalExpenses += amountValue;
      document.getElementById("total-expenses").value = totalExpenses;

      //calculating remaining salary
      let totalLeft = salaryValue - totalExpenses;
      document.getElementById("total-left").value = totalLeft;

      //clearing the input fields after adding

      document.getElementById("item").value = "";
      document.getElementById("amount").value = "";
    } else {
      alert("Please fill out both fields before adding.");
    }
  });
}
//second event listener
/*function addTodoList() {
  let list = document.getElementById("list-container");
  let listContainer = `<input type="text" id="output-item" />
          <input type="number" id="output-number" />`;
  list.innerHTML = listContainer;
}*/

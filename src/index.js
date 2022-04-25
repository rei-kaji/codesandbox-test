import "./styles.css";

const onClickAdd = () => {
  // get text from inputbox
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createUncompleteList(inputText);
};

// delete from uncomplete-list
const deleteFromIncompleteList = (target) => {
  const deleteTarget = target;
  document.getElementById("uncomplete-list").removeChild(deleteTarget);
};

// add uncomplete-list
const createUncompleteList = (text) => {
  // create div tab
  const div = document.createElement("div");
  div.className = "list-row";

  // create li tab
  const li = document.createElement("li");
  li.innerText = text;

  // creat button
  const completeButton = document.createElement("button");
  completeButton.innerText = "Complete";
  completeButton.addEventListener("click", () => {
    deleteFromIncompleteList(completeButton.parentNode);

    // elements of adding completed-list
    const addTarget = completeButton.parentNode;
    const text = addTarget.firstElementChild.innerText;
    addTarget.textContent = null;

    // create li tab
    const li = document.createElement("li");
    li.innerText = text;

    // button_return
    const returnButton = document.createElement("button");
    returnButton.innerText = "Return";
    returnButton.addEventListener("click", () => {
      const deleteTarget = returnButton.parentNode;
      document.getElementById("completed-list").removeChild(deleteTarget);

      const text = addTarget.firstElementChild.innerText;
      createUncompleteList(text);

      // create li tab
      const li = document.createElement("li");
      li.innerText = text;
    });

    // appendChilid
    document.getElementById("completed-list").appendChild(addTarget);
    addTarget.appendChild(li);
    addTarget.appendChild(returnButton);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.addEventListener("click", () => {
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  // appendChilid
  document.getElementById("uncomplete-list").appendChild(div);
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
};
document.getElementById("add-button").addEventListener("click", () => {
  return onClickAdd();
});

const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

let itemCount = itemCountSpan.innerText;
let uncheckedCount = uncheckedCountSpan.innerText;


function newTodo() {
  //alert('New TODO button clicked!')
  var task = prompt('What is your task?')
  var confirmation = false;
  if (task != null && task != "") {
    confirmation = confirm('You want to add "' + task + '" to your list?')
  }
  //task = toString(task);
  if (confirmation && task != null) {
    itemCount++;
  	itemCountSpan.innerText = Number(itemCount);

  	uncheckedCount++;
  	uncheckedCountSpan.innerText = Number(uncheckedCount);

    var newItem = document.createElement("div");
    newItem.className = classNames.TODO_ITEM;
    //newItem.id = classNames.TODO_ITEM;

    var text = document.createTextNode(task);
    text.className = classNames.TODO_TEXT;
    //text.id = classNames.TODO_TEXT;
    newItem.append(text);

    var box = document.createElement("input");
    box.type = "checkbox";
    //box.id = classnames.TODO_CHECKBOX;
    box.className = classNames.TODO_CHECKBOX;
    box.addEventListener("click", function() {
      if (this.checked) {
        uncheckedCount--;
      }
      else {
        uncheckedCount++;
      }
      uncheckedCountSpan.innerText = Number(uncheckedCount);
    });

    newItem.prepend(box);

    var deletebutton = document.createElement("button");
    deletebutton.type = "submit";
    deletebutton.innerText = "Delete!";
    deletebutton.addEventListener("click", function() {
      var ele = this.parentNode
      var child = ele.childNodes
      child = child[0]
      if (!child.checked) {
        uncheckedCount--;
      }
      itemCount--;
      itemCountSpan.innerText = Number(itemCount);
      uncheckedCountSpan.innerText = Number(uncheckedCount);
      ele.parentNode.removeChild(ele);
    })

    newItem.append(deletebutton);

    list.append(newItem);
  }

}

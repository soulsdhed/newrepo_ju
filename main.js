const todoList = document.getElementById("todoList");
const addTodoBtn = document.todoForm.addTodoBtn;

addTodoBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const todo = document.todoForm.todo.value;

    if (todo === "") {
        alert("할 일을 입력하셔야 합니다.");
        return;
    }

    // li 생성
    const new_li = document.createElement("li");
    const new_txt = document.createTextNode(todo);

    // button 생성
    const new_button = document.createElement("button");
    const new_btn_text = document.createTextNode("삭제");

    new_button.appendChild(new_btn_text);

    new_li.appendChild(new_txt);
    new_li.appendChild(new_button);

    todoList.appendChild(new_li);

    new_button.style.marginLeft = "3px";
    new_button.addEventListener("click", () => {
        new_li.remove();
    });
});

const addButton = document.getElementById('addButton');
const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');

// タスクを追加する関数
function addTodo() {
  const text = todoInput.value;

  if (text === '') {
    alert('タスクを入力してください！');
    return;
  }

  // リストの項目を作る
  const li = document.createElement('li');
  li.textContent = text;

  // クリックしたら完了にする
  li.addEventListener('click', function() {
    li.style.textDecoration = 'line-through';
    li.style.color = '#aaa';
  });

  // 削除ボタンを作る
  const deleteButton = document.createElement('button');
  deleteButton.textContent = '🗑️';
  deleteButton.addEventListener('click', function(e) {
    e.stopPropagation();
    todoList.removeChild(li);
  });

  // リストに追加する
  li.appendChild(deleteButton);
  todoList.appendChild(li);

  // 入力欄を空にする
  todoInput.value = '';
}

// ボタンをクリックしたら追加
addButton.addEventListener('click', function() {
  addTodo();
});

// Enterキーでも追加できるようにする
todoInput.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    addTodo();
  }
});
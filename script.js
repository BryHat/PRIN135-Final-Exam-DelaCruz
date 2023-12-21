document.addEventListener('DOMContentLoaded', function () {
  var btnAdd = document.getElementById('btnAdd');
  var btnFIFO = document.getElementById('btnFIFO');
  var btnFILO = document.getElementById('btnFILO');
  var btnReset = document.getElementById('btnReset');

  btnAdd.addEventListener('click', function () {
    var title = document.getElementById('txtTitle').value;
    var details = document.getElementById('txtDetails').value;

    var todoItem = createTodoItem(title, details);

    var todoContainer = document.getElementById('todoContainer');
    todoContainer.appendChild(todoItem);

  });

  btnFIFO.addEventListener('click', function () {
    moveTodoToDone('todoContainer', 'doneContainer');
  });

  btnFILO.addEventListener('click', function () {
    moveTodoToDoneFILO('todoContainer', 'doneContainer');
  });

  btnReset.addEventListener('click', function () {
    var doneContainer = document.getElementById('doneContainer');
    var todoContainer = document.getElementById('todoContainer');
    doneContainer.innerHTML = '';
    todoContainer.innerHTML= '';
  });

  function createTodoItem(title, details) {
    var todoItem = document.createElement('div');
    todoItem.className = 'card';
    todoItem.innerHTML = '<div class="card-body"><h5 class="card-title">' + title + '</h5><p class="card-text">' + details + '</p></div>';
    return todoItem;
  }


  function moveTodoToDone(todoContainerId, doneContainerId) {
    var todoContainer = document.getElementById(todoContainerId);
    var doneContainer = document.getElementById(doneContainerId);

    while (todoContainer.children.length > 0) {// FIFO
      var todoItem = todoContainer.children[0];
      todoContainer.removeChild(todoItem);
      doneContainer.appendChild(todoItem);
    }
  }

  function moveTodoToDoneFILO(todoContainerId, doneContainerId) {
      var todoContainer = document.getElementById(todoContainerId);
      var doneContainer = document.getElementById(doneContainerId);

      while (todoContainer.children.length > 0) {
          var lastChildIndex = todoContainer.children.length - 1;
          var todoItem = todoContainer.children[lastChildIndex];
          todoContainer.removeChild(todoItem);
          doneContainer.appendChild(todoItem);
      }
  }


});

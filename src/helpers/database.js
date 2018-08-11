export const getData = dataType => (
  fetch(`http://localhost:4000/${dataType}/`, {
    method: 'get',
    mode: 'cors',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
  })
  .then(response => response.json())
  .then(jsonResponse => jsonResponse)
);

export const addNewList = list => (
  fetch('http://localhost:4000/lists/', {
    method: 'post',
    mode: 'cors',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify({
      list
    })
  })
  .then(response => response.json())
  .then(jsonResponse => jsonResponse)
);

export const addNewTask = task => (
  fetch('http://localhost:4000/tasks/', {
    method: 'post',
    mode: 'cors',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify({
      task
    })
  })
  .then(response => response.json())
  .then(jsonResponse => jsonResponse)
);

export const makeUpdate = (taskId, task) => (
  fetch(`http://localhost:4000/tasks/${taskId}`, {
    method: 'put',
    mode: 'cors',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify({
      task
    })
  })
  .then(response => response.json())
  .then(jsonResponse => jsonResponse)
);

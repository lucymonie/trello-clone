export function getData (dataType) {
  return fetch(`http://localhost:3000/${dataType}/`, {
    method: 'get',
    mode: 'cors',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
  }).then((response) => {
    return response.json();
  }).then((jsonResponse) => {
    return jsonResponse;
  });
}

export function addNewList (list) {
  return fetch('http://localhost:3000/lists/', {
    method: 'post',
    mode: 'cors',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify({
      list
    })
  }).then((response) => {
    return response.json();
  }).then((jsonResponse) => {
    return jsonResponse;
  });
}

export function addNewTask (task) {
  return fetch('http://localhost:3000/tasks/', {
    method: 'post',
    mode: 'cors',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify({
      task
    })
  }).then((response) => {
    return response.json();
  }).then((jsonResponse) => {
    return jsonResponse;
  });
}

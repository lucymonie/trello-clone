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

export function addNewItem (listOrTask, itemToAdd) {
  return fetch(`http://localhost:3000/${listOrTask}/`, {
    method: 'post',
    mode: 'cors',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify({
      itemToAdd
    })
  }).then((response) => {
    return response.json();
  }).then((jsonResponse) => {
    return jsonResponse;
  });
}

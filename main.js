// main.js
async function loadComponent(id, url) {
  const res = await fetch(url);
  const html = await res.text();
  document.getElementById(id).innerHTML = html;
}

loadComponent('header', 'header.html');
loadComponent('ready-to-test', 'ready-to-test.html');
loadComponent('in-development', 'in-development.html');
loadComponent('planned', 'planned.html');

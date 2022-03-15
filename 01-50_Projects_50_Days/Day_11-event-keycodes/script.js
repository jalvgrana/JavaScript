const insert = document.getElementById("insert");

window.addEventListener("keydown", (event) => {
  //console.log(e);
  insert.innerHTML = `
    <div class="key">
        ${event.key === " " ? "Space" : event.key}
        <small>event.key</small>
      </div>
      <div class="key">
        ${event.keyCode}
        <small>event.keyCode</small>
      </div>
      <div class="key">
        ${event.code}
        <small>event.code</small>
      </div>
    `;
});

//keydown: a keyboard event. entiendo que cuando presiono tecla
//e: passing a function as second argument & it's an event object
//e or event, becaue it can be anything you want.

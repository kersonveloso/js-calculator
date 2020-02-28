let display = 0;
let current = [];

$(document).ready(function() {
  $('App').prepend(`
    <div class="calculator grid-container">
    <div class="display display-item">${display}</div>
        <input class="pad-item num red" type="button" value="C" onclick="clr()">
        <input class="pad-item num" type="button" value="+/-" onclick="modify()">
        <input class="pad-item num" type="button" value="%" onclick="per('%')">
        <input class="pad-item ope" type="button" value="÷" onclick="insert('/')">
        <input class="pad-item num" type="button" value="7" onclick="insert('7')">
        <input class="pad-item num" type="button" value="8" onclick="insert('8')">
        <input class="pad-item num" type="button" value="9" onclick="insert('9')">
        <input class="pad-item ope" type="button" value="x" onclick="insert('*')">
        <input class="pad-item num" type="button" value="4" onclick="insert('4')">
        <input class="pad-item num" type="button" value="5" onclick="insert('5')">
        <input class="pad-item num" type="button" value="6" onclick="insert('6')">
        <input class="pad-item ope" type="button" value="-" onclick="insert('-')">
        <input class="pad-item num" type="button" value="1" onclick="insert('1')">
        <input class="pad-item num" type="button" value="2" onclick="insert('2')">
        <input class="pad-item num" type="button" value="3" onclick="insert('3')">
        <input class="pad-item ope" type="button" value="+" onclick="insert('+')">
        <input class="pad-item num col-span-2" type="button" value="0" onclick="insert('0')">
        <input class="pad-item num" type="button" value="." onclick="insert('.')">
        <input class="pad-item ope green" type="button" value="=" onclick="eql()">
    </div>
</div>
    `);
});

function clr() {
  current = [];
  display = 0;
  $(".display").html(display);
}

function insert(v) {
  current.push(v);
  display = current;
  $(".display").html(display);
}

function eql() {
  if (typeof display != "object") {
    display = [display];
  }
  display = eval(display.join(""));
  $(".display").html(display);
}

function per() {
  if (typeof display != "object") {
    display = [display];
  }
  display = eval(display.join("") + "/100");
  $(".display").html(display);
}

function modify() {
  if (typeof display != "object") {
    display = [display];
  }
  display = eval(display.join("") + "*(-1)");
  $(".display").html(display);
}

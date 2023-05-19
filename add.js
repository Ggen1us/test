
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}


var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  }
}


var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);



function newElement() {
  var inputValue = document.getElementById("myInput").value;
  var print = document.querySelector("#myUL");
  print.innerHTML += ` <li>
  <p>` + inputValue + `:</p>
  <div class="check">
      <input type="checkbox" id="check" name="check" checked>
      <label for="check1">
          <p class="status">На месте</p>
      </label>
  </div>
  <div class="check">
      <input type="checkbox" id="check" name="check" checked>
      <label for="check2">
          <p class="status">Отсутсвует</p>
      </label>
  </div>
  <div class="check">
      <input type="checkbox" id="check" name="check" checked>
      <label for="check3">
          <p class="status">Болеет</p>
      </label>
  </div>
</li>`


}


function clearInput() {
  var checkedBoxes = document.querySelectorAll('input[name=check]:checked');
  checkedBoxes.forEach(element => {
    element.checked = false
  });
}


var checked = document.querySelectorAll('myUL')


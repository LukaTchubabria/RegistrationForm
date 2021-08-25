//------------------------\\
    //burger menu\\
//------------------------\\

const menu_btn = document.getElementById('menu-btn');
const menu_popup = document.querySelector('.menu-popup');
const html = document.querySelector('html')


menu_btn.addEventListener('click', () => {
  menu_popup.classList.toggle('d-none')
});

html.addEventListener('click', () => {
  menu_popup.classList.add('d-none');
});

menu_btn.addEventListener('click', (e) => {
  e.stopPropagation();
});





//------------------------\\
    //Dropdown\\
//------------------------\\

const drop_down = document.querySelectorAll('.dropdown-el');


for (let i = 0; i < drop_down.length; i++) {
  drop_down[i].addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    drop_down[i].classList.toggle('expanded');
    var a = e.target.getAttribute('for')
    document.getElementById(a).checked = true;
  });
  document.addEventListener('click', () => {
    drop_down[i].classList.remove('expanded');
  })
}




//------------------------\\
//popup\\
//------------------------\\

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];


btn.addEventListener('click', () => {
  modal.style.display = "block";

  let name = document.getElementById("name").value;
  let lname = document.getElementById("lname").value;
  let place = document.getElementById("place").value;
  let position = document.getElementById("position").value;
  let mail = document.getElementById("mail").value;

  document.getElementById("txt-name").innerHTML = name;
  document.getElementById("txt-lname").innerHTML = lname;
  //   document.getElementById("txt-place").innerHTML = place;
  //   document.getElementById("txt-position").innerHTML = position;
  document.getElementById("txt-mail").innerHTML = mail;
});

span.onclick = function () {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}






//----------------------------------------\\
  //Hide password or show password\\
//----------------------------------------\\

const togglePassword = document.querySelector('#togglePassword');
const togglePassword_re = document.querySelector('#togglePassword-re');
const password = document.querySelector('#password');
const password_re = document.querySelector('#password-re');




togglePassword.addEventListener('click', function (e) {
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);

    if (this.classList.contains('icon-eyex')) {
        this.classList.remove('icon-eyex');
        this.classList.add('icon-eye');
    } else {
        this.classList.add('icon-eyex');
        this.classList.remove('icon-eye');
    }
});

togglePassword_re.addEventListener('click', function (e) {
    const type = password_re.getAttribute('type') === 'password' ? 'text' : 'password';
    password_re.setAttribute('type', type);

    if (this.classList.contains('icon-eyex')) {
        this.classList.remove('icon-eyex');
        this.classList.add('icon-eye');
    } else {
        this.classList.add('icon-eyex');
        this.classList.remove('icon-eye');
    }
});
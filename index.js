// form one persion inputs
function myresult() {
  var userName = document.getElementById("uName").value;
  var userEmail = document.getElementById("uEmail").value;
  var userMobile = document.getElementById("uTel").value;
  var userPlace = document.getElementById("uPlace").value;

  // menu item inputs

  let vegBPrice = document.getElementById("veg-B").value;
  let nonVegPrice = document.getElementById("Non-veg-B").value;
  let mandhiPrice = document.getElementById("Mandhi").value;
  let whiteRicePrice = document.getElementById("White-R").value;
  let entergst = document.getElementById("gst").value;

  // if (vegBPrice==""){
  //     vegBPrice=0;
  // }

  let menuitem = [
    parseInt(vegBPrice),
    parseInt(nonVegPrice),
    parseInt(mandhiPrice),
    parseInt(whiteRicePrice),
    parseInt(entergst),
  ];
  let sum = 0;
  for (let i = 0; i < menuitem.length - 1; i++) {
    sum = sum + menuitem[i];
  }
  let gstpersentage = entergst;
  entergst = (sum * entergst) / 100;
  let gsttotal = entergst + sum;
  const tip = 1000;
  let totalamount = tip + gsttotal;

  // output values
  document.getElementById("getrslt").innerHTML =
    "</br>" +
    "Personal Detail" +
    "<br> <br>" +
    "Name :&nbsp " +
    userName +
    "<br>" +
    "Email :&nbsp  " +
    userEmail +
    "<br>" +
    "Mobile No :&nbsp " +
    userMobile +
    "<br>" +
    "Place :&nbsp  " +
    userPlace +
    "<br> <br>" +
    "Menu <br><br>" +
    "Total Amount : " +
    sum +
    "<br>" +
    "GST persentage &nbsp " +
    gstpersentage +
    "%" +
    "&nbsp" +
    " GST Ammout : " +
    entergst +
    "<br>" +
    " Total : " +
    gsttotal +
    "<br>" +
    " Tip amount is : " +
    tip +
    "<br>" +
    "<h5 style='color:black'> Total Amount with Tip : </h5> " +
    totalamount +
    "<br> <br> ";
}

//button onclick

// const main=document.querySelector(".ul-li");
// const closer=document.querySelector(".burger2 img");
// const opend = document.querySelector(".burger img");

// closer.addEventListener('click', show);
// opend.addEventListener('click', close);

// function show(){

//     main.style.color="blue";
//     main.style.display='flex';
//     main.style.top='0';

// }

// show();

// function close(){
// main.style.top='-100%';

// }
// close();

const mainmenu = document.querySelector(".ul-li");
const closemenu = document.querySelector(".closeburger");
const openmenu = document.querySelector(".openburger");

openmenu.addEventListener("click", show);
closemenu.addEventListener("click", close);

function show() {
  mainmenu.style.display = "flex";
  mainmenu.style.top = "0";
}

function close() {
  mainmenu.style.top = "-100%";
}
// ---------------------------------------------------------------------------------------------------------------

function lunch() {
  document.getElementById("menu1").style.display = "none";
  document.querySelector(".menu2").style.display = "block";
  document.querySelector("#btn").style.color = "green";
  document.getElementById("menu3").style.display = "none";
}

function tiffin() {
  document.getElementById("menu1").style.display = "block";
  document.querySelector("#menu2").style.display = "none";
  document.getElementById("menu3").style.display = "none";

  //   document.getElementById("menu2").style.display = "none";
}

function dinner() {
  // alert("hai");
  document.getElementById("menu3").style.display = "block";
  document.querySelector("#menu2").style.display = "none";
  document.getElementById("menu1").style.display = "none";
}

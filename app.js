const getElement = (selector) => document.querySelector(selector);

const modal = getElement("#registerformModal");
const modal2 = getElement("#loginformModal");
const loginForm = getElement("#loginform .modal-content-l form");
const navParagraph = getElement("#nav p");
const navUsername = getElement("#nav-username");
const grpStatus = getElement("#content-right #btns #grp-status");
const followBtn = getElement("#content-right #groups #group-inner button");
const blogBtn = getElement("#blog-login-btn-inner");

const formBtn1 = getElement("#registerform .modal-content-l form button");
const formBtn2 = getElement("#loginform .modal-content-l form button");

const open = getElement("#nav p, #nav p span");
const close = getElement(".close");
const signup = getElement("#action span");
const createAcc = getElement("#loginform #action span");
const signup2 = getElement("form #signin-span ");
const createAcc2 = getElement("form #createacc-span");
const closeBtn = getElement("#mobile-form-inner #form-close");

open.addEventListener("click", function () {
  console.log("Open clicked");
  modal.style.display = "block";
});

signup.addEventListener("click", function () {
  console.log("signup clicked");
  modal.style.display = "none";
  modal2.style.display = "block";
});

createAcc.addEventListener("click", function () {
  console.log("Create account clicked");
  modal2.style.display = "none";
  modal.style.display = "block";
});

close.addEventListener("click", function () {
  console.log("Close clicked");
  modal.style.display = "none";
  modal2.style.display = "none";
});

formBtn1.addEventListener("click", function () {
  modal.style.display = "none";
  modal2.style.display = "block";
});

formBtn2.addEventListener("click", function () {
  modal2.style.display = "none";
  navParagraph.style.display = "none";
  navUsername.style.display = "flex";
  grpStatus.innerHTML = "Leave Group";
  grpStatus.style.cssText = `
    color: #6A6A6B;
    font-family: a;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    border-radius: 4px;
    border: 0.8px solid #989899;
    background: #FFF;
  `;
  getElement("#loc span").innerHTML = "|Enter your location";
  getElement("#loc span").style.cssText = `
    color: #808080;
    font-family: a;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-right: 30%;
  `;
  getElement("#content-right #groups").style.display = "flex";
});

followBtn.addEventListener("click", function () {
  followBtn.innerHTML = "Followed";
  followBtn.style.cssText = `
    width: 7.3rem;
    height: 2.4rem;
    border-radius: 14px;
    background: #000;
    color: #FFF;
    text-align: center;
    font-family: a;
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  `;
});

blogBtn.addEventListener("click", function () {
  getElement("#registerform-mobile").style.display = "block";
});

signup2.addEventListener("click", function () {
  getElement("#registerform-mobile").style.display = "none";
  getElement("#loginform-mobile").style.display = "block";
});

createAcc2.addEventListener("click", function () {
  getElement("#loginform-mobile").style.display = "none";
  getElement("#registerform-mobile").style.display = "block";
});

closeBtn.addEventListener("click", function () {
  getElement("#registerform-mobile").style.display = "none";
  getElement("#loginform-mobile").style.display = "none";
});

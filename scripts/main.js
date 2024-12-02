const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/tree1.png") {
    myImage.setAttribute("src", "images/love-pic.jpg");
  } else {
    myImage.setAttribute("src", "images/tree1.png");
  }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    const myName = prompt("请写下你的名字吧~");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Merry Christmas, ${myName}`;
}
if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Merry Christma, ${storedName}`;
  }   
      myButton.onclick = function () {
        setUserName();
      };
      
// import "./Components/app-modal.js";
// import moduleName from 'module'

// Open Modal
const openModalBtn = document.querySelector("#open-modal");
const appModal = document.querySelector("app-modal");

appModal.addEventListener("open", () => {
    // code...
    // alert("Da duoc mo");
});

appModal.addEventListener("close", () => {
    // code...
    // alert("Da dong");
});

openModalBtn.addEventListener("click", () => {
    appModal.open();
});

import "./Components/app-modal.js";

// Open Modal
const openModalBtn = document.querySelector("#open-modal");
const appModal = document.querySelector("app-modal");
console.log(appModal);

// appModal.addEventListener("open", () => {
//     // code...
//     // alert("Da duoc mo");
// });

const cancelBtn = appModal.shadowRoot.querySelector("#close-btn");

appModal.addEventListener("close", () => {
    // code...
    // alert("Da dong");
    appModal.close();
});

openModalBtn.addEventListener("click", () => {
    appModal.open();
});

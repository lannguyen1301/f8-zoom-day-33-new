import "./Components/app-modal.js";

// Open Modal

// Lấy nút mở modal từ DOM để gắn sự kiện click.
const openModalBtn = document.querySelector("#open-modal");

// Truy cập trực tiếp vào custom element <app-modal> để gọi các phương thức như .open() và .close().
const appModal = document.querySelector("app-modal");
console.log(appModal);

appModal.addEventListener("close", () => {
    // code...
    // alert("Da dong");
    appModal.close();
});

openModalBtn.addEventListener("click", () => {
    appModal.open();
});

import "./Components/app-modal.js";

// Open Modal

// Lấy nút mở modal từ DOM để gắn sự kiện click.
const openModalBtn = document.querySelector("#open-modal");

// Truy cập trực tiếp vào custom element <app-modal>
// để gọi các phương thức như .open() và .close().
const appModal = document.querySelector("app-modal");
console.log(appModal); //Debug: kiểm tra xem phần tử đã được lấy đúng chưa.

// Lắng nghe sự kiện close do modal phát ra (có thể từ nút Cancel, nút X, hoặc phím Escape).
appModal.addEventListener("close", () => {
    // code...
    alert("Da dong modal");
    // Gọi appModal.close() để thực hiện đóng modal
});

// bấm nút “Open Modal”, gọi appModal.open() để hiển thị modal.
openModalBtn.addEventListener("click", () => {
    appModal.open();
});

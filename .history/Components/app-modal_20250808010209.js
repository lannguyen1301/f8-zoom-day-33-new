class AppModal extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    open() {
        const template = document.createElement("template");

        // cach 1
        template.setAttribute("id", "app-modal-tpl");

        /**
         * cach 2
          template.id = "app-modal-tpl";
         */
        //

        template.innerHTML = `

        <!-- Thêm CSS Internals -->
        <style>
            * {
                padding: 0;
                margin: 0;
                box-sizing: border-box;
            }

            :host {
                --app-modal-heading-color: #560bad;
                --app-modal-padding: 60px
                    /* màu mặc định đang là màu đỏ */
            }

            .main {
            margin: 0;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background: linear-gradient(135deg, #f0f4f8, #d9e2ec);
            font-family: "Segoe UI", sans-serif;
            }

            .card {
                background: white;
                padding: 40px;
                border-radius: 12px;
                box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
                text-align: center;
                min-width: 450px;
            }

            .card h1 {
                margin-bottom: 20px;
                color: #560bad;
            }

            /* From Uiverse.io by cssbuttons-io */
            button {
                --color: #560bad;
                font-family: inherit;
                display: inline-block;
                width: 8em;
                height: 2.6em;
                line-height: 2.5em;
                margin: 20px;
                position: relative;
                cursor: pointer;
                overflow: hidden;
                border: 2px solid var(--color);
                transition: color 0.5s;
                z-index: 0;
                font-size: 17px;
                border-radius: 6px;
                font-weight: 500;
                color: var(--color);
            }
            button:before {
                content: "";
                position: absolute;
                z-index: -1;
                background: var(--color);
                height: 150px;
                width: 200px;
                border-radius: 50%;
            }

            button:hover {
                color: #fff;
            }

            button:before {
                top: 100%;
                left: 100%;
                transition: all 0.7s;
            }

            button:hover:before {
                top: -30px;
                left: -30px;
            }

            button:active:before {
                background: #3a0ca3;
                transition: background 0s;
            }

            .modal {
                position: fixed;
                inset: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                transform: scale(0.5);
                pointer-events: none;
                transition: transform 0.5s ease;
            }

            .modal.show {
                transform: scale(1);
                pointer-events: auto;
            }

            .modal.hidden {
                transform: scale(0.5);
                pointer-events: none;
                transition: transform 0.5s ease;
            }

            .inner {
                max-width: 600px;
                padding: var(--app-modal-padding, 20px);
                border-radius: 10px;
                background: #fff;
                position: relative;
                max-height: 450px;
                overflow-y: auto;
                /*box-shadow: 0 0 10px red;*/
            }

            .header {
                margin-bottom: 20px;
            }

            .content {
                margin-bottom: 20px;
                line-height: 1.5rem
            }

            .heading {
                color: var(--app-modal-heading-color, red);
            }

            .header, .content, .footer {
                background: #e1e1e1;
                padding: 20px;
                border-radius: 10px;
                border: 1px solid #a9a9a9;
            }

            .modal span.sp-close {
                display: block;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                background: #f0f0f0;
                text-align: center;
                color: #560bad;
                font-size: 1.5rem;
                border: 1px solid #560bad;
                position: absolute;
                top: 12px;
                left: auto;
                right: 20px;
                transition: background 0.5s ease;
            }

            .modal span.sp-close:hover {
                cursor: pointer;
                background: #560bad;
                color: #fff;
                border: 2px solid orange;
            }


            .modal .footer {
            /* background-color: red; */
            /* border-radius: 10px; */
            }

        </style>
        <div class="modal">
            <div class="inner">
                <div class="header" slot="header">
                    <div class="circle"></div>
                    <span id="sp-close" class="sp-close">x</span>
                    <h2 class="heading" id="heading">F8 ZOOM DAY 33 Components</h2>
                </div>
                <div class="content" slot="content">
                    <h2>
                        1. JavaScript không chỉ là ngôn ngữ, nó là tư duy
                    </h2>
                    <p>
                        JavaScript dạy bạn cách suy nghĩ linh hoạt. Một biến có thể là số, chuỗi, hoặc một hàm — và điều đó không phải là
                        lỗi, mà là sức mạnh. Khi bạn hiểu được cách JS xử lý bất đồng bộ, closure, và hoisting, bạn không chỉ học ngôn ngữ,
                        bạn đang học cách nhìn thế giới dưới góc độ logic và phản xạ.
                    </p>

                    <h2>
                        2. Bất đồng bộ không phải là trở ngại, mà là nghệ thuật
                    </h2>
                    <p>
                        Trong JavaScript, mọi thứ đều có thể xảy ra “sau một chút”. setTimeout, Promise, async/await — chúng không làm bạn
                        chậm lại, chúng giúp bạn kiểm soát thời gian. Khi bạn hiểu được vòng lặp sự kiện (event loop), bạn không còn sợ
                        callback hell, mà bạn thấy được vẻ đẹp của việc điều phối luồng dữ liệu như một nhạc trưởng.
                    </p>

                    <h2>
                        3. Code đẹp không phải là code chạy được — mà là code dễ hiểu
                    </h2>
                    <p>
                        Một đoạn code JavaScript chạy đúng là điều cần thiết. Nhưng một đoạn code mà người khác đọc vào hiểu ngay, sửa được,
                        mở rộng được — đó mới là đẳng cấp. Hãy viết code như thể bạn đang viết cho chính mình 6 tháng sau, khi bạn đã quên
                        hết mọi thứ. Đó là lúc bạn biết mình đã viết tốt.
                    </p>

                    <h2>
                        4. Những câu châm ngôn dân lập trình JavaScript hay dùng:
                    </h2>
                    <p>
                        “If it works, don’t touch it.” → Câu kinh điển. Code đang chạy ngon lành thì đừng “tò mò” sửa, kẻo lại mở hộp
                        Pandora.
                    </p>
                    <p>
                        “Never refactor on a Friday.” → Đừng bao giờ sửa code vào cuối tuần. Bạn không muốn dành cả thứ Bảy để rollback đâu.
                    </p>
                    <p>
                        “Code không bug là code chưa chạy đủ lâu.” → Một cách nói vui rằng bug là điều tất yếu, chỉ là chưa xuất hiện thôi.
                    </p>
                    <p>
                        “JavaScript: Where false == true is almost true.” → Một cú troll nhẹ về sự kỳ quặc của coercion trong JS.
                    </p>
                    <p>
                        “Đừng cố thông minh hơn trình duyệt.” → Trình duyệt đã xử lý rất nhiều thứ phức tạp. Đừng viết code kiểu “hacky” để
                        vượt mặt nó.
                    </p>
                </div>

                <div class="footer" extends ParentClass { super() } slot="footer">
                    <button id="close-btn">Cancel</button>
                    <button>Confirm</button>
                </div>
            </div>
        </div>
        `;

        const templateContent = template.content.cloneNode(true);
        // template.content: truy câp vào nội dung bên trong thẻ template, tạo bản copy toàn bộ nội dung bên trong thẻ template.

        this.shadowRoot.appendChild(templateContent);
        // Gắn nội dung đã clone vào shadowRoot của component.

        const modal = this.shadowRoot.querySelector(".modal");
        const closeBtn = this.shadowRoot.querySelector(".sp-close"); // dau X de dong modal
        if (!closeBtn) console.warn("Không tìm thấy nút đóng (X)");

        const cancelBtn = this.shadowRoot.querySelector("#close-btn"); // button cancel
        if (!cancelBtn) console.warn("Không tìm thấy nút Cancel");

        // Hiển thị modal
        requestAnimationFrame(() => {
            modal.classList.add("show");
            // requestAnimationFrame là hàm có sẵn trong js tạo chuyển động mượt mà
            // requestAnimationFrame: Đảm bảo class .show được thêm sau khi DOM render xong
        });

        // Đóng modal khi bấm nút X
        closeBtn.addEventListener("click", () => this.close());

        // Đóng modal khi bấm nút Cancel
        cancelBtn.addEventListener("click", () => this.close());

        // cách 2
        // cancelBtn.onclick = () => {
        //     this.close(); // this = appModal
        // };
        // console.log(cancelBtn);

        // đóng modal khi dùng phím esc
        const escHandler = (e) => {
            if (e.key === "Escape") this.close();
        };

        document.addEventListener("keydown", escHandler);

        // Đóng khi click ra ngoài
        modal.addEventListener("click", (e) => {
            if (e.target === modal) this.close();
        });

        // Lưu lại để cleanup khi đóng
        this._escHandler = escHandler;

        console.log(templateContent); // debug
    }

    close() {
        // tìm phần tử modal trong shadow DOM thông qua truy vấn class modal
        const modal = this.shadowRoot.querySelector(".modal");

        // Nếu không tìm thấy modal thì thoát luôn
        if (!modal) {
            console.warn("Không tìm thấy modal để đóng.");
            return;
        }

        // gỡ class show khỏi modal
        modal.classList.remove("show");

        // add css transition khi gỡ class show
        // Hiển thị modal
        // modal.classList.add("hidden");

        requestAnimationFrame(() => {
            modal.classList.add("hidden");
            // requestAnimationFrame là hàm có sẵn trong js tạo chuyển động mượt mà
            // requestAnimationFrame: Đảm bảo class .show được thêm sau khi DOM render xong
        });

        modal.addEventListener(
            // sau khi thực hiện hết các transition thì mới đóng
            "transitionend",
            () => {
                this.shadowRoot.innerHTML = "";
            },
            { once: true }

            // transitionend: Lắng nghe khi hiệu ứng kết thúc để xoá modal khỏi DOM
        );

        // Sau khi transition xong thì xoá modal khỏi DOM
        // requestAnimationFrame(() => {
        //     // Cleanup sự kiện
        //     document.removeEventListener("keydown", this._escHandler);
        //     // escHandler	Lưu lại hàm xử lý Escape để có thể xoá khi đóng
        // });
    }
}

// Call Function
customElements.define("app-modal", AppModal);

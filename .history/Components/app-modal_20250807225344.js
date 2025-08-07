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
                background: rgba(0, 0, 0, 0.6);
                /* code lỗi hãy xoá đoạn này nhé*/
                opacity: 0;
                transform: scale(0.95);
                visibility: hidden;
                pointer-events: none;
                transition: opacity 0.3s ease, transform 0.3s ease;
            }

           /* code lỗi hãy xoá đoạn này nhé*/
            .modal.show {
                opacity: 1;
                transform: scale(1);
                visibility: visible;
                pointer-events: auto;
            }

            .inner {
                min-width: 400px;
                padding: var(--app-modal-padding, 20px);
                border-radius: 10px;
                background: #fff;
                position: relative;

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
            // background-color: red;
            // border-radius: 10px;
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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, totam.</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium voluptas veniam ea in magni
                        temporibus.
                    </p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente aspernatur quod suscipit? Voluptas
                        quae ea
                        dolorem vero. Omnis, eius soluta!</p>
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

        // Sau khi transition xong thì xoá modal khỏi DOM
        requestAnimationFrame(() => {
            modal.addEventListener(
                "transitionend",
                () => {
                    this.shadowRoot.innerHTML = "";
                },
                { once: true }

                // transitionend: Lắng nghe khi hiệu ứng kết thúc để xoá modal khỏi DOM
            );

            // Cleanup sự kiện
            document.removeEventListener("keydown", this._escHandler);
            // escHandler	Lưu lại hàm xử lý Escape để có thể xoá khi đóng
        });
    }
}

// Call Function
customElements.define("app-modal", AppModal);

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

            

            /* From Uiverse.io by cssbuttons-io */
            button {
                --color: #560bad;
                font-family: inherit;
                display: inline-block;
                width: 8em;
                height: 2.6em;
                line-height: 2.5em;
                /*margin: 20px;*/
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
                background: rgba(0, 0, 0, 0.6);
                opacity: 0;
                transition: opacity 0.3s ease;
            }
            
            .modal.visible {
                opacity: 1;

            }
            
            .inner {
                position: relative;
                inset: 0;
                background: #fff;
                border-radius: 10px;
                padding: 20px;
                min-width: 350px;
                max-width: 600px;
                transform: scale(0.5);
                opacity: 0;
                transition: opacity 0.3s ease, transform 0.3s ease;
                max-height: 500px;
                overflow: auto;
            }

            .inner.show {
                transform: scale(1);
                opacity: 1;
            }
            
            .inner.hide {
                transform: scale(0.5);
                opacity: 0;

            }

            .inner::-webkit-scrollbar {
                border-radius: 10px;
                width: 10px;
            }

            .inner::-webkit-scrollbar-thumb {
                border-radius: 10px;
                background: #777;
                width: 10px;
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
                position: absolute;
                display: block;
                right: 20px;
                top: 20px;
                width: 30px;
                height: 30px;
                border-radius: 50%;
                border: 2px solid orange;
                text-align: center;
                padding-top: 3px;
                padding-left: 2px;
            }

            .modal span.sp-close:hover {
                color: #fff;
                background: #560bad;
                border: 2px solid grey;
            }

            .modal .footer {
            }

            .footer .btn-group {
                display: flex;
                gap: 20px;
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
            <h2 class="heading">
                1. JavaScript không chỉ là ngôn ngữ, nó là tư duy
            </h2>
            <p class="desc">
                JavaScript dạy bạn cách suy nghĩ linh hoạt. Một biến có thể là số, chuỗi, hoặc một hàm — và điều đó
                không
                phải là
                lỗi, mà là sức mạnh. Khi bạn hiểu được cách JS xử lý bất đồng bộ, closure, và hoisting, bạn không
                chỉ học
                ngôn ngữ,
                bạn đang học cách nhìn thế giới dưới góc độ logic và phản xạ.
            </p>

            <h2 class="heading">
                2. Bất đồng bộ không phải là trở ngại, mà là nghệ thuật
            </h2>
            <p class="desc">
                Trong JavaScript, mọi thứ đều có thể xảy ra “sau một chút”. setTimeout, Promise, async/await — chúng
                không
                làm bạn
                chậm lại, chúng giúp bạn kiểm soát thời gian. Khi bạn hiểu được vòng lặp sự kiện (event loop), bạn
                không còn
                sợ
                callback hell, mà bạn thấy được vẻ đẹp của việc điều phối luồng dữ liệu như một nhạc trưởng.
            </p>

            <h2 class="heading">
                3. Code đẹp không phải là code chạy được — mà là code dễ hiểu
            </h2>
            <p class="desc">
                Một đoạn code JavaScript chạy đúng là điều cần thiết. Nhưng một đoạn code mà người khác đọc vào hiểu
                ngay,
                sửa được,
                mở rộng được — đó mới là đẳng cấp. Hãy viết code như thể bạn đang viết cho chính mình 6 tháng sau,
                khi bạn
                đã quên
                hết mọi thứ. Đó là lúc bạn biết mình đã viết tốt.
            </p>

            <h2 class="heading">
                4. Những câu châm ngôn dân lập trình JavaScript hay dùng:
            </h2>
            <p class="desc">
                “If it works, don’t touch it.” → Câu kinh điển. Code đang chạy ngon lành thì đừng “tò mò” sửa, kẻo
                lại mở
                hộp
                Pandora.
            </p>
            <p class="desc">
                “Never refactor on a Friday.” → Đừng bao giờ sửa code vào cuối tuần. Bạn không muốn dành cả thứ Bảy
                để
                rollback đâu.
            </p>
            <p class="desc">
                “Code không bug là code chưa chạy đủ lâu.” → Một cách nói vui rằng bug là điều tất yếu, chỉ là chưa
                xuất
                hiện thôi.
            </p>
            <p class="desc">
                “JavaScript: Where false == true is almost true.” → Một cú troll nhẹ về sự kỳ quặc của coercion
                trong JS.
            </p>
            <p class="desc">
                “Đừng cố thông minh hơn trình duyệt.” → Trình duyệt đã xử lý rất nhiều thứ phức tạp. Đừng viết code
                kiểu
                “hacky” để
                vượt mặt nó.
            </p>
        </div>

        <div class="footer" slot="footer">
            <div class="btn-group">
                <button id="close-btn">Cancel</button>
                <button>Confirm</button>
            </div>
        </div>
    </div>
</div>
        `;

        const templateContent = template.content.cloneNode(true);
        // template.content: truy câp vào nội dung bên trong thẻ template, tạo bản copy toàn bộ nội dung bên trong thẻ template.

        this.shadowRoot.appendChild(templateContent);
        // Gắn nội dung đã clone vào shadowRoot của component.

        const modal = this.shadowRoot.querySelector(".modal");
        const inner = this.shadowRoot.querySelector(".inner");
        const closeBtn = this.shadowRoot.querySelector(".sp-close"); // dau X de dong modal
        if (!closeBtn) console.warn("Không tìm thấy nút đóng (X)");

        const cancelBtn = this.shadowRoot.querySelector("#close-btn"); // button cancel
        if (!cancelBtn) console.warn("Không tìm thấy nút Cancel");

        // Hiển thị modal
        requestAnimationFrame(() => {
            modal.classList.add("visible");
            inner.classList.add("show");
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

        // tạo ra 1 sự kiện dispatchEvent, sự kiện này là sự kiện tuỳ chỉnh tên open
        this.dispatchEvent(new CustomEvent("open"));
    }

    close() {
        // tìm phần tử modal trong shadow DOM thông qua truy vấn class modal
        const modal = this.shadowRoot.querySelector(".modal");
        const inner = this.shadowRoot.querySelector(".inner");

        // Nếu không tìm thấy modal thì thoát luôn
        if (!modal || !inner) {
            console.warn("Không tìm thấy modal để đóng.");
            return;
        }

        // gỡ class show khỏi modal
        inner.classList.remove("show");
        inner.classList.add("hide");
        modal.classList.remove("visible");

        // add css transition khi gỡ class show
        // Hiển thị modal
        // modal.classList.add("hidden");

        // requestAnimationFrame(() => {
        //     modal.classList.add("hidden");
        //     // requestAnimationFrame là hàm có sẵn trong js tạo chuyển động mượt mà
        //     // requestAnimationFrame: Đảm bảo class .show được thêm sau khi DOM render xong
        // });

        inner.addEventListener(
            // sau khi thực hiện hết các transition thì mới đóng
            "transitionend",
            () => {
                this.shadowRoot.innerHTML = "";

                // tạo ra 1 sự kiện dispatchEvent, sự kiện này là sự kiện tuỳ chỉnh tên close
                this.dispatchEvent(new CustomEvent("close"));
            },
            { once: true }
            // once xoá bỏ hành động của .addEventListener sau khi gọi
            // nếu không dùng once thì .addEventListener vẫn nằm chở không thoát khỏi hàm.

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

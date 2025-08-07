// class AppModal extends HTMLElement {
//     constructor() {
//         super();
//         this.attachShadow({ mode: "open" });
//     }

//     connectedCallback() {
//         // cách 1
//         // this.removeAttribute("hidden");

//         // cách 2
//         this.hidden = false;
//     }

//     open() {
//         // Append Template
//         const template = document.querySelector("#app-modal-tpl");
//         const templateContent = template.content.cloneNode(true);
//         this.shadowRoot.appendChild(templateContent);

//         // this.addEventListener("click", () => {
//         //     this.close();
//         // });

//         // Set heading
//         // const heading = this.shadowRoot.querySelector("#heading");
//         // heading.textContent = this.getAttribute("heading");
//         this.dispatchEvent(new CustomEvent("open"));
//         // heading nằm ở <app-modal id="" heading="Modal 1"></app-modal>

//         this.shadowRoot.addEventListener("click", (e) => {
//             if (e.target.closest("#close-btn")) {
//                 this.close();
//             }
//         });
//     }
//     close() {
//         this.shadowRoot.innerHTML = "";

//         this.dispatchEvent(new CustomEvent("close"));
//     }
// }

// // gọi hàm
// customElements.define("app-modal", AppModal);

class AppModal extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.hidden = false;
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
            <!-- thêm css Externals  -->
        <link rel="stylesheet" href="./style.css">

        <!-- Thêm CSS Internals -->
        <style>
            * {
                padding: 0;
                margin: 0;
                box-sizing: border-box;
            }

            :host {
                --app-modal-heading-color: green;
                --app-modal-padding: 60px
                    /* màu mặc định đang là màu đỏ */
            }

            .modal {
                position: fixed;
                inset: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                background: rgba(0, 0, 0, 0.6);
            }

            .inner {
                min-width: 350px;
                padding: var(--app-modal-padding, 20px);
                border-radius: 10px;
                background: #fff;
                position: relative;
                /*  */

            }

            #heading {
                color: var(--app-modal-heading-color, red);
            }

            .modal span {
                width: 50px;
                height: 50px;
                font-size: 2rem;
                text-align: center;
                background: #ccc;
                margin: 0;
                position: absolute;
                border-radius: 50%;
            }
        </style>
        <div class="modal">
            <div class="inner">
                <div class="header">
                    <slot name="header"></slot>
                </div>
                <div class="content">
                    <slot name="content"></slot>
                    <h1 id="heading"></h1>
                </div>
                <div class="footer">
                    <slot name="footer"></slot>
                </div>
            </div>
        </div>
        `;

        this.shadowRoot.appendChild(template);
        console.log(template);
    }
}

// Call Function
customElements.define("app-modal", AppModal);

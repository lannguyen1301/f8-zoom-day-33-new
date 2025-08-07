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
        <!--<link rel="stylesheet" href="./style.css"> -->

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

span {
    display: block;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #f0f0f0;
    text-align: center;
    color: #560bad;
    font-size: 2rem;
    margin-left: auto;
    margin-right: 0;
    border: 1px solid #560bad;
}

        </style>
        <div class="modal">
            <div class="inner">
                <div class="header" slot="header">
            <div class="circle"></div>
            <span>x</span>
            <h1 id="heading">F8 ZOOM DAY 33 Components</h1>
        </div>
        <div slot="content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, totam.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium voluptas veniam ea in magni
                temporibus.
            </p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente aspernatur quod suscipit? Voluptas
                quae ea
                dolorem vero. Omnis, eius soluta!</p>
        </div>

        <div slot="footer">
            <button id="close-btn">Cancel</button>
            <button>Confirm</button>
        </div>
            </div>
        </div>
        `;

        const templateContent = template.content.cloneNode(true);
        this.shadowRoot.appendChild(templateContent);

        const cancelBtn = appModal.shadowRoot.querySelector("#close-btn");
        console.log(cancelBtn);

        console.log(templateContent);
    }
    close() {
        this.shadowRoot.innerHTML = "";

        this.dispatchEvent(new CustomEvent("close"));
    }
}

// Call Function
customElements.define("app-modal", AppModal);

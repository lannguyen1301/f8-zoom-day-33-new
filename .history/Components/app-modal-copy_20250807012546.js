class AppModal extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        // Ràng buộc ngữ cảnh cho sự kiện
        this.handleOutsideClick = this.handleOutsideClick.bind(this);
    }

    open() {
        const template = document.createElement("template");

        template.innerHTML = `
      <style>
        * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }

        :host {
          --app-modal-heading-color: #560bad;
          --app-modal-padding: 60px;
        }

        .modal {
          position: fixed;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 0, 0, 0.6);
          opacity: 0;
          transform: scale(0.95);
          transition: opacity 0.3s ease, transform 0.3s ease;
        }

        .modal.show {
          opacity: 1;
          transform: scale(1);
        }

        .modal.hide {
          opacity: 0;
          transform: scale(0.95);
        }

        .inner {
          min-width: 350px;
          padding: var(--app-modal-padding, 20px);
          border-radius: 10px;
          background: #fff;
          position: relative;
        }

        .header, .content, .footer {
          background: #e1e1e1;
          padding: 20px;
          border-radius: 10px;
          border: 1px solid #a9a9a9;
          margin-bottom: 10px;
        }

        .heading {
          color: var(--app-modal-heading-color, red);
        }

        .modal span {
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
          right: 20px;
          cursor: pointer;
        }
      </style>

      <div class="modal">
        <div class="inner">
          <div class="header">
            <span id="close-icon">x</span>
            <h1 class="heading" id="heading">F8 ZOOM DAY 33 Components</h1>
          </div>
          <div class="content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, totam.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium voluptas veniam ea in magni temporibus.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente aspernatur quod suscipit? Voluptas quae ea dolorem vero. Omnis, eius soluta!</p>
          </div>
          <div class="footer">
            <button id="close-btn">Cancel</button>
            <button>Confirm</button>
          </div>
        </div>
      </div>
    `;

        const content = template.content.cloneNode(true);
        this.shadowRoot.appendChild(content);

        // Gán biến tham chiếu
        this.modal = this.shadowRoot.querySelector(".modal");
        this.inner = this.shadowRoot.querySelector(".inner");

        // Gán sự kiện đóng
        const cancelBtn = this.shadowRoot.querySelector("#close-btn");
        const closeIcon = this.shadowRoot.querySelector("#close-icon");

        cancelBtn.onclick = () => this.close();
        closeIcon.onclick = () => this.close();

        // Đóng khi click ra ngoài
        this.modal.addEventListener("click", this.handleOutsideClick);

        // Kích hoạt animation mở
        requestAnimationFrame(() => {
            this.modal.classList.add("show");
        });
    }

    handleOutsideClick(e) {
        if (!this.inner.contains(e.target)) {
            this.close();
        }
    }

    close() {
        this.modal.classList.remove("show");
        this.modal.classList.add("hide");

        // Xóa khỏi DOM sau khi animation kết thúc
        setTimeout(() => {
            this.remove();
        }, 300);
    }
}

customElements.define("app-modal", AppModal);

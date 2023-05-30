
(() => {
  const refs = {
    openModalBtn: document.querySelectorAll("[data-order-open]"),
    closeModalBtn: document.querySelector("[data-order-close]"),
    modal: document.querySelector("[data-order]"),
  };
  refs.openModalBtn.forEach((btn) => {
       btn.addEventListener("click", toggleModal); 
  })

  if (refs.openModalBtn && refs.closeModalBtn && refs.modal) {

    refs.closeModalBtn.addEventListener("click", toggleModal);
  }

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();
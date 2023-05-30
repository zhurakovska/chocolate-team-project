(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-explore-open]"),
    closeModalBtn: document.querySelector("[data-explore-close]"),
    modal: document.querySelector("[data-explore]"),
    // submitBtn: document.querySelector(".subscribe-submit-btn")
  };

  if (refs.openModalBtn && refs.closeModalBtn && refs.modal) {
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
    // refs.submitBtn.addEventListener("click", toggleModal);
  }

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();
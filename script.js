const copyButton = document.querySelector(".copy-button");
const copyStatus = document.querySelector(".copy-status");

if (copyButton && copyStatus) {
  copyButton.addEventListener("click", async () => {
    const email = copyButton.dataset.email;

    try {
      await navigator.clipboard.writeText(email);
      copyStatus.textContent = "Email copiado.";
    } catch {
      copyStatus.textContent = email;
    }
  });
}

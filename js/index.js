const openGroupIntro = document.getElementById("openGroupIntro");
const groupIntroModal = document.getElementById("groupIntroModal");
const closeGroupIntro = document.getElementById("closeGroupIntro");

if (openGroupIntro && groupIntroModal && closeGroupIntro) {
  openGroupIntro.addEventListener("click", () => {
    groupIntroModal.classList.add("show");
  });

  closeGroupIntro.addEventListener("click", () => {
    groupIntroModal.classList.remove("show");
  });

  groupIntroModal.addEventListener("click", (e) => {
    if (e.target === groupIntroModal) {
      groupIntroModal.classList.remove("show");
    }
  });
}

const copyEmailButtons = document.querySelectorAll(".copy-email-btn");

function copyTextFallback(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "absolute";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}

copyEmailButtons.forEach((button) => {
  button.addEventListener("click", async () => {
    const email = button.getAttribute("data-email");
    if (!email) {
      return;
    }

    const originalText = button.textContent;

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(email);
      } else {
        copyTextFallback(email);
      }
      button.textContent = "已复制邮箱";
      button.classList.add("copied");
    } catch (error) {
      button.textContent = "复制失败，请手动复制";
    }

    window.setTimeout(() => {
      button.textContent = originalText;
      button.classList.remove("copied");
    }, 1800);
  });
});

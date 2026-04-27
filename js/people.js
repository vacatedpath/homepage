(() => {
  function formatText(text) {
    return String(text || "").replace(/\n/g, "<br>");
  }

  function escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text || "";
    return div.innerHTML;
  }

  function isImageSource(value) {
    const text = String(value || "").trim();
    return /^(data:image\/|https?:\/\/|images\/|\.\/images\/)/i.test(text) ||
      /\.(png|jpe?g|gif|webp|svg)$/i.test(text);
  }

  function parseAchievements(rawAchievements, fallbackText) {
    const raw = String(rawAchievements || "").trim();
    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          return parsed
            .map((item) => ({
              title: String(item?.title || "").trim(),
              meta: String(item?.meta || "").trim(),
            }))
            .filter((item) => item.title);
        }
      } catch (error) {
        // Fall back to plain-text parsing below.
      }
    }

    const fallback = String(fallbackText || "").trim();
    if (!fallback) {
      return [];
    }

    return fallback
      .split(/\n\s*\n/)
      .map((item) => item.trim())
      .filter(Boolean)
      .map((item) => {
        const match = item.match(/^(.*?)(?:（([^）]+)）)?$/);
        return {
          title: (match?.[1] || item).trim(),
          meta: (match?.[2] || "").trim(),
        };
      })
      .filter((item) => item.title);
  }

  function formatAchievements(rawAchievements, fallbackText) {
    const entries = parseAchievements(rawAchievements, fallbackText);
    if (!entries.length) {
      return "后续补充";
    }

    return entries
      .map((entry) => escapeHtml(entry.meta ? `${entry.title}（${entry.meta}）` : entry.title))
      .join("<br><br>");
  }

  function mountPeoplePage() {
    const memberCards = document.querySelectorAll(".member-card");
    const modal = document.getElementById("memberModal");
    const closeModalBtn = document.getElementById("closeModal");

    if (!memberCards.length || !modal || !closeModalBtn) {
      return;
    }

    const modalName = document.getElementById("modalName");
    const modalRole = document.getElementById("modalRole");
    const modalPhoto = document.getElementById("modalPhoto");
    const modalSummary = document.getElementById("modalSummary");
    const modalPapers = document.getElementById("modalPapers");
    const modalProjects = document.getElementById("modalProjects");
    const modalService = document.getElementById("modalService");
    const modalEmail = document.getElementById("modalEmail");
    const modalBlocks = Array.from(document.querySelectorAll(".modal-block"));
    const modalTitles = Array.from(document.querySelectorAll(".modal-block h3"));
    const navLinks = document.querySelectorAll(".side-nav a");
    const sections = document.querySelectorAll(".member-section");

    memberCards.forEach((card) => {
      card.addEventListener("click", () => {
        const name = card.getAttribute("data-name") || "";
        const role = card.getAttribute("data-role") || "";
        const photo = card.getAttribute("data-modal-photo") || "";
        const major = card.getAttribute("data-summary") || "";
        const grade = card.getAttribute("data-papers") || "";
        const direction = card.getAttribute("data-projects") || "";
        const achievement = card.getAttribute("data-service") || "";
        const achievements = card.getAttribute("data-achievements") || "[]";
        const email = card.getAttribute("data-email") || "";
        const hideAchievement = card.getAttribute("data-hide-achievement") === "1";

        modalName.textContent = name;
        modalRole.textContent = role;

        if (isImageSource(photo)) {
          modalPhoto.innerHTML = `<img src="${escapeHtml(photo)}" alt="${escapeHtml(name)}头像">`;
        } else {
          modalPhoto.textContent = "照片待补充";
        }

        if (modalTitles.length >= 5) {
          modalTitles[0].textContent = "专业";
          modalTitles[1].textContent = "年级";
          modalTitles[2].textContent = "研究方向";
          modalTitles[3].textContent = "学习成果";
          modalTitles[4].textContent = "联系邮箱";
        }

        modalSummary.innerHTML = formatText(major);
        modalPapers.innerHTML = formatText(grade);
        modalProjects.innerHTML = formatText(direction);
        modalEmail.textContent = email;

        if (hideAchievement) {
          modalBlocks[3]?.classList.add("is-hidden");
          modalService.innerHTML = "";
        } else {
          modalBlocks[3]?.classList.remove("is-hidden");
          modalService.innerHTML = formatAchievements(achievements, achievement);
        }

        modal.classList.add("show");
      });
    });

    closeModalBtn.addEventListener("click", () => {
      modal.classList.remove("show");
    });

    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.classList.remove("show");
      }
    });

    function setActiveLink() {
      let currentId = "";

      sections.forEach((section) => {
        if (window.scrollY >= section.offsetTop - 140) {
          currentId = section.id;
        }
      });

      navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${currentId}`);
      });
    }

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.forEach((item) => item.classList.remove("active"));
        link.classList.add("active");
      });
    });

    window.addEventListener("scroll", setActiveLink);
    window.addEventListener("load", setActiveLink);
    setActiveLink();
  }

  document.addEventListener("DOMContentLoaded", mountPeoplePage);
})();

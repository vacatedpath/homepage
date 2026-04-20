const memberCards = document.querySelectorAll(".member-card");
const modal = document.getElementById("memberModal");
const closeModalBtn = document.getElementById("closeModal");

const modalName = document.getElementById("modalName");
const modalRole = document.getElementById("modalRole");
const modalPhoto = document.getElementById("modalPhoto");
const modalSummary = document.getElementById("modalSummary");
const modalPapers = document.getElementById("modalPapers");
const modalProjects = document.getElementById("modalProjects");
const modalService = document.getElementById("modalService");
const modalEmail = document.getElementById("modalEmail");
const modalBlockTitles = document.querySelectorAll(".modal-block h3");

const advisorPaperLinks = [
  "https://webvpn.ccnu.edu.cn/https/77726476706e69737468656265737421e7e056d234336155700b8ca891472636a6d29e640e/science/article/pii/S0306457325002523",
  "https://webvpn.ccnu.edu.cn/https/77726476706e69737468656265737421e7e056d234336155700b8ca891472636a6d29e640e/science/article/abs/pii/S0306457324001262",
  "https://webvpn.ccnu.edu.cn/https/77726476706e69737468656265737421e7e056d234336155700b8ca891472636a6d29e640e/science/article/abs/pii/S0306457321003150",
  "https://webvpn.ccnu.edu.cn/https/77726476706e69737468656265737421e7e056d234336155700b8ca891472636a6d29e640e/org/science/article/pii/S1438887123008877",
  "https://webvpn.ccnu.edu.cn/https/77726476706e69737468656265737421e7e056d234336155700b8ca891472636a6d29e640e/science/article/abs/pii/S175115772400124X",
  "https://webvpn.ccnu.edu.cn/https/77726476706e69737468656265737421fcfe4f976923784277068ea98a1b203a54/article/10.1007/s11192-024-05031-1",
  "https://webvpn.ccnu.edu.cn/https/77726476706e69737468656265737421fcfe4f976923784277068ea98a1b203a54/article/10.1007/s11192-024-05093-1",
  "https://webvpn.ccnu.edu.cn/https/77726476706e69737468656265737421fcfe4f976923784277068ea98a1b203a54/article/10.1007/s11192-024-05156-3",
  "https://webvpn.ccnu.edu.cn/https/77726476706e69737468656265737421fcfe4f976923784277068ea98a1b203a54/article/10.1007/s10490-025-10078-6",
  "https://webvpn.ccnu.edu.cn/https/77726476706e69737468656265737421e7e056d234336155700b8ca891472636a6d29e640e/science/article/abs/pii/S1751157721001103",
  "https://webvpn.ccnu.edu.cn/https/77726476706e69737468656265737421e7e056d234336155700b8ca891472636a6d29e640e/science/article/abs/pii/S1751157721000961",
  "https://webvpn.ccnu.edu.cn/https/77726476706e69737468656265737421e2f2529926226b58300d8bbf9b5a6d36e960/c/whg7pz/search/details/n5e5hwa52r?db=buh",
  "https://direct.mit.edu/qss/article/3/4/1133/113635/Understanding-knowledge-role-transitions-A",
  "https://webvpn.ccnu.edu.cn/https/77726476706e69737468656265737421fbf952d2243e635930068cb8/kcms2/article/abstract?v=0YYC1NNgyEDevUEWH3VllUA3fVp1H-2pRIqywMaPSiGhJBstOE8Pu0PJsMxoqQ4VMXnuVRw0buG2DLv90Ud46kB5O72HHOvSY86A0lwWRXbMTypZcvLTrshCwspULv9HzvpLAuiSnj1W2Jd8zhpoIESRC_fAxiZQIAa8acRpzsk=&uniplatform=NZKPT",
  "https://webvpn.ccnu.edu.cn/https/77726476706e69737468656265737421fbf952d2243e635930068cb8/kcms2/article/abstract?v=-xbefZa1Cdt7LQO75iXLPpQ82E4ja99AyZdXDkTbQ6q4o_YDFoIi7emGZ5O02W93PxVB3uO7RPCd95_2xUHoB1-192LScJPHt62RXu7Cbv6nt1svx7QUEPWvYBI4BgO4CthPukkVBwN7vxcDLKl3AY3QGZdmU2O5ro-uz1aSGHE=&uniplatform=NZKPT",
  "https://webvpn.ccnu.edu.cn/https/77726476706e69737468656265737421fbf952d2243e635930068cb8/kcms2/article/abstract?v=NK8hpUzgeRVNwnEQRFoWWuqF5ZJLdNArBwidh9o8qXxg-nB6T8BMoyqGOwPAPgme84T_5JonKV6M0f36q_PfkAL2SmPSCcVPXrxhJ6sBwF-B-5Y1jihWfpZ6IxMwapKUWqHh_DYooF6CV-SodiJssYHntZC3AOmJVYZeXKgDmv0=&uniplatform=NZKPT",
  "https://webvpn.ccnu.edu.cn/https/77726476706e69737468656265737421fbf952d2243e635930068cb8/kcms2/article/abstract?v=r_P-ES8duRp0S_1LSanSppBSi1jhz4GUkuflfsCYrUEqgaqypgyDXIsxzPZeCvkbQKohHhbq-EiA0Is1w7Xx7eRKfQWl9XVLHOKdWqNyOifpItRHJzRN5LWZlS6gLYwaQqDfKbn29X8qLe-76o1ZJV-EYTfL55noEz-W6Cwm1DM=&uniplatform=NZKPT",
  "https://webvpn.ccnu.edu.cn/https/77726476706e69737468656265737421fbf952d2243e635930068cb8/kcms2/article/abstract?v=ifIT5_n5_Gf-SCkMES49QUCWMjcfOhzA6kxG1omDjOvE6-Vlezh2iKCRCyQXvKvcos4uUpRjw_cg1V2DShUkoac6NoHlGwnanq6HSFajCgZTLGXgyZZlqxCJ1S9QbNW7RyrKJ0cYkicxMxqgPp3IBkyJQhkJb8upuex8qTpWMFY=&uniplatform=NZKPT",
  "https://webvpn.ccnu.edu.cn/https/77726476706e69737468656265737421fbf952d2243e635930068cb8/kcms2/article/abstract?v=YMwpULBJqz7dXJvU6T_MUo_SeH-WGo2kQCR3wZJHxlaZw5smX6GCw-hddrcuEbV8a4_AhpDk0yBrprrMfAYJ9R0IGKNKHymkCWRiodbeFt4WeISFo2aKQK8j5MN_gM_-m8KLpcxziGo9zJnZ-o37uwdjd0fpQrJ93AOdRqhg22c=&uniplatform=NZKPT",
  "https://webvpn.ccnu.edu.cn/https/77726476706e69737468656265737421fbf952d2243e635930068cb8/kcms2/article/abstract?v=YMwpULBJqz7mqgbJdq3mQryCD6wYwYv75RIlmyp3u-V9cp_VrGPJtApe8W1GIqJiLUS97enRyDXR0Xsg7uupKkp-oDmPsf1D69XmOMZPvM0Ydbk7RmPjtdC8YXyn6oBGmHMSQjqA4A8N61lXjKvBf4LsRh_2cY_l9SUPoZ6ZmeA=&uniplatform=NZKPT",
  "https://webvpn.ccnu.edu.cn/https/77726476706e69737468656265737421fbf952d2243e635930068cb8/kcms2/article/abstract?v=NK8hpUzgeRVTSU36YOeOpB-rabGxUbFmq3AsbUK5_BnS6Iw7oXd0NGJqj1uEvIQu_XN5vK5IWQgOFgSWroCeUeQf-zS-Sman1sSaVPG2e-lupcmxGXyCUXN5PhP7ruNPkexhLDO0PXh9oCxSXZflU7Q1f6CwyFBli3EzBM3357U=&uniplatform=NZKPT",
  "https://webvpn.ccnu.edu.cn/https/77726476706e69737468656265737421fbf952d2243e635930068cb8/kcms2/article/abstract?v=-xbefZa1CdsWrWlnjKkdn-0TlddrfjRUDh9h7ZARhzB3rxKlDlNnUTeuEU8xoNcjmn1Dg4hQhhud8_vMKGqImEOuT0vyjqjoUqDGR8ECVueYpv0fSlBLtqQLZGiKFz1VpIvBhOiEUtQz2PzCWnbpCq3caCJbIbRRIL8fum-uMw8=&uniplatform=NZKPT",
  "https://webvpn.ccnu.edu.cn/https/77726476706e69737468656265737421fbf952d2243e635930068cb8/kcms2/article/abstract?v=W694F5cljyDywHjfI3o7_gvs-hx2Zuxj0zOHAq_6RaEEMSrddDxMu4Joek_8p1vwW2oRfPMuKFO-xf8-uojh-HFcNZDbdlmrgzvGyzMWuhXk2K_4jhJrLAuq5EyP7xhkzEBl2DioGzJrz_LTWghZlvFswZBLUOHMaWSLC-W04os=&uniplatform=NZKPT",
];

function formatText(text) {
  return (text || "").replace(/\n/g, "<br>");
}

function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text || "";
  return div.innerHTML;
}

function formatPapers(text, email) {
  if (!text) {
    return "";
  }

  if (email !== "jinq_yang@163.com") {
    return formatText(text);
  }

  const papers = text
    .split(/\n\s*\n/)
    .map(item => item.trim())
    .filter(Boolean);

  return papers.map((paper, index) => {
    const safePaper = escapeHtml(paper).replace(/\n/g, "<br>");
    const link = advisorPaperLinks[index];
    if (!link) {
      return safePaper;
    }
    return `<a class="paper-title-link" href="${link}" target="_blank" rel="noreferrer">${safePaper}</a>`;
  }).join("<br><br>");
}

function isStudentCard(card) {
  const section = card.closest(".member-section");
  return section && section.id !== "advisor";
}

function buildStudentPreview(card) {
  const info = card.querySelector(".member-info");
  if (!info) {
    return;
  }

  const title = info.querySelector("h3");
  const role = info.querySelector(".member-role");
  const major = card.getAttribute("data-summary") || "待补充";
  const grade = card.getAttribute("data-papers") || "待补充";
  const direction = card.getAttribute("data-projects") || "";
  const achievement = card.getAttribute("data-service") || "待补充";
  const email = card.getAttribute("data-email") || "待补充";

  const lines = [
    `<p>专业：${escapeHtml(major)}</p>`,
    `<p>年级：${escapeHtml(grade)}</p>`,
  ];

  if (direction.trim()) {
    lines.push(`<p>研究方向：${escapeHtml(direction)}</p>`);
  }

  lines.push(`<p>学习成果：${escapeHtml(achievement)}</p>`);
  lines.push(`<p>联系邮箱：${escapeHtml(email)}</p>`);

  info.innerHTML = "";
  if (title) {
    info.appendChild(title);
  }
  if (role) {
    info.appendChild(role);
  }
  info.insertAdjacentHTML("beforeend", lines.join(""));
}

memberCards.forEach(card => {
  if (isStudentCard(card)) {
    buildStudentPreview(card);
  }
});

memberCards.forEach(card => {
  card.addEventListener("click", () => {
    const name = card.getAttribute("data-name");
    const role = card.getAttribute("data-role");
    const photo = card.getAttribute("data-modal-photo");
    const summary = card.getAttribute("data-summary");
    const papers = card.getAttribute("data-papers");
    const projects = card.getAttribute("data-projects");
    const service = card.getAttribute("data-service");
    const email = card.getAttribute("data-email");
    const studentCard = isStudentCard(card);

    modalName.textContent = name;
    modalRole.textContent = role;
    modalPhoto.textContent = photo;

    if (modalBlockTitles.length >= 5) {
      if (studentCard) {
        modalBlockTitles[0].textContent = "专业";
        modalBlockTitles[1].textContent = "年级";
        modalBlockTitles[2].textContent = "研究方向";
        modalBlockTitles[3].textContent = "学习成果";
        modalBlockTitles[4].textContent = "联系邮箱";
      } else {
        modalBlockTitles[0].textContent = "简介";
        modalBlockTitles[1].textContent = "论文成果";
        modalBlockTitles[2].textContent = "科研项目";
        modalBlockTitles[3].textContent = "学术兼职";
        modalBlockTitles[4].textContent = "联系邮箱";
      }
    }

    modalSummary.innerHTML = formatText(summary);
    modalPapers.innerHTML = studentCard ? formatText(papers) : formatPapers(papers, email);
    modalProjects.innerHTML = formatText(projects);
    modalService.innerHTML = formatText(service || "待补充");
    modalEmail.textContent = email;

    modal.classList.add("show");
  });
});

closeModalBtn.addEventListener("click", () => {
  modal.classList.remove("show");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("show");
  }
});

const sections = document.querySelectorAll(".member-section");
const navLinks = document.querySelectorAll(".side-nav a");

function setActiveLink() {
  let currentId = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (window.scrollY >= sectionTop - 140) {
      currentId = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    const href = link.getAttribute("href").replace("#", "");
    if (href === currentId) {
      link.classList.add("active");
    }
  });
}

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(item => item.classList.remove("active"));
    link.classList.add("active");
  });
});

window.addEventListener("scroll", setActiveLink);
window.addEventListener("load", setActiveLink);

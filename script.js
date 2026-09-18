(() => {
  const content = window.SITE_CONTENT;
  if (!content) return;

  const { profile, papers } = content;
  const values = {
    ...profile,
    researchIntro: content.researchIntro,
    year: new Date().getFullYear(),
  };

  document.querySelectorAll("[data-bind]").forEach((element) => {
    const value = values[element.dataset.bind];
    if (value !== undefined) element.textContent = value;
  });

  document.querySelectorAll('[data-link="email"]').forEach((link) => {
    link.href = `mailto:${profile.email}`;
  });

  document.querySelectorAll('[data-link="cv"]').forEach((link) => {
    link.href = profile.cv;
  });

  const currentPage = document.body.dataset.page;
  const currentNav = document.querySelector(`[data-nav="${currentPage}"]`);
  if (currentNav) currentNav.setAttribute("aria-current", "page");

  const papersList = document.querySelector('[data-list="papers"]');
  if (papersList) {
    papersList.innerHTML = papers.map(renderPaper).join("");
  }

  function renderPaper(paper, index) {
    const number = String(index + 1).padStart(2, "0");
    const title = paper.pdf
      ? `<a class="paper-title-link" href="${escapeAttribute(paper.pdf)}" target="_blank" rel="noreferrer">${escapeHTML(paper.title)} <span aria-hidden="true">↗</span></a>`
      : `<span class="paper-title-link paper-title-disabled">${escapeHTML(paper.title)}</span>`;

    const pdfAction = paper.pdf
      ? `<a class="paper-pdf" href="${escapeAttribute(paper.pdf)}" target="_blank" rel="noreferrer">View PDF <span aria-hidden="true">↗</span></a>`
      : `<span class="paper-pdf paper-pdf-muted">PDF forthcoming</span>`;

    const abstract = paper.abstract
      ? `<p>${escapeHTML(paper.abstract)}</p>`
      : `<p class="placeholder-copy">Abstract to be added.</p>`;

    const figure = paper.image
      ? `<figure class="paper-figure">
          <img src="${escapeAttribute(paper.image)}" alt="${escapeAttribute(paper.imageAlt || "Research figure")}" loading="lazy" />
          ${paper.imageCaption ? `<figcaption>${escapeHTML(paper.imageCaption)}</figcaption>` : ""}
        </figure>`
      : `<div class="figure-placeholder" aria-label="Reserved space for a representative paper figure">
          <svg viewBox="0 0 80 48" aria-hidden="true">
            <path d="M7 39 24 23l12 10 17-20 20 26" />
            <circle cx="24" cy="13" r="4" />
          </svg>
          <span>Representative figure</span>
          <small>Add an image path in content.js</small>
        </div>`;

    return `
      <article class="paper">
        <div class="paper-number" aria-hidden="true">${number}</div>
        <div class="paper-main">
          <div class="paper-meta">
            <span>${escapeHTML(paper.status)}</span>
            ${pdfAction}
          </div>
          <h3>${title}</h3>
          <p class="paper-authors">${escapeHTML(paper.authors)}</p>
          <div class="paper-content">
            <div class="paper-abstract">
              <h4>Abstract</h4>
              ${abstract}
            </div>
            ${figure}
          </div>
        </div>
      </article>`;
  }

  function escapeHTML(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function escapeAttribute(value) {
    return escapeHTML(value);
  }
})();

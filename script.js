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
    const abstract = paper.abstract
      ? `<p>${escapeHTML(paper.abstract)}</p>`
      : `<p class="placeholder-copy">Abstract to be added.</p>`;

    const downloadAction = paper.pdf
      ? `<a class="paper-download" href="${escapeAttribute(paper.pdf)}" download>PDF</a>`
      : "";

    return `
      <article class="paper">
        <div class="paper-main">
          <div class="paper-title-row">
            <h3>${escapeHTML(paper.title)}</h3>
            ${downloadAction}
          </div>
          <p class="paper-authors">${escapeHTML(paper.authors)}</p>
          <div class="paper-content">
            <div class="paper-abstract">
              <h4>Abstract</h4>
              ${abstract}
            </div>
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

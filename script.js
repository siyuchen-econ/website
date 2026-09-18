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

  const bioContainer = document.querySelector('[data-list="bio"]');
  if (bioContainer) {
    const bioParagraphs = Array.isArray(profile.bio) ? profile.bio : [profile.bio];
    bioContainer.innerHTML = bioParagraphs
      .filter(Boolean)
      .map((paragraph) => `<p>${escapeHTML(paragraph)}</p>`)
      .join("");
  }

  const papersList = document.querySelector('[data-list="papers"]');
  if (papersList) {
    papersList.innerHTML = papers.map(renderPaper).join("");
  }

  function renderPaper(paper) {
    const abstract = paper.abstract
      ? `<p>${escapeHTML(paper.abstract)}</p>`
      : `<p class="placeholder-copy">Abstract to be added.</p>`;

    const downloadAction = paper.pdf
      ? `<a class="paper-download" href="${escapeAttribute(paper.pdf)}" target="_blank" rel="noopener noreferrer" type="application/pdf">PDF <span aria-hidden="true">↗</span></a>`
      : "";

    return `
      <article class="paper">
        <div class="paper-main">
          <div class="paper-title-row">
            <h3>${escapeHTML(paper.title)}</h3>
          </div>
          <p class="paper-authors">${renderAuthors(paper.authors)}</p>
          <div class="paper-content">
            <details class="paper-abstract">
              <summary>Abstract</summary>
              ${abstract}
            </details>
            ${downloadAction}
          </div>
        </div>
      </article>`;
  }

  function renderAuthors(authors) {
    const links = content.coauthorLinks || {};
    const names = Object.keys(links).sort((a, b) => b.length - a.length);
    if (!names.length) return escapeHTML(authors);
    const pattern = new RegExp(`(${names.map((name) => name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`, "g");
    return String(authors).split(pattern).map((part, index) => {
      if (index % 2 === 0) return escapeHTML(part);
      const url = links[part];
      if (!/^https?:\/\//i.test(url)) return escapeHTML(part);
      return `<a href="${escapeAttribute(url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(part)}</a>`;
    }).join("");
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

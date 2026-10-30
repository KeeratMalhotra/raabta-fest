(() => {
  "use strict";

  const D = window.HUB_DATA;
  if (!D) return;

  const $ = (id) => document.getElementById(id);
  const ENTITIES = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
  const esc = (value) => String(value ?? "").replace(/[&<>"']/g, (c) => ENTITIES[c]);
  const extLink = (l, cls = "") =>
    `<a${cls ? ` class="${cls}"` : ""} href="${esc(l.url)}" target="_blank" rel="noopener noreferrer">${esc(l.label)}</a>`;
  const kvList = (rows) =>
    `<dl class="kv">${rows.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join("")}</dl>`;

  // localStorage can throw in private browsing; checkboxes still work, they just won't persist.
  const store = {
    get(key) {
      try { return localStorage.getItem(`hub:${key}`); } catch { return null; }
    },
    set(key, value) {
      try { localStorage.setItem(`hub:${key}`, value); } catch { /* not persisted */ }
    },
  };

  const announce = (message) => {
    const live = $("live");
    live.textContent = "";
    window.setTimeout(() => { live.textContent = message; }, 30);
  };

  const daysUntil = (iso) => Math.ceil((new Date(iso).getTime() - Date.now()) / 86400000);

  const checklistItem = (key, html, extra = "") => {
    const done = store.get(key) === "1";
    return `<li${done ? ' class="is-done"' : ""}>
      <label class="check"><input type="checkbox" data-key="${esc(key)}"${done ? " checked" : ""}><span class="check-text">${html}</span></label>
      ${extra}
    </li>`;
  };

  // ---------- Hero ----------
  const days = daysUntil(D.meta.nicOpens);
  $("updated").textContent = D.meta.updated;
  $("target").textContent = D.meta.target;

  const stat = (value, label, href) =>
    `<a class="stat" href="${href}"><span class="stat-value">${esc(value)}</span><span class="stat-label">${esc(label)}</span></a>`;
  const nicStat = days > 1
    ? stat(`${days} days`, "until NIC applications open", "#nic")
    : days === 1
      ? stat("Tomorrow", "NIC applications open", "#nic")
      : stat("Open now", "NIC applications", "#nic");
  $("hero-stats").innerHTML = [
    nicStat,
    stat(String(D.shortlist.length), "options shortlisted", "#shortlist"),
    stat("~1,100", "listings checked", "#excluded"),
    stat(D.meta.rescan, "next re-scan", "#shortlist"),
  ].join("");

  // ---------- Next steps ----------
  $("next-list").innerHTML = D.nextSteps
    .map((s) => checklistItem(
      s.id,
      `<span class="when">${esc(s.when)}</span>${esc(s.text)}`,
      `<a class="jump" href="${esc(s.href)}">Go to it</a>`,
    ))
    .join("");

  // ---------- Shortlist ----------
  $("searched").textContent = D.meta.searched;
  $("timing").textContent = D.meta.timing;
  $("shortlist-cards").innerHTML = D.shortlist
    .map((o) => `
      <article class="option card" id="${esc(o.id)}">
        <div class="option-head">
          <span class="rank" aria-label="Priority ${o.priority}">${o.priority}</span>
          <div>
            <p class="org">${esc(o.org)}</p>
            <h3>${esc(o.role)}</h3>
          </div>
          <span class="tag tag-${o.priority}">${esc(o.tag)}</span>
        </div>
        <dl class="facts">${o.facts.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join("")}</dl>
        <p><strong>Why it fits:</strong> ${esc(o.why)}</p>
        <p class="next"><strong>Next step:</strong> ${esc(o.next)}</p>
        <div class="links">${o.links.map((l, i) => extLink(l, i === 0 ? "btn" : "btn btn-ghost")).join("")}</div>
      </article>`)
    .join("");

  // ---------- NIC pack ----------
  const N = D.nic;
  $("nic-countdown").textContent = days > 1 ? `Opens in ${days} days` : days === 1 ? "Opens tomorrow" : "Applications open";
  $("nic-name-note").textContent = N.nameNote;
  $("nic-basis").textContent = N.basis;
  $("nic-docs").innerHTML = N.documents.map((d) => checklistItem(d.id, esc(d.text))).join("");

  const mailto = `mailto:?subject=${encodeURIComponent(N.email.subject)}&body=${encodeURIComponent(N.email.body)}`;
  $("nic-email-body").innerHTML = `
    <p class="small muted"><strong>Send to:</strong> ${esc(N.email.to)}</p>
    <div class="field-row">
      <div><span class="field-label">Subject</span><p class="field-value">${esc(N.email.subject)}</p></div>
      <button type="button" class="btn btn-small" data-copy-key="subject">Copy</button>
    </div>
    <div class="field-row">
      <span class="field-label">Body</span>
      <button type="button" class="btn btn-small" data-copy-key="body">Copy</button>
    </div>
    <div class="textbox small">${esc(N.email.body)}</div>
    <a class="btn btn-ghost" href="${esc(mailto)}">Open in email app</a>`;

  $("nic-form").innerHTML = N.form
    .map(([field, value]) => {
      if (value === null) {
        return `<tr><th scope="row">${esc(field)}</th><td class="muted">${esc(N.dobNote)}</td><td class="copy-cell"></td></tr>`;
      }
      const isPlaceholder = /^\[.*\]$/.test(value);
      const copy = isPlaceholder
        ? ""
        : `<button type="button" class="btn btn-small" data-copy="${esc(value)}" aria-label="Copy ${esc(field)}">Copy</button>`;
      return `<tr><th scope="row">${esc(field)}</th><td${isPlaceholder ? ' class="placeholder"' : ""}>${esc(value)}</td><td class="copy-cell">${copy}</td></tr>`;
    })
    .join("");
  $("nic-areas-note").textContent = N.areasNote;

  $("sop-text").textContent = N.sop;
  const words = N.sop.trim().split(/\s+/).length;
  const [minWords, maxWords] = N.sopLimits;
  const sopCount = $("sop-count");
  sopCount.textContent = `${words} words · limit ${minWords}–${maxWords}`;
  sopCount.classList.toggle("bad", words < minWords || words > maxWords);

  // ---------- Tracker ----------
  $("tracker-body").innerHTML = D.tracker
    .map((t) => `
      <tr>
        <td>${t.priority}</td>
        <td>${extLink({ label: t.org, url: t.url })}</td>
        <td>${esc(t.role)}</td>
        <td>${esc(t.where)}</td>
        <td>${esc(t.dates)}</td>
        <td>${esc(t.stipend)}</td>
        <td>${esc(t.window)}</td>
        <td><span class="status ${t.status === "Preparing" ? "status-active" : "status-idle"}">${esc(t.status)}</span></td>
        <td>${esc(t.next)}</td>
      </tr>`)
    .join("");

  // ---------- Profile ----------
  const P = D.profile;
  $("profile-top").innerHTML = `
    <div class="card">
      <h3>Contact</h3>
      ${kvList(P.contact)}
      <div class="links">${P.links.map((l) => extLink(l, "chip")).join("")}</div>
    </div>
    <div class="card">
      <h3>Which name to use</h3>
      ${kvList(P.nameRules)}
      <h3>Education</h3>
      ${kvList(P.education)}
    </div>`;

  $("profile-projects").innerHTML = P.projects
    .map((p) => `
      <article class="project">
        <div class="project-head">
          <h4>${extLink({ label: p.name, url: p.url })}</h4>
          <span class="muted small">${esc(p.year)}</span>
        </div>
        <p class="project-what">${esc(p.what)}</p>
        <p class="small">${esc(p.detail)}</p>
        <p class="stack">${esc(p.stack)}</p>
      </article>`)
    .join("");

  $("profile-bottom").innerHTML = `
    <div class="card">
      <h3>Skills</h3>
      ${kvList(P.skills)}
      <h3>Search preferences</h3>
      ${kvList(P.preferences)}
    </div>
    <div class="card">
      <h3>Coding profiles</h3>
      ${kvList(P.coding)}
      <p class="muted small">${esc(P.codingNote)}</p>
      <h3>Achievements</h3>
      <ul class="bullets">${P.achievements.map((a) => `<li>${esc(a)}</li>`).join("")}</ul>
    </div>`;

  // ---------- Excluded + sources ----------
  $("excluded-summary").textContent = `Show ${D.excluded.length} listings and programs that don't fit, with reasons`;
  $("excluded-list").innerHTML = D.excluded
    .map((x) => `
      <li>
        <p class="ex-name">${x.url ? extLink({ label: x.name, url: x.url }) : esc(x.name)}</p>
        <p class="ex-reason">${esc(x.reason)}</p>
      </li>`)
    .join("");
  $("sources-list").innerHTML = D.sources.map((s) => `<li>${extLink(s)}</li>`).join("");

  // ---------- Checklist progress ----------
  const updateProgress = () => {
    const count = (listId) => {
      const boxes = [...document.querySelectorAll(`#${listId} input[type="checkbox"]`)];
      return [boxes.filter((b) => b.checked).length, boxes.length];
    };
    const [nextDone, nextTotal] = count("next-list");
    const [docsDone, docsTotal] = count("nic-docs");
    $("next-progress").textContent = `${nextDone} of ${nextTotal} done`;
    $("docs-progress").textContent = `${docsDone} of ${docsTotal} ready`;
  };
  updateProgress();

  document.addEventListener("change", (event) => {
    const box = event.target;
    if (!(box instanceof HTMLInputElement) || box.type !== "checkbox" || !box.dataset.key) return;
    store.set(box.dataset.key, box.checked ? "1" : "0");
    box.closest("li")?.classList.toggle("is-done", box.checked);
    updateProgress();
  });

  // ---------- Copy buttons ----------
  const copyMap = { sop: N.sop, subject: N.email.subject, body: N.email.body };
  const resetTimers = new WeakMap();

  const writeClipboard = async (text) => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        return true;
      }
    } catch { /* fall back below */ }
    const area = document.createElement("textarea");
    area.value = text;
    area.setAttribute("readonly", "");
    area.style.position = "fixed";
    area.style.top = "-1000px";
    document.body.appendChild(area);
    area.select();
    let ok = false;
    try { ok = document.execCommand("copy"); } catch { ok = false; }
    area.remove();
    return ok;
  };

  document.addEventListener("click", async (event) => {
    const button = event.target instanceof Element ? event.target.closest("button[data-copy], button[data-copy-key]") : null;
    if (!button) return;
    const text = button.dataset.copyKey ? copyMap[button.dataset.copyKey] : button.dataset.copy;
    const ok = await writeClipboard(text);
    if (!button.dataset.label) button.dataset.label = button.textContent;
    button.textContent = ok ? "Copied" : "Copy failed";
    button.classList.toggle("is-done", ok);
    announce(ok ? "Copied to clipboard" : "Copy failed. Select the text and copy it yourself.");
    window.clearTimeout(resetTimers.get(button));
    resetTimers.set(button, window.setTimeout(() => {
      button.textContent = button.dataset.label;
      button.classList.remove("is-done");
    }, 1600));
  });
})();

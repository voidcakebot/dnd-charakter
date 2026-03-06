const STORAGE_KEY = 'dnd-charakter-data-v1';
const TOKEN_SOURCE = 'Unterlagen/bilder/charakterauswahl-v1.jpg';

const defaultCharacters = [
  {
    id: 'barbar',
    slot: 1,
    name: '',
    volk: 'Halb-Ork',
    klasse: 'Barbar',
    stufe: 1,
    xp: 0,
    hpAktuell: 0,
    hpMax: 0,
    ruestungsklasse: 0,
    initiative: 0,
    bewegung: '',
    hintergrund: 'Sonderling',
    notizen: 'Aus PDF übernommen. Name folgt.',
    quelle: 'Unterlagen/pdfs/charakter-03-barbar-halbork.pdf',
    token: 'Unterlagen/bilder/token-mensch.jpg',
    tokenPos: 'center',
  },
  {
    id: 'kleriker',
    slot: 2,
    name: '',
    volk: 'Hügelzwerg',
    klasse: 'Kleriker',
    stufe: 1,
    xp: 18,
    hpAktuell: 8,
    hpMax: 11,
    ruestungsklasse: 16,
    initiative: 0,
    bewegung: '7,5 m',
    hintergrund: 'Soldat',
    notizen: 'Zwergischer Kleriker aus PDF.',
    quelle: 'Unterlagen/pdfs/charakter-01-zwergischer-kleriker.pdf',
    token: 'Unterlagen/bilder/token-zwerg.jpg',
    tokenPos: 'center',
  },
  {
    id: 'magier',
    slot: 3,
    name: '',
    volk: 'Hochelf',
    klasse: 'Magier',
    stufe: 1,
    xp: 12,
    hpAktuell: 5,
    hpMax: 8,
    ruestungsklasse: 12,
    initiative: 2,
    bewegung: '9 m',
    hintergrund: 'Tempeldiener',
    notizen: 'Elfenmagier aus PDF.',
    quelle: 'Unterlagen/pdfs/charakter-02-elfenmagier.pdf',
    token: 'Unterlagen/bilder/token-magier.jpg',
    tokenPos: 'center',
  },
  {
    id: 'gm',
    slot: 4,
    name: 'GM',
    volk: 'Spielleitung',
    klasse: 'Übersicht',
    stufe: 0,
    xp: 0,
    hpAktuell: 0,
    hpMax: 0,
    ruestungsklasse: 0,
    initiative: 0,
    bewegung: '-',
    hintergrund: 'Leitet das Abenteuer',
    notizen: 'GM-Ansicht: Übersicht aller Spieler-HP.',
    quelle: 'Unterlagen/bilder/token-barbar.jpg',
    token: 'Unterlagen/bilder/token-barbar.jpg',
    tokenPos: 'center',
  },
];

const app = document.getElementById('app');

function loadState() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return { characters: defaultCharacters };
  try {
    const parsed = JSON.parse(raw);
    if (!parsed?.characters || !Array.isArray(parsed.characters)) {
      return { characters: defaultCharacters };
    }

    // Migration: GM automatisch ergänzen, falls alte Daten ohne GM gespeichert wurden
    const hasGm = parsed.characters.some((c) => c.id === 'gm');
    if (!hasGm) {
      const gm = defaultCharacters.find((c) => c.id === 'gm');
      parsed.characters.push(gm);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(parsed));
    }

    return parsed;
  } catch {
    return { characters: defaultCharacters };
  }
}

function saveState(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function getRoute() {
  const h = location.hash || '#/';
  const match = h.match(/^#\/char\/(.+)$/);
  if (match) return { page: 'detail', id: match[1] };
  return { page: 'home' };
}

function goTo(hash) {
  location.hash = hash;
}

function render() {
  const state = loadState();
  const route = getRoute();

  if (route.page === 'home') {
    app.innerHTML = `
      <section class="container">
        <div class="grid">
          ${state.characters
            .map((c) => {
              if (c.id === 'gm') {
                const players = state.characters.filter((p) => p.id !== 'gm');
                return `
                  <article class="card char-card">
                    <div class="token-wrap token-wrap-card">
                      <img src="${c.token || TOKEN_SOURCE}" alt="Token ${c.name || c.klasse}" class="token-img" style="object-position:${c.tokenPos || 'center'}" />
                    </div>
                    <h3>${c.name || 'GM'}</h3>
                    <ul class="hp-list">
                      ${players
                        .map(
                          (p) => `<li><span>${p.name || p.klasse}</span><strong>${p.hpAktuell}/${p.hpMax} HP</strong></li>`,
                        )
                        .join('')}
                    </ul>
                    
                  </article>
                `;
              }

              return `
                <article class="card char-card">
                  <div class="token-wrap token-wrap-card">
                    <img src="${c.token || TOKEN_SOURCE}" alt="Token ${c.name || c.klasse}" class="token-img" style="object-position:${c.tokenPos || 'center'}" />
                  </div>
                  <h3>${c.name || '(Name folgt)'}</h3>
                  <p class="muted">${c.volk} · ${c.klasse} · Stufe ${c.stufe}</p>
                  <p><strong>HP</strong> ${c.hpAktuell}/${c.hpMax} · <strong>XP</strong> ${c.xp}</p>
                  <button data-open="${c.id}">Charakter öffnen</button>
                </article>
              `;
            })
            .join('')}
        </div>
      </section>
    `;

    document.querySelectorAll('[data-open]').forEach((btn) => {
      btn.addEventListener('click', () => goTo(`#/char/${btn.dataset.open}`));
    });
    return;
  }

  const character = state.characters.find((c) => c.id === route.id);
  if (!character) {
    app.innerHTML = `<section class="container"><p>Charakter nicht gefunden.</p><button class="secondary" id="back">Zurück</button></section>`;
    document.getElementById('back').onclick = () => goTo('#/');
    return;
  }

  app.innerHTML = `
    <section class="container">
      <div class="toolbar">
        <button class="secondary" id="back">← Zur Auswahl</button>
      </div>

      <div class="card">
        <div class="detail-head">
          <div class="token-wrap token-wrap-small">
            <img src="${character.token || TOKEN_SOURCE}" alt="Token ${character.name || character.klasse}" class="token-img" style="object-position:${character.tokenPos || 'center'}" />
          </div>
          <h2 id="detail-title">${character.name || '(Name folgt)'} <span class="muted">· ${character.klasse}</span></h2>
        </div>

        <form id="char-form" class="form-grid">
          ${field('name', 'Name', character.name)}
          ${field('volk', 'Volk', character.volk)}
          ${field('klasse', 'Klasse', character.klasse)}
          ${field('stufe', 'Stufe', character.stufe, 'number')}
          ${field('xp', 'XP', character.xp, 'number')}
          <div class="hp-editor" style="grid-column:1/-1">
            <label>Trefferpunkte (aktuell / max)</label>
            <div class="hp-controls">
              <button type="button" class="secondary" id="hp-minus">−</button>
              <span id="hp-readout">${character.hpAktuell} / ${character.hpMax}</span>
              <button type="button" id="hp-plus">+</button>
              <input type="hidden" name="hpAktuell" id="hp-aktuell-input" value="${character.hpAktuell}" />
              <label class="hp-max-label">Max HP
                <input name="hpMax" id="hp-max-input" type="number" min="1" value="${character.hpMax}" />
              </label>
            </div>
          </div>
          ${field('ruestungsklasse', 'Rüstungsklasse', character.ruestungsklasse, 'number')}
          ${field('initiative', 'Initiative', character.initiative, 'number')}
          ${field('bewegung', 'Bewegung', character.bewegung)}
          ${field('hintergrund', 'Hintergrund', character.hintergrund)}
          <label style="grid-column:1/-1">Notizen
            <textarea name="notizen" rows="5">${escapeHtml(character.notizen || '')}</textarea>
          </label>
          <div style="grid-column:1/-1; display:flex; gap:10px; align-items:center;">
            <button type="submit">Speichern</button>
            <span id="save-msg" class="success"></span>
          </div>
        </form>
      </div>

      <div class="kv">
        <div class="card"><strong>Status</strong><p class="muted" id="status-hp">${character.hpAktuell}/${character.hpMax} HP</p></div>
        <div class="card"><strong>Fortschritt</strong><p class="muted" id="status-progress">Stufe ${character.stufe} · XP ${character.xp}</p></div>
      </div>
    </section>
  `;

  document.getElementById('back').onclick = () => goTo('#/');

  const hpMinusBtn = document.getElementById('hp-minus');
  const hpPlusBtn = document.getElementById('hp-plus');
  const hpAktuellInput = document.getElementById('hp-aktuell-input');
  const hpMaxInput = document.getElementById('hp-max-input');
  const hpReadout = document.getElementById('hp-readout');

  function syncHpReadout() {
    const max = Math.max(1, Number(hpMaxInput.value || 1));
    hpMaxInput.value = max;
    let cur = Number(hpAktuellInput.value || 0);
    cur = Math.max(0, Math.min(max, cur));
    hpAktuellInput.value = cur;
    hpReadout.textContent = `${cur} / ${max}`;
  }

  hpMinusBtn?.addEventListener('click', () => {
    hpAktuellInput.value = Number(hpAktuellInput.value || 0) - 1;
    syncHpReadout();
  });
  hpPlusBtn?.addEventListener('click', () => {
    hpAktuellInput.value = Number(hpAktuellInput.value || 0) + 1;
    syncHpReadout();
  });
  hpMaxInput?.addEventListener('input', syncHpReadout);
  syncHpReadout();

  document.getElementById('char-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const next = Object.fromEntries(fd.entries());

    const mapNum = ['stufe', 'xp', 'hpAktuell', 'hpMax', 'ruestungsklasse', 'initiative'];
    mapNum.forEach((k) => (next[k] = Number(next[k] || 0)));

    const index = state.characters.findIndex((c) => c.id === character.id);
    const current = state.characters[index];
    const updated = { ...current, ...next };
    const changed = JSON.stringify(current) !== JSON.stringify(updated);

    if (changed) {
      state.characters[index] = updated;
      saveState(state);
    }

    const saveEl = document.getElementById('save-msg');
    if (saveEl) {
      saveEl.textContent = changed ? '✅ Änderungen gespeichert' : 'ℹ️ Keine Änderungen';
      setTimeout(() => {
        if (saveEl) saveEl.textContent = '';
      }, 2200);
    }

    const titleEl = document.getElementById('detail-title');
    if (titleEl) {
      titleEl.innerHTML = `${escapeHtml(next.name || '(Name folgt)')} <span class="muted">· ${escapeHtml(next.klasse || '')}</span>`;
    }
    const hpEl = document.getElementById('status-hp');
    if (hpEl) hpEl.textContent = `${next.hpAktuell}/${next.hpMax} HP`;
    const progressEl = document.getElementById('status-progress');
    if (progressEl) progressEl.textContent = `Stufe ${next.stufe} · XP ${next.xp}`;
  });
}

function field(name, label, value, type = 'text') {
  return `<label>${label}<input name="${name}" type="${type}" value="${escapeHtml(String(value ?? ''))}" /></label>`;
}

function escapeHtml(str) {
  return str
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

window.addEventListener('hashchange', render);
render();

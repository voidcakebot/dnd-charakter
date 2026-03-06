const STORAGE_KEY = 'dnd-charakter-data-v3';
const TOKEN_SOURCE = 'Unterlagen/bilder/charakterauswahl-v1.jpg';

const SPELL_BOOK = {
  cleric: {
    title: 'Kleriker-Zauber',
    levelData: {
      1: { prepared: 5, slots: 3, maxSpellLevel: 1 },
      2: { prepared: 5, slots: 3, maxSpellLevel: 1 },
      3: { prepared: 6, slots: 4, maxSpellLevel: 2 },
      4: { prepared: 8, slots: 4, maxSpellLevel: 2 },
      5: { prepared: 9, slots: 4, maxSpellLevel: 3 },
    },
    cantrips: [
      { id: 'heilige-flamme', name: 'Heilige Flamme', text: '18 m, Geschicklichkeitsrettungswurf, 1W8 gleißend (ab Stufe 5: 2W8).' },
      { id: 'licht', name: 'Licht', text: 'Berührung, 1 Stunde, Objekt strahlt helles/dämmriges Licht.' },
      { id: 'thaumaturgie', name: 'Thaumaturgie', text: 'Kleine übernatürliche Effekte (Stimme, Flammen, Türen, Erschütterung).' },
      { id: 'gottliche-fuhrung', name: 'Göttliche Führung', text: 'Berührung, Konzentration bis 1 Minute, +1W4 auf einen Attributswurf.' },
    ],
    spells: [
      { id: 'befehl', level: 1, name: 'Befehl', text: '18 m, Weisheitsrettungswurf. Ziel folgt einem Ein-Wort-Befehl.' },
      { id: 'segnen', level: 1, name: 'Segnen', text: 'Konzentration bis 1 Minute. Bis zu 3 Kreaturen erhalten +1W4 auf Angriffe/Rettungswürfe.' },
      { id: 'wunden-heilen', level: 1, name: 'Wunden heilen', text: 'Berührung. Heilung 1W8 + Zaubermodifikator (höhere Grade: +1W8).' },
      { id: 'wunden-verursachen', level: 1, name: 'Wunden verursachen', text: 'Berührung, Nahkampf-Zauberangriff. Treffer: 3W10 nekrotischer Schaden (höhere Grade: +1W10).' },
      { id: 'heilendes-wort', level: 1, name: 'Heilendes Wort', text: 'Bonusaktion, 18 m, Heilung 1W4 + Zaubermodifikator.' },
      { id: 'heiligtum', level: 1, name: 'Heiligtum', text: 'Bonusaktion, 9 m. Angreifer müssen Weisheitsrettungswurf schaffen.' },
      { id: 'magie-entdecken', level: 1, name: 'Magie entdecken', text: 'Ritual, Konzentration bis 10 Minuten. Erkennst magische Auren in 9 m.' },
      { id: 'gebet-der-heilung', level: 2, name: 'Gebet der Heilung', text: '10 Min, bis zu 6 Ziele: 2W8 + Zaubermodifikator Heilung.' },
      { id: 'beistand', level: 2, name: 'Beistand', text: 'Bis zu 3 Ziele: +5 aktuelle und maximale HP für 8 Stunden.' },
      { id: 'spirituelle-waffe', level: 2, name: 'Spirituelle Waffe', text: 'Bonusaktion. Angriff: 1W8 + Zaubermodifikator Wucht.' },
      { id: 'leuchtfeuer-der-hoffnung', level: 3, name: 'Leuchtfeuer der Hoffnung', text: 'Vorteil auf Weisheits-/Todesrettungswürfe, Heilung wirkt maximal.' },
      { id: 'massen-heilendes-wort', level: 3, name: 'Massen-Heilendes Wort', text: 'Bis zu 6 Ziele: 1W4 + Zaubermodifikator Heilung.' },
      { id: 'magie-bannen', level: 3, name: 'Magie bannen', text: 'Beendet Zaubereffekte auf Ziel.' },
    ],
  },
  mage: {
    title: 'Magier-Zauber',
    levelData: {
      1: { prepared: 4, slots: 2, maxSpellLevel: 1 },
      2: { prepared: 5, slots: 3, maxSpellLevel: 1 },
      3: { prepared: 6, slots: 4, maxSpellLevel: 2 },
      4: { prepared: 8, slots: 4, maxSpellLevel: 2 },
      5: { prepared: 9, slots: 4, maxSpellLevel: 3 },
    },
    cantrips: [
      { id: 'kaeltestrahl', name: 'Kältestrahl', text: '18 m, Zauberangriff, 1W8 Kälte und Bewegungsrate -3 m.' },
      { id: 'magierhand', name: 'Magierhand', text: 'Geisterhand in 9 m Reichweite, manipuliert leichte Objekte.' },
      { id: 'licht', name: 'Licht', text: 'Berührung, 1 Stunde, Objekt strahlt helles/dämmriges Licht.' },
    ],
    spells: [
      { id: 'brennende-haende', level: 1, name: 'Brennende Hände', text: '4,5 m Kegel, Geschicklichkeitsrettungswurf, 3W6 Feuer.' },
      { id: 'donnerwoge', level: 1, name: 'Donnerwoge', text: '4,5 m Würfel, Konstitutionsrettungswurf, 2W8 Schall + Rückstoß.' },
      { id: 'identifizieren', level: 1, name: 'Identifizieren', text: 'Ritual. Erkennt magische Eigenschaften eines Gegenstands.' },
      { id: 'magie-entdecken', level: 1, name: 'Magie entdecken', text: 'Ritual. Erkennt magische Auren in 9 m.' },
      { id: 'magierruestung', level: 1, name: 'Magierrüstung', text: 'Basis-RK 13 + Geschicklichkeitsmodifikator (8 Stunden).' },
      { id: 'magisches-geschoss', level: 1, name: 'Magisches Geschoss', text: '3 automatische Treffer, je 1W4+1 Energieschaden.' },
      { id: 'person-bezaubern', level: 1, name: 'Person bezaubern', text: 'Humanoider Weisheitsrettungswurf, bei Fehlschlag bezaubert.' },
      { id: 'dunkelheit', level: 2, name: 'Dunkelheit', text: '4,5 m Radius magische Dunkelheit, Konzentration bis 10 Min.' },
      { id: 'einfluesterung', level: 2, name: 'Einflüsterung', text: 'Ziel folgt plausibler Handlung bei misslungenem Rettungswurf.' },
      { id: 'flammenkugel', level: 2, name: 'Flammenkugel', text: 'Konzentration. Feuersphäre verursacht 2W6 Feuerschaden.' },
      { id: 'nebelschritt', level: 2, name: 'Nebelschritt', text: 'Bonusaktion. Teleportiert dich 9 m.' },
      { id: 'blitz', level: 3, name: 'Blitz', text: '30 m Linie, Geschicklichkeitsrettungswurf, 8W6 Blitz.' },
      { id: 'feuerball', level: 3, name: 'Feuerball', text: '6 m Radius, Geschicklichkeitsrettungswurf, 8W6 Feuer.' },
      { id: 'fliegen', level: 3, name: 'Fliegen', text: 'Berührung. Ziel erhält Flugrate 18 m (Konzentration).' },
      { id: 'magie-bannen', level: 3, name: 'Magie bannen', text: 'Beendet Zaubereffekte auf Ziel.' },
    ],
  },
};

function casterKey(id) {
  if (id === 'kleriker') return 'cleric';
  if (id === 'magier') return 'mage';
  return null;
}

const defaultCharacters = [
  { id: 'barbar', slot: 1, name: '', volk: 'Halb-Ork', klasse: 'Barbar', stufe: 1, xp: 0, hpAktuell: 0, hpMax: 0, ruestungsklasse: 0, initiative: 0, bewegung: '', hintergrund: 'Sonderling', notizen: 'Aus PDF übernommen. Name folgt.', herkunft: 'Halb-Ork aus den Grenzlanden, geprägt von einem harten Leben außerhalb geordneter Städte.', charaktereigenschaften: 'Direkt, robust, kampforientiert, schützt seine Gruppe im Nahkampf.', ueberzeugung: 'Stärke und Durchhaltewillen sichern das Überleben.', bio: 'Dieser Halb-Ork-Barbar ist ein kompromissloser Frontkämpfer. Er geht Probleme direkt an, hält viel Schaden aus und übernimmt im Kampf die Rolle des Schilds für die Gruppe. Als Sonderling ist er unabhängig, manchmal rau, aber verlässlich, wenn es ernst wird.', quelle: 'Unterlagen/pdfs/charakter-03-barbar-halbork.pdf', token: 'Unterlagen/bilder/token-mensch.jpg', tokenPos: 'center' },
  { id: 'kleriker', slot: 2, name: '', volk: 'Hügelzwerg', klasse: 'Kleriker', stufe: 1, xp: 18, hpAktuell: 8, hpMax: 11, ruestungsklasse: 16, initiative: 0, bewegung: '7,5 m', hintergrund: 'Soldat', notizen: 'Zwergischer Kleriker aus PDF.', herkunft: 'Hügelzwerg mit Wurzeln in den zwergischen Königreichen; militärisch geprägt durch die Mintarn-Söldner.', charaktereigenschaften: 'Höflich, respektvoll, pflichtbewusst, aber nicht blind gehorsam; handelt nach Gewissen.', ueberzeugung: 'Würde und Respekt für alle. Macht darf die Schwachen nicht unterdrücken.', bio: 'Der Hügelzwerg-Kleriker war Weibel bei den Mintarn-Söldnern, verlor aber den Glauben an Vorgesetzte, die Autorität missbrauchten. Er folgte seinem Gewissen, wandte sich seiner Gottheit zu und kämpft nun als Beschützer der Gruppe. Seine Lebensdomäne macht ihn zu einem starken Heiler und Unterstützer. Sein persönliches Ziel ist es, den Rotbrennern in Phandalin entgegenzutreten.', quelle: 'Unterlagen/pdfs/charakter-01-zwergischer-kleriker.pdf', token: 'Unterlagen/bilder/token-zwerg.jpg', tokenPos: 'center' },
  { id: 'magier', slot: 3, name: '', volk: 'Hochelf', klasse: 'Magier', stufe: 1, xp: 12, hpAktuell: 5, hpMax: 8, ruestungsklasse: 12, initiative: 2, bewegung: '9 m', hintergrund: 'Tempeldiener', notizen: 'Elfenmagier aus PDF.', herkunft: 'Hochelf aus den Sonnenelfen, ursprünglich aus einer zurückgezogenen Kultur, nun unter anderen Völkern unterwegs.', charaktereigenschaften: 'Neugierig, gelehrt, wortgewandt, wissensorientiert; wirkt nach außen distanziert, denkt aber idealistisch.', ueberzeugung: 'Wissen ist der Weg zu Macht und Selbstvervollkommnung und sollte geteilt werden.', bio: 'Der Hochelf-Magier dient Oghma, dem Gott des Wissens. Er sammelt Erkenntnisse mit fast fanatischer Disziplin und sieht Wissen als Verantwortung. Seine Vision führt ihn zu einer Queste: die Entweihung eines Oghma-Altars in Burg Zackenschlund zu beenden. Im Spiel agiert er taktisch mit Kontrolle, Distanzschaden und hoher arkaner Präzision.', quelle: 'Unterlagen/pdfs/charakter-02-elfenmagier.pdf', token: 'Unterlagen/bilder/token-magier.jpg', tokenPos: 'center' },
  { id: 'gm', slot: 4, name: 'GM', volk: 'Spielleitung', klasse: 'Übersicht', stufe: 0, xp: 0, hpAktuell: 0, hpMax: 0, ruestungsklasse: 0, initiative: 0, bewegung: '-', hintergrund: 'Leitet das Abenteuer', notizen: 'GM-Ansicht', quelle: 'Unterlagen/bilder/token-unbekannt-2.jpg', token: 'Unterlagen/bilder/token-unbekannt-2.jpg', tokenPos: 'center' },
].map(withCasterDefaults);

const app = document.getElementById('app');

function withCasterDefaults(c) {
  const key = casterKey(c.id);
  if (!key) return c;
  const cfg = SPELL_BOOK[key];
  return {
    ...c,
    preparedSpells: Array.isArray(c.preparedSpells) ? c.preparedSpells : [],
    slotsUsed: Number(c.slotsUsed || 0),
    slotStates: Array.isArray(c.slotStates) ? c.slotStates : [],
    spellAssignments: c.spellAssignments || {},
    activeSpellId: c.activeSpellId || cfg.spells[0].id,
    activeCantripId: c.activeCantripId || cfg.cantrips[0].id,
  };
}

function loadState() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return { characters: defaultCharacters };
  try {
    const parsed = JSON.parse(raw);
    parsed.characters = (parsed.characters || defaultCharacters).map((c) => {
      const d = defaultCharacters.find((x) => x.id === c.id);
      const merged = withCasterDefaults(c);
      if (!d) return merged;
      return {
        ...merged,
        bio: merged.bio || d.bio,
        herkunft: merged.herkunft || d.herkunft,
        charaktereigenschaften: merged.charaktereigenschaften || d.charaktereigenschaften,
        ueberzeugung: merged.ueberzeugung || d.ueberzeugung,
      };
    });
    if (!parsed.characters.some((c) => c.id === 'gm')) parsed.characters.push(defaultCharacters.find((c) => c.id === 'gm'));
    parsed.characters = parsed.characters.map((c) => (c.id === 'gm' ? { ...c, token: 'Unterlagen/bilder/token-unbekannt-2.jpg', quelle: 'Unterlagen/bilder/token-unbekannt-2.jpg' } : c));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(parsed));
    return parsed;
  } catch {
    return { characters: defaultCharacters };
  }
}

function saveState(state) { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
function getRoute() { const h = location.hash || '#/'; const m1 = h.match(/^#\/char\/(.+)$/); if (m1) return { page: 'detail', id: m1[1] }; const m2 = h.match(/^#\/bio\/(.+)$/); if (m2) return { page: 'bio', id: m2[1] }; return { page: 'home' }; }
function goTo(hash) { location.hash = hash; }

function render() {
  const state = loadState();
  const route = getRoute();

  if (route.page === 'home') {
    app.innerHTML = `<section class="container"><div class="grid">${state.characters.map((c) => c.id === 'gm' ? `<article class="card char-card"><div class="token-wrap token-wrap-card"><img src="${c.token || TOKEN_SOURCE}" class="token-img" /></div><h3>${c.name || 'GM'}</h3><ul class="hp-list">${state.characters.filter((p) => p.id !== 'gm').map((p) => `<li><span>${p.name || p.klasse}</span><strong>${p.hpAktuell}/${p.hpMax} HP</strong></li>`).join('')}</ul></article>` : `<article class="card char-card"><div class="token-wrap token-wrap-card"><img src="${c.token || TOKEN_SOURCE}" class="token-img" /></div><h3>${c.name || '(Name folgt)'}</h3><p class="muted">${c.volk} · ${c.klasse} · Stufe ${c.stufe}</p><p><strong>HP</strong> ${c.hpAktuell}/${c.hpMax} · <strong>XP</strong> ${c.xp}</p><button data-open="${c.id}">Charakter öffnen</button></article>`).join('')}</div></section>`;
    document.querySelectorAll('[data-open]').forEach((btn) => btn.addEventListener('click', () => goTo(`#/char/${btn.dataset.open}`)));
    return;
  }

  if (route.page === 'bio') {
    const bioChar = state.characters.find((c) => c.id === route.id);
    if (!bioChar || bioChar.id === 'gm') return goTo('#/');
    app.innerHTML = `<section class="container"><div class="card"><div class="detail-head"><div class="token-wrap token-wrap-small"><img src="${bioChar.token || TOKEN_SOURCE}" class="token-img" /></div><h2>${bioChar.name || '(Name folgt)'}</h2></div><div class="kv"><div class="card"><strong>Wer ist das?</strong><p class="muted">${escapeHtml(`${bioChar.volk} · ${bioChar.klasse}`)}</p></div><div class="card"><strong>Herkunft</strong><p class="muted">${escapeHtml(bioChar.herkunft || '-')}</p></div><div class="card"><strong>Charaktereigenschaften</strong><p class="muted">${escapeHtml(bioChar.charaktereigenschaften || '-')}</p></div><div class="card"><strong>Überzeugung</strong><p class="muted">${escapeHtml(bioChar.ueberzeugung || '-')}</p></div><div class="card"><strong>Hintergrund</strong><p class="muted">${escapeHtml(bioChar.hintergrund || '-')}</p></div></div><div class="spell-info-box"><p>${escapeHtml(bioChar.bio || 'Beschreibung folgt.')}</p></div></div><div class="save-bottom"><button class="secondary" id="back-bio">Zurück</button></div></section>`;
    document.getElementById('back-bio').onclick = () => goTo(`#/char/${bioChar.id}`);
    return;
  }

  const character = state.characters.find((c) => c.id === route.id);
  if (!character || character.id === 'gm') return goTo('#/');

  app.innerHTML = `<section class="container"><div class="toolbar"><button class="secondary" id="back">← Zur Auswahl</button></div><div class="card"><div class="detail-head"><div class="token-wrap token-wrap-small"><img src="${character.token || TOKEN_SOURCE}" class="token-img" /></div><div><h2 id="detail-title">${character.name || '(Name folgt)'}</h2><button type="button" id="open-bio" class="bio-btn">${character.klasse}-Profil</button></div></div><form id="char-form" class="form-grid">${field('name','Name',character.name)}${field('volk','Volk',character.volk)}${field('klasse','Klasse',character.klasse)}${field('stufe','Stufe',character.stufe,'number')}${field('xp','XP',character.xp,'number')}<div class="hp-editor" style="grid-column:1/-1"><label>Trefferpunkte (aktuell / max)</label><div class="hp-controls"><button type="button" class="secondary" id="hp-minus">−</button><span id="hp-readout">${character.hpAktuell} / ${character.hpMax}</span><button type="button" id="hp-plus">+</button><input type="hidden" name="hpAktuell" id="hp-aktuell-input" value="${character.hpAktuell}" /><label class="hp-max-label">Max HP<input name="hpMax" id="hp-max-input" type="number" min="1" value="${character.hpMax}" /></label></div></div>${field('ruestungsklasse','Rüstungsklasse',character.ruestungsklasse,'number')}${field('initiative','Initiative',character.initiative,'number')}${field('bewegung','Bewegung',character.bewegung)}${field('hintergrund','Hintergrund',character.hintergrund)}<label style="grid-column:1/-1">Notizen<textarea name="notizen" rows="5">${escapeHtml(character.notizen || '')}</textarea></label></form></div>${spellSection(character)}<div class="save-bottom"><button type="submit" form="char-form">Speichern</button><span id="save-msg" class="success"></span></div></section>`;

  document.getElementById('back').onclick = () => goTo('#/');
  document.getElementById('open-bio').onclick = () => goTo(`#/bio/${character.id}`);

  const hpAktuellInput = document.getElementById('hp-aktuell-input');
  const hpMaxInput = document.getElementById('hp-max-input');
  const hpReadout = document.getElementById('hp-readout');
  function syncHpReadout() {
    const max = Math.max(1, Number(hpMaxInput.value || 1));
    let cur = Math.max(0, Math.min(max, Number(hpAktuellInput.value || 0)));
    hpMaxInput.value = max; hpAktuellInput.value = cur; hpReadout.textContent = `${cur} / ${max}`;
  }
  document.getElementById('hp-minus').onclick = () => { hpAktuellInput.value = Number(hpAktuellInput.value || 0) - 1; syncHpReadout(); };
  document.getElementById('hp-plus').onclick = () => { hpAktuellInput.value = Number(hpAktuellInput.value || 0) + 1; syncHpReadout(); };
  hpMaxInput.addEventListener('input', syncHpReadout); syncHpReadout();

  document.getElementById('char-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const next = Object.fromEntries(new FormData(e.target).entries());
    ['stufe','xp','hpAktuell','hpMax','ruestungsklasse','initiative'].forEach((k) => next[k] = Number(next[k] || 0));
    const i = state.characters.findIndex((c) => c.id === character.id);
    const updated = withCasterDefaults({ ...state.characters[i], ...next });
    const changed = JSON.stringify(updated) !== JSON.stringify(state.characters[i]);
    if (changed) { state.characters[i] = updated; saveState(state); }
    document.getElementById('save-msg').textContent = changed ? '✅ Änderungen gespeichert' : 'ℹ️ Keine Änderungen';
    setTimeout(() => { const el = document.getElementById('save-msg'); if (el) el.textContent = ''; }, 1800);
    document.getElementById('detail-title').textContent = `${updated.name || '(Name folgt)'}`;
  });

  wireSpellUi(state, character.id);
}

function spellSection(character) {
  const key = casterKey(character.id);
  if (!key) return '';
  const cfg = SPELL_BOOK[key];
  const lvl = Math.max(1, Math.min(5, Number(character.stufe || 1)));
  const lvlCfg = cfg.levelData[lvl] || cfg.levelData[1];
  const available = cfg.spells.filter((s) => s.level <= lvlCfg.maxSpellLevel);
  const activeCantrip = cfg.cantrips.find((c) => c.id === character.activeCantripId) || cfg.cantrips[0];
  const activeSpell = available.find((s) => s.id === character.activeSpellId) || available[0];
  const prepared = (character.preparedSpells || []).filter((id) => available.some((s) => s.id === id));
  const used = Math.min(Number(character.slotsUsed || 0), lvlCfg.slots);

  const activeTab = 'cantrip';
  return `<section class="card spell-section"><h3>${cfg.title}</h3><div class="spell-tabs"><button type="button" class="secondary spell-tab ${activeTab==='cantrip'?'active':''}" data-tab="cantrip">Zaubertricks</button><button type="button" class="secondary spell-tab ${activeTab==='spells'?'active':''}" data-tab="spells">Zauber</button></div><div id="tab-cantrip" class="spell-tab-pane ${activeTab==='cantrip'?'active':''}"><label class="spell-select-label">Zaubertrick auswählen<select id="cantrip-select">${cfg.cantrips.map((c) => `<option value="${c.id}" ${c.id===activeCantrip.id?'selected':''}>${c.name}</option>`).join('')}</select></label><div class="spell-info-box" id="cantrip-info">${activeCantrip.text}</div></div><div id="tab-spells" class="spell-tab-pane ${activeTab==='spells'?'active':''}"><label class="spell-select-label">Zauber (nur ${character.klasse})<div class="select-with-ok"><select id="spell-select" multiple size="8">${available.map((s)=>`<option value="${s.id}" ${prepared.includes(s.id)?'selected':''}>Grad ${s.level} · ${s.name} — ${shortOptionText(s.text)}</option>`).join('')}</select></div></label><div class="spell-actions"><button type="button" class="secondary" id="spell-reset">Auswahl zurücksetzen</button></div><p class="muted">Ausgewählt: <strong id="prepared-count">${prepared.length}</strong>/${lvlCfg.prepared}</p><p class="muted">Als Nächstes unten die ausgewählten Zauber den Zauberplätzen zuweisen.</p><div id="prepared-list" class="prepared-list">${prepared.length ? prepared.map((id)=>`<button type="button" class="pill prepared-pill" data-prepared="${id}">${(cfg.spells.find((s)=>s.id===id)||{name:id}).name}</button>`).join('') : '<span>Noch keine Zauber ausgewählt.</span>'}</div><div class="slots-wrap"><span>Zauberplätze:</span><div id="slot-track" class="slot-track">${Array.from({length:lvlCfg.slots},(_,i)=>`<button type="button" class="slot slot-empty" data-slot="${i}"><span class="slot-dot"></span><span class="slot-index">${i+1}</span></button>`).join('')}</div></div></div></section>`;
}

function wireSpellUi(state, charId) {
  const idx = state.characters.findIndex((c) => c.id === charId);
  if (idx < 0) return;
  const key = casterKey(state.characters[idx].id);
  if (!key) return;
  const cfg = SPELL_BOOK[key];

  const cantripSelect = document.getElementById('cantrip-select');
  const cantripInfo = document.getElementById('cantrip-info');
  const spellSelect = document.getElementById('spell-select');
  const preparedCount = document.getElementById('prepared-count');
  const preparedList = document.getElementById('prepared-list');
  const slotTrack = document.getElementById('slot-track');

  function ch() { return withCasterDefaults(state.characters[idx]); }
  function levelCfg() {
    const l = Math.max(1, Math.min(5, Number(ch().stufe || 1)));
    return cfg.levelData[l] || cfg.levelData[1];
  }
  function available() { return cfg.spells.filter((s) => s.level <= levelCfg().maxSpellLevel); }
  function persist(patch) {
    state.characters[idx] = withCasterDefaults({ ...state.characters[idx], ...patch });
    saveState(state);
  }

  function redrawSpellState() {
    const c = ch();
    const lc = levelCfg();
    const avail = available();
    const prepared = (c.preparedSpells || []).filter((id) => avail.some((s) => s.id === id));

    if (preparedCount) preparedCount.textContent = String(prepared.length);

    if (spellSelect) {
      Array.from(spellSelect.options).forEach((opt) => {
        opt.selected = prepared.includes(opt.value);
      });
    }

    if (preparedList) {
      preparedList.innerHTML = prepared.length
        ? prepared
            .map((id) => `<button type="button" class="pill prepared-pill" data-prepared="${id}">${(cfg.spells.find((s)=>s.id===id)||{name:id}).name}</button>`)
            .join('')
        : '<span class="muted">Noch keine Zauber ausgewählt.</span>';

      preparedList.querySelectorAll('[data-prepared]').forEach((el) => {
        const id = el.dataset.prepared;
        const c3 = ch();
        const assigned = c3.spellAssignments?.[id] ?? -1;
        if (assigned >= 0) el.classList.add('active');

        el.addEventListener('click', () => {
          const c2 = ch();
          const lc2 = levelCfg();
          const states = Array.from({ length: lc2.slots }, (_, i) => c2.slotStates?.[i] || 'empty');
          const assignments = { ...(c2.spellAssignments || {}) };

          if (assignments[id] >= 0) {
            const slot = assignments[id];
            states[slot] = 'empty';
            delete assignments[id];
            persist({ slotStates: states, spellAssignments: assignments, spellTab: 'spells' });
            redrawSpellState();
            return;
          }

          const freeSlot = states.findIndex((s) => s === 'empty');
          if (freeSlot === -1) return;
          states[freeSlot] = 'used';
          assignments[id] = freeSlot;
          persist({ slotStates: states, spellAssignments: assignments, spellTab: 'spells' });
          redrawSpellState();
        });
      });
    }

    if (slotTrack) {
      const states = Array.from({ length: lc.slots }, (_, i) => c.slotStates?.[i] || 'empty');
      slotTrack.innerHTML = states
        .map((st, i) => `<button type="button" class="slot ${st === 'empty' ? 'slot-empty' : st === 'ready' ? 'slot-ready' : 'slot-used'}" data-slot="${i}"><span class="slot-dot"></span><span class="slot-index">${i+1}</span></button>`)
        .join('');

      slotTrack.querySelectorAll('[data-slot]').forEach((el) => {
        el.addEventListener('click', () => {
          const idx = Number(el.dataset.slot);
          const c2 = ch();
          const states2 = Array.from({ length: lc.slots }, (_, i) => c2.slotStates?.[i] || 'empty');
          if (states2[idx] === 'used') states2[idx] = 'empty';
          else if (states2[idx] === 'empty') states2[idx] = 'used';
          persist({ slotStates: states2, spellTab: 'spells' });
          redrawSpellState();
        });
      });
    }
  }

  document.querySelectorAll('[data-tab]').forEach((b) => b.addEventListener('click', () => {
    document.querySelectorAll('[data-tab]').forEach((x) => x.classList.toggle('active', x === b));
    document.getElementById('tab-cantrip').classList.toggle('active', b.dataset.tab === 'cantrip');
    document.getElementById('tab-spells').classList.toggle('active', b.dataset.tab === 'spells');
    persist({ spellTab: b.dataset.tab });
  }));

  cantripSelect?.addEventListener('change', () => {
    const c = cfg.cantrips.find((x) => x.id === cantripSelect.value);
    if (!c) return;
    persist({ activeCantripId: c.id });
    if (cantripInfo) cantripInfo.textContent = c.text;
  });

  spellSelect?.addEventListener('change', () => {
    const selected = Array.from(spellSelect.selectedOptions);

    // Harte Obergrenze: max 5 ausgewählte Zauber
    if (selected.length > 5) {
      selected[selected.length - 1].selected = false;
    }

    const picked = Array.from(spellSelect.selectedOptions).map((o) => o.value).slice(0, 5);
    const c = ch();
    const lc = levelCfg();
    const nextPrepared = picked.filter((id) => available().some((s) => s.id === id)).slice(0, Math.min(5, lc.prepared));

    const cNow = ch();
    const oldAssignments = { ...(cNow.spellAssignments || {}) };
    const nextAssignments = {};
    const nextStates = Array.from({ length: lc.slots }, () => 'empty');
    nextPrepared.forEach((id) => {
      const slot = oldAssignments[id];
      if (slot >= 0 && slot < lc.slots) {
        nextAssignments[id] = slot;
        const prevState = cNow.slotStates?.[slot] || 'used';
        nextStates[slot] = prevState === 'empty' ? 'empty' : 'used';
      }
    });

    persist({ preparedSpells: nextPrepared, spellAssignments: nextAssignments, slotStates: nextStates, spellTab: 'spells' });

    if (!picked.length) {
      redrawSpellState();
      return;
    }
    if (picked.length > 1) {
      redrawSpellState();
      return;
    }

    const s = available().find((x) => x.id === picked[0]);
    if (!s) return;
    persist({ activeSpellId: s.id, spellTab: 'spells' });
    redrawSpellState();
  });


  document.getElementById('spell-reset')?.addEventListener('click', () => {
    persist({ preparedSpells: [], slotsUsed: 0, slotStates: [], spellAssignments: {}, spellTab: 'spells' });
    redrawSpellState();
  });

  redrawSpellState();
}

function field(name, label, value, type = 'text') { return `<label>${label}<input name="${name}" type="${type}" value="${escapeHtml(String(value ?? ''))}" /></label>`; }
function shortOptionText(text, max = 72) {
  const clean = String(text || '').replace(/\s+/g, ' ').trim();
  return clean.length > max ? `${clean.slice(0, max - 1)}…` : clean;
}
function escapeHtml(str) { return str.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#039;'); }
window.addEventListener('hashchange', render);
render();

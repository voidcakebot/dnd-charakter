const STORAGE_KEY = 'dnd-charakter-data-v3';
const TOKEN_SOURCE = 'Unterlagen/bilder/charakterauswahl-v1.jpg';

const SPELL_BOOK = {
  cleric: {
    title: 'Zauber',
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
    title: 'Zauber',
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
  { id: 'barbar', slot: 1, name: '', volk: 'Halb-Ork', klasse: 'Barbar', stufe: 1, xp: 0, hpAktuell: 15, hpMax: 15, ruestungsklasse: 14, initiative: 1, bewegung: '9 m', sta: 16, ges: 13, kon: 16, int: 8, wei: 10, cha: 12, staRet: '+5', gesRet: '+1', konRet: '+5', intRet: '-1', weiRet: '+0', chaRet: '+1', passiveWahrnehmung: 10, uebungsbonus: '+2', skillAkrobatik:'+1', skillArkane:'-1', skillAthletik:'+5', skillAuftreten:'+1', skillEinschuechtern:'+3', skillFingerfertigkeit:'+1', skillGeschichte:'-1', skillHeilkunde:'+0', skillHeimlichkeit:'+1', skillTiere:'+2', skillMotiv:'+0', skillNachforschungen:'-1', skillNaturkunde:'+1', skillReligion:'-1', skillTaeuschen:'+1', skillUeberleben:'+2', skillUeberzeugen:'+1', skillWahrnehmung:'+0', hintergrund: 'Sonderling', notizen: '', herkunft: 'Halb-Ork aus den Grenzlanden, geprägt von einem harten Leben außerhalb geordneter Städte.', charaktereigenschaften: 'Direkt, robust, kampforientiert, schützt seine Gruppe im Nahkampf.', ueberzeugung: 'Stärke und Durchhaltewillen sichern das Überleben.', sprachen: 'Gemeinsprache, Orkisch', waffen: [{name:'Zweihandaxt', bonus:'+5', schaden:'1W12 + 3', art:'Hieb', einsatz:'Schwer, zweihändig.'},{name:'Beil', bonus:'+5', schaden:'1W6 + 3', art:'Hieb', einsatz:'Leicht, Wurfwaffe, Reichweite 6/18 m.'},{name:'Wurfspeer', bonus:'+5', schaden:'1W6 + 3', art:'Stich', einsatz:'Wurfwaffe, Reichweite 9/36 m.'}], bio: 'Dieser Halb-Ork-Barbar ist ein kompromissloser Frontkämpfer. Er geht Probleme direkt an, hält viel Schaden aus und übernimmt im Kampf die Rolle des Schilds für die Gruppe. Als Sonderling ist er unabhängig, manchmal rau, aber verlässlich, wenn es ernst wird.', quelle: 'Unterlagen/pdfs/charakter-03-barbar-halbork.pdf', token: 'Unterlagen/bilder/token-mensch.jpg', tokenPos: 'center' },
  { id: 'kleriker', slot: 2, name: '', volk: 'Hügelzwerg', klasse: 'Kleriker', stufe: 1, xp: 18, hpAktuell: 8, hpMax: 11, ruestungsklasse: 16, initiative: 0, bewegung: '7,5 m', sta: 14, ges: 8, kon: 10, int: 15, wei: 16, cha: 12, staRet: '+4', gesRet: '-1', konRet: '+0', intRet: '+2', weiRet: '+5', chaRet: '+1', passiveWahrnehmung: 13, uebungsbonus: '+2', skillAkrobatik:'-1', skillArkane:'+0', skillAthletik:'+4', skillAuftreten:'+1', skillEinschuechtern:'+3', skillFingerfertigkeit:'-1', skillGeschichte:'+0', skillHeilkunde:'+5', skillHeimlichkeit:'-1', skillTiere:'+3', skillMotiv:'+3', skillNachforschungen:'+0', skillNaturkunde:'+0', skillReligion:'+2', skillTaeuschen:'+1', skillUeberleben:'+3', skillUeberzeugen:'+1', skillWahrnehmung:'+3', hintergrund: 'Soldat', notizen: '', herkunft: 'Hügelzwerg mit Wurzeln in den zwergischen Königreichen; militärisch geprägt durch die Mintarn-Söldner.', charaktereigenschaften: 'Höflich, respektvoll, pflichtbewusst, aber nicht blind gehorsam; handelt nach Gewissen.', ueberzeugung: 'Würde und Respekt für alle. Macht darf die Schwachen nicht unterdrücken.', sprachen: 'Gemeinsprache, Zwergisch', waffen: [{name:'Kriegshammer', bonus:'+4', schaden:'1W8 + 2', art:'Wucht', einsatz:'Standard-Nahkampfangriff.'},{name:'Beil', bonus:'+4', schaden:'1W6 + 2', art:'Hieb', einsatz:'Nahkampf oder Wurf (6 m normal / 18 m mit Nachteil).'}], bio: 'Der Hügelzwerg-Kleriker war Weibel bei den Mintarn-Söldnern, verlor aber den Glauben an Vorgesetzte, die Autorität missbrauchten. Er folgte seinem Gewissen, wandte sich seiner Gottheit zu und kämpft nun als Beschützer der Gruppe. Seine Lebensdomäne macht ihn zu einem starken Heiler und Unterstützer. Sein persönliches Ziel ist es, den Rotbrennern in Phandalin entgegenzutreten.', quelle: 'Unterlagen/pdfs/charakter-01-zwergischer-kleriker.pdf', token: 'Unterlagen/bilder/token-zwerg.jpg', tokenPos: 'center' },
  { id: 'magier', slot: 3, name: '', volk: 'Hochelf', klasse: 'Magier', stufe: 1, xp: 12, hpAktuell: 5, hpMax: 8, ruestungsklasse: 12, initiative: 2, bewegung: '9 m', sta: 10, ges: 15, kon: 16, int: 14, wei: 12, cha: 8, staRet: '+0', gesRet: '+2', konRet: '+3', intRet: '+5', weiRet: '+1', chaRet: '-1', passiveWahrnehmung: 15, uebungsbonus: '+2', skillAkrobatik:'+2', skillArkane:'+5', skillAthletik:'+0', skillAuftreten:'-1', skillEinschuechtern:'-1', skillFingerfertigkeit:'+2', skillGeschichte:'+5', skillHeilkunde:'+1', skillHeimlichkeit:'+2', skillTiere:'+1', skillMotiv:'+3', skillNachforschungen:'+5', skillNaturkunde:'+3', skillReligion:'+5', skillTaeuschen:'-1', skillUeberleben:'+1', skillUeberzeugen:'-1', skillWahrnehmung:'+3', hintergrund: 'Tempeldiener', notizen: '', herkunft: 'Hochelf aus den Sonnenelfen, ursprünglich aus einer zurückgezogenen Kultur, nun unter anderen Völkern unterwegs.', charaktereigenschaften: 'Neugierig, gelehrt, wortgewandt, wissensorientiert; wirkt nach außen distanziert, denkt aber idealistisch.', ueberzeugung: 'Wissen ist der Weg zu Macht und Selbstvervollkommnung und sollte geteilt werden.', sprachen: 'Gemeinsprache, Elfisch, Drakonisch, Zwergisch, Goblinisch', waffen: [{name:'Kurzschwert', bonus:'+4', schaden:'1W6 + 2', art:'Stich', einsatz:'Nahkampf; fallback wenn Zauber ungeeignet sind.'}], bio: 'Der Hochelf-Magier dient Oghma, dem Gott des Wissens. Er sammelt Erkenntnisse mit fast fanatischer Disziplin und sieht Wissen als Verantwortung. Seine Vision führt ihn zu einer Queste: die Entweihung eines Oghma-Altars in Burg Zackenschlund zu beenden. Im Spiel agiert er taktisch mit Kontrolle, Distanzschaden und hoher arkaner Präzision.', quelle: 'Unterlagen/pdfs/charakter-02-elfenmagier.pdf', token: 'Unterlagen/bilder/token-magier.jpg', tokenPos: 'center' },
  { id: 'gm', slot: 4, name: 'GM', volk: 'Spielleitung', klasse: 'Übersicht', stufe: 0, xp: 0, hpAktuell: 0, hpMax: 0, ruestungsklasse: 0, initiative: 0, bewegung: '-', sta: 0, ges: 0, kon: 0, int: 0, wei: 0, cha: 0, staRet: '+0', gesRet: '+0', konRet: '+0', intRet: '+0', weiRet: '+0', chaRet: '+0', passiveWahrnehmung: 0, uebungsbonus: '+0', hintergrund: 'Leitet das Abenteuer', notizen: '', quelle: 'Unterlagen/bilder/token-unbekannt-2.jpg', token: 'Unterlagen/bilder/token-unbekannt-2.jpg', tokenPos: 'center' },
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
      const cleanedNotizen = (merged.notizen || '').trim();
      const resetLegacyNote = ['Aus PDF übernommen. Name folgt.', 'Zwergischer Kleriker aus PDF.', 'Elfenmagier aus PDF.', 'GM-Ansicht'].includes(cleanedNotizen);
      return {
        ...d,
        ...merged,
        notizen: resetLegacyNote ? '' : merged.notizen,
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
function getRoute() { const h = location.hash || '#/'; const m1 = h.match(/^#\/char\/(.+)$/); if (m1) return { page: 'detail', id: m1[1] }; const m2 = h.match(/^#\/bio\/(.+)$/); if (m2) return { page: 'bio', id: m2[1] }; const m3 = h.match(/^#\/stats\/(.+)$/); if (m3) return { page: 'stats', id: m3[1] }; const m4 = h.match(/^#\/gm$/); if (m4) return { page: 'gm' }; return { page: 'home' }; }
function goTo(hash) { location.hash = hash; }

function render() {
  window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  const state = loadState();
  const route = getRoute();

  if (route.page === 'home') {
    app.innerHTML = `<section class="container"><div class="grid">${state.characters.map((c) => c.id === 'gm' ? `<article class="card char-card"><div class="token-wrap token-wrap-card"><img src="${c.token || TOKEN_SOURCE}" class="token-img" /></div><h3>${c.name || 'GM'}</h3><ul class="hp-list">${state.characters.filter((p) => p.id !== 'gm').map((p) => `<li><span>${p.name || p.klasse}</span><strong>${p.hpAktuell}/${p.hpMax} HP</strong></li>`).join('')}</ul><button class="bio-btn" data-gm-open="1">Charakterübersicht</button></article>` : `<article class="card char-card ${c.dead ? 'is-dead' : ''}"><div class="token-wrap token-wrap-card"><img src="${c.token || TOKEN_SOURCE}" class="token-img" /></div><h3>${c.name || '(Name folgt)'}${c.dead ? ' ☠️' : ''}</h3><p class="muted">${c.volk} · ${c.klasse} · Stufe ${c.stufe}</p><p><strong>HP</strong> ${c.hpAktuell}/${c.hpMax} · <strong>XP</strong> ${c.xp}</p><button data-open="${c.id}">Charakter öffnen</button></article>`).join('')}</div></section>`;
    document.querySelectorAll('[data-open]').forEach((btn) => btn.addEventListener('click', () => goTo(`#/char/${btn.dataset.open}`)));
    document.querySelectorAll('[data-gm-open]').forEach((btn) => btn.addEventListener('click', () => goTo('#/gm')));
    return;
  }

  if (route.page === 'gm') {
    const players = state.characters.filter((c) => c.id !== 'gm');
    const deadPlayers = players.filter((p) => p.dead);
    app.innerHTML = `<section class="container"><div class="card"><div class="detail-head"><div class="token-wrap token-wrap-small"><img src="${(state.characters.find((c)=>c.id==='gm') || {}).token || TOKEN_SOURCE}" class="token-img" /></div><h2>Spielleiter · Charakterübersicht</h2></div><div class="hp-list">${players.map((p) => `<li><span>${p.name || p.klasse}</span><strong>HP ${p.hpAktuell}/${p.hpMax} · XP ${p.xp} · Stufe ${p.stufe}</strong></li>`).join('')}</div>${deadPlayers.length ? `<div class="spell-info-box"><strong>Wiederbelebung</strong><div class="weapon-action-buttons">${deadPlayers.map((p) => `<button type="button" class="bio-btn" data-revive-id="${p.id}">${p.name || p.klasse} wiederbeleben</button>`).join('')}</div></div>` : ''}</div><div class="save-bottom"><button class="secondary" id="back-gm">Zurück</button></div></section>`;

    document.getElementById('back-gm').onclick = () => goTo('#/');
    document.querySelectorAll('[data-revive-id]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-revive-id');
        const i = state.characters.findIndex((c) => c.id === id);
        if (i < 0) return;
        const hp = Math.max(1, Number(state.characters[i].hpAktuell || 1));
        state.characters[i] = { ...state.characters[i], dead: false, hpAktuell: hp };
        saveState(state);
        render();
      });
    });
    return;
  }

  if (route.page === 'bio') {
    const bioChar = state.characters.find((c) => c.id === route.id);
    if (!bioChar || bioChar.id === 'gm') return goTo('#/');
    app.innerHTML = `<section class="container"><div class="card"><div class="detail-head"><div class="token-wrap token-wrap-small"><img src="${bioChar.token || TOKEN_SOURCE}" class="token-img" /></div><div><h2>${bioChar.name || '(Name folgt)'}</h2><button type="button" id="open-stats" class="bio-btn">Basiswerte</button></div></div><div class="kv"><div class="card"><strong>Wer ist das?</strong><p class="muted">${escapeHtml(`${bioChar.volk} · ${bioChar.klasse}`)}</p></div><div class="card"><strong>Herkunft</strong><p class="muted">${escapeHtml(bioChar.herkunft || '-')}</p></div><div class="card"><strong>Charaktereigenschaften</strong><p class="muted">${escapeHtml(bioChar.charaktereigenschaften || '-')}</p></div><div class="card"><strong>Überzeugung</strong><p class="muted">${escapeHtml(bioChar.ueberzeugung || '-')}</p></div><div class="card"><strong>Hintergrund</strong><p class="muted">${escapeHtml(bioChar.hintergrund || '-')}</p></div><div class="card"><strong>Sprachen</strong><p class="muted">${escapeHtml(bioChar.sprachen || '-')}</p></div></div><div class="card"><strong>Profil</strong><p class="muted">${escapeHtml(bioChar.bio || 'Beschreibung folgt.')}</p></div></div><div class="save-bottom"><button class="secondary" id="back-bio">Zurück</button></div></section>`;
    document.getElementById('open-stats').onclick = () => goTo(`#/stats/${bioChar.id}`);
    document.getElementById('back-bio').onclick = () => goTo(`#/char/${bioChar.id}`);
    return;
  }

  if (route.page === 'stats') {
    const sChar = state.characters.find((c) => c.id === route.id);
    if (!sChar || sChar.id === 'gm') return goTo('#/');
    app.innerHTML = `<section class="container"><div class="card"><div class="detail-head"><div class="token-wrap token-wrap-small"><img src="${sChar.token || TOKEN_SOURCE}" class="token-img" /></div><h2>${sChar.name || '(Name folgt)'}</h2></div><form id="stats-form" class="form-grid stats-grid"><div style="grid-column:1/-1" class="stats-group"><strong>Kernwerte</strong></div>${field('ruestungsklasse','Rüstungsklasse',sChar.ruestungsklasse,'number')}${field('initiative','Initiative',sChar.initiative,'number')}${field('bewegung','Bewegung',sChar.bewegung)}${field('passiveWahrnehmung','Passive Wahrnehmung',sChar.passiveWahrnehmung,'number')}${field('uebungsbonus','Übungsbonus',sChar.uebungsbonus)}<div style="grid-column:1/-1" class="stats-group"><strong>Attribute</strong></div>${field('sta','Stärke',sChar.sta,'number')}${field('ges','Geschicklichkeit',sChar.ges,'number')}${field('kon','Konstitution',sChar.kon,'number')}${field('int','Intelligenz',sChar.int,'number')}${field('wei','Weisheit',sChar.wei,'number')}${field('cha','Charisma',sChar.cha,'number')}<div style="grid-column:1/-1" class="stats-group"><strong>Rettungswürfe</strong></div>${field('staRet','Rettungswurf Stärke',sChar.staRet)}${field('gesRet','Rettungswurf Geschicklichkeit',sChar.gesRet)}${field('konRet','Rettungswurf Konstitution',sChar.konRet)}${field('intRet','Rettungswurf Intelligenz',sChar.intRet)}${field('weiRet','Rettungswurf Weisheit',sChar.weiRet)}${field('chaRet','Rettungswurf Charisma',sChar.chaRet)}<div style="grid-column:1/-1" class="stats-group"><strong>Fertigkeiten</strong></div>${field('skillAkrobatik','Akrobatik (Ges)',sChar.skillAkrobatik)}${field('skillArkane','Arkane Kunde (Int)',sChar.skillArkane)}${field('skillAthletik','Athletik (Stä)',sChar.skillAthletik)}${field('skillAuftreten','Auftreten (Cha)',sChar.skillAuftreten)}${field('skillEinschuechtern','Einschüchtern (Cha)',sChar.skillEinschuechtern)}${field('skillFingerfertigkeit','Fingerfertigkeit (Ges)',sChar.skillFingerfertigkeit)}${field('skillGeschichte','Geschichte (Int)',sChar.skillGeschichte)}${field('skillHeilkunde','Heilkunde (Wei)',sChar.skillHeilkunde)}${field('skillHeimlichkeit','Heimlichkeit (Ges)',sChar.skillHeimlichkeit)}${field('skillTiere','Mit Tieren umgehen (Wei)',sChar.skillTiere)}${field('skillMotiv','Motiv erkennen (Wei)',sChar.skillMotiv)}${field('skillNachforschungen','Nachforschungen (Int)',sChar.skillNachforschungen)}${field('skillNaturkunde','Naturkunde (Int)',sChar.skillNaturkunde)}${field('skillReligion','Religion (Int)',sChar.skillReligion)}${field('skillTaeuschen','Täuschen (Cha)',sChar.skillTaeuschen)}${field('skillUeberleben','Überlebenskunst (Wei)',sChar.skillUeberleben)}${field('skillUeberzeugen','Überzeugen (Cha)',sChar.skillUeberzeugen)}${field('skillWahrnehmung','Wahrnehmung (Wei)',sChar.skillWahrnehmung)}</form></div><div class="save-bottom"><button class="secondary" id="back-stats">Zurück</button><div class="save-right"><span id="stats-msg" class="success"></span><button type="submit" form="stats-form">Speichern</button></div></div></section>`;

    document.getElementById('stats-form').addEventListener('submit', (e) => {
      e.preventDefault();
      const fd = new FormData(e.target);
      const idx = state.characters.findIndex((c) => c.id === sChar.id);
      const current = state.characters[idx];
      const patch = {
        sta: Number(fd.get('sta') || 0),
        ges: Number(fd.get('ges') || 0),
        kon: Number(fd.get('kon') || 0),
        int: Number(fd.get('int') || 0),
        wei: Number(fd.get('wei') || 0),
        cha: Number(fd.get('cha') || 0),
        staRet: String(fd.get('staRet') || '+0'),
        gesRet: String(fd.get('gesRet') || '+0'),
        konRet: String(fd.get('konRet') || '+0'),
        intRet: String(fd.get('intRet') || '+0'),
        weiRet: String(fd.get('weiRet') || '+0'),
        chaRet: String(fd.get('chaRet') || '+0'),
        passiveWahrnehmung: Number(fd.get('passiveWahrnehmung') || 0),
        initiative: Number(fd.get('initiative') || 0),
        ruestungsklasse: Number(fd.get('ruestungsklasse') || 0),
        bewegung: String(fd.get('bewegung') || ''),
        uebungsbonus: String(fd.get('uebungsbonus') || '+0'),
        skillAkrobatik: String(fd.get('skillAkrobatik') || '+0'),
        skillArkane: String(fd.get('skillArkane') || '+0'),
        skillAthletik: String(fd.get('skillAthletik') || '+0'),
        skillAuftreten: String(fd.get('skillAuftreten') || '+0'),
        skillEinschuechtern: String(fd.get('skillEinschuechtern') || '+0'),
        skillFingerfertigkeit: String(fd.get('skillFingerfertigkeit') || '+0'),
        skillGeschichte: String(fd.get('skillGeschichte') || '+0'),
        skillHeilkunde: String(fd.get('skillHeilkunde') || '+0'),
        skillHeimlichkeit: String(fd.get('skillHeimlichkeit') || '+0'),
        skillTiere: String(fd.get('skillTiere') || '+0'),
        skillMotiv: String(fd.get('skillMotiv') || '+0'),
        skillNachforschungen: String(fd.get('skillNachforschungen') || '+0'),
        skillNaturkunde: String(fd.get('skillNaturkunde') || '+0'),
        skillReligion: String(fd.get('skillReligion') || '+0'),
        skillTaeuschen: String(fd.get('skillTaeuschen') || '+0'),
        skillUeberleben: String(fd.get('skillUeberleben') || '+0'),
        skillUeberzeugen: String(fd.get('skillUeberzeugen') || '+0'),
        skillWahrnehmung: String(fd.get('skillWahrnehmung') || '+0'),
      };
      const changed = JSON.stringify({ ...current, ...patch }) !== JSON.stringify(current);
      if (changed) {
        state.characters[idx] = { ...current, ...patch };
        saveState(state);
      }
      document.getElementById('stats-msg').textContent = changed ? 'Gespeichert' : 'Keine Änderungen';
      setTimeout(() => { const el = document.getElementById('stats-msg'); if (el) el.textContent = ''; }, 1600);
    });

    document.getElementById('back-stats').onclick = () => goTo(`#/bio/${sChar.id}`);
    return;
  }

  const character = state.characters.find((c) => c.id === route.id);
  if (!character || character.id === 'gm') return goTo('#/');

  app.innerHTML = `<section class="container"><div class="card"><div class="detail-head"><div class="token-wrap token-wrap-small"><img src="${character.token || TOKEN_SOURCE}" class="token-img" /></div><div><h2 id="detail-title">${character.name || '(Name folgt)'}</h2><button type="button" id="open-bio" class="bio-btn">${character.klasse}-Profil</button></div></div><form id="char-form" class="form-grid">${field('name','Name',character.name)}${field('stufe','Stufe',character.stufe,'number')}${field('xp','XP',character.xp,'number')}<div class="hp-editor" style="grid-column:1/-1"><label>Trefferpunkte (aktuell / max)</label><div class="hp-controls"><button type="button" class="secondary" id="hp-minus">−</button><span id="hp-readout">${character.hpAktuell} / ${character.hpMax}</span><button type="button" id="hp-plus">+</button><input type="hidden" name="hpAktuell" id="hp-aktuell-input" value="${character.hpAktuell}" /><label class="hp-max-label">Max HP<input name="hpMax" id="hp-max-input" type="number" min="1" value="${character.hpMax}" /></label></div></div><label style="grid-column:1/-1">Notizen<textarea name="notizen" rows="4">${escapeHtml(character.notizen || '')}</textarea></label></form></div>${weaponSection(character)}${spellSection(character)}<div id="weapon-action-overlay" class="unconscious-overlay" aria-hidden="true"><div class="unconscious-card"><h2>Waffe auswählen</h2><div class="weapon-action-buttons"><button id="weapon-edit-btn" type="button" class="secondary">Bearbeiten</button><button id="weapon-delete-btn" type="button" class="secondary">Löschen</button><button id="weapon-cancel-btn" type="button" class="secondary">Abbrechen</button></div></div></div><div id="unconscious-overlay" class="unconscious-overlay" aria-hidden="true"><div class="unconscious-card"><h2>OHNMACHT</h2><img id="unconscious-image" class="unconscious-image" alt="Ohnmacht" src="Unterlagen/bilder/ohnmacht-katze.jpg" /><div class="weapon-action-buttons"><button id="revive-btn" type="button" class="secondary">Gerettet</button><button id="dead-btn" type="button" class="secondary">Tod</button></div></div></div><div class="save-bottom"><button class="secondary" id="back-bottom">← Zur Auswahl</button><div class="save-right"><span id="save-msg" class="success"></span><button type="submit" form="char-form">Speichern</button></div></div></section>`;

  document.getElementById('back-bottom').onclick = () => goTo('#/');
  document.getElementById('open-bio').onclick = () => goTo(`#/bio/${character.id}`);

  function weaponPromptFlow(initial = {}) {
    const name = prompt('Name der Waffe (z. B. Langschwert)', initial.name || '');
    if (!name) return null;
    const bonus = prompt('Angriffsbonus (z. B. +5)', initial.bonus || '+0') || '+0';
    const schaden = prompt('Schaden (z. B. 1W8 + 3)', initial.schaden || '-') || '-';
    const art = prompt('Schadensart (z. B. Hieb/Stich/Wucht)', initial.art || '-') || '-';
    const einsatz = prompt('Kurzer Einsatzhinweis', initial.einsatz || '') || '';
    return { name, bonus, schaden, art, einsatz };
  }

  document.getElementById('add-weapon')?.addEventListener('click', () => {
    const nextWeapon = weaponPromptFlow();
    if (!nextWeapon) return;

    const i = state.characters.findIndex((c) => c.id === character.id);
    const current = state.characters[i];
    const waffen = Array.isArray(current.waffen) ? current.waffen : [];
    state.characters[i] = { ...current, waffen: [...waffen, nextWeapon] };
    saveState(state);
    render();
  });

  const weaponOverlay = document.getElementById('weapon-action-overlay');
  const weaponEditBtn = document.getElementById('weapon-edit-btn');
  const weaponDeleteBtn = document.getElementById('weapon-delete-btn');
  const weaponCancelBtn = document.getElementById('weapon-cancel-btn');
  let selectedWeaponIndex = null;

  function closeWeaponOverlay() {
    if (weaponOverlay) weaponOverlay.classList.remove('show');
    selectedWeaponIndex = null;
  }

  document.querySelectorAll('[data-weapon-index]').forEach((el) => {
    el.addEventListener('click', () => {
      selectedWeaponIndex = Number(el.getAttribute('data-weapon-index'));
      if (weaponOverlay) weaponOverlay.classList.add('show');
    });
  });

  weaponCancelBtn?.addEventListener('click', closeWeaponOverlay);

  weaponDeleteBtn?.addEventListener('click', () => {
    if (selectedWeaponIndex === null) return;
    const i = state.characters.findIndex((c) => c.id === character.id);
    const current = state.characters[i];
    const waffen = Array.isArray(current.waffen) ? [...current.waffen] : [];
    const w = waffen[selectedWeaponIndex];
    if (!w) return closeWeaponOverlay();
    const ok = confirm(`Waffe "${w.name}" wirklich löschen?`);
    if (!ok) return;
    waffen.splice(selectedWeaponIndex, 1);
    state.characters[i] = { ...current, waffen };
    saveState(state);
    closeWeaponOverlay();
    render();
  });

  weaponEditBtn?.addEventListener('click', () => {
    if (selectedWeaponIndex === null) return;
    const i = state.characters.findIndex((c) => c.id === character.id);
    const current = state.characters[i];
    const waffen = Array.isArray(current.waffen) ? [...current.waffen] : [];
    const w = waffen[selectedWeaponIndex];
    if (!w) return closeWeaponOverlay();
    const updatedWeapon = weaponPromptFlow(w);
    if (!updatedWeapon) return;
    waffen[selectedWeaponIndex] = updatedWeapon;
    state.characters[i] = { ...current, waffen };
    saveState(state);
    closeWeaponOverlay();
    render();
  });

  const hpAktuellInput = document.getElementById('hp-aktuell-input');
  const hpMaxInput = document.getElementById('hp-max-input');
  const hpReadout = document.getElementById('hp-readout');
  const overlay = document.getElementById('unconscious-overlay');
  const reviveBtn = document.getElementById('revive-btn');
  const deadBtn = document.getElementById('dead-btn');
  let spellDirtySinceSave = false;

  function syncHpReadout() {
    const max = Math.max(1, Number(hpMaxInput.value || 1));
    let cur = Math.max(0, Math.min(max, Number(hpAktuellInput.value || 0)));
    hpMaxInput.value = max;
    hpAktuellInput.value = cur;
    hpReadout.textContent = `${cur} / ${max}`;
    if (overlay) overlay.classList.toggle('show', cur === 0);
  }

  document.getElementById('hp-minus').onclick = () => { hpAktuellInput.value = Number(hpAktuellInput.value || 0) - 1; syncHpReadout(); };
  document.getElementById('hp-plus').onclick = () => { hpAktuellInput.value = Number(hpAktuellInput.value || 0) + 1; syncHpReadout(); };
  hpMaxInput.addEventListener('input', syncHpReadout);

  reviveBtn?.addEventListener('click', () => {
    const max = Math.max(1, Number(hpMaxInput.value || 1));
    const input = prompt(`Wie viele HP hat ${character.name || 'der Charakter'} wieder? (1-${max})`, '1');
    if (input === null) return;
    const value = Math.max(1, Math.min(max, Number(input) || 1));
    hpAktuellInput.value = value;
    syncHpReadout();

    const i = state.characters.findIndex((c) => c.id === character.id);
    state.characters[i] = { ...state.characters[i], hpAktuell: value, dead: false };
    saveState(state);
    spellDirtySinceSave = true;
  });

  deadBtn?.addEventListener('click', () => {
    const i = state.characters.findIndex((c) => c.id === character.id);
    state.characters[i] = { ...state.characters[i], dead: true, hpAktuell: 0 };
    saveState(state);
    goTo('#/');
  });

  syncHpReadout();

  document.getElementById('char-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const next = Object.fromEntries(new FormData(e.target).entries());
    ['stufe','xp','hpAktuell','hpMax','ruestungsklasse','initiative'].forEach((k) => next[k] = Number(next[k] || 0));
    const i = state.characters.findIndex((c) => c.id === character.id);
    const updated = withCasterDefaults({ ...state.characters[i], ...next });
    const changed = JSON.stringify(updated) !== JSON.stringify(state.characters[i]);
    if (changed) { state.characters[i] = updated; saveState(state); }
    const saved = changed || spellDirtySinceSave;
    document.getElementById('save-msg').textContent = saved ? 'Gespeichert' : 'Keine Änderungen';
    if (saved) spellDirtySinceSave = false;
    setTimeout(() => { const el = document.getElementById('save-msg'); if (el) el.textContent = ''; }, 1800);
    document.getElementById('detail-title').textContent = `${updated.name || '(Name folgt)'}`;
  });

  wireSpellUi(state, character.id, () => {
    spellDirtySinceSave = true;
  });
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
  return `<section class="card spell-section"><h3>${cfg.title}</h3><div class="spell-tabs"><button type="button" class="secondary spell-tab ${activeTab==='cantrip'?'active':''}" data-tab="cantrip">Zaubertricks</button><button type="button" class="secondary spell-tab ${activeTab==='spells'?'active':''}" data-tab="spells">Zauber</button></div><div id="tab-cantrip" class="spell-tab-pane ${activeTab==='cantrip'?'active':''}"><label class="spell-select-label">Zaubertrick auswählen<select id="cantrip-select">${cfg.cantrips.map((c) => `<option value="${c.id}" ${c.id===activeCantrip.id?'selected':''}>${c.name}</option>`).join('')}</select></label><div class="spell-info-box" id="cantrip-info">${activeCantrip.text}</div></div><div id="tab-spells" class="spell-tab-pane ${activeTab==='spells'?'active':''}"><label class="spell-select-label">Zauber</label><div id="spell-picker" class="spell-picker">${available.map((s)=>`<button type="button" class="spell-row ${prepared.includes(s.id)?'active':''}" data-spell-id="${s.id}"><div class="spell-row-head"><div class="spell-row-title">Grad ${s.level} · ${s.name}</div><span class="pick-indicator">✓</span></div><div class="spell-row-desc">${escapeHtml(shortOptionText(s.text, 140))}</div></button>`).join('')}</div><div class="spell-actions"><button type="button" class="secondary" id="spell-reset">Auswahl zurücksetzen</button></div><p class="muted">Ausgewählt: <strong id="prepared-count">${prepared.length}</strong>/${lvlCfg.prepared}</p><p class="muted">Als Nächstes unten die ausgewählten Zauber den Zauberplätzen zuweisen.</p><div id="prepared-list" class="prepared-list">${prepared.length ? prepared.map((id)=>`<button type="button" class="pill prepared-pill" data-prepared="${id}">${(cfg.spells.find((s)=>s.id===id)||{name:id}).name}</button>`).join('') : '<span>Noch keine Zauber ausgewählt.</span>'}</div><div class="slots-wrap"><span>Zauberplätze:</span><div id="slot-track" class="slot-track">${Array.from({length:lvlCfg.slots},(_,i)=>`<button type="button" class="slot slot-empty" data-slot="${i}"><span class="slot-dot"></span><span class="slot-index">${i+1}</span></button>`).join('')}</div></div></div></section>`;
}

function wireSpellUi(state, charId, onDirty) {
  const idx = state.characters.findIndex((c) => c.id === charId);
  if (idx < 0) return;
  const key = casterKey(state.characters[idx].id);
  if (!key) return;
  const cfg = SPELL_BOOK[key];

  const cantripSelect = document.getElementById('cantrip-select');
  const cantripInfo = document.getElementById('cantrip-info');
  const spellPicker = document.getElementById('spell-picker');
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
    if (onDirty) onDirty();
  }

  function redrawSpellState() {
    const c = ch();
    const lc = levelCfg();
    const avail = available();
    const prepared = (c.preparedSpells || []).filter((id) => avail.some((s) => s.id === id));

    if (preparedCount) preparedCount.textContent = String(prepared.length);

    if (spellPicker) {
      spellPicker.querySelectorAll('[data-spell-id]').forEach((el) => {
        el.classList.toggle('active', prepared.includes(el.dataset.spellId));
      });
    }

    if (preparedList) {
      preparedList.innerHTML = prepared.length
        ? prepared
            .map((id) => `<button type="button" class="pill prepared-pill" data-prepared="${id}"><span>${(cfg.spells.find((s)=>s.id===id)||{name:id}).name}</span><span class="pick-indicator">✓</span></button>`)
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

          // Leere Slots dürfen nicht direkt geklickt/gesetzt werden.
          // Belegung passiert nur über ausgewählte Zauber oben.
          if (states2[idx] === 'empty') return;

          // Gefüllten Slot wieder freigeben und ggf. Zuweisung lösen.
          states2[idx] = 'empty';
          const assignments = { ...(c2.spellAssignments || {}) };
          Object.keys(assignments).forEach((spellId) => {
            if (assignments[spellId] === idx) delete assignments[spellId];
          });

          persist({ slotStates: states2, spellAssignments: assignments, spellTab: 'spells' });
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

  spellPicker?.querySelectorAll('[data-spell-id]').forEach((el) => {
    el.addEventListener('click', () => {
      const id = el.dataset.spellId;
      const lc = levelCfg();
      const cNow = ch();
      let nextPrepared = [...(cNow.preparedSpells || [])];

      if (nextPrepared.includes(id)) {
        nextPrepared = nextPrepared.filter((x) => x !== id);
      } else {
        const cap = Math.min(5, lc.prepared);
        if (nextPrepared.length >= cap) return;
        nextPrepared.push(id);
      }

      const oldAssignments = { ...(cNow.spellAssignments || {}) };
      const nextAssignments = {};
      const nextStates = Array.from({ length: lc.slots }, () => 'empty');
      nextPrepared.forEach((sid) => {
        const slot = oldAssignments[sid];
        if (slot >= 0 && slot < lc.slots) {
          nextAssignments[sid] = slot;
          const prevState = cNow.slotStates?.[slot] || 'used';
          nextStates[slot] = prevState === 'empty' ? 'empty' : 'used';
        }
      });

      persist({ preparedSpells: nextPrepared, spellAssignments: nextAssignments, slotStates: nextStates, spellTab: 'spells' });
      redrawSpellState();
    });
  });


  document.getElementById('spell-reset')?.addEventListener('click', () => {
    persist({ preparedSpells: [], slotsUsed: 0, slotStates: [], spellAssignments: {}, spellTab: 'spells' });
    redrawSpellState();
  });

  redrawSpellState();
}

function weaponSection(character) {
  const weapons = Array.isArray(character.waffen) ? character.waffen : [];
  return `<section class="card weapon-section"><h3>Waffenübersicht</h3>${weapons.length ? `<div class="weapon-grid">${weapons.map((w, i) => `<article class="weapon-card" data-weapon-index="${i}"><header class="weapon-head"><strong>${escapeHtml(w.name || '-')}</strong><span class="weapon-badge">${escapeHtml(w.art || '-')}</span></header><div class="weapon-stats"><div><span class="muted">Angriffsbonus</span><p>${escapeHtml(w.bonus || '-')}</p></div><div><span class="muted">Schaden</span><p>${escapeHtml(w.schaden || '-')}</p></div></div><p class="weapon-use">${escapeHtml(w.einsatz || '')}</p></article>`).join('')}</div>` : '<p class="muted">Noch keine Waffen eingetragen.</p>'}<button type="button" id="add-weapon" class="add-weapon-btn">＋ Waffe hinzufügen</button></section>`;
}

function field(name, label, value, type = 'text') { return `<label>${label}<input name="${name}" type="${type}" value="${escapeHtml(String(value ?? ''))}" /></label>`; }
function shortOptionText(text, max = 72) {
  const clean = String(text || '').replace(/\s+/g, ' ').trim();
  return clean.length > max ? `${clean.slice(0, max - 1)}…` : clean;
}
function escapeHtml(str) { return str.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#039;'); }
window.addEventListener('hashchange', render);
render();

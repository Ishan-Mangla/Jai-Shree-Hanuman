const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

const state = {
  screen: 'home',
  chalisaIndex: 0,
  chalisaPlaying: false,
  chalisaMode: localStorage.getItem('chalisaAudioMode') || 'full',
  chalisaSyncOffset: Number(localStorage.getItem('chalisaSyncOffset') || 0),
  chalisaRaf: null,
  videoSyncRaf: null,
  stotraId: DEVOTIONAL_TEXTS[0].id,
  stotraIndex: 0,
  stotraPlaying: false,
  selectedMantra: 0,
  selectedChapter: 2,
  selectedGita: 0,
  activeAudio: null,
  japa: Number(localStorage.getItem('hanumanJapa') || 0),
  stats: JSON.parse(localStorage.getItem('hanumanStats') || '{"streak":0,"paths":0,"mala":0,"lastDate":""}')
};

document.addEventListener('DOMContentLoaded', init);
window.speechSynthesis?.addEventListener?.('voiceschanged', () => {});

function init() {
  createPetals();
  bindNavigation();
  setupHeaderButtons();
  setupMedia();
  setupHanumanVideos();
  migrateChalisaSyncSettings();
  setupSpecialDay();
  renderStats();
  renderChalisa();
  setupChalisa();
  renderStotraMenu();
  renderStotra();
  setupStotra();
  renderMantras();
  setupJapa();
  renderGita();
  renderKnowledge();
  renderSadhana();
  renderCredits();
}

function createPetals() {
  const layer = $('#petals');
  for (let i = 0; i < 36; i++) {
    const p = document.createElement('span');
    p.className = 'petal';
    p.style.left = `${Math.random() * 100}%`;
    p.style.animationDuration = `${8 + Math.random() * 12}s`;
    p.style.animationDelay = `${Math.random() * 10}s`;
    p.style.transform = `scale(${0.65 + Math.random() * 0.85})`;
    layer.appendChild(p);
  }
}

function bindNavigation() {
  $$('[data-screen]').forEach(btn => btn.addEventListener('click', () => switchScreen(btn.dataset.screen)));
  $('#hamburger').addEventListener('click', () => $('#navTabs').classList.toggle('open'));
}

function switchScreen(screen) {
  state.screen = screen;
  stopAll(false);
  $$('.screen').forEach(s => s.classList.toggle('active-screen', s.id === screen));
  $$('.nav-tab').forEach(b => b.classList.toggle('active', b.dataset.screen === screen));
  $('#navTabs').classList.remove('open');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function setupHeaderButtons() {
  $('#bellBtn').addEventListener('click', playBell);
  $('#aartiBtn').addEventListener('click', () => {
    document.body.classList.toggle('aarti-mode');
    toast(document.body.classList.contains('aarti-mode') ? 'Aarti glow enabled 🪔' : 'Aarti glow disabled');
  });
}

function playBell() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const ctx = new AudioContext();
    const gain = ctx.createGain();
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    gain.connect(ctx.destination);
    osc1.connect(gain);
    osc2.connect(gain);
    osc1.frequency.value = 620;
    osc2.frequency.value = 930;
    osc1.type = 'sine';
    osc2.type = 'sine';
    gain.gain.setValueAtTime(0.0001, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.28, ctx.currentTime + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.8);
    osc1.start(); osc2.start();
    osc1.stop(ctx.currentTime + 1.9); osc2.stop(ctx.currentTime + 1.9);
    toast('Temple bell 🔔 Jai Bajrang Bali');
  } catch {
    toast('Bell sound not supported in this browser');
  }
}

function setupMedia() {
  $('#heroImage').src = ONLINE_IMAGES[1]?.url || ONLINE_IMAGES[0].url;
  $('#heroImage').onerror = () => { $('#heroImage').src = ONLINE_IMAGES[0].url; };
  const syncedAudio = typeof CHALISA_FULL_AUDIO !== 'undefined' ? CHALISA_FULL_AUDIO.src : '';
  const fallbackAudio = ONLINE_AUDIO[0]?.url || '';
  const preferredAudio = syncedAudio || fallbackAudio;
  if (preferredAudio) {
    $('#heroAudio').src = preferredAudio;
    $('#onlineAudio').src = preferredAudio;
  }
  if ($('#chalisaFullAudio') && syncedAudio) {
    $('#chalisaFullAudio').src = syncedAudio;
  }
}


function migrateChalisaSyncSettings() {
  const version = 'line-sync-v4-chaupai-calibrated';
  if (localStorage.getItem('chalisaSyncVersion') !== version) {
    state.chalisaSyncOffset = 0;
    state.chalisaMode = 'full';
    localStorage.setItem('chalisaSyncOffset', '0');
    localStorage.setItem('chalisaAudioMode', 'full');
    localStorage.setItem('chalisaSyncVersion', version);
  }
}

function setupSpecialDay() {
  const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const d = new Date();
  $('#todayStat').textContent = days[d.getDay()];
  if (d.getDay() === 2) {
    document.body.classList.add('aarti-mode');
    $('#dayBadge').textContent = 'Mangalvaar Special Active';
    toast('Mangalvaar special mode active 🔥');
  }
}

function renderStats() {
  $('#streakStat').textContent = state.stats.streak || 0;
  $('#pathStat').textContent = state.stats.paths || 0;
  $('#malaStat').textContent = state.stats.mala || 0;
  $('#japaCount').textContent = state.japa || 0;
}
function saveStats() { localStorage.setItem('hanumanStats', JSON.stringify(state.stats)); renderStats(); }

function renderChalisa() {
  $('#chalisaTotal').textContent = CHALISA_VERSES.length;
  const list = $('#chalisaList');
  list.innerHTML = '';
  CHALISA_VERSES.forEach((v, idx) => {
    const card = document.createElement('article');
    card.className = 'text-card';
    card.dataset.index = idx;
    card.innerHTML = `
      <div class="meta"><span>${escapeHtml(v.type)}</span><span>${String(idx + 1).padStart(2, '0')}</span></div>
      <div class="dev lyric-dev">${lyricLineSpans(v.hindi)}</div>
      <div class="roman">${escapeHtml(v.english)}</div>
      <div class="meaning">${escapeHtml(v.meaning)}</div>
      <div class="card-actions">
        <button class="mini-btn" data-action="play">Play</button>
        <button class="mini-btn" data-action="seek">Seek Audio</button>
        <button class="mini-btn" data-action="syncnow">Sync Here</button>
        <button class="mini-btn" data-action="select">Select</button>
        <button class="mini-btn" data-action="copy">Copy</button>
      </div>`;
    card.addEventListener('click', e => {
      const action = e.target.dataset.action;
      if (action === 'play') { state.chalisaIndex = idx; playChalisa(); }
      if (action === 'seek') { state.chalisaIndex = idx; setChalisaAudioMode('full'); seekFullAudioToIndex(idx, state.chalisaPlaying); updateChalisa(); }
      if (action === 'syncnow') { syncCurrentAudioToVerse(idx); }
      if (action === 'select') { state.chalisaIndex = idx; updateChalisa(); }
      if (action === 'copy') copyText(`${v.hindi}\n${v.english}\n${v.meaning}`);
    });
    list.appendChild(card);
  });
  $('#chalisaSearch').addEventListener('input', filterChalisa);
  $('#chalisaView').addEventListener('change', applyChalisaView);
  $('#fontPlus').addEventListener('click', () => adjustFont(2));
  $('#fontMinus').addEventListener('click', () => adjustFont(-2));
  applyChalisaView();
  updateChalisa();
}

function setupChalisa() {
  setChalisaAudioMode(state.chalisaMode || 'full', false);
  setupFullChalisaAudio();

  $('#playChalisa').addEventListener('click', () => state.chalisaPlaying ? stopAll() : playChalisa());
  $('#prevChalisa').addEventListener('click', () => moveChalisa(-1));
  $('#nextChalisa').addEventListener('click', () => moveChalisa(1));
  $('#completeChalisa').addEventListener('click', completePath);
  $$('input[name="chalisaAudioMode"]').forEach(radio => {
    radio.addEventListener('change', () => {
      setChalisaAudioMode(radio.value);
      stopAll(false);
      if (radio.value === 'full') seekFullAudioToIndex(state.chalisaIndex, false);
    });
  });
  $('#syncOffsetRange')?.addEventListener('input', e => {
    state.chalisaSyncOffset = Number(e.target.value || 0);
    localStorage.setItem('chalisaSyncOffset', state.chalisaSyncOffset);
    updateSyncOffsetUi();
    syncChalisaFromFullAudio();
  });
  $('#resetSyncOffset')?.addEventListener('click', () => {
    state.chalisaSyncOffset = 0;
    localStorage.setItem('chalisaSyncOffset', '0');
    $('#syncOffsetRange').value = 0;
    updateSyncOffsetUi();
    syncChalisaFromFullAudio();
    toast('Sync offset reset');
  });
  updateSyncOffsetUi();
}

function moveChalisa(delta) {
  const mode = getChalisaAudioMode();
  const wasPlaying = state.chalisaPlaying;
  state.chalisaIndex = Math.max(0, Math.min(CHALISA_VERSES.length - 1, state.chalisaIndex + delta));
  if (mode === 'full') {
    seekFullAudioToIndex(state.chalisaIndex, wasPlaying);
  } else {
    stopAll(false);
    updateChalisa();
  }
}

function updateChalisa() {
  const v = CHALISA_VERSES[state.chalisaIndex];
  $('#currentChalisaTitle').textContent = v.type;
  $('#currentChalisaText').innerHTML = `<span class="now-dev lyric-dev">${lyricLineSpans(v.hindi)}</span><span class="now-roman">${escapeHtml(v.english)}</span>`;
  $('#chalisaIndex').textContent = state.chalisaIndex + 1;
  const audio = $('#chalisaFullAudio');
  const fullMode = getChalisaAudioMode() === 'full' && audio && Number.isFinite(audio.duration) && audio.duration > 0;
  const progress = fullMode
    ? Math.max(0, Math.min(100, ((audio.currentTime - (CHALISA_FULL_AUDIO?.introEnd || 0)) / ((CHALISA_FULL_AUDIO?.lyricsEnd || audio.duration) - (CHALISA_FULL_AUDIO?.introEnd || 0))) * 100))
    : ((state.chalisaIndex + 1) / CHALISA_VERSES.length) * 100;
  $('#chalisaProgress').style.width = `${progress}%`;
  $$('#chalisaList .text-card').forEach(card => {
    const active = Number(card.dataset.index) === state.chalisaIndex;
    card.classList.toggle('active', active);
    card.classList.toggle('synced-live', active && getChalisaAudioMode() === 'full' && state.chalisaPlaying);
    if (active && $('#autoScroll').checked && state.screen === 'chalisa' && state.lastScrolledChalisaIndex !== state.chalisaIndex) {
      card.scrollIntoView({ behavior: 'smooth', block: 'center' });
      state.lastScrolledChalisaIndex = state.chalisaIndex;
    }
  });
  updateVerseTimeDisplay();
  updateCurrentLineHighlight();
}

function playChalisa() {
  const mode = getChalisaAudioMode();
  if (mode === 'full') {
    playSyncedChalisa();
    return;
  }

  stopAll(false);
  state.chalisaPlaying = true;
  $('#playChalisa').textContent = '⏸';
  updateChalisa();
  const v = CHALISA_VERSES[state.chalisaIndex];
  if (mode === 'clip') {
    playAudio(v.audio, afterChalisaLine, () => { toast('Verse MP3 missing. Using bot voice.'); speak(v.hindi, afterChalisaLine); });
  } else {
    speak(v.hindi, afterChalisaLine);
  }
}

function playSyncedChalisa() {
  const audio = $('#chalisaFullAudio');
  if (!audio || !audio.src) {
    toast('Full Chalisa audio file is missing. Using bot voice.');
    setChalisaAudioMode('tts');
    playChalisa();
    return;
  }

  stopAll(false);
  setChalisaAudioMode('full', false);
  state.chalisaPlaying = true;
  $('#playChalisa').textContent = '⏸';

  const sync = CHALISA_SYNC[state.chalisaIndex];
  const effectiveTime = audio.currentTime + state.chalisaSyncOffset;
  const currentAudioIndex = findSyncIndex(effectiveTime);
  const shouldResumeSameVerse = currentAudioIndex === state.chalisaIndex && effectiveTime >= sync.start && effectiveTime < sync.end && audio.currentTime > 0 && !audio.ended;
  if (!shouldResumeSameVerse) {
    audio.currentTime = Math.max(0, sync.start - state.chalisaSyncOffset);
  }

  updateChalisa();
  audio.play().catch(() => {
    state.chalisaPlaying = false;
    $('#playChalisa').textContent = '▶';
    toast('Tap the audio player once, then press play again');
  });
}

function afterChalisaLine() {
  if (!state.chalisaPlaying) return;
  if ($('#repeatVerse').checked) { setTimeout(playChalisa, 700); return; }
  if (state.chalisaIndex < CHALISA_VERSES.length - 1) {
    state.chalisaIndex++;
    setTimeout(playChalisa, 550);
  } else {
    stopAll(false); completePath(); toast('Hanuman Chalisa complete 🙏');
  }
}

function setupFullChalisaAudio() {
  const audio = $('#chalisaFullAudio');
  const seek = $('#chalisaSeek');
  if (!audio || !seek) return;
  if (!audio.src && typeof CHALISA_FULL_AUDIO !== 'undefined') audio.src = CHALISA_FULL_AUDIO.src;

  audio.addEventListener('loadedmetadata', () => {
    seek.max = Number.isFinite(audio.duration) ? audio.duration : CHALISA_FULL_AUDIO.duration;
    $('#chalisaDuration').textContent = formatTime(audio.duration || CHALISA_FULL_AUDIO.duration);
    syncChalisaFromFullAudio();
  });
  audio.addEventListener('play', () => {
    setChalisaAudioMode('full', false);
    if (state.activeAudio) { state.activeAudio.pause(); state.activeAudio.currentTime = 0; state.activeAudio = null; }
    if ('speechSynthesis' in window) speechSynthesis.cancel();
    state.chalisaPlaying = true;
    $('#playChalisa').textContent = '⏸';
    $('#syncModeLabel').innerHTML = '<i></i>Playing';
    syncChalisaFromFullAudio();
    startChalisaKaraokeLoop();
  });
  audio.addEventListener('pause', () => {
    if (getChalisaAudioMode() === 'full' && !audio.ended) {
      state.chalisaPlaying = false;
      $('#playChalisa').textContent = '▶';
      $('#syncModeLabel').innerHTML = '<i></i>Paused';
    }
    stopChalisaKaraokeLoop();
  });
  audio.addEventListener('timeupdate', syncChalisaFromFullAudio);
  audio.addEventListener('ended', () => {
    state.chalisaPlaying = false;
    $('#playChalisa').textContent = '▶';
    completePath();
    stopChalisaKaraokeLoop();
    toast('Hanuman Chalisa complete 🙏');
  });
  seek.addEventListener('input', () => {
    audio.currentTime = Number(seek.value || 0);
    syncChalisaFromFullAudio();
  });
}

function syncChalisaFromFullAudio() {
  const audio = $('#chalisaFullAudio');
  if (!audio) return;

  const effectiveTime = (audio.currentTime || 0) + state.chalisaSyncOffset;
  const idx = findSyncIndex(effectiveTime);
  if (idx !== state.chalisaIndex) {
    state.chalisaIndex = idx;
    updateChalisa();
  } else {
    updateFullChalisaUi();
  }

  const sync = CHALISA_SYNC[state.chalisaIndex];
  if ($('#repeatVerse')?.checked && getChalisaAudioMode() === 'full' && state.chalisaPlaying && sync && effectiveTime >= sync.end - 0.08) {
    audio.currentTime = Math.max(0, sync.start - state.chalisaSyncOffset);
  }
}

function updateFullChalisaUi() {
  const audio = $('#chalisaFullAudio');
  const seek = $('#chalisaSeek');
  const duration = audio?.duration || CHALISA_FULL_AUDIO?.duration || 0;
  if (seek && Number.isFinite(duration)) {
    seek.max = duration;
    seek.value = audio?.currentTime || 0;
  }
  if ($('#chalisaCurrentTime')) $('#chalisaCurrentTime').textContent = formatTime(audio?.currentTime || 0);
  if ($('#chalisaDuration')) $('#chalisaDuration').textContent = formatTime(duration || 0);

  const start = CHALISA_FULL_AUDIO?.introEnd || 0;
  const end = CHALISA_FULL_AUDIO?.lyricsEnd || duration || 1;
  const current = audio?.currentTime || 0;
  const pct = Math.max(0, Math.min(100, ((current - start) / Math.max(1, end - start)) * 100));
  if ($('#chalisaProgress')) $('#chalisaProgress').style.width = `${pct}%`;
  updateVerseTimeDisplay();
  updateCurrentLineHighlight();
}

function startChalisaKaraokeLoop() {
  stopChalisaKaraokeLoop();
  const tick = () => {
    syncChalisaFromFullAudio();
    const audio = $('#chalisaFullAudio');
    if (audio && !audio.paused && !audio.ended) state.chalisaRaf = requestAnimationFrame(tick);
  };
  state.chalisaRaf = requestAnimationFrame(tick);
}

function stopChalisaKaraokeLoop() {
  if (state.chalisaRaf) cancelAnimationFrame(state.chalisaRaf);
  state.chalisaRaf = null;
}

function seekFullAudioToIndex(index, autoplay = false) {
  const audio = $('#chalisaFullAudio');
  const sync = CHALISA_SYNC[index];
  if (!audio || !sync) return;
  audio.currentTime = Math.max(0, sync.start - state.chalisaSyncOffset);
  syncChalisaFromFullAudio();
  if (autoplay) playSyncedChalisa();
}

function syncCurrentAudioToVerse(index) {
  const audio = $('#chalisaFullAudio');
  const sync = CHALISA_SYNC[index];
  if (!audio || !sync) return;
  setChalisaAudioMode('full');
  state.chalisaIndex = index;
  state.chalisaSyncOffset = Number((sync.start - (audio.currentTime || 0)).toFixed(1));
  state.chalisaSyncOffset = Math.max(-45, Math.min(45, state.chalisaSyncOffset));
  localStorage.setItem('chalisaSyncOffset', state.chalisaSyncOffset);
  updateSyncOffsetUi();
  syncChalisaFromFullAudio();
  toast(`Synced current audio with verse ${index + 1}`);
}

function findSyncIndex(time) {
  if (!Array.isArray(CHALISA_SYNC) || !CHALISA_SYNC.length) return 0;
  if (time <= CHALISA_SYNC[0].start) return 0;
  const index = CHALISA_SYNC.findIndex(item => time >= item.start && time < item.end);
  if (index >= 0) return index;
  return time >= CHALISA_SYNC[CHALISA_SYNC.length - 1].end ? CHALISA_SYNC.length - 1 : 0;
}

function getChalisaAudioMode() {
  return document.querySelector('input[name="chalisaAudioMode"]:checked')?.value || state.chalisaMode || 'full';
}

function setChalisaAudioMode(mode, save = true) {
  state.chalisaMode = mode;
  $$('input[name="chalisaAudioMode"]').forEach(r => { r.checked = r.value === mode; });
  if (save) localStorage.setItem('chalisaAudioMode', mode);
  $('#syncPanel')?.classList.toggle('sync-panel-muted', mode !== 'full');
}

function updateSyncOffsetUi() {
  const offset = Number(state.chalisaSyncOffset || 0);
  if ($('#syncOffsetRange')) $('#syncOffsetRange').value = offset;
  if ($('#syncOffsetText')) $('#syncOffsetText').textContent = `${offset > 0 ? '+' : ''}${offset.toFixed(1)}s`;
  updateVerseTimeDisplay();
}

function updateVerseTimeDisplay() {
  const sync = CHALISA_SYNC?.[state.chalisaIndex];
  if (!sync || !$('#chalisaVerseTime')) return;
  $('#chalisaVerseTime').textContent = `Verse ${state.chalisaIndex + 1}: ${formatTime(Math.max(0, sync.start - state.chalisaSyncOffset))} – ${formatTime(Math.max(0, sync.end - state.chalisaSyncOffset))}`;
}


function getCurrentVerseProgress() {
  const audio = $('#chalisaFullAudio');
  const sync = CHALISA_SYNC?.[state.chalisaIndex];
  if (!audio || !sync || getChalisaAudioMode() !== 'full') return 0;
  const effectiveTime = (audio.currentTime || 0) + state.chalisaSyncOffset;
  const total = Math.max(0.1, sync.end - sync.start);
  return Math.max(0, Math.min(1, (effectiveTime - sync.start) / total));
}

function updateCurrentLineHighlight() {
  const verse = CHALISA_VERSES[state.chalisaIndex];
  if (!verse) return;
  const lines = verse.hindi.split('\n').filter(Boolean);
  const progress = getCurrentVerseProgress();
  const activeSegment = getActiveLineSegment();
  const activeLine = activeSegment
    ? activeSegment.line
    : Math.max(0, Math.min(lines.length - 1, Math.floor(progress * lines.length)));
  const lineProgress = activeSegment ? activeSegment.progress : progress;

  document.documentElement.style.setProperty('--liveProgress', `${Math.round(progress * 100)}%`);
  $$('.lyric-line').forEach(line => {
    line.classList.remove('line-live');
    line.style.removeProperty('--lineProgress');
  });

  const activeCard = $(`#chalisaList .text-card[data-index="${state.chalisaIndex}"]`);
  if (activeCard) {
    activeCard.style.setProperty('--verseProgress', `${Math.round(progress * 100)}%`);
    $$(`.lyric-line[data-line="${activeLine}"]`, activeCard).forEach(line => {
      line.classList.add('line-live');
      line.style.setProperty('--lineProgress', `${Math.round(lineProgress * 100)}%`);
    });
  }
  $$(`#currentChalisaText .lyric-line[data-line="${activeLine}"]`).forEach(line => {
    line.classList.add('line-live');
    line.style.setProperty('--lineProgress', `${Math.round(lineProgress * 100)}%`);
  });
}

function getActiveLineSegment() {
  if (!Array.isArray(CHALISA_LINE_SYNC)) return null;
  const audio = $('#chalisaFullAudio');
  if (!audio || getChalisaAudioMode() !== 'full') return null;
  const effectiveTime = (audio.currentTime || 0) + state.chalisaSyncOffset;
  const segments = CHALISA_LINE_SYNC.filter(x => x.verse === state.chalisaIndex);
  const found = segments.find(x => effectiveTime >= x.start && effectiveTime < x.end) || null;
  if (!found) return null;
  return {
    ...found,
    progress: Math.max(0, Math.min(1, (effectiveTime - found.start) / Math.max(0.1, found.end - found.start)))
  };
}

function formatTime(seconds) {
  const safe = Math.max(0, Number(seconds) || 0);
  const m = Math.floor(safe / 60);
  const s = Math.floor(safe % 60);
  return `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
}

function filterChalisa() {
  const q = $('#chalisaSearch').value.toLowerCase().trim();
  $$('#chalisaList .text-card').forEach(card => {
    const v = CHALISA_VERSES[Number(card.dataset.index)];
    const text = `${v.type} ${v.hindi} ${v.english} ${v.meaning}`.toLowerCase();
    card.style.display = text.includes(q) ? '' : 'none';
  });
}
function applyChalisaView() {
  const mode = $('#chalisaView').value;
  $$('#chalisaList .text-card').forEach(card => {
    $('.dev', card).style.display = ['all','dev'].includes(mode) ? '' : 'none';
    $('.roman', card).style.display = ['all','roman'].includes(mode) ? '' : 'none';
    $('.meaning', card).style.display = ['all','meaning'].includes(mode) ? '' : 'none';
  });
}
function adjustFont(delta) {
  const current = Number(getComputedStyle(document.documentElement).getPropertyValue('--devFont').replace('px','')) || 29;
  document.documentElement.style.setProperty('--devFont', `${Math.max(21, Math.min(44, current + delta))}px`);
}

function currentStotra() { return DEVOTIONAL_TEXTS.find(x => x.id === state.stotraId) || DEVOTIONAL_TEXTS[0]; }
function renderStotraMenu() {
  const menu = $('#stotraMenu'); menu.innerHTML = '';
  DEVOTIONAL_TEXTS.forEach(item => {
    const btn = document.createElement('button');
    btn.className = 'menu-btn'; btn.dataset.id = item.id;
    btn.innerHTML = `<strong>${escapeHtml(item.title)}</strong><br><small>${escapeHtml(item.type)}</small>`;
    btn.addEventListener('click', () => { stopAll(false); state.stotraId = item.id; state.stotraIndex = 0; renderStotra(); });
    menu.appendChild(btn);
  });
}
function renderStotra() {
  const stotra = currentStotra();
  $('#stotraTitle').textContent = stotra.title;
  $('#stotraType').textContent = stotra.type;
  $('#stotraDesc').textContent = stotra.desc;
  $$('#stotraMenu .menu-btn').forEach(b => b.classList.toggle('active', b.dataset.id === stotra.id));
  const list = $('#stotraLines'); list.innerHTML = '';
  stotra.lines.forEach((line, idx) => {
    const card = document.createElement('article');
    card.className = 'text-card'; card.dataset.index = idx;
    card.innerHTML = `<div class="meta"><span>${escapeHtml(stotra.title)}</span><span>${String(idx + 1).padStart(2,'0')}</span></div><div class="dev">${lineBreak(line.text)}</div><div class="meaning">${escapeHtml(line.meaning)}</div><div class="card-actions"><button class="mini-btn" data-action="play">Play</button><button class="mini-btn" data-action="copy">Copy</button></div>`;
    card.addEventListener('click', e => { if (e.target.dataset.action === 'play') { state.stotraIndex = idx; playStotra(); } if (e.target.dataset.action === 'copy') copyText(`${line.text}\n${line.meaning}`); });
    list.appendChild(card);
  });
  $('#stotraSearch').value = '';
  updateStotraActive(); applyStotraView();
}
function setupStotra() {
  $('#playStotra').addEventListener('click', () => state.stotraPlaying ? stopAll() : playStotra());
  $('#prevStotra').addEventListener('click', () => { stopAll(false); state.stotraIndex = Math.max(0, state.stotraIndex - 1); updateStotraActive(); });
  $('#nextStotra').addEventListener('click', () => { stopAll(false); state.stotraIndex = Math.min(currentStotra().lines.length - 1, state.stotraIndex + 1); updateStotraActive(); });
  $('#stotraSearch').addEventListener('input', filterStotra);
  $('#stotraView').addEventListener('change', applyStotraView);
}
function playStotra() { stopAll(false); state.stotraPlaying = true; $('#playStotra').textContent = '⏸'; updateStotraActive(); speak(currentStotra().lines[state.stotraIndex].text, afterStotraLine); }
function afterStotraLine() {
  if (!state.stotraPlaying) return;
  if (state.stotraIndex < currentStotra().lines.length - 1) { state.stotraIndex++; setTimeout(playStotra, 600); }
  else { stopAll(false); toast(`${currentStotra().title} complete 🙏`); }
}
function updateStotraActive() { $$('#stotraLines .text-card').forEach(card => { const active = Number(card.dataset.index) === state.stotraIndex; card.classList.toggle('active', active); if (active && state.screen === 'stotra') card.scrollIntoView({ behavior:'smooth', block:'center' }); }); }
function filterStotra() { const q = $('#stotraSearch').value.toLowerCase().trim(); $$('#stotraLines .text-card').forEach(card => { const line = currentStotra().lines[Number(card.dataset.index)]; card.style.display = `${line.text} ${line.meaning}`.toLowerCase().includes(q) ? '' : 'none'; }); }
function applyStotraView() { const mode = $('#stotraView').value; $$('#stotraLines .text-card').forEach(card => { $('.dev', card).style.display = ['all','text'].includes(mode) ? '' : 'none'; $('.meaning', card).style.display = ['all','meaning'].includes(mode) ? '' : 'none'; }); }

function renderMantras() {
  const grid = $('#mantraGrid'); grid.innerHTML = '';
  HANUMAN_MANTRAS.forEach((m, idx) => {
    const card = document.createElement('article');
    card.className = 'mantra-card'; card.dataset.index = idx;
    card.innerHTML = `<div class="meta"><span>${escapeHtml(m.title)}</span><span>📿</span></div><div class="dev">${lineBreak(m.sanskrit)}</div><div class="roman">${escapeHtml(m.english)}</div><div class="meaning">${escapeHtml(m.meaning)}</div><div class="card-actions"><button class="mini-btn" data-action="select">Select</button><button class="mini-btn" data-action="speak">Speak</button></div>`;
    card.addEventListener('click', e => { state.selectedMantra = idx; updateSelectedMantra(); if (e.target.dataset.action === 'speak') speak(m.sanskrit, () => {}); });
    grid.appendChild(card);
  });
  updateSelectedMantra();
}
function updateSelectedMantra() { const m = HANUMAN_MANTRAS[state.selectedMantra]; $('#selectedMantraTitle').textContent = m.title; $('#selectedMantraText').textContent = m.sanskrit; $$('.mantra-card').forEach(c => c.classList.toggle('selected', Number(c.dataset.index) === state.selectedMantra)); }
function setupJapa() {
  $('#malaButton').addEventListener('click', addJapa); $('#addJapa').addEventListener('click', addJapa);
  $('#resetJapa').addEventListener('click', () => { state.japa = 0; saveJapa(); toast('Mala reset'); });
  $('#speakMantra').addEventListener('click', () => speak(HANUMAN_MANTRAS[state.selectedMantra].sanskrit, () => {}));
  $('#saveMala').addEventListener('click', () => { toast('Mala progress saved'); saveStats(); });
}
function addJapa() { state.japa++; if (state.japa >= 108) { state.japa = 0; state.stats.mala = Number(state.stats.mala || 0) + 1; saveStats(); toast('108 jap complete. Jai Hanuman!'); } saveJapa(); }
function saveJapa() { localStorage.setItem('hanumanJapa', state.japa); $('#japaCount').textContent = state.japa; }

function renderGita() {
  const chapters = $('#chapterButtons'); chapters.innerHTML = '';
  GITA_CHAPTERS.forEach(ch => { const btn = document.createElement('button'); btn.className = 'chapter-btn'; btn.dataset.chapter = ch.id; btn.innerHTML = `<strong>${ch.id}. ${escapeHtml(ch.hindi)}</strong><br><small>${escapeHtml(ch.name)}</small>`; btn.addEventListener('click', () => { state.selectedChapter = ch.id; renderGitaList(); }); chapters.appendChild(btn); });
  $('#gitaSearch').addEventListener('input', renderGitaList);
  $('#speakGita').addEventListener('click', () => { const v = filteredGita()[state.selectedGita] || filteredGita()[0]; if (v) speak(v.sanskrit, () => {}); });
  renderGitaList();
}
function filteredGita() { const q = $('#gitaSearch').value.toLowerCase().trim(); return GITA_VERSES.filter(v => v.chapter === state.selectedChapter && `${v.sanskrit} ${v.hindi} ${v.english} ${v.transliteration}`.toLowerCase().includes(q)); }
function renderGitaList() {
  $$('.chapter-btn').forEach(btn => btn.classList.toggle('active', Number(btn.dataset.chapter) === state.selectedChapter));
  const list = $('#gitaList'); const verses = filteredGita(); list.innerHTML = '';
  if (!verses.length) { list.innerHTML = `<article class="text-card"><h3>No shlok matched your search in this chapter.</h3><p>Clear the search or choose another chapter. The Gita library now includes key shlokas across all 18 chapters and is ready for more additions in <code>data.js</code>.</p></article>`; return; }
  verses.forEach((v, idx) => { const card = document.createElement('article'); card.className = 'text-card'; card.innerHTML = `<div class="meta"><span>Chapter ${v.chapter}, Verse ${v.verse}</span><button class="mini-btn" data-action="speak">Speak</button></div><div class="dev">${lineBreak(v.sanskrit)}</div><div class="roman">${escapeHtml(v.transliteration)}</div><div class="meaning"><strong>Hindi:</strong> ${escapeHtml(v.hindi)}</div><div class="meaning"><strong>English:</strong> ${escapeHtml(v.english)}</div>`; card.addEventListener('click', e => { state.selectedGita = idx; if (e.target.dataset.action === 'speak') speak(v.sanskrit, () => {}); }); list.appendChild(card); });
}

function renderKnowledge() {
  const grid = $('#knowledgeGrid'); grid.innerHTML = '';
  KNOWLEDGE_CARDS.forEach(k => { const card = document.createElement('article'); card.className = 'knowledge-card'; card.innerHTML = `<div class="meta"><span>${escapeHtml(k.title)}</span><span>${k.icon}</span></div><p>${escapeHtml(k.text)}</p>`; grid.appendChild(card); });
  const timeline = $('#timelineList'); timeline.innerHTML = '';
  TIMELINE.forEach((t, i) => { const item = document.createElement('div'); item.className = 'timeline-item'; item.innerHTML = `<strong>${String(i + 1).padStart(2,'0')} — ${escapeHtml(t.phase)}</strong><p>${escapeHtml(t.text)}</p>`; timeline.appendChild(item); });
  const guide = $('#hanumanStudyGuide');
  if (guide) {
    guide.innerHTML = `
      <div class="flow-row"><div><strong>1. Read the story</strong><br><small>Move through the timeline first, then open cards that match the part you want to understand.</small></div><span>📖</span></div>
      <div class="flow-row"><div><strong>2. Connect it with Chalisa</strong><br><small>When a card mentions Lanka, Sanjeevani, Ramdoot, or Sankat Mochan, search that word in the Chalisa tab.</small></div><span>🔎</span></div>
      <div class="flow-row"><div><strong>3. Make it daily</strong><br><small>Use one story as a sankalp: courage, humility, discipline, service, or Ram Naam.</small></div><span>🪔</span></div>`;
  }
  const gallery = $('#imageGallery'); gallery.innerHTML = '';
  ONLINE_IMAGES.forEach(img => { const card = document.createElement('article'); card.className = 'image-card'; card.innerHTML = `<img src="${img.url}" alt="${escapeHtml(img.title)}" loading="lazy" /><div><strong>${escapeHtml(img.title)}</strong><small>${escapeHtml(img.credit)}</small></div>`; $('img', card).onerror = () => card.style.display = 'none'; gallery.appendChild(card); });
}

function renderSadhana() {
  $('#sankalpText').value = localStorage.getItem('hanumanSankalp') || '';
  $('#saveSankalp').addEventListener('click', () => { localStorage.setItem('hanumanSankalp', $('#sankalpText').value); toast('Sankalp saved'); });
  fillRows('#practicePlan', PRACTICE_PLAN, p => `<strong>${escapeHtml(p.day)}</strong><br><small>${escapeHtml(p.text)}</small>`, '🔥');
  fillRows('#chakraList', CHAKRA_FLOW, c => `<strong>${escapeHtml(c.name)}</strong><br><small>${escapeHtml(c.text)}</small>`, '<span class="flow-dot"></span>');
  fillRows('#templeList', TEMPLES, t => `<strong>${escapeHtml(t.name)}</strong><br><small>${escapeHtml(t.note)}</small>`, '🛕');
}
function fillRows(selector, data, contentFn, icon) { const box = $(selector); box.innerHTML = ''; data.forEach(item => { const row = document.createElement('div'); row.className = 'flow-row'; row.innerHTML = `<div>${contentFn(item)}</div><span>${icon}</span>`; box.appendChild(row); }); }
function renderCredits() { fillSources('#audioSources', ONLINE_AUDIO); fillSources('#creditsList', CREDITS); }
function fillSources(selector, data) { const box = $(selector); box.innerHTML = ''; data.forEach(s => { const item = document.createElement('div'); item.className = 'source-item'; item.innerHTML = `<strong>${escapeHtml(s.title)}</strong><p>${escapeHtml(s.credit || s.text || '')}</p><a href="${s.url}" target="_blank" rel="noreferrer">Open source</a>`; box.appendChild(item); }); }


function setupHanumanVideos() {
  const video = $('#hanumanVideo');
  const audio = $('#hanumanVideoAudio');
  if (!video || !audio || !Array.isArray(HANUMAN_VIDEO_LIBRARY) || !HANUMAN_VIDEO_LIBRARY.length) return;

  const item = HANUMAN_VIDEO_LIBRARY[0];
  video.src = item.video;
  video.muted = true;
  video.playsInline = true;
  audio.src = item.audio;
  audio.volume = 1;

  $('#videoTitle') && ($('#videoTitle').textContent = item.title);
  $('#videoSubtitle') && ($('#videoSubtitle').textContent = item.subtitle);
  $('#videoMantra') && ($('#videoMantra').textContent = item.mantra);
  $('#videoNote') && ($('#videoNote').textContent = item.note);

  const playBtn = $('#playHanumanVideo');
  const restartBtn = $('#restartHanumanVideo');
  const seek = $('#hanumanVideoSeek');
  const volume = $('#hanumanVideoVolume');

  function syncAudioToVideo(force = false) {
    if (!audio.duration || !Number.isFinite(audio.duration)) return;
    const target = Math.min(video.currentTime || 0, Math.max(0, audio.duration - 0.05));
    if (force || Math.abs((audio.currentTime || 0) - target) > 0.22) audio.currentTime = target;
  }

  function updateVideoUi() {
    const duration = Math.min(video.duration || audio.duration || 0, audio.duration || video.duration || 0);
    const current = Math.min(video.currentTime || 0, duration || 0);
    if (seek && Number.isFinite(duration) && duration > 0) {
      seek.max = duration;
      seek.value = current;
    }
    $('#hanumanVideoCurrent') && ($('#hanumanVideoCurrent').textContent = formatTime(current));
    $('#hanumanVideoDuration') && ($('#hanumanVideoDuration').textContent = formatTime(duration || 0));
    const pct = duration ? Math.max(0, Math.min(100, (current / duration) * 100)) : 0;
    document.documentElement.style.setProperty('--videoProgress', `${pct}%`);
  }

  function startVideoLoop() {
    stopVideoLoop();
    const tick = () => {
      syncAudioToVideo(false);
      updateVideoUi();
      if (!video.paused && !video.ended) state.videoSyncRaf = requestAnimationFrame(tick);
    };
    state.videoSyncRaf = requestAnimationFrame(tick);
  }

  function stopVideoLoop() {
    if (state.videoSyncRaf) cancelAnimationFrame(state.videoSyncRaf);
    state.videoSyncRaf = null;
  }
  window.stopHanumanVideoLoop = stopVideoLoop;

  playBtn?.addEventListener('click', async () => {
    if (!video.paused) {
      video.pause();
      audio.pause();
      playBtn.textContent = '▶ Play Bhakti Video';
      stopVideoLoop();
      return;
    }
    stopAll(false);
    video.muted = true;
    syncAudioToVideo(true);
    try {
      await video.play();
      await audio.play();
      playBtn.textContent = '⏸ Pause Bhakti Video';
      startVideoLoop();
    } catch {
      playBtn.textContent = '▶ Play Bhakti Video';
      toast('Tap the video once, then press play again');
    }
  });

  restartBtn?.addEventListener('click', () => {
    video.currentTime = 0;
    audio.currentTime = 0;
    updateVideoUi();
  });

  seek?.addEventListener('input', () => {
    const value = Number(seek.value || 0);
    video.currentTime = value;
    if (audio.duration && Number.isFinite(audio.duration)) audio.currentTime = Math.min(value, Math.max(0, audio.duration - 0.05));
    updateVideoUi();
  });

  volume?.addEventListener('input', () => {
    audio.volume = Number(volume.value || 1);
  });

  video.addEventListener('play', () => { video.muted = true; syncAudioToVideo(true); startVideoLoop(); });
  video.addEventListener('pause', () => { audio.pause(); playBtn && (playBtn.textContent = '▶ Play Bhakti Video'); stopVideoLoop(); updateVideoUi(); });
  video.addEventListener('seeked', () => { syncAudioToVideo(true); updateVideoUi(); });
  video.addEventListener('loadedmetadata', updateVideoUi);
  audio.addEventListener('loadedmetadata', updateVideoUi);
  audio.addEventListener('ended', () => {
    video.pause();
    playBtn && (playBtn.textContent = '▶ Play Bhakti Video');
    stopVideoLoop();
    toast('Bhakti video complete 🙏');
  });
}

function stopHanumanVideo() {
  const video = $('#hanumanVideo');
  const audio = $('#hanumanVideoAudio');
  if (window.stopHanumanVideoLoop) window.stopHanumanVideoLoop();
  if (video) video.pause();
  if (audio) audio.pause();
  if ($('#playHanumanVideo')) $('#playHanumanVideo').textContent = '▶ Play Bhakti Video';
}

function playAudio(url, onEnd, onError) { const audio = new Audio(url); state.activeAudio = audio; audio.onended = onEnd; audio.onerror = onError; audio.play().catch(onError); }
function speak(text, onEnd) {
  if (!('speechSynthesis' in window)) { toast('Browser speech engine not supported'); stopAll(false); return; }
  speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = $('#voiceLang')?.value || 'hi-IN';
  utterance.rate = Number($('#speedRange')?.value || 0.82);
  utterance.pitch = 0.94;
  utterance.volume = 1;
  const voices = speechSynthesis.getVoices();
  utterance.voice = voices.find(v => v.lang === utterance.lang) || voices.find(v => v.lang?.startsWith('hi')) || voices[0] || null;
  utterance.onend = () => onEnd?.();
  utterance.onerror = () => { toast('Voice engine stopped. Try another language/voice.'); stopAll(false); };
  speechSynthesis.speak(utterance);
}
function stopAll(show = true, resetFullAudio = false) {
  state.chalisaPlaying = false; state.stotraPlaying = false;
  $('#playChalisa').textContent = '▶'; $('#playStotra').textContent = '▶';
  stopChalisaKaraokeLoop();
  const fullAudio = $('#chalisaFullAudio');
  if (fullAudio) {
    fullAudio.pause();
    if (resetFullAudio) fullAudio.currentTime = 0;
  }
  stopHanumanVideo();
  if (state.activeAudio) { state.activeAudio.pause(); state.activeAudio.currentTime = 0; state.activeAudio = null; }
  if ('speechSynthesis' in window) speechSynthesis.cancel();
  if ($('#syncModeLabel') && getChalisaAudioMode() === 'full') $('#syncModeLabel').innerHTML = '<i></i>Paused';
  if (show) toast('Paused');
}
function completePath() { const today = new Date().toISOString().slice(0,10); if (state.stats.lastDate !== today) { state.stats.streak = Number(state.stats.streak || 0) + 1; state.stats.lastDate = today; } state.stats.paths = Number(state.stats.paths || 0) + 1; saveStats(); toast('Path complete. Jai Shri Ram 🙏'); }
function escapeHtml(value) { return String(value).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&#039;'); }
function lyricLineSpans(value) {
  return String(value || '').split('\n').map((line, idx) => `<span class="lyric-line" data-line="${idx}">${escapeHtml(line)}</span>`).join('<br>');
}
function lineBreak(value) { return escapeHtml(value).replaceAll('\n','<br>'); }
function copyText(text) { navigator.clipboard?.writeText(text).then(() => toast('Copied')).catch(() => toast('Copy not available')); }
function toast(message) { const t = $('#toast'); t.textContent = message; t.classList.add('show'); clearTimeout(window.__toast); window.__toast = setTimeout(() => t.classList.remove('show'), 2500); }

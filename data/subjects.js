/*
  教學網站入口：科目與各科網站清單。
  - 新增一個科目網站（例如高中物理）時，只要在對應科目的 sites 加一筆：
      { name: '高中物理', repo: 'senior-high-physics', note: '版本說明' }
    repo 是該網站的倉庫名稱，網址會是 https://brianyeh0718-hue.github.io/<repo>/
  - 各網站的冊別與章節不用寫在這裡：入口頁會自動讀取各網站的 data/chapters.js，
    所以在各科網站新增章節、單元後，入口頁會自動顯示。
*/
window.PORTAL = {
  title: '互動教學網',
  subjects: [
    { id: 'math', name: '數學', icon: '📐', color: '#ffd84d',
      sites: [
        { name: '高中數學', repo: 'senior-high-math', note: '高中・龍騰版' }
      ] },
    { id: 'physics', name: '物理', icon: '🧲', color: '#7aa8ff',
      sites: [
        { name: '高中物理', repo: 'senior-high-physics', note: '高中・龍騰版' }
      ] },
    { id: 'chem', name: '化學', icon: '⚗️', color: '#3ee08f',
      sites: [
        { name: '高中化學', repo: 'senior-high-chemistry', note: '高中・翰林版' }
      ] },
    { id: 'bio', name: '生物', icon: '🧬', color: '#ff7aa8',
      sites: [
        { name: '高中生物', repo: 'senior-high-biology', note: '高中・龍騰版' }
      ] }
  ]
};

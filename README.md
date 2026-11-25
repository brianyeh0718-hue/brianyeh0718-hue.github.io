# 互動教學網（入口）

網址：https://brianyeh0718-hue.github.io/

這是所有科目教學網站的入口：先分數學、物理、化學，再進入各科網站選冊別與章節。

| 科目 | 網站 | 倉庫 |
|---|---|---|
| 數學 | 國中數學 | `junior-high-math` |
| 數學 | 高中數學 | `senior-high-math` |
| 物理 | （準備中） | — |
| 化學 | 高中化學 | `senior-high-chemistry` |

## 結構

```
index.html         入口首頁
data/subjects.js   ★ 科目與各科網站清單（新增科目網站時改這裡）
data/portal.js     產生科目區塊；自動讀取各網站的 data/chapters.js 顯示冊別與章節
data/site.css      共用樣式（與各科網站相同）
```

## 新增

- **在既有網站新增章節或冊別**：只改該科網站的 `data/chapters.js`，入口頁會自動顯示，不用改這裡。
- **新增一個科目網站**（例如高中物理）：建立該網站後，在 `data/subjects.js` 對應科目的 `sites` 加一筆 `{ name, repo, note }`。
- 各科網站首頁最上方都有「← 回到教學網站入口」連結。

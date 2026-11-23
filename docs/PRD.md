**個人作品集網站開發規格書 (Software Requirement Specification)**

本規格書針對採用 **React** 架構打造的個人作品集網站進行完整規劃，未來預計部署於 **Render** 雲端平台。

**專案概述與定位**

- **網站定位**：展現多元跨領域技能（繪畫、攝影、剪輯、設計、音樂製作）的個人品牌 2D 作品集網站。
- **視覺與風格調性**：
  - **視覺風格**：參考 Behance 範例風格，採用大膽的版面佈局（Editorial Layout）、滿版高對比視覺、強烈的字體設計（Typography-driven）、滑順的微互動與滾動效果。
  - **品牌形象**：來自雲林的野小孩，主打「五合一濃縮咖啡☕️」概念（濃厚、精煉、多元合一）。
  - **作品形式**：以 2D 平面繪畫、視覺設計、影音創作及音樂為主。

**系統技術架構**

┌────────────────────────────────────────────────────────┐

│ Frontend (React App) │

│ React (Vite) + Tailwind CSS + Framer Motion + Lucide │

└───────────────────────────┬────────────────────────────┘

│ Static / Node Build

▼

┌────────────────────────────────────────────────────────┐

│ Deployment Platform │

│ Render.com │

└────────────────────────────────────────────────────────┘

- **前端框架**：React 18+ (建議使用 Vite 作為打包工具)
- **樣式與 UI**：Tailwind CSS + Headless UI / Radix UI
- **動畫庫**：Framer Motion (實現流暢滾動、頁面切換與 Hover 互動效果)
- **影音與多媒體處理**：
  - **音樂播放器**：React-Player 或 HTML5 Custom Audio Player (Howler.js)
  - **圖片與 2D 作品展示**：react-photo-view / Lightbox
- **表單處理**：Formspree / EmailJS（無需建立後端即可實現聯絡表單直接發信至 Gmail）
- **部署環境**：Render (Static Site 模式或 Node.js Web Service)

**網站架構與頁面規劃 (Sitemap)**

\[Home (單頁式 Scrolling 或 多頁路由)\]

├── 1. Hero Section (主視覺 & 咖啡濃縮概念)

├── 2. Portfolio / Case Studies (精選 2D 作品與案例研究)

├── 3. About & Skills (關於我與 5-in-1 專業技能)

├── 4. Audio Showcase (音樂創作展示專區)

├── 5. Playground / Side Projects (實驗性小作品/日常紀錄)

└── 6. Contact Section (聯絡方式與表單)

**詳細功能與頁面模組規格**

**1\. Hero Section (首頁主視覺)**

- **核心文案**：
  - 大標題：「來自雲林的野小孩 ── 五合一濃縮咖啡」
  - 副標題：「繪畫 × 攝影 × 剪輯 × 設計 × 音樂製作」
- **功能與視覺**：
  - 動態字體登場動畫（Text Stagger Animation）。
  - 互動式咖啡杯/濃縮萃取意象動態圖示或 2D 插畫。
  - 快速導覽按鈕：\[ 探索作品 Showcase \] \[ 與我聯絡 Contact \]。

**2\. 精選作品 / 案例研究 (Portfolio & Case Studies)**

- **作品類型**：2D 插畫/電繪、視覺設計、攝影集、影片剪輯作品、音樂創作。
- **模組功能**：
  - **分類標籤篩選 (Filter Tabs)**：全選 All、2D 插畫 Illustration、設計 Design、攝影 Photography、影音 Video、音樂 Audio。
  - **卡片式瀑布流/網格 (Grid Layout)**：懸停（Hover）時觸發 2D 放大/暗化效果與作品簡介。
  - **案例研究彈窗 / 獨立頁面 (Modal / Case Study Detail)**：
    - 專案名稱、創作年份、使用工具。
    - 創作理念與發想過程（Story / Process）。
    - 高解析度 2D 作品大圖展示（支援 Lightbox 放大瀏覽）。

**3\. 關於我與專業技能 (About & Skills)**

- **故事敘述 (Storytelling)**：
  - 個人簡介：「來自雲林的野小孩...」呈現接地氣、具爆發力與創作野性的個人特徵。
- **「五合一濃縮咖啡」技能展演區 (5-in-1 Skillset)**： 採用 5 個專屬濃縮風味卡片呈現：
  1. 🎨 **繪畫 (Illustration)**：2D 電繪、角色設計、視覺概念圖。
  2. 📷 **攝影 (Photography)**：人像、風景、街拍風格調色。
  3. 🎬 **剪輯 (Video Editing)**：轉場節奏、預告片製作、動態腳本。
  4. 📐 **設計 (Graphic & UI/UX)**：視覺識別、排版設計、 Behance 風格雜誌感排版。
  5. 🎵 **音樂製作 (Music Production)**：編曲、聲音設計、BGM 創作。

**4\. 音樂創作展示專區 (Audio Showcase)**

- **客製化音樂播放器 (Custom Audio Player)**：
  - 懸浮/內嵌式 Audio Bar，支援播放、暫停、進度條調整與音量控制。
  - 搭配音軌波形視覺化效果 (Wavesurfer.js 或動畫音波條)。

**5\. 額外建議呈現內容 (Bonus Content)**

- **野性實驗室 (Playground / Lab)**：放一些非正式商業專案的隨手塗鴉、攝影調色檔、隨筆 Demo 音軌。
- **創作裝備與工具箱 (My Tech / Creative Stack)**：列出常用的軟硬體（如：Photoshop, Illustrator, Premiere, Logic Pro / Ableton Live, 數位板、相機型號），強化專業形象。

**6\. 聯絡方式 (Contact Section)**

- **聯絡資訊**：
  - Email：<Opesmusic.www@gmail.com>（提供一鍵複製按鈕）。
  - 所在地：Yunlin, Taiwan (雲林)。
- **聯絡表單 (Contact Form)**：
  - 欄位：姓名/單位、Email、諮詢項目（繪畫/攝影/剪輯/設計/音樂/全案合作）、訊息內容。
  - 送出後透過 EmailJS / Formspree 自動寄信至 <Opesmusic.www@gmail.com>。
- **頁尾 (Footer)**：包含社群連結 (Behance, Instagram, YouTube, Soundcloud) 與版權聲明。

**專案目錄結構設計 (Project Structure)**

Plaintext

src/

├── assets/ # 靜態資源 (圖片, 音樂檔, 字型)

├── components/ # 可複用 UI 元件

│ ├── Navbar.jsx

│ ├── Footer.jsx

│ ├── AudioPlayer.jsx

│ └── ProjectCard.jsx

├── sections/ # 頁面各大區塊

│ ├── Hero.jsx

│ ├── Portfolio.jsx

│ ├── AboutSkills.jsx

│ └── Contact.jsx

├── data/ # 作品資料 JSON (方便隨時擴充作品)

│ └── projects.js

├── App.jsx # 主應用入口

└── main.jsx

**Render 部署設定指南 (Deployment on Render)**

1. **專案準備**：
   - 將專案託管至 GitHub / GitLab。
   - 確定 package.json 包含構建指令：

JSON

"scripts": {

"dev": "vite",

"build": "vite build",

"preview": "vite preview"

}

2. **Render 設定**：
   - 在 Render 控制台選擇 **New Static Site**。
   - **Build Command**: npm run build
   - **Publish Directory**: dist (若使用 Vite)
3. **自訂域名與 SPA 路由**：
   - 在 Render 增設 Rewrite Rule：/\* -> /index.html (避免 SPA 重新整理出現 404 錯誤)。
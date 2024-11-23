# Next.js 基礎模板

Olevator Next.js 14 + TypeScript + Tailwind CSS 基礎模板。

## 技術棧 🛠

### 核心框架
- **Next.js**: `v14.1.0` - React 框架
- **React**: `v18.3.1` - UI 函式庫
- **TypeScript**: `v5.7.2` - JavaScript 的超集

### 樣式和UI
- **Tailwind CSS**: `v3.4.15` - 原子化 CSS 框架
- **shadcn/ui**: `v0.9.3` - React 組件庫
- **class-variance-authority**: `v0.7.0` - CSS-in-JS 解決方案

### 狀態管理與表單
- **Zustand**: `v4.5.5` - 狀態管理
- **React Hook Form**: `v7.53.2` - 表單處理
- **Zod**: `v3.23.8` - 資料驗證

### 動畫和互動
- **Framer Motion**: `v11.11.17` - 動畫框架
- **GSAP**: `v3.12.5` - 高效能動畫庫
- **Swiper**: `v11.1.15` - 觸控滑動
- **Lenis**: `v1.0.42` - 平滑滾動

### 開發工具
- **ESLint**: `v8.57.1` - 程式碼檢查
- **Prettier**: `v3.3.3` - 程式碼格式化
- **Husky**: Git hooks

## 特點 ✨

* 🌍 完整的國際化支援 (i18n)
* 🎨 現代化 UI 設計
* 📱 響應式設計支援
* 🚀 效能優化
* 🔒 TypeScript 型別安全
* 🎯 SEO 優化設定
* 🛠 優化的開發者體驗

## 快速開始 🚀

### 必要條件

```bash
Node.js >= 20.0.0
Yarn >= 1.22.0
```

### 基本設定

1. **克隆專案**
```bash
git clone [repository-url]
cd [project-name]
```

2. **安裝依賴**
```bash
yarn install
```

3. **環境變數設定**
```bash
cp .env.example .env.local
```

4. **啟動開發服務器**
```bash
yarn dev
```

現在你可以訪問 [http://localhost:3000](http://localhost:3000) 查看專案。

### 可用腳本

```bash
# 開發
yarn dev           # 啟動開發服務器
yarn lint         # 執行程式碼檢查
yarn lint:fix     # 自動修復程式碼問題
yarn format       # 格式化程式碼

# 建構
yarn build        # 建構生產版本
yarn start        # 啟動生產服務器

# Docker
yarn docker:dev   # 啟動 Docker 開發環境
yarn docker:build # 建構 Docker 映像檔
yarn docker:start # 啟動 Docker 容器
```

## 專案結構 📁

```
.
├── .next/                  # Next.js 建構輸出
├── components/             # React 組件
│   └── ui/                # UI 組件 (shadcn/ui)
├── lib/                    # 共用函式庫
├── public/                 # 靜態資源
├── src/
│   ├── app/               # Next.js App Router
│   ├── fonts/             # 字體檔案
│   └── types/             # TypeScript 型別定義
└── [設定檔案]
```

## 環境變數 ⚙️

| 變數名稱 | 說明 | 預設值 |
|---------|------|--------|
| `NEXT_PUBLIC_SITE_URL` | 網站 URL | `http://localhost:3000` |
| `NEXT_PUBLIC_GA_ID` | Google Analytics ID | - |
| `NEXT_PUBLIC_SITE_NAME` | 網站名稱 | - |
| `NEXT_PUBLIC_DEBUG_MODE` | 除錯模式 | `false` |
| `NEXT_PUBLIC_API_URL` | API 端點 | - |

## Docker 支援 🐳

### 開發環境

```bash
# 啟動開發環境
yarn docker:dev
```

### 生產環境

```bash
# 建構映像檔
yarn docker:build

# 啟動容器
yarn docker:start
```

## 開發指南 📖

### Git 提交規範

* `feat`: 新功能
* `fix`: 錯誤修復
* `docs`: 文檔更新
* `style`: 程式碼風格變更
* `refactor`: 重構
* `test`: 測試相關
* `chore`: 構建/工具相關

### 程式碼風格

* 使用 ESLint + Prettier
* 強制 TypeScript 嚴格模式
* 遵循 Airbnb React/JSX 風格指南

## 最佳實踐 💡

### 效能優化

1. **圖片優化**
   * 使用 Next.js Image 組件
   * 合適的圖片格式和大小
   * 延遲載入

2. **程式碼分割**
   * 動態引入
   * 路由級別分割
   * 組件級別分割

3. **快取策略**
   * 靜態資源快取
   * API 響應快取
   * SWR 策略

### SEO 最佳實踐

* 使用適當的 HTML 語義標籤
* 實作 meta 標籤
* 生成 sitemap
* robots.txt 配置

## 常見問題 ❓

### 1. 安裝問題

**問題**: 安裝依賴失敗
```bash
# 解決方案
rm -rf node_modules
rm yarn.lock
yarn install
```

### 2. 型別錯誤

**問題**: TypeScript 編譯錯誤
```bash
# 解決方案
yarn type-check
```

*最後更新：2024-11-23*
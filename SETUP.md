# Astro + Tailwind + shadcn/ui 設定說明

## ✅ 已完成的設定

### 1. Tailwind CSS
- 版本：v3.4.18
- 整合：`@astrojs/tailwind@6.0.2`
- 配置檔：`tailwind.config.mjs`

### 2. shadcn/ui
- 核心依賴：
  - `class-variance-authority`
  - `clsx`
  - `tailwind-merge`
  - `lucide-react`
- 配置檔：`components.json`
- CSS 變數：`src/styles/globals.css`
- Utils：`src/lib/utils.ts`

### 3. TypeScript 路徑別名
```json
{
  "baseUrl": ".",
  "paths": {
    "@/*": ["./src/*"]
  }
}
```

## 📦 已建立的元件

### 通用渲染器

#### 1. UniversalTable (`src/components/UniversalTable.tsx`)
- 使用 TanStack Table
- 自訂 Tailwind 樣式
- 淡色分格線設計

#### 2. UniversalTableShadcn (`src/components/UniversalTableShadcn.tsx`)
- 使用 shadcn/ui Table 元件
- 符合 shadcn/ui 設計系統
- 支援深色模式

#### 3. UniversalChart (`src/components/UniversalChart.tsx`)
- Chart.js + react-chartjs-2
- 支援 bar 和 line 圖表
- 完全響應式

#### 4. EnhancedMermaid (`src/components/EnhancedMermaid.tsx`)
- Mermaid 圖表渲染
- 支援拖曳和縮放 (react-zoom-pan-pinch)
- 所有 Mermaid 圖表類型

### shadcn/ui 元件

#### Table (`src/components/ui/table.tsx`)
- Table
- TableHeader
- TableBody
- TableFooter
- TableRow
- TableHead
- TableCell
- TableCaption

## 📝 範例 MDX 檔案

1. **data-visualization-example.mdx**
   - 完整的年度報告範例
   - 包含表格、圖表、Mermaid 圖表
   - 實際業務數據展示

2. **shadcn-table-demo.mdx**
   - 比較原始 Tailwind 和 shadcn/ui 兩種表格
   - 說明使用場景和差異

3. **universal-renderer-demo.mdx**
   - 基礎示範所有三個渲染器
   - 使用說明和技術說明

## 🚀 使用方式

### 在 MDX 中使用元件

```jsx
---
title: '我的文章'
---

import { UniversalTable } from '../../components/UniversalTable'
import { UniversalTableShadcn } from '../../components/UniversalTableShadcn'
import { UniversalChart } from '../../components/UniversalChart'
import { EnhancedMermaid } from '../../components/EnhancedMermaid'

export const data = [...]
export const columns = [...]

# 我的內容

<UniversalTable client:load data={data} columns={columns} />
<UniversalTableShadcn client:load data={data} columns={columns} />
<UniversalChart client:load type="bar" data={chartData} />
<EnhancedMermaid client:load chartString={`graph TD...`}/>
```

### 新增 shadcn/ui 元件

shadcn/ui 已經配置完成，但由於是 Astro 專案，你需要手動複製元件程式碼：

1. 訪問 [ui.shadcn.com](https://ui.shadcn.com)
2. 找到你需要的元件
3. 複製程式碼到 `src/components/ui/`
4. 確保使用 `@/` 路徑別名

或者參考 `src/components/ui/table.tsx` 的寫法。

## 🎨 客製化主題

編輯 `src/styles/globals.css` 中的 CSS 變數：

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  /* ... 更多變數 */
}
```

## 📁 專案結構

```
src/
├── components/
│   ├── ui/                      # shadcn/ui 元件
│   │   └── table.tsx
│   ├── UniversalTable.tsx       # Tailwind 版本
│   ├── UniversalTableShadcn.tsx # shadcn/ui 版本
│   ├── UniversalChart.tsx
│   └── EnhancedMermaid.tsx
├── lib/
│   └── utils.ts                 # cn() 工具函式
├── styles/
│   ├── global.css              # 原有樣式
│   └── globals.css             # Tailwind + shadcn/ui
└── content/
    └── blog/
        ├── data-visualization-example.mdx
        ├── shadcn-table-demo.mdx
        └── universal-renderer-demo.mdx
```

## 🔧 開發命令

```bash
# 開發伺服器
bun run dev

# 建置
bun run build

# 預覽
bun run preview

# 部署到 Cloudflare Pages
bun run deploy
```

## 💡 提示

1. **React Islands**：記得加上 `client:load` 指令
2. **路徑別名**：使用 `@/` 來引用 `src/` 下的檔案
3. **深色模式**：在 HTML 元素加上 `class="dark"` 來啟用
4. **效能**：所有互動元件都是按需載入，不影響靜態頁面效能

## 📦 依賴清單

```json
{
  "dependencies": {
    "@astrojs/react": "^4.4.2",
    "@tanstack/react-table": "^8.21.3",
    "chart.js": "^4.5.1",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "lucide-react": "^0.554.0",
    "mermaid": "^11.12.1",
    "react": "^19.2.0",
    "react-chartjs-2": "^5.3.1",
    "react-dom": "^19.2.0",
    "react-zoom-pan-pinch": "^3.7.0",
    "tailwind-merge": "^3.4.0"
  },
  "devDependencies": {
    "@astrojs/tailwind": "^6.0.2",
    "autoprefixer": "^10.4.22",
    "postcss": "^8.5.6",
    "tailwindcss": "^3.4.18"
  }
}
```

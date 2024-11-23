module.exports = {
    plugins: [require('prettier-plugin-tailwindcss')],
    printWidth: 80,
    semi: true,
    singleQuote: true,
    trailingComma: 'none',
    tabWidth: 2,
    // Next.js 專案的額外配置
    jsxSingleQuote: true, // JSX 中使用單引號
    bracketSpacing: true, // 物件字面值的括號前後加上空格
    bracketSameLine: false, // HTML 標籤的 > 放在最後一行的末尾
    arrowParens: 'avoid', // 箭頭函數只有一個參數時不加括號
    endOfLine: 'auto', // 確保在不同作業系統中行尾一致
  }
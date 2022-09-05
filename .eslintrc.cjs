module.exports = {
  extends: [
    'alloy',
    'alloy/vue',
    'alloy/typescript',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: {
      js: '@babel/eslint-parser',
      jsx: '@babel/eslint-parser',

      ts: '@typescript-eslint/parser',
      tsx: '@typescript-eslint/parser',
    },
  },
  env: {
    // 你的环境变量（包含多个预定义的全局变量）
    browser: true,
    node: true
  },
  globals: {
    // 你的全局变量（设置为 false 表示它不允许被重新赋值）
    //
    // myGlobal: false
  },
  rules: {
    // 自定义你的规则
    '@typescript-eslint/prefer-optional-chain': 'off',
  },
};
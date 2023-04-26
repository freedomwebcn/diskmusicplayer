module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended', // 使用推荐的eslint
    'plugin:vue/vue3-recommended' // 使用插件支持vue3
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    requireConfigFile: false,
    parser: '@babel/eslint-parser'
  },
  plugins: ['vue'],

  rules: {
    'no-var': 'warn', // 禁止出现var用let和const代替
    'vue/require-default-prop': 0, // 关闭属性参数必须默认值
    'vue/singleline-html-element-content-newline': 0, // 关闭单行元素必须换行符
    'vue/multiline-html-element-content-newline': 0, // 关闭多行元素必须换行符
    'vue/multi-word-component-names': 'off',
    // 取消关闭标签不能自闭合的限制设置
    'vue/html-self-closing': 'off',
    'vue/html-closing-bracket-newline': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/html-indent': 'off',
    'vue/require-v-for-key': 'off',
    'vue/attributes-order': 'off'
  }
};


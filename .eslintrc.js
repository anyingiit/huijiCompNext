module.exports = {
  extends: ['plugin:prettier/recommended', 'next/core-web-vitals'],
  rules: {
    // 自定义的一些规则
    'prettier/prettier': 'error',
    'linebreak-style': ['error', 'unix'],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    // 'react/react-in-jsx-scope': 'error',// 配置使用jsx的文件必须引入react, 否则会报错
    'valid-typeof': [
      'warn',
      {
        requireStringLiterals: false
      }
    ]
  }
};

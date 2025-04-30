module.exports = {
  plugins: [
    'postcss-import',
    'postcss-flexbugs-fixes',
    [
      "@csstools/postcss-global-data",
      {
        files: ['./app/vars.css']
      }
    ],
    [
      'postcss-preset-env',
      {
      autoprefixer: {
        flexbox: 'no-2009'
      },
      features: {
        'custom-media-queries': true,
        'nesting-rules': true,
      },
      stage: 3
      }
    ]
  ]
}

import '@testing-library/jest-dom'
global.TextEncoder = require('util').TextEncoder;
module.exports = {
    presets: [
      "@babel/preset-env",
      [
        "@babel/preset-react",
        {
          "runtime": "automatic"
        }
      ],
      "@babel/preset-typescript"
    ]
  };
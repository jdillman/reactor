module.exports = {
    "extends": "airbnb",
    "env": {
      "browser": true,
      "es6": true,
      "jest": true,
    },
    "rules": {
      "import/extensions": 0,
      "import/no-extraneous-dependencies": 0,
      "import/no-unresolved": "off", // Absolute path webpack config is a prob
      "no-use-before-define": "off", // Javascript hoists
      "linebreak-style": [
        "error",
        "unix"
      ],
      "quotes": [
        "error",
        "single"
      ],
      "semi": [
        "error",
        "always"
      ]
    }
};

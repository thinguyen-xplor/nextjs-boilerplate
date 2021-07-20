module.exports = {
  "preset": "ts-jest",
  "roots": [
    "<rootDir>/src"
  ],
  "transform": {
    "\\.[jt]sx?$": "babel-jest",
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/ts-jest",
  },
  "testMatch": [
    "<rootDir>/src/**/__tests__/*.spec.{js,jsx,ts,tsx}"
  ],
  "collectCoverageFrom": [
    "src/**/*.{js,jsx,ts,tsx}",
  ],
  "coveragePathIgnorePatterns": [
    "src/(common|core|hooks|utils)",
    "src/*/*.types.{ts,tsx}"
  ],
  "setupFilesAfterEnv": [
    "<rootDir>/config/jest/setup-enzyme.ts"
  ],
  "coverageThreshold": {
    "global": {
      "statements": 80,
      "branches": 80,
      "lines": 80,
      "functions": 80,
    },
  },
  "snapshotSerializers": [
    "enzyme-to-json/serializer"
  ],
  "moduleNameMapper": {
    "^.+\\.module\\.(css|scss)$": "identity-obj-proxy",
  },
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
}
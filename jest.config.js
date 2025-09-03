/** @type {import("jest").Config} **/
export default {
  testEnvironment: "node",
  preset: "ts-jest/presets/default-esm",
  extensionsToTreatAsEsm: [".ts"],
  moduleNameMapper: {
    "^(\.{1,2}/.*)\.js$": "$1"
  },
  transform: {
    "^.+\\.ts$": ["ts-jest", {
      useESM: true
    }]
  },
};
// module.exports = {
//   presets: ['module:@react-native/babel-preset'],
// };
// module.exports = {
//   presets: ['module:@react-native/babel-preset'],
//   plugins: ['react-native-reanimated/plugin'],
// };
module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ['module:@react-native/babel-preset', { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
  };
};
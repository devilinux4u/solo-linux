const myTags = [
  "html",
  "css",
  "js",
  "node.js",
  "Python",
  "django",
  "Arch",
  "Kali",
  "C",
  "MySql",
  "Mongodb",
  "Git",
  "Tor",
  "Bitcoin",
];

var tagCloud = TagCloud(".content", myTags, {
  radius: 250,
  maxSpeed: "normal",
  initSpeed: "fast",
  direction: 135,
  keep: true,
});

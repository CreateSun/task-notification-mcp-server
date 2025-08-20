import packageJson from "../package.json" with { type: "json" };

export const DEFAULT_NOTIFICATION_SOUND = {
  Glass: "Glass",
  Basso: "Basso",
  Blow: "Blow",
  Bottle: "Bottle",
  Frog: "Frog",
  Funk: "Funk",
  Hero: "Hero",
  Morse: "Morse",
  Ping: "Ping",
  Pop: "Pop",
  Purr: "Purr",
  Sosumi: "Sosumi",
  Submarine: "Submarine",
  Tink: "Tink",
};

export const MCP_SERVER_NAME = "notification-server";

export const MCP_SERVER_VERSION = packageJson.version;

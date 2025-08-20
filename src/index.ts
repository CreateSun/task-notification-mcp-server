import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { getSound, sendNotification } from "./utils.js";
import { MCP_SERVER_NAME, MCP_SERVER_VERSION } from "./constants.js";
import minimist from "minimist";

const args = minimist(process.argv.slice(2));

const sound = args.sound || args.s || undefined;
const random = args.random || args.r || false;

// Create an MCP server
const server = new McpServer({
  name: MCP_SERVER_NAME,
  version: MCP_SERVER_VERSION,
});

// Add an addition tool
server.registerTool(
  "sendNotification",
  {
    title: "Send Notification",
    description:
      "When task finish, send a notification to the user",
    inputSchema: {
      title: z.string().describe("The title of the notification"),
      message: z.string().describe("The message of the notification"),
    },
  },
  async ({ title, message }) => {
    sendNotification(title, message, getSound({ sound, random }));
    return {
      content: [
        {
          type: "text",
          text: `✅ Notification sent: ${title} ${message}`,
        },
      ],
    };
  }
);

// Start receiving messages on stdin and sending messages on stdout
const transport = new StdioServerTransport();
await server.connect(transport);

import dotenv from 'dotenv';
dotenv.config();

import express from "express";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { registerTools } from "./tools/tools";

const server = new McpServer({
  name: "mcp-gmail-server",
  version: "1.0.0",
});
// Register tools and prompts
registerTools(server);

const app = express();
// Setup endpoints

const port = parseInt(process.env.PORT || "80", 10);
app.listen(port, () => {
  console.log(`MCP server is running on port ${port}`);
});
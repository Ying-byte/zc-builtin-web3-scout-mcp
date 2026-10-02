#!/usr/bin/env node
import { createChannelMcp } from './_shared/create-channel-mcp.mjs';

const mcp = createChannelMcp({
  slug: "builtin-web3",
  boardId: "builtin-web3-official",
  domain: "builtin.com",
  npmName: "zc-builtin-web3-scout-mcp",
});

mcp.start().catch((e) => {
  console.error(e);
  process.exit(1);
});

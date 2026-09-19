#!/usr/bin/env node
// Smoke test for CI (feature 002: ci-workflow-readme-quality).
//
// `next build` only proves the app compiles. This starts the built app with
// `next start` and asserts that the home page and the one API route it ships
// (pages/api/hello.ts) actually respond, so a broken render or a broken
// route fails the workflow instead of a green check that means nothing.

'use strict';

const assert = require('assert');
const http = require('http');
const { spawn } = require('child_process');

const PORT = process.env.SMOKE_TEST_PORT || '3100';
const BASE_URL = `http://127.0.0.1:${PORT}`;

function get(path) {
  return new Promise((resolve, reject) => {
    const request = http.get(`${BASE_URL}${path}`, (res) => {
      let body = '';
      res.on('data', (chunk) => {
        body += chunk;
      });
      res.on('end', () => resolve({ statusCode: res.statusCode, body }));
    });
    request.on('error', reject);
    request.setTimeout(5000, () => request.destroy(new Error(`timed out fetching ${path}`)));
  });
}

async function waitForServer(retries) {
  for (let attempt = 0; attempt < retries; attempt += 1) {
    try {
      return await get('/');
    } catch (error) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  }
  throw new Error(`server on ${BASE_URL} never came up after ${retries} attempts`);
}

async function main() {
  const isWindows = process.platform === 'win32';
  const server = spawn(isWindows ? 'npx.cmd' : 'npx', ['next', 'start', '-p', PORT], {
    stdio: 'inherit'
  });

  let exitCode = 0;
  try {
    const home = await waitForServer(30);
    assert.strictEqual(home.statusCode, 200, `expected / to return 200, got ${home.statusCode}`);

    const api = await get('/api/hello');
    assert.strictEqual(api.statusCode, 200, `expected /api/hello to return 200, got ${api.statusCode}`);
    const payload = JSON.parse(api.body);
    assert.strictEqual(payload.name, 'John Doe', `unexpected /api/hello payload: ${api.body}`);

    console.log('smoke test passed: / and /api/hello both responded as expected');
  } catch (error) {
    console.error('smoke test failed:', error.message);
    exitCode = 1;
  } finally {
    server.kill('SIGTERM');
  }

  process.exitCode = exitCode;
}

main();

<!-- Source: Best-README-Template BLANK_README (Unlicense) — https://github.com/othneildrew/Best-README-Template -->
<a id="readme-top"></a>

# huijiCompNext

A Next.js and TypeScript scaffold for a Chinese company marketing site whose home page and navigation menu are rendered entirely from hard-coded mock data, with no live backend behind them.

**English** · [简体中文](README.zh-CN.md)

[![CI](https://github.com/anyingiit/huijiCompNext/actions/workflows/ci.yml/badge.svg)](https://github.com/anyingiit/huijiCompNext/actions/workflows/ci.yml)
[![License](https://img.shields.io/github/license/anyingiit/huijiCompNext)](LICENSE)

[Report a bug](https://github.com/anyingiit/huijiCompNext/issues/new?template=bug_report.yml) · [Request a feature](https://github.com/anyingiit/huijiCompNext/issues/new?template=feature_request.yml)

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

## About The Project

`pages/home/index.tsx` renders the home page through `components/page-basic.tsx`, which composes a `Header`, a `Footer` and a `Container`. The header's navigation menu — Home, Product and Service, with two Service sub-items — comes entirely from the mock object hard-coded in `pages/api/getHeader.ts`; there is no live API behind it yet.

`package.json` still names the project `study-nextjs-app-01`, a leftover from how it was originally scaffolded, and the `Dockerfile` packages it as a standalone Next.js server for deployment.

See the [open issues](https://github.com/anyingiit/huijiCompNext/issues) for planned features and known issues.

## Getting Started

### Prerequisites

- Node.js 16.x — the `Dockerfile` builds this project on `node:16-alpine`
- Yarn — the repository commits `yarn.lock`, not a `package-lock.json`

### Installation

```sh
git clone https://github.com/anyingiit/huijiCompNext.git
cd huijiCompNext
yarn install --frozen-lockfile
```

## Usage

```sh
yarn dev
```

Then open `http://localhost:3000` to see the home page. Its navigation menu is filled in by the mock data in `pages/api/getHeader.ts` rather than by a live API, so the menu items are the same on every load.

## Contributing

Contributions are welcome. Read [CONTRIBUTING.md](CONTRIBUTING.md) for how to open an issue or a pull request, and [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) for the standards expected of everyone taking part.

Please do not report security issues in public issues or pull requests. [SECURITY.md](SECURITY.md) explains how to report them privately.

## License

Distributed under the MIT License. See [LICENSE](LICENSE) for details.

## Contact

Project link: [https://github.com/anyingiit/huijiCompNext](https://github.com/anyingiit/huijiCompNext)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

[English](README.md) · **简体中文**

> 英文版是规范版本。本页与 [README.md](README.md) 不一致时，以英文版为准。

<!-- translation-of: README.md sha256:27253d5aa382e0b8 -->

<!-- Source: Best-README-Template BLANK_README (Unlicense) — https://github.com/othneildrew/Best-README-Template -->
<a id="readme-top"></a>

# huijiCompNext

一个 Next.js 与 TypeScript 脚手架项目，用于一个中国公司的官网；其首页和导航菜单完全由写死的模拟数据渲染，背后没有真正的接口。

[![CI](https://github.com/anyingiit/huijiCompNext/actions/workflows/ci.yml/badge.svg)](https://github.com/anyingiit/huijiCompNext/actions/workflows/ci.yml)
[![License](https://img.shields.io/github/license/anyingiit/huijiCompNext)](LICENSE)

[报告问题](https://github.com/anyingiit/huijiCompNext/issues/new?template=bug_report.yml) · [提出需求](https://github.com/anyingiit/huijiCompNext/issues/new?template=feature_request.yml)

<details>
  <summary>目录</summary>
  <ol>
    <li><a href="#about-the-project">关于本项目</a></li>
    <li><a href="#getting-started">开始使用</a></li>
    <li><a href="#usage">用法</a></li>
    <li><a href="#contributing">参与贡献</a></li>
    <li><a href="#license">许可证</a></li>
    <li><a href="#contact">联系方式</a></li>
  </ol>
</details>

## 关于本项目

`pages/home/index.tsx` 通过 `components/page-basic.tsx` 渲染首页，后者组合了 `Header`、`Footer` 和 `Container` 三个组件。页头的导航菜单——主页、产品、服务，以及服务下的两个子项——完全来自 `pages/api/getHeader.ts` 中写死的模拟对象；目前背后并没有真正的接口。

`package.json` 里项目名仍然是 `study-nextjs-app-01`，这是它最初被脚手架生成时留下的痕迹；`Dockerfile` 则把它打包成一个可独立部署的 Next.js 服务端应用。

计划中的功能与已知问题，见 [open issues](https://github.com/anyingiit/huijiCompNext/issues)。

## 开始使用

### 环境要求

- Node.js 16.x —— `Dockerfile` 基于 `node:16-alpine` 构建本项目
- Yarn —— 仓库提交的是 `yarn.lock`，而不是 `package-lock.json`

### 安装

```sh
git clone https://github.com/anyingiit/huijiCompNext.git
cd huijiCompNext
yarn install --frozen-lockfile
```

## 用法

```sh
yarn dev
```

然后打开 `http://localhost:3000` 查看首页。它的导航菜单由 `pages/api/getHeader.ts` 中的模拟数据填充，而不是来自真实接口，所以每次加载看到的菜单项都是一样的。

## 参与贡献

欢迎参与。[CONTRIBUTING.md](CONTRIBUTING.md) 说明如何提交 issue 或 pull request，[CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) 说明对所有参与者的行为要求。

请不要在公开的 issue 或 pull request 中报告安全问题。[SECURITY.md](SECURITY.md) 说明了私下报告的方式。

## 许可证

以 MIT 许可证分发。详见 [LICENSE](LICENSE)。

## 联系方式

项目地址：[https://github.com/anyingiit/huijiCompNext](https://github.com/anyingiit/huijiCompNext)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---
type: policy
title: 贡献与改动约定
description: 本仓库对 PR 范围、讨论流程、代码风格、格式化与 lint 门禁、验证方式，以及新增外部端点与本地持久化改动的准入约定，是修改代码前必须满足的前置条件。
tags: [contributing, code-review, conventions, policy, maintenance]
sources:
  - id: openwiki-source-6d4b4e707b8d60b6ccfa3425
    resource: repo://.github/workflows/openwiki-update.yml
  - id: openwiki-source-e119253b3c3737247dc63f2a
    resource: repo://.openwikiignore
  - id: openwiki-source-8037e2358a2c4f9b2c722a11
    resource: repo://AGENTS.md
  - id: openwiki-source-f317ee207e1653d2033c81a4
    resource: repo://CONTRIBUTING.md
  - id: openwiki-source-72b5d686f860ea86c8592080
    resource: repo://mise.toml
  - id: openwiki-source-7c34e5f74b9f52d9c4dac25c
    resource: repo://oxfmt.config.ts
  - id: openwiki-source-b5403ff3157342c8c842162d
    resource: repo://oxlint.config.ts
  - id: openwiki-source-5b54a58d1b51cd490b0e7162
    resource: repo://package.json
  - id: openwiki-source-0e85074d86e07986d36a0aef
    resource: repo://PRIVACY.md
  - id: openwiki-source-105c89f54607384be15e8d88
    resource: repo://src/App.vue
  - id: openwiki-source-ce81290c6a700a0b4a98ba34
    resource: repo://src/composables/conf/index.ts
  - id: openwiki-source-ad06fd6b464d91d6b49f8c68
    resource: repo://src/composables/useHelper/ctx.ts
  - id: openwiki-source-caa32fda4f25c83d6ba7ba28
    resource: repo://src/composables/useHelper/netConf.ts
  - id: openwiki-source-638fda031dcf5819bf316d53
    resource: repo://src/entrypoints/boss/index.ts
  - id: openwiki-source-226f69401d2b0bd19c2e7bcf
    resource: repo://src/message/background.ts
  - id: openwiki-source-aabf2a312b64832a974f3447
    resource: repo://src/utils/amap.ts
  - id: openwiki-source-415147bcbda5ae3938da886a
    resource: repo://src/utils/feishuBackground.ts
  - id: openwiki-source-49ce5f922c6d8903f5e7d073
    resource: repo://wxt.config.ts
generated: { by: "openwiki/0.7.3", at: "2026-11-03T11:46:27.311Z" }
---

# 贡献与改动约定

本页只提炼可执行的规则，不重复 [CONTRIBUTING.md](../CONTRIBUTING.md) 的完整论述（该文件是权威来源，约 1300 行）。改动代码（尤其是以 AI Agent 身份改动）前，请把这些规则当作准入条件：不符合其中任一条的 PR，维护者可以直接要求拆分、重新实现、移除无关修改或关闭，而不需要先逐行 Review。

## 核心取舍：维护成本优先于代码量

项目把贡献价值定义为“正确的问题 → 正确的方案 → 最小的修改 → 简单的代码 → 低维护成本”，而不是代码量、抽象层数或功能数量。可执行的后果：

- **一个 PR 只解决一个问题**，并且能用一句话说明“解决了什么”。修复 Bug、新增功能、独立重构、UI 调整、依赖升级各自独立成 PR。
- **改动规模必须能被问题本身解释**。大型 PR 不被禁止，但 PR 描述必须解释“为什么必须这么大”并列出涉及模块；反之，一个条件判断的修复不应该变成几十个文件的改动。
- **先讨论再实现**：新增功能、修改现有行为、大型重构、架构调整、替换核心依赖、新增较重依赖、修改数据结构或核心 API、大规模 UI 改动、修改自动化流程、修改与 Boss 直聘网页行为相关的核心逻辑，都必须先开 Issue。**开 Issue 不等于拿到实现许可**，较大的功能要等维护者认可需求和方向后再写代码。
- **不做“顺手”的事**：无关重构、无关格式化、无关的依赖升级、整目录缩进/换行符调整都不得混入当前 PR。发现值得做的重构，单独开 Issue / PR。
- **重构是受欢迎的，但必须独立**：代码确实存在重复、难以理解的逻辑或明显错误的抽象时，欢迎以 `refactor:` 开头的独立 PR，但不要把它藏在功能 PR 里。
- **简单优先**：不为只使用一次的逻辑抽函数，不为“未来可能支持”预先设计 Provider 抽象、工厂或 manager 层，不为满足理论上的“代码规范”强制拆文件、加 interface、加 wrapper。只有被多处复用、业务含义明确、本身复杂、需要独立测试或明显提升可读性时才抽象。
- **注释解释“为什么”**：目标站点（zhipin.com）的反常行为、异步 DOM 更新导致的等待、兼容性处理最值得注释；复述代码在做什么的注释应删除。
- **依赖保守**：新增 npm 依赖前确认现有依赖是否已提供等价能力、能否用少量代码实现、是否长期维护、是否影响扩展兼容性与打包体积。
- **对自己提交的代码负责**：允许使用 AI / Vibe Coding 工具，也不要求在 PR 中声明；但不允许提交自己无法解释的代码——维护者有权追问“为什么需要这样处理 / 这个依赖 / 这个拆分”。
- **功能有用 ≠ 一定合并**：项目定位、用户需求、维护成本与未来方向由维护者决定；实现正确的 PR 仍可能被拒绝。

PR 标题建议带类型前缀（`fix:` / `feat:` / `refactor:`）并描述具体问题；PR 描述至少覆盖“问题 / 解决方案 / 修改范围 / 验证方式 / 其他修改”，其中“其他修改”必须显式说明是否存在与主问题无关的改动（没有就写“无”）。`CONTRIBUTING.md` 末尾附有 15 项 Pull Request 检查清单，与本页规则一一对应，重点是“是否只解决一个问题”“是否存在可删除的重构与抽象”“是否理解全部代码”“是否做过合理验证”。

## 面向 AI / Coding Agent 的硬约束

`CONTRIBUTING.md` 末尾专设“给 AI Coding Agent 的特别说明”，把该文件本身作为约束：先读指南、理解 Issue 目标、**不要擅自扩大 Issue 的需求范围**、不要添加 Issue 未要求的功能、不要无关重构、不要为抽象而创建函数或一次性 wrapper、不要无意义注释、不要擅自升级依赖、不要格式化无关文件；改完后必须检查 diff、删除所有与目标问题无关的修改、确认自己能解释全部修改，使最终 PR 尽可能小。

如果实现过程中确实发现额外改动是必要的（例如必须调整类型或数据结构），正确做法是**停下来回到 Issue 讨论**，而不是就地扩大范围。

## 门禁与工具链

格式化与 lint 是提交路径上的自动化门禁。`package.json` 的 `lint-staged` 配置对暂存文件执行：

```json
"lint-staged": {
  "*": "oxfmt --no-error-on-unmatched-pattern",
  "*.{js,jsx,ts,tsx,mjs,cjs,vue}": "oxlint --fix"
}
```

即所有暂存文件先被 `oxfmt` 重写格式，脚本/TS/Vue 文件再被 `oxlint --fix` 自动修复；没有对应配置的文件通过 `--no-error-on-unmatched-pattern` 静默跳过。`lint-staged` 由 `mise` 任务 `pre-commit`（`bun run lint-staged`）驱动，仓库中没有 husky 之类的 Git hook 安装步骤，因此**本地运行 `oxfmt` / `oxlint` 才是可靠的自检手段**，不能假定 hook 一定生效。

开发环境的工具版本由 [mise.toml](../mise.toml) 固定（`bun = "1.2"`、`node = "latest"`）；`mise run init` 先执行 `git submodule update --init --recursive` 再 `bun install`，`mise run dev` 等同 `bun run dev`。子模块与 `bun install` 的顺序不可颠倒，否则依赖安装会缺少内容。

### oxfmt：格式是机器决定的

[oxfmt.config.ts](../oxfmt.config.ts) 决定了“正确的格式”：

- `semi: false` —— 不加分号；
- `singleQuote: true` —— 单引号；
- `sortImports.partitionByComment: true` —— 自动排序 import，注释作为分区边界；
- `ignorePatterns: ['*.min.js', '/packages', '/.claude']` —— `packages/`（含 `devlog-ui` 工作区子包）与 `.claude/` 不参与格式化。

因此**手工调整格式或 import 顺序没有意义**：这类改动会被工具覆盖，或在 Review 中被视为噪声。提交前用 `bun run fmt:check`（`oxfmt --check`）确认一致，需要修复时用 `bun run fmt`。

### oxlint：类型感知的静态检查

[oxlint.config.ts](../oxlint.config.ts) 启用 `import`、`vue`、`jsx-a11y`、`oxc`、`typescript` 插件，并开启 `options.typeAware: true`（依赖 `oxlint-tsgolint` 与 TypeScript 类型信息）。与贡献行为直接相关的规则：

- `typescript/consistent-type-imports: error` 与 `import/consistent-type-specifier-style: error` —— 类型必须以 `import type` 形式引入，且与值导入分开书写；
- `eslint/no-unused-expressions` 在 `allowShortCircuit: true` 下为 `error` —— 允许 `a && b()` 短路写法，其它无副作用表达式报警；
- `typescript/no-redundant-type-constituents: off` —— 冗余联合/交叉类型成员不报错。

对应命令是 `bun run lint` / `bun run lint:fix`（`oxlint --type-aware`），忽略目录与 `oxfmt` 一致。这些规则与“最小改动”原则冲突时，以“不要格式化/重构无关文件”为准：只修复自己改动引入的告警。构建与类型检查命令见 [构建与发布](operations/build-and-release.md)。

## 验证期望：真实环境优先

项目明确**不强制单元测试覆盖率**，也不鼓励为了覆盖率给强依赖真实浏览器、真实 DOM、Shadow DOM、扩展 API 和 zhipin.com 页面的逻辑编写大量复杂 Mock。替代要求：

- 能在真实环境验证的改动，必须给出验证步骤（浏览器版本、登录状态、操作路径、观察结果）；
- 无法真机验证的，在 PR 中说明原因；
- Bug 修复建议附带复现步骤、修改前行为、修改后行为与验证结果；
- 如果确实编写了测试，遵循 [测试套件](testing/test-suite.md) 中的约定，并优先选择能证明改动行为的最小、安静的验证方式，失败时保留完整输出。

## 对外部端点与隐私姿态的额外审查

项目当前的数据姿态是**纯客户端**：[PRIVACY.md](../PRIVACY.md) 声明不自动收集个人信息；API Base URL / API Key 与招聘平台 Cookie 只保存在扩展本地 storage、不上传服务器（Cookie 仅用于账号切换）；卸载扩展即删除所有本地数据。因此任何新增网络目的地都属于必须单独说明的改动：

| 目的地 | 用途 | 触发位置 |
| --- | --- | --- |
| `https://testingcf.jsdelivr.net/gh/Ocyss/boss-helper@main/net-conf.json` | 拉取远端版本说明、公告与商店链接（`NetConf`） | `initNetConf()`（[netConf.ts](../src/composables/useHelper/netConf.ts)），Boss 页面 `_init*` 完成后调用一次，并由 `Helper` 每 5 分钟轮询 |
| `https://www.zhipin.com/...` | 站内接口（如 `wapi/zppassport/get/wt`、上传接口） | 内容脚本 / background 请求封装 |
| `https://restapi.amap.com/v3/...` | 高德地理编码与驾车/步行距离筛选（使用用户自填 Key） | [amap.ts](../src/utils/amap.ts) |
| `https://open.feishu.cn` | 飞书多维表格同步 | background 侧 [feishuBackground.ts](../src/utils/feishuBackground.ts) |
| 用户配置的 AI 服务 Base URL | 模型调用 | AI 模块 |

`PRIVACY.md` 中的“启动时向自家服务器请求版本信息（无个人信息，仅记录 IP 做日活统计）”即对应上表第一行；远端 `net-conf.json` 的 `version` 与构建期注入的 `VERSION`（`__APP_VERSION__`，来自 `package.json` 的 `version`）比较，决定 UI 是否显示“有更新”标记。远端公告（`notification`）按 `key` 记录已展示时间到 `local:netConf-*` 键，避免重复弹出。

由此得出两条实操规则：

1. **任何新的外部端点、遥测或统计上报都要在 Issue 里显式讨论**，并在 PR 与 `PRIVACY.md` 中同步说明。`wxt.config.ts` 的 manifest 已申请 `permissions: ['storage', 'notifications']` 与 `host_permissions: ['http://*/*', 'https://*/*']`，内容脚本匹配 `*://zhipin.com/*`、`*://*.zhipin.com/*`；新增或放宽权限、改变注入匹配范围（例如让脚本注入到 `zhipin.com` 之外的域名）同样属于隐私相关改动，必须一并说明。
2. **不要在本地持久层随意加键**：打招呼配置以 `local:web-geek-job-FormData` 存放，切换配置预设时变为 `local:web-geek-job-FormData-<preset>`；账号/用户配置为 `local:conf-user`（`src/message/background.ts` 中的 `userKey`）。加载时先跑 `FROM_VERSION` 迁移表，再用 `deepmerge(defaultFormData, from)` 合并。**改动 `FormData` 结构必须同时新增一条 `FROM_VERSION` 迁移**（键为日期版本号，形如 `20250826` / `20260521` / `20260718`，按新到旧遍历、遇到 `from.version >= 版本` 即停止），否则老用户的本地配置会被 `deepmerge` 静默合并成半新半旧的状态；迁移出错只会弹出“用户配置初始化失败”提示而保留原始数据。`confImport` / `confReload` / `confExport` 也复用同一套迁移与合并逻辑，因此迁移函数必须能容忍缺失字段。

## 与生成式文档的关系

仓库包含生成的 `openwiki/` 证据索引，[AGENTS.md](../AGENTS.md) 登记了使用规则：它是可选的即时上下文，任务开始时不必枚举或预加载；需要时用检索工具按需获取，读完能支撑判断就停止。关键约束：

- **源码与测试是权威**，wiki 或 brief 中的未知项是验证缺口，不是自动需求；
- **生成的 OpenWiki 页面不得手工编辑**，应改源码/文档后由维护流程重新生成；
- 验证时优先选择能证明改动行为的最小、安静方式，并保留完整失败输出。

生成边界由 [.openwikiignore](../.openwikiignore) 决定：`node_modules/`、`.wxt/`、`.output/`、`dist/`、`coverage/`、`*.log`、`bun.lock`、`pnpm-lock.yaml` 不在读取、扫描或写入文档的范围内。

维护流程是 [.github/workflows/openwiki-update.yml](../.github/workflows/openwiki-update.yml)：每天 08:00（cron `0 8 * * *`）或手动触发，`checkout` 取完整历史（`fetch-depth: 0`，否则 `openwiki code --update` 无法 diff），安装 `openwiki@0.7.3`（含可选的 `mermaid`、`jsdom` 以校验图表），用 OpenAI 兼容 provider 运行更新，然后删除临时的 `openwiki/.run.json`，把 `openwiki`、`AGENTS.md`、`openwiki-update.yml`（以及存在时的 `CLAUDE.md`）提交到 `openwiki/update` 分支并开一个 `docs: update OpenWiki` PR。运行失败时该 PR 仍会保留已完成部分，工作流本身则最终以失败退出。它只更新文档，不参与代码构建/发布，后者见 [构建与发布](operations/build-and-release.md)（推送 tag 时由 `main.yml` 运行 `bun run zip` 并发布）。

## 改动前的最小检查顺序

1. 这个问题是否在 Issues 中讨论过？是否属于必须先开 Issue 的类型（尤其是会改变行为、数据结构或与 zhipin.com 交互逻辑的改动）？
2. 我的 diff 是否只包含与目标问题相关的文件与行为？有没有被 `oxfmt` / `oxlint` 顺带改掉的无关行？
3. 是否引入了新依赖、新抽象、只用一次的函数、无价值注释或“未来可能需要”的扩展点？
4. 是否改动了外部端点、权限/匹配范围、隐私相关行为，或本地存储的数据结构（是否同时提供了 `FROM_VERSION` 迁移）？
5. `bun run fmt:check`、`bun run lint`、`bun run check`（`vue-tsc --noEmit`）是否通过？是否做过真实环境验证，或说明了无法验证的原因？

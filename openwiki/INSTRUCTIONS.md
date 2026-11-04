# Boss Helper — Wiki 写作说明

## 项目定位

Boss 直聘（zhipin.com）浏览器扩展助手，用于减少投递简历的重复劳动。技术栈：WXT + Vue 3 + Nuxt UI 4 + Tailwind CSS 4 + TypeScript，使用 Bun 作为包管理器。多浏览器目标（chrome / edge / firefox），MV3 为主。

## 文档范围（重点覆盖）

1. **扩展架构**：`src/entrypoints/`（background、content script、options、boss 页面注入）之间的生命周期与加载顺序；`wxt.config.ts` 的构建配置（alias、manifest 差异、extKey、shadow DOM 样式）。
2. **消息通信**：`src/message/` 里 background ↔ content script 的协议定义、唤起与错误处理路径。
3. **投递工作流**：`src/composables/useJobActions.ts`、`useApplying/`、`useHelper/` 中"筛选 → 打招呼 → 投递"的状态机与中断/重试语义。
4. **账户与配置**：`src/composables/conf/`、`useAccounts.ts`、`src/utils/jsonImportExport.ts`、`deepmerge.ts` 的合并与持久化规则（存储键、迁移、默认值）。
5. **AI 能力**：`src/utils/ai.ts`、`modelRequest.ts` 的 provider 适配、提示词模板渲染（模板变量见 `TEMPLATE_VARIABLES.md`）、失败与限流行为。
6. **外部依赖**：`src/utils/amap.ts`（高德 API 距离筛选）、`feishuSync.ts` / `feishuBackground.ts`（飞书同步）、`request.ts` / `backgroundFetch.ts` 的请求封装与鉴权差异。
7. **UI 层**：`src/App.vue`、`src/components/`、`packages/devlog-ui` 的页面结构与数据来源。

## 写作规则

- 每个页面说明"为什么这样设计"和"改动时要注意什么"，不要逐行复述代码。
- 关键流程用 Mermaid 图表达（消息时序、投递状态机、配置合并）。
- 只描述能从源码和测试证实的行为；不确定的标注为待确认，不要猜测。
- 语言用中文，代码标识符、路径、命令保持原文。
- 忽略的路径：`node_modules/`、`.wxt/`、`.output/`、`dist/`（见 `.openwikiignore`）。

## 优先满足的问题

- 新增一个页面注入脚本要改哪些文件？
- 一次"自动打招呼"从触发到写入统计数据的完整链路是什么？
- 配置项如何跨版本迁移，哪些键是用户数据不能动？
- 打包成三个浏览器时有哪些差异配置？

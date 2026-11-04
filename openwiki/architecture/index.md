# 文件

- [扩展运行时与构建目标](extension-runtimes.md) - WXT 如何把 background service worker、runAt document_start 的 ISOLATED content script、defineUnlistedScript 的 MAIN world 注入脚本与 options 页面四个运行时世界串起来，以及 wxt.config.ts 的 srcDir/outDirTemplate/alias/manifest/matches/extKey 如何生成 chrome/edge/firefox MV3 构建。
- [HelperContext 与 Boss 适配器](helper-context.md) - 解析 HelperContext 抽象基类（conf/accounts/statistics/chatModel/cache/jobCache/workflow/logs 的持有关系与抽象成员）与 BossHelperCtx 实现之间的契约：hook 宿主 Vue 实例取列表、模拟点击取详情、自定义元素面板挂载、HelperKey 注入，以及扩展这一层时需要遵守的不变量。
- [消息与存储桥（counter）](messaging-and-storage-bridge.md) - 说明 src/message/ 如何用 comctx defineProxy 把 MAIN world 注入脚本、content script、background 与 options 连成两套 namespace，counter 门面的初始化契约与未初始化失败面、meta.injector 路由与 heartbeatTimeout、BackgroundCounter 暴露的后台能力，以及 ExtStorage 接入 useStorageAsync 的方式。

# 文件

- [AI 提供商配置与传输层](ai-model-layer.md) - 模型配置（sync:conf-model）的存储、迁移与运行时读取，openai-compatible / openai-responses / anthropic-messages 三种协议的 provider 构造，advanced 头与请求体合并规则，以及经 background 代发、非流式回包并带 120 秒兜底超时的 fetch 传输。
- [Boss 直聘 HTTP 与 MQTT 接口接入](boss-platform-apis.md) - Boss Helper 与 zhipin.com 上游平台的全部接口面：bst cookie 换取 Zp_token 的鉴权约定、friend/add 投递与 getBossData 的两套重试/错误码骨架、图片"秒传优先"的两段式上传，以及基于 wt 换取凭据的 MQTT over WebSocket + protobuf 聊天发送链路；另说明版本公告 net-conf.json 与通用 request/backgroundFetch 封装的定位。
- [飞书（Lark）多维表格同步](feishu-sync.md) - 可选的飞书 Bitable 岗位快照导出：行形状与中文列名约定、每 5 条与停止/结束时的批量 flush、background 侧租户 token 缓存与写入串行化、失败保留待同步行与 feishu-sync-error 提示，以及两层脚本测试覆盖的边界。

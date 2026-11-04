# 文件

- [AI 筛选、招呼语与提示词模板](ai-filtering-and-greeting.md) - Boss Helper 中 AI 能力的三段实现：ChatModel 以固定消息角色承载 system/user 提示词并用 renderTemplate 注入岗位变量，AI 筛选按 positive − |negative| 打分判定是否跳过，AI 招呼语支持纯文本与 JSON 两种输出模式并有草稿待确认的流程。
- [配置、预设与账号](configuration-and-presets.md) - 插件用户配置（FormData）的默认值、deepmerge 合并、按版本迁移链、保存/重载/导出/导入语义，configLevel 分级门控，预设与账号如何共同决定 FormData 键与统计数据分区，以及哪些存储键承载用户数据、迁移扩展时不可覆盖。
- [错误分类、受控执行与失败上报](errors-and-retries.md) - Boss Helper 的失败处理全貌：BossHelperError 子类表达平台侧投递/打招呼失败，请求层「业务错误不重试、传输错误才退避重试」，runGuarded 用超时看门狗和停止信号保证任务一定会 settle，工作流用 `throw { workflowResult }` 哨兵和 DependencyMissingError 补跑区分「跳过 / 失败 / 早退」，最终落到有序的 JobStatus 与 logger 上报。
- [持久化：岗位结果缓存、判重集合与统计](persistence-and-caching.md) - Boss Helper 在两次运行之间保留的状态：JobResultCache 的岗位结果缓存与过期规则、HelperCache 的同公司/同HR 去重集合、统计的今日/历史滚存、图片 IndexedDB，以及上述 key 的账号槽位编码、storage 区选择与写入串行化策略。
- [任务注册表：过滤器、生成器与发送器](task-handlers-and-filters.md) - TaskRegistry 内置任务与 bossWorkflow 声明顺序的参考：去重过滤器、关键词与区间过滤器、依赖详情数据的过滤器、高德距离、AI 筛选与招呼语、投递请求、Boss 信息获取与消息发送；并说明工厂返回 undefined 即禁用、nodes 五态、rangeMatch 严格/宽松语义、normalizeFilterText 归一化、onDelivered / onEnd 钩子，以及新增筛选/动作任务要同步修改的全部登记点。

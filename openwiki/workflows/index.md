# 文件

- [投递工作流引擎](delivery-workflow.md) - 任务管线如何被声明（defineTaskHandler / defineTaskWorkflow）、解析成依赖有序的 pipeline、按岗位分阶段执行（filter/generate/delivery），以及模式、分页、超时、停止与缓存如何共同决定一次投递运行。
- [岗位数据获取与页面控制](job-data-acquisition.md) - 注入脚本如何从 Boss 直聘这个 Vue SPA 里取数：用 __vue__ 定位宿主组件、钩住 jobList/pageVo/hasMore/jobDetail 与翻页/点击动作、用惰性 rawData 代理把"提前读详情"变成可重跑的任务依赖、模拟卡片点击并轮询 lid 抓详情，以及用"翻页后内容无变化"判定到底。

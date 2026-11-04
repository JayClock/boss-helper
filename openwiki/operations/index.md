# 文件

- [构建、质量门禁与发布](build-and-release.md) - 本仓库的本地脚本矩阵（dev/build/zip × chrome/firefox/edge）、outDirTemplate 产物目录与手动加载扩展方式、check/lint/fmt 门禁与 lint-staged、tag 触发的 GitHub Release 流水线、scripts/submit.sh 商店提交，以及 net-conf.json 作为运行时公告源的运维语义。
- [Options 设置页与页面内面板](options-page.md) - BossHelper 的两个 UI 世界——扩展 options 设置页（常规/AI/提供商/飞书/管理）与注入到 BOSS 页面的 helper 面板（统计/筛选/外观/日志/关于）——的页面编排、配置项渲染契约、保存与脏状态语义，以及两者共享的 composable 与运行守卫。

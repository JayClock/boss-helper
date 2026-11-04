# 文件

- [测试套件与可测性边界](test-suite.md) - 仓库里四个 Bun 测试（feishu-workflow、feishu-sync、helper-cache、job-cache）如何运行、如何用 mock.module 与 globalThis 只替换边界并保持真实 executeAll/行快照/批量队列，锁定了哪些不变量，为何 src/ 与其他工作流入口无测试，以及未覆盖区域的验证替代方案。

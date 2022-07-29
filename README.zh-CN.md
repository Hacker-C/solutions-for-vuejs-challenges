<center>
  <a src="https://github.com/Hacker-C/solutions-for-vuejs-challenges/blob/main/README.md">English</a> | 中文
</center>

## Solutions to vuejs-challenges
这里是我在学习 [vuejs-challenges](https://github.com/webfansplz/vuejs-challenges) 时的题解。

> 本仓库包含了通过测试的答案以及解析，列出了对于知识点所在的文档链接，可在本地 VSCode 上直接写题，让你有有更好的刷题体验。

## 如何使用

### 下载

1. 克隆项目并下载依赖
    ```bash
    git clone git@github.com:Hacker-C/solutions-for-vuejs-challenges.git
    cd solutions-for-vuejs-challenges
    pnpm install
    ```
2. 对于每一个问题，比如 `1-hello-world`，从 [这里](https://github.com/webfansplz/vuejs-challenges/tree/main/questions) 复制 `App.vue` and `index.test.ts` 的代码，然后复制到本项目中的 `questions` 文件夹中，然后就可以愉快的完成题目了。

### 测试你的答案

有三种方法测试你的答案是否正确。

1. （**推荐**）只测试你当前写的题目，比如 `243-prevent-event-propagation`，只需要输入 `pnpm test 243`，那么 vitest 只会测试路径包含 `243` 的测试文件。
    ```bash
    pnpm test 243
     ✓ questions/243-prevent-event-propagation/index.test.ts (1)
    Test Files  1 passed (1)
        Tests  1 passed (1)
        Time  4.62s (in thread 75ms, 6161.66%)
    PASS  Waiting for file changes...
        press h to show help, press q to quit
    ```
2. （测试所有文件）直接运行 `pnpm test`，将会测试所有 `index.test.ts` 文件，可以看到你的代码是否通过测试。
    ```bash
    pnpm test
    ✓ questions/1-hello-word/index.test.ts (1)
    ✓ questions/2-ref-family/index.test.ts (2)
    Test Files  2 passed (2)
        Tests  3 passed (3)
        Time  4.42s (in thread 141ms, 3134.95%)
    PASS  Waiting for file changes...
    press h to show help, press q to quit
    ```

3. 执行 `pnpm test:ui`，将测试结果在页面上可视化的展示出来。

你也可以执行 `pnpm dev` 去查看你的代码在网页上是否表现正常。（记得修改 `main.ts` 中 `App.vue` 的路径。）

快乐刷题吧~



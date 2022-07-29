<p align='center'>
English | <a href='./README.zh-CN.md'>中文</a>
</p>

## Solutions to vuejs-challenges
My solutions for Vuejs-Chanllenges from [vuejs-challenges](https://github.com/webfansplz/vuejs-challenges) .

> This repo includes explanations and correct answers for the chanllenges, give you a better experience to finish the questions.

## How to use

### Install

1. Clone the projects and run `pnpm install`
    ```bash
    git clone git@github.com:Hacker-C/vuejs-challenges.git
    cd vuejs-challenges
    pnpm install
    ```
    
2. For every question, such as `1-hello-world`，copy `App.vue` and `index.test.ts` from [here](https://github.com/webfansplz/vuejs-challenges/tree/main/questions)，then paste to the local folder `questions`.

### Test your answers

There are to ways to test your answers.

1. (**Recommend**) When you want to test just one case, such as the `243-prevent-event-propagation`，you can run `pnpm test 243` to only test it.
    ```bash
    pnpm test 243
     ✓ questions/243-prevent-event-propagation/index.test.ts (1)
    Test Files  1 passed (1)
        Tests  1 passed (1)
        Time  4.62s (in thread 75ms, 6161.66%)
    PASS  Waiting for file changes...
        press h to show help, press q to quit
    ```

2. Run the script `pnpm test`，then you can see if your answer passes the test.
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

3. Run `pnpm test:ui`，and click the link to see if you answers get passed with visualization.


Also, you can run `pnpm dev` to see if the page works properly.(Remember to change the path of the App in main.ts)

That's all, have fun!



# 天气api获取
1218128305@qq.com
12345678
https://home.openweathermap.org/api_keys

## 接口调用
- https://api.openweathermap.org/data/2.5/weather?lat=51.5073219&lon=-0.1276474&appid=4e8f8e3b62bddf5018c441ed2bb8181a

- https://openweathermap.org/img/wn/03d@2x.png

- https://api.openweathermap.org/geo/1.0/direct?q=London&appid=4e8f8e3b62bddf5018c441ed2bb8181a

# firestore/databases 设置权限 
 match /{document=**} {
      allow read, write: if true;
 }

# firebase functions

 - npm install -g firebase-tools
 - firebase --version

 - firebase login
 - firebase init functions

 - firebase functions:list
 - firebase projects:list     

- 测试环境试一下
 pnpm serve
 - 部署到firebase
 - pnpm deploy
 - firebase deploy --only functions:func1,functions:func2

- 测试地址和部署地址
 http://127.0.0.1:5001/cxre-423d7/us-central1/helloWorldCors
 https://us-central1-cxre-423d7.cloudfunctions.net/helloWorldCors

 http://127.0.0.1:5001/cxre-423d7/us-central1/countItems
 https://us-central1-cxre-423d7.cloudfunctions.net/countItems

 http://127.0.0.1:5001/cxre-423d7/us-central1/getAllAuthUsers
 https://us-central1-cxre-423d7.cloudfunctions.net/getAllAuthUsers

 Function URL (helloWorldCors(us-central1)): https://helloworldcors-nbwvmuuvna-uc.a.run.app
 Function URL (countItems(us-central1)): https://us-central1-cxre-423d7.cloudfunctions.net/countItems


# cloudflare部署 (https://books-firebase-vue3.pages.dev)
- 使用 cloudflare 部署 **不需要设置 base**
控制台地址：https://dash.cloudflare.com
用户名和密码:
1218128305@qq.com
****** 自己的密码

# githup action 提交部署 (https://zengsheng-git.github.io/books-firebase-vue3)
1.  需要把 githup 仓库名称 改为 公共public 仓库，并且 需要 上传 `pnpm-lock.yaml` 文件
2.  需要创建新的分支 gh-pages
2.  需要设置 `base: process.env.NODE_ENV === 'production' ? '/books-firebase-vue3/' : '/'`
books-firebase-vue3 是你的githup仓库名称
3. 编写 deploy.yml
`/.github/workflows/deploy.yml`

``` yml
# 工作流名称
name: 部署Vue3到GitHub Pages

# 触发条件：当推送到main分支时执行
on:
  push:
    branches: [ main ]

# 任务定义
jobs:
  build-and-deploy:
    # 运行环境：Ubuntu最新版
    runs-on: ubuntu-latest
    steps:
      # 1. 拉取代码到工作流环境
      - name: 检出代码
        uses: actions/checkout@v4

      # 2. 安装Node.js
      - name: 设置Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20

      # 3. 安装pnpm
      - name: 安装pnpm
        uses: pnpm/action-setup@v2
        with:
          version: 8
          run_install: false

      # 4. 安装项目依赖
      - name: 安装依赖
        run: pnpm install  # 使用pnpm安装依赖

      # 4. 构建项目（生成dist目录）
      - name: 构建项目
        run: npm run build  # 对应package.json中的build命令

      # 5. 部署dist目录到gh-pages分支（GitHub Pages的默认源）
      - name: 部署到GitHub Pages
        uses: peaceiris/actions-gh-pages@v4  # 第三方部署工具
        with:
          # 使用具有写入权限的Personal Access Token
          personal_token: ${{ secrets.PERSONAL_TOKEN }}
          # 要部署的目录（Vue构建后的产物）
          publish_dir: ./dist
          # 部署到的分支（固定为gh-pages，GitHub Pages默认读取此分支）
          publish_branch: gh-pages
          # 提交者信息
          user_name: 'github-actions[bot]'
          user_email: 'github-actions[bot]@users.noreply.github.com'
```
- 开启 GitHub Pages
仓库的 setting/pages

4. 设置 personal access tokens
- githup 用户头像/settings/developer settings/personal access tokens/tokens (classic)/New personal access token (classic)
- 注意 Select scopes 系列的 repo 全选
- 生成之后， 复制 personal access tokens 的值

5. 设置 Actions secrets 
- 仓库的 setting/secrets and variables/Actions/New repository secret

Name: PERSONAL_TOKEN ( 是 deploy.yml文件中 设置的 personal_token 固定值 )
Value: 设置为 personal access tokens 完成之后， 生成的 personal access tokens
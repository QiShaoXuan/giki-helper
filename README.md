# giki-helper

通过命令行辅助 [giki](https://giki.app/) 操作。

## 注意

该库开发的初衷是：本地完成或存储于 git 仓库的文章能够快速发布于 [giki](https://giki.app/) 平台。

**目前根据个人需求开发，所以仅支持发布。**

**执行操作查询文章的目录为 `./articles`。**

**用户 token 应当存放于 `./private-config.json`，`key` 值为 `gikiToken` 用于发布获取(记得设置 `.gitignore` 忽略提交)。**

```json
{
  "gikiToken": "XXXX",
  "userName": "XXXX"
}
```

可查看 [我的仓库](https://github.com/QiShaoXuan/Woolgather) 使用

## 安装

```shell
npm i giki-helper -g
```

## 使用

```shell
giki <command>
```

### 发布

```shell
giki publish
```

<template>
  <!-- banner -->
  <div class="banner" :style="cover">
    <h1 class="banner-title"></h1>
  </div>
  <!-- 归档列表 -->
  <v-card class="blog-container">
    <div v-html="markdown"></div>
  </v-card>
</template>

<script setup lang="ts">
import { Timeline, TimelineTitle, TimelineItem } from "vue3-cute-component";
import { ref, reactive } from "vue";
import markdownToHtml from "../../utils/markdown";
let current = ref(1);
const cover = ref(
  `background: url(https://xiaogerblog.oss-cn-chengdu.aliyuncs.com/config/c796ff3ca8e6a736cae59f8eda6d9948.jpg) center center / cover no-repeat`
);

const data = reactive({
  content: `Git的使用
1. 初始化
# 跳转到指定目录
cd /wosperry/我的项目
# 初始化仓库
git init

任何一个文件夹，都可以使用git来管理，这个文件夹就叫做仓库（repository）。
命令执行后，会在当前目录下生成一个.git的目录，这个目录是git来跟踪管理版本的，不要删除这个目录，也不要修改里面的内容。
这样，我们就可以直接使用git来管理当前目录下的所有文件了。
2. 添加文件到仓库
# 添加一个文件
git add 文件1.txt
# 添加多个文件
git add 文件2.txt 文件3.txt 文件4.txt
# 添加一个文件夹
git add 文件夹1
# 添加多个文件夹
git add 文件夹1 文件夹2
# 添加所有文件（这里的.代表当前目录下所有改动过的文件）
git add .

3. 提交文件到仓库
其实使用 git add 之后，文件已经提交到了仓库，只是还没有提交到版本库。 也就是说你只是一直往仓库里添加文件，但是并没有提交到版本库，所以版本库里面是没有任何东西的。 当我们认为这次提交的东西已经够多了，就可以使用 git commit 命令来提交到版本库了。

# 提交到版本库
git commit -m "这里是提交的说明"

命令执行后，会在代码库里面生成一个新的commit，一般也可以叫做版本，这个就是包含了你在仓库里面提交的所有有改动文件的一个版本。 这个版本是有一个唯一的id的，这个id是一个40位的16进制的数字，我们可以通过 git log 命令来查看提交的历史记录。

# 查看提交历史记录
git log

4. 版本回退
# 回退到上一个版本
git reset --hard HEAD^
# 回退到上上一个版本
git reset --hard HEAD^^
# 回退到上100个版本
git reset --hard HEAD~100
# 回退到指定版本（这里的commit id是通过git log命令查看的）
git reset --hard 1094a

5. 查看文件状态
# 查看文件状态
git status

6. 查看文件改动
# 查看文件改动
git diff 文件1.txt

7. 查看提交历史记录
# 查看提交历史记录
git log

# 下面是其他常用的参数

# 查看提交历史记录（简洁版）
git log --pretty=oneline
# 查看提交历史记录（简洁版，只显示前几位）
git log --pretty=oneline --abbrev-commit
# 查看提交历史记录（简洁版，只显示前几位，只显示最近两次）
git log --pretty=oneline --abbrev-commit -2
# 查看提交历史记录（简洁版，只显示前几位，只显示最近两次，显示分支）
git log --pretty=oneline --abbrev-commit -2 --graph
# 查看提交历史记录（简洁版，只显示前几位，只显示最近两次，显示分支，显示分支指向）
git log --pretty=oneline --abbrev-commit -2 --graph --decorate


8. 查看命令历史记录
# 查看命令历史记录
git reflog

9. 撤销修改
# 撤销工作区的修改
git checkout -- 文件1.txt
# 撤销暂存区的修改
git reset HEAD 文件1.txt

这里的工作区和暂存区的概念，补充一下基本概念：

工作区：就是我们当前看到的文件夹，也就是我们当前正在编辑的文件夹。
暂存区：就是我们通过 git add 命令添加到仓库的文件，这些文件就是暂存区的文件。
版本库：就是我们通过 git commit 命令提交到仓库的文件，这些文件就是版本库的文件。
10. 删除文件
# 删除工作区的文件
rm 文件1.txt
# 删除版本库的文件
git rm 文件1.txt

11. 远程仓库
# 添加远程仓库
git remote add origin
# 推送到远程仓库
git push -u origin master
# 克隆远程仓库
git clone <远程仓库地址>
# 查看远程仓库
git remote -v
# 查看远程仓库URL（下方这些origin都是远程仓库的别名，可以修改为其他的）
git remote show origin
git remote Get-Url origin
# 修改远程仓库URL
git remote set-url origin <URL>


12. 分支管理
因为新手很容易去工具里点按钮，点了之后不知道具体做了什么。`,
});

const markdown = markdownToHtml(data.content);
</script>

<style scoped>
.time {
  font-size: 0.75rem;
  color: #555;
  margin-right: 1rem;
}
</style>

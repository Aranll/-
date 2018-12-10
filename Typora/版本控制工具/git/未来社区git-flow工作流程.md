## git 工作流程

### 应用的分支及其描述

#### 分支应用情景

![git flow](https://gitbook.tw/images/gitflow/why-need-git-flow/flow.png)

#### Production 分支（长久分支）

主要用来放稳定、可以随时上线的版本。这个分支的来源只能从别的分支合并过来，开发不应直接 Commit 到这个分支中。因为其实发布版本，所以会在这个分支的 Commit 上打上版本号标签。

#### Master 分支（长久分支）

所有开发的基础分支。所有的 Feature 分支从此分支切除，当要新增功能时，从此分支切出对应的 Feature 分支，同时切出的 Feature 分支的功能完成后，将合并回此分支。

#### Hotfix 分支

当线上产品发生紧急问题的时候，会从 Production 分支开一支 Hotfix 分支进行修复，Hotfix 分支修复完成之后，需要合并回 Production 和 Master 分支。

1. 为什么需要合并合并回 Master 分支？

   避免 Master 分支再次合并回 Production 分支时，问题重现。

2. 为什么一开始不直接从 Master 分支切出 Hotfix 分支出来修复问题？

   因为 Master 分支中可能有功能尚在开发中，此时 Master 分支中的代码较大可能存在没有测出的 BUG，风险较大

3. 什么时候可以删除 Hotfix 分支？

   完成问题修复合并回 Production 和 Master 分支之后即可删除对应的 Hotfix 分支

#### Release 分支

当需要发版的功能都完成并集合到 Master 分支时，此时认为 Master 分支已足够成熟，可以把 Master 分支合并到 Release 分支上，做上线前的最后测试。测试过程中，如果出现 BUG 则在 Release 分支上直接修复。测试完成后，将Release 分支同时合并到 Master 和 Production 分支上。

1. 为什么要合并到 Production 分支上

   此时 Production 分支上是线上版本

2. 为什么要合并到 Master 分支上

   Release 分支上可能会测到并修复一些问题，所以 Master 分支需要同步，避免之后版本出现相同的问题。

3. 什么时候可以删除该分支？

   将该版本的项目成功部署上线之后即可删除对应的 Release 分支

#### Feature 分支

当开始新增功能时，此时需要使用 Feature 分支，Feature 分支从 Master 分支中切出，完成之后再度合并回 Master 分支。

1. 什么时候可以删除 Feature 分支？

   当 Feature 分支的功能模块开发完成，并合并回 Master 分支通过测试后，即可删除对应的 Feature 分支

### 工作流程概述

1. 从 `production` 分支中创建出 一个`master` 分支
2. 从 `master`分支中创建出 一个`release` 分支
3. 从 `master` 分支中创建出 所有的 `feature` 分支
4. 当一个 `feature` 分支的功能开发完成后，合并到 `master` 分支中
5. 当 `release` 分支测试通过之后，同时合并到 `master` 分支和 `production` 分支
6. 当 `production` 分支有紧急 BUG 需要修复时，从 `production` 分支创建一个 `hotfix` 分支，在 `hotfix` 分支中进行 BUG 的修复
7. 当 BUG 在 `hotfix` 分支中修复完成之后，同时合并到 `master` 分支和 `production` 分支

### 具体操作及命令


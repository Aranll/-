### 应用情景

#### 分支种类 ( 5种 )

- master

- develop

- hotfix

- release

- feature


#### 工作流程

![The overall flow of Gitflow](https://wac-cdn.atlassian.com/dam/jcr:61ccc620-5249-4338-be66-94d563f2843c/05%20(2).svg?cdnVersion=kn)



##### The overall flow of Gitflow is:

1. A `develop` branch is created from `master`
2. A `release` branch is created from `develop`
3. `Feature` branches are created from `develop`
4. When a `feature` is complete it is merged into the `develop` branch
5. When the `release` branch is done it is merged into `develop`and `master`
6. If an issue in `master` is detected a `hotfix` branch is created from `master`
7. Once the `hotfix` is complete it is merged to both `develop`and `master`

##### Gitflow 主要工作流程:

1. 从 `master` 分支中创建出 一个`develop` 分支
2. 从 `develop`分支中创建出 一个`release` 分支
3. 从 `develop` 分支中创建出 所有的 `Feature` 分支
4. 当一个 `feature` 分支的功能开发完成后，合并到 `develop` 分支中
5. 当 `release` 分支测试通过之后，同时合并到 `develop` 分支和 `master` 分支
6. 当 `master` 分支有紧急 BUG 需要修复时，从 `master` 分支创建一个 `hotfix` 分支，在 `hotfix` 分支中进行 BUG 的修复
7. 当 BUG 在 `hotfix` 分支中修复完成之后，同时合并到 `develop` 分支和 `master` 分支


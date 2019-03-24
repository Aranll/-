### 问题1：Environment variable $ANDROID_HOME not found ! weex

#### 解决方案

 [JDK与adb/android环境变量配置完整教程](https://www.cnblogs.com/yxysuanfa/p/7251253.html)

[在CMD中输入adb命令，提示“'adb' 不是内部或外部命令，也不是可运行程序或批处理文件”的解决方法](https://blog.csdn.net/shanshan_1117/article/details/80451272)

### 问题2：Error: No android devices found.

#### 解决方案

 [weex如何在真安卓机上调试](https://segmentfault.com/q/1010000010652802)

### 问题三

#### 报错信息

```js
Cannot set the value of read-only property 'outputFile' for ApkVariantOutputImpl_Decorated{apkData=Main{type=MAIN, fullName=debug, filters=[], versionCode=1, versionName=1.0.0}} of type com.android.build.gradle.internal.api.ApkVariantOutputImpl.
```

#### 解决方案

[Android Gradle 3.0.0-alpha2 plugin, Cannot set the value of read-only property 'outputFile'](https://stackoverflow.com/questions/44239235/android-gradle-3-0-0-alpha2-plugin-cannot-set-the-value-of-read-only-property)

### 问题4

#### 报错信息

```js
java.lang.RuntimeException: Annotation processors must be explicitly declared now.  The following dependencies on the compile classpath are found to contain annotation processor.  Please add them to the annotationProcessor configuration.
  - weexplugin-processor-1.3.jar (com.taobao.android:weexplugin-processor:1.3)
Alternatively, set android.defaultConfig.javaCompileOptions.annotationProcessorOptions.includeCompileClasspath = true to continue with previous behavior.  Note that this option is deprecated and will be removed in the future.
See https://developer.android.com/r/tools/annotation-processor-error-message.html for more details.
```

#### 解决方案

 [AndroidStudio3.0 注解报错Annotation processors must be explicitly declared now. The following dependencies on the compile classpath are found to contain annotation processor.](https://www.cnblogs.com/shmilyGWT/p/7833571.html)


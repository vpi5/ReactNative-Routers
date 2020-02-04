## 安装 nodeJs
    1、下载地址:http://nodejs.cn/
    2、下载完成后一路 next
    3、检查版本 cmd命令(node -v)

## 安装 Python 2.7(注意：不能够安装3.x版本，reactNative 只支持2.7)

    1、下载：http://www.downza.cn/soft/140676.html
    2、下载完成后开始安装：一路next，注意：要安装的指定的文件目录中，方便配置环境变量
    3、配置环境变量：
        1、在桌面我的电脑鼠标右击选择 --> 属性
        2、控制面板中选择 --> 高级系统设置
        3、系统属性中选择 --> 环境变量
        4、在系统变量中选择 --> path --> 编辑 --> 在变量值末尾处添加一下内容 ;D:\Python (D:\Python，就是你安装Python的目录)
        5、如果以上有问题，请参考：https://jingyan.baidu.com/article/ac6a9a5e396e742b653eaccb.html
        6、检查版本：cmd命令(python --version) 输出结果：Python 2.7.13

## 安装 Java jdk 1.8 (注意：reactNative 最高支持的版本是 1.8)

    1、下载 http://www.downxia.com/downinfo/227852.html
    2、下载完成后开始安装：一路next，主要要安装的指定的文件目录中，方便配置环境变量
    3、配置环境变量：
        1、在桌面我的电脑鼠标右击选择 --> 属性
        2、控制面板中选择 --> 高级系统设置
        3、系统属性中选择 --> 环境变量
        4、在系统环境变量中 --> 新建 --> 变量名"JAVA_HOME"，变量值"D:\environment\Java\jdk1.8.0_101"（即JDK的安装路径）
        5、在系统环境变量中 --> path --> 编辑 --> 在末尾添加 ;%JAVA_HOME%\bin;%JAVA_HOME%\jre\bin
        6、在系统环境变量中 --> 新建 --> 变量名“CLASSPATH”,变量值“.;%JAVA_HOME%\lib;%JAVA_HOME%\lib\dt.jar;%JAVA_HOME%
\lib\tools.jar
        7、如果以上有问题，请参考：https://blog.csdn.net/qq_37216152/article/details/90247661
	8、重启计算机
        9、检查版本：cmd命令(java -version) 输出结果：Java version "1.8.0_181"，cmd命令(javac)

## 安装 安装SDK

    1、参考地址：https://www.jianshu.com/p/eb4203f3c61b
    2、下载地址：http://www.androiddevtools.cn/
    3、点击 Android SDK 工具 选项 --> 点击 SDL Tools 选项
    4、选择 Windows 模块中的 exe 安装包
    5、下载完成后安装，一路next(注意：要安装的指定的文件目录中，方便配置环境变量)
    6、配置环境变量
        1、在桌面我的电脑鼠标右击选择 --> 属性
        2、控制面板中选择 --> 高级系统设置
        3、系统属性中选择 --> 环境变量
        4、新建系统环境变量 变量名："ANDROID_HOME"，变量值："D:\Android\SDK（自己SDK的安装路径）"
        5、在系统变量中选择 --> path --> 编辑 --> 在变量值末尾处添加一下内容 ;%ANDROID_HOME%\build-tools\29.0.3;%ANDROID_HOME%\platform-tools;%ANDROID_HOME%\tools
    7、使用镜像安装 SDK
    8、进入SDK安装目录 双击  SDK Manager 打开应用程序
    9、添加镜像：Tools（左上角） --> Options：
    10、关闭应用程序
    11、进入SDK安装目录 双击  SDK Manager 再次启动应用程序
    12、选择对应的安卓SDK版本，选择完成时，点击 install 进行 安装(建议：5/6/7/8/9/10 版本全部安装)
    13、验证是否安装成功 cmd命令(Android) 如果提示：Android 不是内部或外部命令，请参照：https://blog.csdn.net/BADAO_LIUMANG_QIZHI/article/details/83020053

## 安装 react-native 至全局模块中

    cmd 命令(安装：yarn add react-native-cli -g)

## 初始化一个 rn 项目
    
    react-native init <项目的名字>

## 安装夜神模拟器

## 启动夜神模拟器

## 连接模拟器
    
    adb connect 127.0.0.1:62001

## 启动项目
    
    react-native run-android
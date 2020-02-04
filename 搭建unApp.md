## 初始化一个新的项目
    
    react-native init unApp
    
## react-Native 模拟器运行与调试

    参考地址：https://www.jianshu.com/p/4a72211831ef
    adb connect 127.0.0.1:62001 (运行的夜神模拟器)
    react-native run-android
 
    
## react-native 内部方法使用，例如 按钮(Button)  
    
    import {Button} from 'react-native';  
    <Button
        onPress={(e) => { console.log('点击了 按钮 触发函数事件') }} // 触发的点击事件
        title="demo 按钮" // 按钮的名称
        color="#841584"  // 按钮的颜色
    />
    
## 使用 react-native 内部方法时的注意事项
    
    虽然react-native 提供了很多对外的 UI 插件 和 方法插件， 但不建议使用
    发现问题如下：
    
    例如：
    使用 react-native 的 Button 时 添加的 title 文字时 英文会自动变成全部大写的方式
    
## console.log() 方法的使用

    在运行程序后，新开命令终端：
    
    安卓：react-native log-android
    ios：react-native log-ios
    
    参考 CSDN 博客： https://blog.csdn.net/weixin_30908649/article/details/99812248
   
## 安装路由

    yarn add  react-navigation
    
    安装路由的依赖库
    yarn add *
    react-native-gesture-handler 
    react-native-reanimated 
    react-native-safe-area-context 
    react-native-screens 
    react-navigation-stack
    
## 使用路由的方式
    
    新建 src/pages 目录
    添加几个页面
    在运行文件(根目录 index.js)中添加
    
    // 引用页面
    *******
    // 引用路由依赖
    import { createStackNavigator } from 'react-navigation-stack';
    import {createAppContainer} from 'react-navigation';
    // 添加路由
    const App = createStackNavigator ({
        demoApp: {screen: DemoApp},
        one: {screen: PageOne},
        two: {screen: PageTwo},
    });
    AppRegistry.registerComponent(appName, () => createAppContainer(App));

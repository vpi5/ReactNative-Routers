## Windows 项目搭建方式

    参考简书网博客 ： https://www.jianshu.com/p/ec31466517aa
    参考罗毅豪博客 ： https://www.cnblogs.com/luoyihao/p/11178377.html
    
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

## React-Native 模拟器运行与调试

    参考地址：https://www.jianshu.com/p/4a72211831ef
    adb connect 127.0.0.1:62001
    react-native run-android

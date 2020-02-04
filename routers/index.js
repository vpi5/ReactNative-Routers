// 引入普通 入口文件
import DemoApp from '../src/pages/demoApp';
import PageOne from '../src/pages/pageOne';
import PageTwo from '../src/pages/pageTwo';
// 引入抽屉路由文件
import Drawer1 from '../src/pages/drawer/drawer1';
import Drawer2 from '../src/pages/drawer/drawer2';
import Drawer3 from '../src/pages/drawer/drawer3';

import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {Image} from 'react-native';
import React from 'react';

// 为底部菜单加 图标
const TabBarItem = ({focused, tintColor, selectedImage, normalImage}) => {
    return (
        <Image
            source = {focused ? selectedImage : normalImage}
            style={{ tintColor: tintColor, width: 25, height: 25 }}/>
    )
};

// 底部菜单 路由
export const RoutersBottomTabNavigator = createBottomTabNavigator(
    {
        DemoApp : {
            screen: DemoApp,
            navigationOptions : {
                title : '首页', // 设置 title
                tabBarLabel: '首页',  // 设置 title
                tabBarOptions: {
                    activeTintColor: '#1559e9',  // 高亮的颜色
                    inactiveTintColor: '#000',  // 默认颜色
                    labelStyle: {
                        fontSize: 14,
                        height : 20
                    },
                    style: {
                        backgroundColor: 'red',
                    },
                },
                //tabBarVisible : true, // 控制是否显示 底部菜单栏
                tabBarIcon: ({tintColor,focused}) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('../images/ic_shop_car.png')}
                        selectedImage={require('../images/ic_type.png')} />
                ),
            }
        },
        PageOne : {
            screen: PageOne,
            navigationOptions : {
                title : '工作',
                tabBarLabel: '工作',
                tabBarOptions: {
                    activeTintColor: '#e91e63',  // 高亮的颜色
                    inactiveTintColor: '#000',  // 默认颜色
                    labelStyle: {
                        fontSize: 14,
                        height : 20
                    },
                    style: {
                        backgroundColor: 'blue',
                    },
                },
                tabBarIcon: ({tintColor,focused}) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('../images/ic_me.png')}
                        selectedImage={require('../images/ic_home.png')} />
                ),

            }
        },
    },
    {
        tabBarOptions : {
            showIcon : true
        },
    }
);

// 注册普通路由
export const RoutersNavigator = createStackNavigator ({
        /*DemoApp : {
            screen: DemoApp,
            navigationOptions : ({navigation}) => ({
                title : '首页',
                headerStyle: {
                    backgroundColor: '#f4511e',
                    height : 50,
                    borderBottomWidth: 0, // 去除标题栏下方的 阴影
                    elevation: 0,  // 去除标题栏下方的 线
                },
                headerTintColor : 'blue', // 标题文字的颜色
                headerTitleAlign : 'center', // 标题文字的 居中 居左 处理
            }),
        },
        PageOne : {
            screen: PageOne,
            navigationOptions : ({navigation}) => ({
                title : `${navigation.state.params.name}页面名`,
                headerStyle: {
                    backgroundColor: '#f4511e',
                    height : 50,
                    borderBottomWidth: 0, // 去除标题栏下方的 阴影
                    elevation: 0,  // 去除标题栏下方的 线
                },
                headerTintColor : 'blue', // 标题文字的颜色
                headerTitleAlign : 'center', // 标题文字的 居中 居左 处理
            }),
        },*/
        Tab : {
            screen : RoutersBottomTabNavigator,
            navigationOptions: {
                headerShown: false,
            }
        },
        PageTwo : {screen: PageTwo},
    }, {
        // 默认打开页面
        initialRouteName: 'Tab',
    }
);


// 抽屉路由
export const RouterDrawerNavigator = createDrawerNavigator({
    DemoApp : {
        screen: RoutersNavigator,
        navigationOptions : {
            drawerLabel: '首页',
        },
    },
    PageTwo : {
        screen: PageTwo,
        navigationOptions : {
            drawerLabel: 'PageTwo',
        },
    },
    Drawer1 : {
        screen: Drawer1,
        navigationOptions : {
            drawerLabel: 'Drawer1',
        },
    },
    Drawer2 : {
        screen: Drawer2,
        navigationOptions : {
            drawerLabel: 'Drawer2',
        },
    },
    Drawer3 : {
        screen: Drawer3,
        navigationOptions : {
            drawerLabel: 'Drawer3',
        },
    },
}, {
    drawerWidth: 300, // 展示的宽度
    drawerPosition: 'left', // 抽屉在左边还是右边
});

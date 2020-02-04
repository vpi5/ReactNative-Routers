import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';


/**
 *
 *  @param DemoApp
 *
*/

export default class DemoApp extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name : '6666'
        };
    }

    render(){
        let {navigation} = this.props;
        return (
            <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>首页</Text>
                <View style={styles.textMargin}>
                    <Button
                        title={'跳转至 PageTwo 页面'}
                        onPress={(e) => { navigation.navigate('PageTwo', {name : '2222'}) }}
                    />
                </View>
                <View style={styles.textMargin}>
                    <Button
                        title={'打开侧边栏'}
                        onPress={() => navigation.openDrawer()}
                    />
                </View>
                <View style={styles.textMargin}>
                    <Button
                        title={'关闭侧边栏'}
                        onPress={() => navigation.closeDrawer()}
                    />
                </View>
                <View style={styles.textMargin}>
                    <Button
                        title={'toggle侧边栏'}
                        onPress={() => navigation.toggleDrawer()}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    sectionContainer: {
        paddingHorizontal: 24,
        backgroundColor: Colors.lighter,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
    },
    highlight: {
        fontWeight: '700',
    },
    textMargin : {
        marginTop: 20
    }
});

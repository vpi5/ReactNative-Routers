import React from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';


/**
 *
 *  @param Drawer3
 *
*/

export default class Drawer3 extends React.Component{

    render(){
        return (
            <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Drawer3</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
        backgroundColor: Colors.lighter,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
    },
});

import React from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';


/**
 *
 *  @param PageTwo
 *
*/

export default class PageTwo extends React.Component{

    render(){
        return (
            <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>PageTwo</Text>
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
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
    },
    highlight: {
        fontWeight: '700',
    }
});

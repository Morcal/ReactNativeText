/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
} from 'react-native';

class AwsomeProject extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native!
                    hello world!!!!
                </Text>
                <Text style={styles.instructions}>
                    React Native
                </Text>

                <Image source={require('./img/react_native.png')} style={{width:100,height:100}}>

                </Image>

                <TextInput style={styles.text_input}
                           autoFocus={true}
                           numberOfLines={1}
                           defaultValue="用户名"
                />
                <TextInput style={styles.text_input}
                           autoFocus={true}
                           numberOfLines={1}
                           defaultValue="密码"
                />
                <View style={styles.style_view_commit}>
                    <Text style={{color: '#fff'}}>
                        登录
                    </Text>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        fontStyle: 'italic',
        textAlign: 'center',
        color: 'red',
        fontSize: 23,
        marginBottom: 5,
    },
    text_input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        fontSize: 18,
        margin: 5,
    },
    style_view_commit: {
        marginTop: 15,
        padding: 10,
        backgroundColor: '#63B8ff',
        height: 35,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

AppRegistry.registerComponent('AwsomeProject', () => AwsomeProject);

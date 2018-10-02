import React, { PureComponent } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import { CheckBox, ListItem } from 'react-native-elements';
import Swipeable from 'react-native-swipeable';
/**
 * A wrapper class for my to do list's list items. This class simply
 * wraps React Native elements ListItem around a React.PureComponent
 * to optimize and allow the faster rendering of FlatLists within nested
 * navigators. Class takes one parameter from its parent props: the name of
 * the item this ListItem will represent upon its render.
 *
 */
export default class ShoppingListItem extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            itemStatus: !this.props.status
        }
    }

    render() {
        return(
            <Swipeable
                leftContent = {
                    <View style = {styles.checkItemView}>
                        <Text style = {styles.checkItemText}> Complete Task </Text>;
                    </View>
                }
                onLeftActionRelease = {() => this.setState({itemStatus: !this.state.itemStatus})}>
                <CheckBox
                    title = {this.props.name}
                    checked = {this.state.itemStatus}
                    onPress = {() => this.setState({itemStatus: !this.state.itemStatus})}
                />
            </Swipeable>
        );
    }
}


const styles = StyleSheet.create({
    checkItemView: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        backgroundColor: 'lightgreen'
    },
    checkItemText: {
        fontFamily: 'AppleSDGothicNeo-SemiBold',
        fontSize: 20,
        color: 'white'
    }
});

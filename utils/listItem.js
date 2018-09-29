import React, { PureComponent } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import { CheckBox } from 'react-native-elements';

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
            <CheckBox
                title = {this.props.name}
                checked = {this.state.itemStatus}
                onPress = {() => this.setState({itemStatus: !this.state.itemStatus})}
            />
        );
    }
}

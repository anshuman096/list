import React, { PureComponent } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import { ListItem} from 'react-native-elements';

export default class ShoppingListItem extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <ListItem
                title = {this.props.name}
            />
        );
    }
}

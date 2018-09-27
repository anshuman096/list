import React, { Component } from 'react';
import { View,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';
//import { addTodo } from '../actions/actions.js';


export default class AddItem extends React.Component {

    /**
     * Method that is called upon each render of
     * AddItem component. Initializes state to hold
     * the name of the item to be added, and a copy of
     * the to do list, so it can be updated.
     *
     */
    constructor(props) {
        super(props);
        this.state = {
            itemName: "",
            data: this.props.navigation.state.params.data
        };
    }

    /**
     * addItemToList pushes the current itemName into the data list stored
     * in the state variable, and then sets the boolean for whether the itemName
     * has been added to the data list or not.
     *
     */
    async addItemToList(itemEntered) {
        var itemDict = {
            item: itemEntered,
            active: true
        }
        await this.state.data.push(itemDict);
    }

    /**
     * Standard render function for React component
     */
    render() {
        return(
            <View style = {styles.mainContainer}>
                <View style = {styles.itemNameContainer}>
                    <TextInput style = {styles.itemNameLabel}
                        placeholder = 'Item Name'
                        autoCapitalize = 'none'
                        onChangeText = {(text) => this.setState({itemName: text})}
                        blurOnSubmit = {true}/>
                </View>
                <TouchableOpacity style = {styles.submitButtonContainer}
                    onPress = { async () => {
                        this.addItemToList(this.state.itemName);
                        this.props.navigation.navigate('ShoppingListName', { data:this.state.data });
                    }}>
                    <Text style = {styles.submitButtonLabel}>Add</Text>
                </TouchableOpacity>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#f1f1f2',
        paddingTop: 20
    },
    itemNameContainer: {
        flex: 7,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        backgroundColor: '#f1f1f2'
    },
    submitButtonContainer: {
        flex: 0.75,
        backgroundColor: '#1995ad',
        justifyContent: 'center',
        borderRadius: 10
    },
    itemNameLabel: {
        flex: 1,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#bcbabe',
        borderRadius: 8,
        fontSize: 20
    },
    submitButtonLabel: {
        alignSelf: 'center',
        alignItems: 'center',
        fontSize: 25,
        fontFamily: 'Avenir',
        fontWeight: 'bold',
        color: '#ffffff',
        shadowColor: '#ffffff',
        shadowOffset: {
            width: 2,
            height: 2
        },
        shadowOpacity: 0.2
    }
})

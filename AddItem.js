import React, { Component } from 'react';
import { View,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';



export default class AddItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemName: '',
            //itemAdded: false,
            data: this.props.data
        };
    }

    /**
     * addItemToList pushes the current itemName into the data list stored
     * in the state variable, and then sets the boolean for whether the itemName
     * has been added to the data list or not.
     * (TO BE CHANGED)
     */
    async addItemToList(itemName) {
        console.log('AddItem.js -> addItemToList itemName: ' + itemName);
        let updatedList = await this.state.data.push(itemName);
        console.log('AddItem.js -> addItemToList updatedList: ' + updatedList);
        // await this.setState({
        //     data: updatedList,
        //     itemAdded: true
        // });
        this.props.navigation.navigate('ShoppingListName', {data: updatedList});
    }

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
                    onPress = {() => {
                        console.log('AddItem.js -> render about to add ' + this.state.itemName + ' to list');
                        this.addItemToList(this.state.itemName);
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
        justifyContent: 'center',
        backgroundColor: '#f1f1f2'
    },
    submitButtonContainer: {
        flex: 0.75,
        backgroundColor: '#1995ad',
        justifyContent: 'center',
        borderRadius: 10
    },
    itemNameLabel: {
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

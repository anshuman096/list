import React, { Component } from 'react';
import { View,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    DatePickerIOS
} from 'react-native';



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
            data: this.props.navigation.state.params.data,
            completionDate: new Date()
        };

        this.setDate = this.setDate.bind(this);
    }

    /**
     * addItemToList pushes the current itemName into the data list stored
     * in the state variable, and then sets the boolean for whether the itemName
     * has been added to the data list or not.
     *
     */
    async addItemToList(itemEntered) {
        var itemDict = {
            name: itemEntered,
            active: true,
            date: this.state.completionDate,
            index: (this.state.data.length + 1).toString()
        }
        await this.state.data.push(itemDict);
        this.props.navigation.navigate('ListScreen', { data:this.state.data });
    }

    /**
     * setDate is a function that is bound to this. It is
     * called whenever the DatePicker is modified and gets
     * new date. The new Date is set into the new item state.
     *
     */
    setDate(newDate) {
        this.setState({completionDate: newDate});
    }


    /**
     * Standard render function for React component
     */
    render() {
        return(
            <View style = {styles.mainContainer}>
                <View style = {styles.itemInfoContainer}>
                    <View style = {styles.nameContainer}>
                        <TextInput style = {styles.itemNameLabel}
                            placeholder = 'Item Name'
                            autoCapitalize = 'none'
                            onChangeText = {(text) => this.setState({itemName: text})}
                            blurOnSubmit = {true}
                            />
                    </View>
                    <View style = {styles.dateContainer}>
                        <DatePickerIOS
                            mode = "date"
                            date = {this.state.completionDate}
                            minimumDate = {this.state.completionDate}
                            onDateChange = {this.setDate}
                        />
                    </View>
                </View>
                <TouchableOpacity style = {styles.submitButtonContainer}
                    onPress = { async () => {
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
    itemInfoContainer: {
        flex: 7,
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#f1f1f2'
    },
    nameContainer: {
        flex: 1,
        alignSelf: 'center',
        backgroundColor: '#f1f1f2',
        paddingBottom: 20
    },
    dateContainer: {
        flex: 10
    },
    submitButtonContainer: {
        flex: 0.75,
        backgroundColor: '#1995ad',
        justifyContent: 'center',
        borderRadius: 10
    },
    itemNameLabel: {
        fontFamily: 'Avenir-Light',
        color: '#1995ad',
        fontSize: 30
    },
    submitButtonLabel: {
        alignSelf: 'center',
        alignItems: 'center',
        fontSize: 25,
        fontFamily: 'Avenir-Light',
        color: '#ffffff',
        shadowColor: '#ffffff',
        shadowOffset: {
            width: 2,
            height: 2
        },
        shadowOpacity: 0.2
    }
})

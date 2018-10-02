import React, {Component} from 'react';
import { StyleSheet,
     Text,
     TouchableOpacity,
     FlatList,
     View
 } from 'react-native';
 import {
     Button,
     List,
     ListItem
 } from 'react-native-elements';
import ShoppingListItem from '../utils/shoppingListItem';

export default class CompletedList extends React.Component {

    /**
     * Initial method called upon creation of Comoonent.
     * This constructor initializes the to do list as an
     * empty array. Sets the refresh flag to true to start off.
     *
     */
    constructor(props) {
        super(props);
        this.state = {
            inactive: [
                {
                    name: "Dog Food",
                    active: false,
                    completionDate: new Date(),
                    index: "1"
                },
                {
                    name: "Clothes",
                    active: false,
                    completionDate: new Date(),
                    index: "2"
                }
            ],
            refresh: true
        }
    }



    /**
     * Component lifecycle method called to ensure re-rendering of
     * to do list upon addition of new data. Method checks to see if
     * the refresh field is initialized to false. If it is, then it is
     * set to true, and returns true to allow a re-render. Otherwise it
     * returns false.
     *
     * @return: boolean, true or false to determine re-rendering status
     */
    shouldComponentUpdate() {
         if(this.state.refresh == false) {
             this.setState({
                 refresh: true
             });
             return true;
         }
         return false;
     }


     /**
      * A callback function for FlatList's renderItem. This function
      * returns a ShoppingListItem component, which is just a ListItem
      * component wrapped in a React.PureComponent via inheritance.
      *
      * @return: ShoppingListItem, component to render in FlatList
      */
     renderItem = ({item}) => (
        <ShoppingListItem
            name = {item.name}
            date = {item.completionDate}
            status = {item.active}
        />
    );


     /**
      * Render function for React component.
      *
      */
    render() {
        return(
            <View style = {styles.mainContainer}>
                <View style = {styles.titleContainer}>
                    <Text style = {styles.titleLabel}>Shopping List</Text>
                </View>
                <View style = {styles.listContainer}>
                    <List style = {styles.list}>
                        <FlatList
                            data = {this.state.inactive}
                            extraData = {this.state}
                            keyExtractor = {item => item.index}
                            renderItem = {this.renderItem}
                        />
                    </List>
                </View>
                <TouchableOpacity style = {styles.buttonContainer}
                    onPress = {() => {
                        this.setState({
                            refresh: false
                        });
                        this.props.navigation.navigate('AddItemScreen', {data: this.state.active});
                    }}>
                    <Text style = {styles.buttonLabel}>Add Item</Text>
                </TouchableOpacity>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#f1f1f2'
    },
    titleContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#1995ad',
        paddingBottom: 25,
        borderBottomWidth: 1,
        borderBottomColor: '#1995ad',
        shadowColor: '#000000',
        shadowOffset: {
            width: 2,
            height: 2
        },
        shadowOpacity: 0.2
    },
    listContainer: {
        flex: 7,
        flexDirection: 'column',
        backgroundColor: '#f1f1f2'
    },
    buttonContainer: {
        flex: 0.75,
        justifyContent: 'center',
        backgroundColor: '#bcbabe',
        borderRadius: 10
    },
    titleLabel: {
        fontSize: 30,
        paddingTop: 25,
        paddingBottom: 25,
        fontFamily: 'Avenir-Light',
        alignSelf: 'center',
        shadowColor: '#000000',
        shadowOffset: {
            width: 2,
            height: 2
        },
        shadowOpacity: 0.2
    },
    buttonLabel: {
        alignSelf: 'center',
        alignItems: 'center',
        fontSize: 25,
        fontFamily: 'Avenir-Light',
        color: '#000000',
        shadowColor: '#000000',
        shadowOffset: {
            width: 2,
            height: 2
        },
        shadowOpacity: 0.2
    },
    list: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        backgroundColor: '#f1f1f2'
    }
});

import React from 'react';
import {
    createStackNavigator,
    createBottomTabNavigator
} from 'react-navigation';
import { Icon } from 'react-native-elements';
import AddItem from './screens/addItem';
import ActiveList from './screens/activeList';
import CompletedList from './screens/completedList';


/** Navigation configurations for a stack navigator that represents
 * navigation between the active to do list and the addItem component
 */
const stackRouteConfigs = {
    ListScreen: { screen: ActiveList },
    AddItemScreen: { screen: AddItem }
};

const StackNavigatorConfigs = {
    initialRouteName: 'ListScreen'
};

const ListAddition = createStackNavigator(stackRouteConfigs, StackNavigatorConfigs);


/** Navigation configurations for app level navigation via  tab navigator.
 *  Will navigate between the to do list of active items and inactive items.
 */
const tabRouteConfigs = {
    Active: {
        screen: ListAddition,
        navigationOptions: {
            tabBarLabel: 'Active',
            tabBarIcon: ({tintColor}) => <Icon name = "list" size = {35} color = { tintColor }/>
        }
    },
    Completed: {
        screen: CompletedList,
        navigationOptions: {
            tabBarLabel: 'Completed',
            tabBarIcon: ({tintColor}) => <Icon name = 'check-circle' size = {35} color = { tintColor}/>
        }
    }
};

const TabNavigatorConfigs = {
    initialRouteName: 'Active',
    tabBarOptions: {
        activeTintColor: '#000000',
        inactiveTintcolor: '#bcbabe'
    }
};

const AppNavigator = createBottomTabNavigator(tabRouteConfigs, TabNavigatorConfigs);

export default AppNavigator;

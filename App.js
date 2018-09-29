import {
    createStackNavigator,
    createBottomTabNavigator
} from 'react-navigation';
import AddItem from './screens/addItem';
import ShoppingList from './screens/shoppingList';
import CompletedList from './screens/completedList';


// Navigation configurations for a stack navigator that represents
// navigation between the active to do list and the addItem component
const stackRouteConfigs = {
    ShoppingListName: ShoppingList,
    AddItemName: AddItem
};

const StackNavigatorConfigs = {
    initialRouteName: 'ShoppingListName'
};

const ListAddition = createStackNavigator(stackRouteConfigs, StackNavigatorConfigs);


// Navigation configurations for app level navigation via  tab navigator.
// Will navigate between the to do list of active items and inactive items.
const tabRouteConfigs = {
    Active: ListAddition,
    Completed: CompletedList
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

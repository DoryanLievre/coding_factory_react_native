import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Search from './components/Search';
import About from './components/About';



const Tabs = createMaterialBottomTabNavigator(
    {
      Search: { screen: Search },
      About: { screen: About }
    },
    {
      initialRouteName: 'Search',
      activeColor: '#fc8c03',
      inactiveColor: '#4400ff',
      barStyle: { backgroundColor: '#000000' }
    }
  );

  export default createAppContainer(Tabs);
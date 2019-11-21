import {createAppContainer} from 'react-navigation';
import {
  createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation-stack';
import {
  WetherScreen,
  SearchScreen,
  StartingScreen,
  AllFeatures,
  Language,
  RandomDate,
  TimeMatchine,
  DarkLightTheme,
  AccentDarkLight,
  HomeScreen,
  HooksInput,
} from './Constant/index';
import Font from './asset/Font';

const splashScreen = createStackNavigator({
  start: {
    screen: StartingScreen,
    navigationOptions: {
      header: null,
      headerBackTitle: null,
    },
  },
});

const AppStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'Detect Location',
        headerBackTitle: null,
      },
    },

    two: {
      screen: WetherScreen,
      navigationOptions: {
        title: 'Weather',
        headerBackTitle: null,
        headerTitleStyle: {
          fontSize: 20,
          fontFamily: Font.Aldrich,
        },
      },
    },
    search: {
      screen: SearchScreen,
      navigationOptions: {
        headerBackTitle: null,
        title: 'Search Location',
      },
    },
    Alldata: {
      screen: Language,
      navigationOptions: {
        headerBackTitle: null,
        title: 'Language',
      },
    },
    feature: {
      screen: AllFeatures,
      navigationOptions: {
        headerBackTitle: null,
        title: 'Settings',
      },
    },
    random: {
      screen: RandomDate,
      navigationOptions: {
        title: 'Calendar',
        headerBackTitle: null,
      },
    },
    time: {
      screen: TimeMatchine,
      navigationOptions: {
        title: 'Time Matchine',
      },
    },
    DLtheme: {
      screen: DarkLightTheme,
    },
    Accent: {
      screen: AccentDarkLight,
      navigationOptions: {
        title: 'Accent Color',
      },
    },
    hooks: {
      screen: HooksInput,
    },
  },
  {
    defaultNavigationOptions: ({screenProps, myTextC}) => {
      const theme = screenProps.myProps;
      const textC = screenProps.myTextC;
      return {
        headerStyle: {
          backgroundColor: theme,
        },
        headerTintColor: textC,

        headerTitleStyle: {
          fontSize: 20,
          fontFamily: Font.Aldrich,
        },
      };
    },
  },
);

const SwitchNavigator = createStackNavigator(
  {
    splashScreen: {
      screen: splashScreen,
    },
    AppstackScreen: {
      screen: AppStack,
    },
  },
  {
    headerMode: 'none',
  },
);

export default createAppContainer(SwitchNavigator);

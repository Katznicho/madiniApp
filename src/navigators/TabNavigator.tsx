import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLORS } from '../theme/theme';
import HomeStack from './HomeStack';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store/dev';
import { useNavigation } from '@react-navigation/native';
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const { user, isGuest, authToken } = useSelector((state: RootState) => state.user);

  const navigation = useNavigation<any>();

  const checkIFUserCard = ()=>{
     if(user.cardNumber === null){
        return navigation.navigate("CardStack")
     }
     else{
       
     }
  } 

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: COLORS.primaryOrangeHex,
        tabBarInactiveTintColor: COLORS.primaryLightGreyHex,
        tabBarStyle: Platform.OS === "ios" ? [styles.tabBarStyleIos] : [styles.tabBarStyleAndroid],
        tabBarLabelStyle: {
          fontSize: 12,
          paddingBottom: Platform.OS == "ios" ? 0 : 5,
          paddingVertical: Platform.OS == "ios" ? 0 : 0

        }

      }
      }
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeStack}
        options={{
          title: "Home",
          tabBarIcon: ({ focused, color, size }) => (
            <AntDesign
              name="home"
              size={25}
              color={
                focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
              }
            />
          ),
        }}></Tab.Screen>

    



    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyleAndroid: {
    height: 60,
    position: 'absolute',
    backgroundColor: COLORS.primaryLightWhiteGrey,
    borderTopWidth: 0,
    elevation: 10,
    borderTopColor: 'transparent',
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 20,
  },
  tabBarStyleIos: {
    position: 'absolute',
    backgroundColor: COLORS.primaryLightWhiteGrey,

  }

});


export default TabNavigator;

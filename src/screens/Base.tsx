import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store/dev';
import AuthStack from '../navigators/AuthStack';
import TabNavigator from '../navigators/TabNavigator';



const Base = () => {
    const { isLoggedIn, isGuest } = useSelector((state: RootState) => state.user);
    return (
        <NavigationContainer>
            {/* {
                isGuest || isLoggedIn ? <TabNavigator /> : <AuthStack />

            } */}
            <AuthStack />
        </NavigationContainer>
    )
}

export default Base


import React from 'react'
import HomeScreen from '../screens/HomeScreen';
import { useNavigation } from '@react-navigation/native';
import { RootState } from '../redux/store/dev';
import { generalStyles } from '../screens/utils/generatStyles';
import ArrowBack from '../components/ArrowBack';
import { COLORS } from '../theme/theme';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import TabNavigator from './TabNavigator';




const Stack = createNativeStackNavigator();

const HomeStack = () => {
    const navigation = useNavigation<any>();
    const { user, isGuest } = useSelector((state: RootState) => state.user);

    return (
        <Stack.Navigator initialRouteName="HomeScreen" >
            <Stack.Screen
                name="HomeScreen"
                component={TabNavigator}
                options={{
                    animation: 'slide_from_bottom',
                
                }}
            >

            </Stack.Screen>




        </Stack.Navigator>
    )
}

export default HomeStack


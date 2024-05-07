import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import useGetUserLocation from '../hooks/useGetUserLocation';
import { AppDispatch, RootState } from '../redux/store/dev';
import { useDispatch, useSelector } from 'react-redux';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { generalStyles } from './utils/generatStyles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SearchBar } from 'react-native-screens';

const HomeScreen = () => {
  const { position } = useGetUserLocation()
  const { isGuest, authToken, user } = useSelector((state: RootState) => state.user);

  const tabBarHeight = useBottomTabBarHeight();
  const navigation = useNavigation<any>();
  const dispatch = useDispatch<AppDispatch>();
  
  return (
    <KeyboardAwareScrollView
      style={[generalStyles.ScreenContainer]}
      keyboardShouldPersistTaps="always"
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="always"
        contentContainerStyle={{ paddingBottom: tabBarHeight + 50 }}
      >
          <SearchBar/>
      </ScrollView>
      </KeyboardAwareScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})
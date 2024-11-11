
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import DashboardScreen from '../screen/HomePage';
import FilterScreen from '../screen/FilterPage';
import InspectionForm from '../screen/ProcedurePage';
import WorkOrdersList from '../screen/WorkOrderListing';
import LocationsScreen from '../screen/LocationPage';
import WelcomeScreen from '../screen/OnBoardingPage';
import NewAssetScreen from '../screen/NewAssetPage';
import ProductFeaturesScreen from '../screen/MoreScreen';
import WorkDummy from '../dummy/workorderdummy';
const Stack = createNativeStackNavigator();

function Routing() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <NavigationContainer>
      <Stack.Navigator >
        {/* <Stack.Screen name="Home" component={DashboardScreen} options={{ headerShown: false }}/> */}
        <Stack.Screen name="Dummy" component={WorkDummy} options={{ headerShown: false }}/>
        <Stack.Screen name="Overview" component={DashboardScreen} />
        <Stack.Screen name="Filter" component={FilterScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Procedure" component={InspectionForm} options={{ headerShown: false }}/>
        {/* <Stack.Screen name="WorkOrderList" component={WorkOrdersList} options={{ headerShown: false }}/> */}
        <Stack.Screen name="OnBoard" component={WelcomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="NewAsset" component={NewAssetScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="WorkOrders" component={WorkOrdersList} options={{ headerShown: false }}/>
        <Stack.Screen name="Assets" component={LocationsScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="More" component={ProductFeaturesScreen} options={{ headerShown: false }}/> 
      </Stack.Navigator>
    </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default Routing;
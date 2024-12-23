import {Stack, Tabs} from "expo-router";
import Icon from 'react-native-vector-icons/SimpleLineIcons';
export default function RootLayout() {
  return (
      <Tabs screenOptions={{tabBarActiveTintColor:'red'}}
            initialRouteName='src/screens/HomeScreen'
      >
        <Tabs.Screen
          name='src/screens/HomeScreen'
          options={{
            headerShown:false,
            title:'Home',
            tabBarIcon:({color})=>(
                <Icon name='home' size={24} color={color}/>
            )
          }}
        >

        </Tabs.Screen>
        <Tabs.Screen name={'src/screens/Katalog'} options={{headerShown:false,title:'Katalog', tabBarIcon:({color})=>(
            <Icon name='folder' size={24} color={color}/>
            )}}/>
      <Tabs.Screen name={'src/screens/Basket'} options={{headerShown:false,title:'Basket', tabBarIcon:({color})=>(
              <Icon name='basket' size={24} color={color}/>
          )}}/>
      <Tabs.Screen name={'src/screens/ProfileScreen'} options={{headerShown:false,title:'Profile', tabBarIcon:({color})=>(
              <Icon name='user' size={24} color={color}/>
          )}}/>
      </Tabs>
  );
}

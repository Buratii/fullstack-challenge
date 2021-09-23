import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

// import AppProvider from './hooks';
import Routes from './routes';

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="dark-content" backgroundColor="##F2F2F2" />
    {/* <AppProvider> */}
    <View style={{ flex: 1, backgroundColor: '##F2F2F2' }}>
      <Routes />
    </View>
    {/* </AppProvider> */}
  </NavigationContainer>
);

export default App;

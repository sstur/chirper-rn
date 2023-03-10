/* eslint-disable react/style-prop-object */
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { TamaguiProvider } from 'tamagui';

import config from './tamagui.config';
import { Navigation } from './src/Navigation';
import { ApolloProvider } from './src/ApolloProvider';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar style="auto" />
      <ApolloProvider>
        <TamaguiProvider config={config}>
          <Navigation />
        </TamaguiProvider>
      </ApolloProvider>
    </>
  );
}

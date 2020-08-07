// import a library to help create a component
import React from 'react';
import {Text, AppRegistry} from 'react-native';

//component nesting
import Header from './src/components/header';


// Create a component

const App = () => {
  return (
        <Text> Hello Rockib </Text>
  );
};

// Render it to the device

AppRegistry.registerComponent('albums', () => App);

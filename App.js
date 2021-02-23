/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  View,
} from 'react-native';

//Testing each screen
import HomeScreen from "./src/screen/Home/index.js";
import ExplorePage from "./src/screen/Explore/index.js";
import SearchRoleScreen from "./src/screen/Search/index.js"
const App: () => React$Node = () => {
  return (
    <>
      <SafeAreaView>
        <SearchRoleScreen/>
      </SafeAreaView>
    </>
  );
};


export default App;

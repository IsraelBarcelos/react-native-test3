/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  FlatList,
  RefreshControl,
  ScrollView,
  SectionList,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const App = () => { 

  const [Items, setItems] = useState([
    {name: 'Item1'},
    {name: 'Item2'},
    {name: 'Item3'},
    {name: 'Item4'},
    {name: 'Item5'},
    {name: 'Item6'},
    {name: 'Item7'},
    {name: 'Item8'},
    {name: 'Item6'},
    {name: 'Item7'},
    {name: 'Item8'},
  ]);

  const [DATA, setDATA] =useState ([
    {
      title: 'title 1',
      data: ['Item 1-1', 'Item 2-1', 'Item 3-1'],
    },
    {
      title: 'title 2',
      data: ['Item 1-2', 'Item 2-2', 'Item 3-2'],
    },
    {
      title: 'title 3',
      data: ['Item 1-3', 'Item 2-3', 'Item 3-3'],
    },
    {
      title: 'title 4',
      data: ['Item 1-4', 'Item 2-4', 'Item 3-4'],
    },
    {
      title: 'title 5',
      data: ['Item 1-5', 'Item 2-5', 'Item 3-5'],
    },
    {
      title: 'title 6',
      data: ['Item 1-6', 'Item 1-6', 'Item 3 -6'],
    },
    {
      title: 'title 7',
      data: ['Item 1-7', 'Item 2-7', 'Item 3-7'],
    },
    {
      title: 'title 8',
      data: ['Item 1-8', 'Item 2-8', 'Item 3-8'],
    },
    {
      title: 'title 9',
      data: ['Item 1-9', 'Item 2-9', 'Item 3-9'],
    },
    {
      title: 'title 10',
      data: ['Item 1-10', 'Item 2-10', 'Item 3-10'],
    }
  ])

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setItems([...Items, {name:'Item 69'}]);
    setRefreshing(false);
  }

  const refreshDATA = () => {
    setRefreshing(true);
    setDATA([...DATA, {
      title: `title ${DATA.length+1}`,
      data: [`Item 1-${DATA.length+1}`]
    }]);
    setRefreshing(false);
  }


  return (

    <SectionList
      style={styles.body}
      keyExtractor={(item, index) => index.toString()}
      sections={DATA}
      renderItem={({item}) => (
        
          <Text style={styles.text}>{item}</Text>
        
      )}

      renderSectionHeader={({section}) => (
        <View style={styles.item}>
          <Text style={styles.text}>{section.title}</Text>
        </View>
      )}

      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={refreshDATA}
          colors={['#ff00ff']}
        />
      }

    />

    /*
    <FlatList
    
    keyExtractor={(item, index) => index.toString()}
    numColumns={2}
    data={Items}
    refreshControl={
      <RefreshControl
        refreshing={refreshing}
        onRefresh={onRefresh}
        colors={['#ff00ff']}
      />
    }
    renderItem={
      ({item}) => (
        <View style={styles.item}>
          <Text style={styles.text}>{item.name}</Text>
        </View>
      )
    }
    
    />
   */
    
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'stretch',
    backgroundColor: '#ddd',
  },
  item: {
    borderColor: "#000",
    borderWidth: 3,
    
    backgroundColor: '#4ae1fa',
    justifyContent: "center",
    alignItems: "center"

  },
  text: {
    color: '#000',
    fontSize: 45,
    fontStyle: 'italic',
    textAlign: 'center'

  }
});

export default App;

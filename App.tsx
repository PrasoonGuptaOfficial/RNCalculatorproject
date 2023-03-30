import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  Pressable,
  Dimensions,
} from 'react-native';

const itemData = [
  {
    id: 1,
    operandValue: 'AC',
  },
  {
    id: 2,
    operandValue: '+-',
  },
  {
    id: 3,
    operandValue: '%',
  },
  {
    id: 4,
    operandValue: '/',
  },
  {
    id: 5,
    operandValue: '7',
  },
  {
    id: 6,
    operandValue: '8',
  },
  {
    id: 7,
    operandValue: '9',
  },
  {
    id: 8,
    operandValue: 'x',
  },
  {
    id: 9,
    operandValue: '1',
  },
  {
    id: 10,
    operandValue: '2',
  },
  {
    id: 11,
    operandValue: '3',
  },
  {
    id: 12,
    operandValue: '+',
  },
  {
    id: 13,
    operandValue: '0',
  },
  {
    id: 14,
    operandValue: '',
  },
  {
    id: 15,
    operandValue: '.',
  },
  {
    id: 16,
    operandValue: '=',
  },
];

function App(): JSX.Element {
  // eslint-disable-next-line react/no-unstable-nested-components
  function Item(item: any, key: number) {
    return (
      <Pressable key={key} style={styles.buttonContainer}>
        <Text style={styles.textContainer}>{item.item}</Text>
      </Pressable>
    );
  }
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.textBoxContainer}>
        <Text>CDE</Text>
      </View>
      <View style={styles.operatorsContainer}>
        {itemData.map(item => {
          return <Item item={item.operandValue} key={item.id} />;
        })}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  textBoxContainer: {
    flex: 1,
  },
  operatorsContainer: {
    flex: 1,
    flexDirection: 'row',
    width: Dimensions.get('window').width,
    flexWrap: 'wrap',
  },
  buttonContainer: {
    flex: 1,
    minWidth: Dimensions.get('window').width / 4,
    maxWidth: Dimensions.get('window').width / 4,
    height: Dimensions.get('window').height / 8,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    borderWidth: 0.5,
    borderColor: '#D3D3D3',
  },
  textContainer: {
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '700',
    color: '#454545',
  },
});

export default App;

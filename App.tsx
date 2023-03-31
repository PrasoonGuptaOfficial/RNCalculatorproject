/*
TODO: 1. Functionality Implementation - Done
TODO: 2. UI of Text Component - Done
TODO: 3. Dark and Light Theme - Done
TODO: 4. Alignment of Components - Done
*/
import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  Pressable,
  Dimensions,
  Alert,
  StatusBar,
  useColorScheme,
} from 'react-native';
import {dummyData} from './src/Constants/Data';

function App(): JSX.Element {
  const [firstValue, setFirstValue] = useState('0');
  const [secondValue, setSecondValue] = useState('0');
  const [totalValue, setTotalValue] = useState(0);
  const [operation, setOperation] = useState('');
  const [operationCount, setOperationCount] = useState(1);
  const [expression, setExpression] = useState('0');
  function OperatorSetValue(number: string) {
    if (number === '+' || number === '-' || number === 'x' || number === '/') {
      setExpression(expression + number);
      if (operationCount > 1) {
        let result: number = 0;
        if (operation === '+') {
          result = parseFloat(firstValue) + parseFloat(secondValue);
        } else if (operation === '-') {
          result = parseFloat(secondValue) - parseFloat(firstValue);
        } else if (operation === 'x') {
          result = parseFloat(firstValue) * parseFloat(secondValue);
        } else if (operation === '/') {
          if (firstValue === '0') {
            Alert.alert("Can't be divisible");
          } else {
            result = parseFloat(secondValue) / parseFloat(firstValue);
          }
        }
        setSecondValue(result.toString());
        setOperation(number);
        setOperationCount(operationCount + 1);
        setFirstValue('0');
      } else {
        setSecondValue(firstValue);
        setOperation(number);
        setOperationCount(operationCount + 1);
        setFirstValue('0');
      }
    } else if (number === '=') {
      let result: number = 0;
      if (operation === '+') {
        result = parseFloat(firstValue) + parseFloat(secondValue);
      } else if (operation === '-') {
        result = parseFloat(secondValue) - parseFloat(firstValue);
      } else if (operation === 'x') {
        result = parseFloat(firstValue) * parseFloat(secondValue);
      } else if (operation === '/') {
        if (firstValue === '0') {
          Alert.alert("Can't be divisible");
        } else {
          result = parseFloat(secondValue) / parseFloat(firstValue);
        }
      }
      setTotalValue(result);
    } else if (number === 'AC') {
      setExpression('0');
      setFirstValue('0');
      setSecondValue('0');
      setOperation('');
      setTotalValue(0);
      setOperationCount(1);
    } else if (number === 'DEL') {
      if (expression.length <= 1) {
        setExpression('0');
      } else {
        setExpression(expression.slice(0, -1));
      }
      if (firstValue.length <= 1) {
        setFirstValue('0');
      } else {
        setFirstValue(firstValue.slice(0, -1));
      }
    } else if (number === '+/-') {
      setFirstValue((parseFloat(firstValue) * -1).toString());
    } else if (number === '%') {
      setExpression(expression + number);
      setFirstValue((parseFloat(firstValue) * 0.01).toString());
    } else if (number === '.') {
      setExpression(expression + number);
      if (firstValue === '0') {
        setFirstValue('0' + number);
      } else {
        setFirstValue(firstValue + number);
      }
    } else {
      if (expression === '0') {
        setExpression(expression.slice(0, -1) + number);
      } else {
        setExpression(expression + number);
      }
      if (firstValue === '0') {
        setFirstValue(firstValue.slice(0, -1) + number);
      } else {
        setFirstValue(firstValue + number);
      }
    }
  }
  // eslint-disable-next-line react/no-unstable-nested-components
  function Item(item: any, key: number) {
    return (
      <Pressable
        key={key}
        style={
          item.item === '='
            ? [styles.buttonContainer, {backgroundColor: '#f09a36'}]
            : styles.buttonContainer
        }
        onPress={() => {
          OperatorSetValue(item.item);
        }}>
        <Text
          style={[
            styles.textContainer,
            {color: colorTheme === 'light' ? '#454545' : '#FFFFFF'},
          ]}>
          {item.item}
        </Text>
      </Pressable>
    );
  }
  const colorTheme = useColorScheme();
  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar barStyle={'dark-content'} />
      <View
        style={[
          styles.textBoxContainer,
          {backgroundColor: colorTheme === 'light' ? '#f09a36' : '#9c6322'},
        ]}>
        <View style={styles.textBox2Container}>
          <Text style={styles.expressionTextContainer}>{expression}</Text>
          <Text style={styles.totalValueContainer}>{totalValue}</Text>
        </View>
      </View>
      <View
        style={[
          styles.operatorsContainer,
          {backgroundColor: colorTheme === 'light' ? '#FFFFFF' : '#472906'},
        ]}>
        {dummyData.map(item => {
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
  textBox2Container: {
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
    height: Dimensions.get('window').height / 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    borderWidth: 0.5,
    borderColor: '#D3D3D3',
  },
  textContainer: {
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '500',
  },
  expressionTextContainer: {
    textAlign: 'right',
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: 0,
    padding: 5,
    fontSize: 18,
    fontWeight: '500',
    color: '#ffffff',
  },
  totalValueContainer: {
    textAlign: 'right',
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: 25,
    padding: 5,
    fontSize: 18,
    fontWeight: '500',
    color: '#ffffff',
  },
});

export default App;

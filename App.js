import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
Icon.loadFont();

import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  const [switchTheme, setSwitchTheme] = useState(false);
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [operation, setOperation] = useState('');
  const [result, setResult] = useState(0);

  function insertValue(value) {
    if (operation) {
      setValue2(value2 + value);
    } else {
      setValue1(value1 + value);
    }
  }

  function handleOperation() {
    if (value1 && value2) {
      const num1 = Number(value1);
      const num2 = Number(value2);

      switch (operation) {
        case '-':
          setResult(num1 - num2);
          break;
        case '/':
          setResult(num1 / num2);
          break;
        case '+':
          setResult(num1 + num2);
          break;
        case '*':
          setResult(num1 * num2);
          break;
        default:
          setResult('');
          break;
      }
    }
  }

  function clearAll() {
    setValue1('');
    setValue2('');
    setOperation('');
    setResult(0);
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles(switchTheme).safeArea}>
        <View style={styles(switchTheme).container}>
          <View style={styles(switchTheme).toggle}>
            <Icon
              onPress={() => setSwitchTheme(!switchTheme)}
              name={switchTheme ? 'toggle-switch' : 'toggle-switch-off'}
              size={40}
              style={{ marginLeft: 10, position: 'absolute', zIndex: 10 }}
              color={!switchTheme ? '#F05570' : '#FFFFFF'}
            />
            <View style={styles(switchTheme).viewTextHeader}>
              <Text style={styles(switchTheme).textHeader}>
                Calculadora do Progarmadorzao
              </Text>
            </View>
          </View>
          <View style={styles(switchTheme).containerResult}>
            <View>
              <Text style={styles(switchTheme).resultValue}>{`${result}`}</Text>
            </View>
            <View>
              <Text
                style={
                  styles(switchTheme).resultSoma
                }>{`${value1} ${operation}  ${value2} `}</Text>
            </View>
          </View>
          <View style={styles(switchTheme).containerButtons}>
            <View style={styles(switchTheme).containerButtonsRow}>
              <TouchableOpacity
                onPress={() => clearAll()}
                style={styles(switchTheme).button}>
                <Text style={styles(switchTheme).anotherButton}>C</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles(switchTheme).button}>
                <Icon name="plus-minus" size={25} color="#F05570" />
              </TouchableOpacity>
              <TouchableOpacity style={styles(switchTheme).button}>
                <Icon name="percent" size={25} color="#F05570" />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles(switchTheme).button}
                onPress={() => setOperation('/')}>
                <Icon name="division" size={25} color="#F05570" />
              </TouchableOpacity>
            </View>
            <View style={styles(switchTheme).containerButtonsRow}>
              <TouchableOpacity
                onPress={() => {
                  insertValue(7);
                }}
                style={styles(switchTheme).button}>
                <Text style={styles(switchTheme).textNumberButton}>7</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  insertValue(8);
                }}
                style={styles(switchTheme).button}>
                <Text style={styles(switchTheme).textNumberButton}>8</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  insertValue(9);
                }}
                style={styles(switchTheme).button}>
                <Text style={styles(switchTheme).textNumberButton}>9</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setOperation('*');
                }}
                style={styles(switchTheme).button}>
                <Icon name="close" size={25} color="#F05570" />
              </TouchableOpacity>
            </View>

            <View style={styles(switchTheme).containerButtonsRow}>
              <TouchableOpacity
                onPress={() => {
                  insertValue(4);
                }}
                style={styles(switchTheme).button}>
                <Text style={styles(switchTheme).textNumberButton}>4</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  insertValue(5);
                }}
                style={styles(switchTheme).button}>
                <Text style={styles(switchTheme).textNumberButton}>5</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  insertValue(6);
                }}
                style={styles(switchTheme).button}>
                <Text style={styles(switchTheme).textNumberButton}>6</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setOperation('-');
                }}
                style={styles(switchTheme).button}>
                <Icon name="minus" size={25} color="#F05570" />
              </TouchableOpacity>
            </View>

            <View style={styles(switchTheme).containerButtonsRow}>
              <TouchableOpacity
                onPress={() => {
                  insertValue(1);
                }}
                style={styles(switchTheme).button}>
                <Text style={styles(switchTheme).textNumberButton}>1</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  insertValue(2);
                }}
                style={styles(switchTheme).button}>
                <Text style={styles(switchTheme).textNumberButton}>2</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  insertValue(3);
                }}
                style={styles(switchTheme).button}>
                <Text style={styles(switchTheme).textNumberButton}>3</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setOperation('+');
                }}
                style={styles(switchTheme).button}>
                <Icon name="plus" size={25} color="#F05570" />
              </TouchableOpacity>
            </View>

            <View style={styles(switchTheme).containerButtonsRow}>
              <TouchableOpacity
                onPress={() => {
                  //insertValue();
                }}
                style={styles(switchTheme).button}>
                <Text style={styles(switchTheme).textNumberButton}>O</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  insertValue('.');
                }}
                style={styles(switchTheme).button}>
                <Text style={styles(switchTheme).textNumberButton}>.</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  //insertValue();
                }}
                style={styles(switchTheme).button}>
                <Icon
                  name="backspace"
                  size={25}
                  color={!switchTheme ? '#000000' : '#FFFFFF'}
                />
              </TouchableOpacity>
              <View style={styles(switchTheme).button}>
                <TouchableOpacity
                  onPress={() => {
                    handleOperation();
                  }}
                  style={styles(switchTheme).buttonEqual}>
                  <Text style={styles(switchTheme).buttonEqualText}>=</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = (changeTheme) =>
  StyleSheet.create({
    safeArea: {
      backgroundColor: !changeTheme ? '#F7F7F7' : '#1A1A1A',
      flex: 1,
    },
    container: {
      backgroundColor: !changeTheme ? '#F7F7F7' : '#1A1A1A',
      flex: 1,
    },
    containerResult: {
      padding: 25,
      backgroundColor: !changeTheme ? 'white' : 'black',
      flex: 1,
      flexDirection: 'column-reverse',
      alignItems: 'flex-end',
    },
    containerButtons: {
      flex: 1.5,
      padding: 20,
    },
    button: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    containerButtonsRow: {
      flexDirection: 'row',
      flex: 1,
    },
    textNumberButton: {
      fontSize: 20,
      color: !changeTheme ? 'black' : 'white',
    },
    anotherButton: {
      fontSize: 20,
      color: '#F05570',
    },
    toggle: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 20,
      marginBottom: 10,
    },
    viewTextHeader: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    textHeader: {
      fontWeight: 'bold',
      color: !changeTheme ? 'black' : 'white',
    },
    buttonEqual: {
      width: 60,
      height: 60,
      borderRadius: 60 / 2,
      backgroundColor: '#F05570',
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonEqualText: {
      fontSize: 25,
      color: !changeTheme ? 'black' : 'white',
    },
    resultValue: {
      fontSize: 30,
      color: !changeTheme ? 'black' : 'white',
    },
    resultSoma: {
      fontSize: 22,
      color: !changeTheme ? 'black' : 'white',
    },
  });

export default App;

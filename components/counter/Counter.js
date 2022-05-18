import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from './counterSlice';

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  const onSetIncrement = () => setIncrementAmount(prevCount => prevCount + 1);

  const onPress = () => dispatch(increment());
  const onOdd = () => dispatch(incrementIfOdd(incrementValue));

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.countContainer}>
          <Text>Count: {count}</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text>redux increment</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <View style={styles.countContainer}>
          <Text>Count: {count}</Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={onOdd}>
          <Text>redux on odd</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <View style={styles.countContainer}>
          <Text>Count: {incrementValue}</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={onSetIncrement}>
          <Text>component state</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
});

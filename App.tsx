import { useState } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';


export default function App() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const pressButton = (value: string) => {
    setInput(input + value);
  };

  const calculate = () => {
    if(/^[*/]|[*/+-]$/.test(input)) return;
    if(input === '.') return;
    setOutput(eval(input));
  };

  const removeElt = () => {
    setInput(input.substring(0, input.length - 1));
  };

  const resetCalc = () => {
    setInput('');
    setOutput('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerBefore} />
      <View style={styles.containerHeader}>
        <View style={styles.containerHeaderBefore} />
        <View style={styles.containerResultat}>
          <View style={styles.contentResultat}>
            <Text 
              style={[styles.containerResultatText, {color: '#191c3b'}]}>{!input ? 0 : input}</Text>
            <Text 
              style={[styles.containerResultatText, {color: '#ff725e'}]}>{!output ? 0 : output}</Text>
          </View>
        </View>
      </View>
      <View style={styles.containerSection}>
        <View style={styles.containerSectionBefore} />
        <View style={styles.containerSectionButton}>
          <View style={styles.containerButton}>
            <TouchableOpacity style={styles.button} onPress={() => pressButton('7')}>
              <Text style={styles.textButton}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => pressButton('8')}>
              <Text style={styles.textButton}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => pressButton('9')}>
              <Text style={styles.textButton}>9</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => pressButton('/')}>
              <Text style={styles.textButton}>/</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.containerButton}>
            <TouchableOpacity style={styles.button} onPress={() => pressButton('4')}>
              <Text style={styles.textButton}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => pressButton('5')}>
              <Text style={styles.textButton}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => pressButton('6')}>
              <Text style={styles.textButton}>6</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => pressButton('*')}>
              <Text style={styles.textButton}>*</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.containerButton}>
            <TouchableOpacity style={styles.button} onPress={() => pressButton('1')}>
              <Text style={styles.textButton}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => pressButton('2')}>
              <Text style={styles.textButton}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => pressButton('3')}>
              <Text style={styles.textButton}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => pressButton('-')}>
              <Text style={styles.textButton}>-</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.containerButton}>
            <TouchableOpacity style={styles.button} onPress={() => pressButton('0')}>
              <Text style={styles.textButton}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => pressButton('.')}>
              <Text style={styles.textButton}>.</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => calculate()}>
              <Text style={styles.textButton}>=</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => pressButton('+')}>
              <Text style={styles.textButton}>+</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.containerButton}>
            <TouchableOpacity style={styles.button} onPress={() => resetCalc()}>
                <Text style={styles.textButton}>C</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => removeElt()}>
              <Image source={require('./assets/images/backspace-fill.png')}></Image>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}


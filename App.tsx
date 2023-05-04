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

  const ligne1: string[] = ["7", "8", "9", "/"],
    ligne2: string[] = ["4", "5", "6", "*"],
    ligne3: string[] = ["1", "2", "3", "-"];

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
            { ligne1.map((value: string) => (
                <TouchableOpacity style={styles.button} onPress={() => pressButton(value)}>
                  <Text style={styles.textButton}>{value}</Text>
                </TouchableOpacity>
              )
            ) }
          </View>

          <View style={styles.containerButton}>
            { ligne2.map((value: string) => (
                <TouchableOpacity style={styles.button} onPress={() => pressButton(value)}>
                  <Text style={styles.textButton}>{value}</Text>
                </TouchableOpacity>
              )
            ) }
          </View>

          <View style={styles.containerButton}>
            { ligne3.map((value: string) => (
                  <TouchableOpacity style={styles.button} onPress={() => pressButton(value)}>
                    <Text style={styles.textButton}>{value}</Text>
                  </TouchableOpacity>
                )
              ) }
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


import React,{Component} from 'react'
import { View, StyleSheet,Text } from 'react-native'
import { Button } from 'react-native-elements';
import BluetoothSerial from 'react-native-bluetooth-serial'

export default class App extends Component {
  componentWillMount() {
    Promise.all([BluetoothSerial.isEnabled(), BluetoothSerial.list()]).then(
        values => {
          const [isEnabled, devices] = values;
          console.log('[isEnabled, devices',isEnabled, devices)
        }
    );

    BluetoothSerial.on("bluetoothEnabled", () =>
        console.log("Bluetooth enabled")
    );

    BluetoothSerial.on("bluetoothDisabled", () =>
        console.log("Bluetooth disabled")
    );

    BluetoothSerial.on("error", err => {
      console.log("error", err);
    });


  }

  render() {
    return (
        <View style={styles.container}>
          <Text>some tedxdd33dt</Text>
          <Button style={styles.button}
                  title="send"
                  type="solid"/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 200,
    height: 200,
    backgroundColor: 'skyblue',
    borderWidth: 2,
    borderColor: 'steelblue',
    borderRadius: 20,
  },
  button: {
    width: 200,
    height: 200,
    backgroundColor: 'red',
    color:'green',
    borderWidth: 2,
    borderColor: 'steelblue',
    borderRadius: 20,
  },
});

import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

class CounterApp extends React.Component {
  constructor (props) {
    super ();
    this.state = {
      conuter: 0,
    };
  }

  TambahAngka = () => {
    return this.setState ({conuter: this.state.conuter + 1});
  };
  KurangAngka = () => {
    return this.setState ({conuter: this.state.conuter - 1});
  };

  render () {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View
          style={{
            flexDirection: 'row',
            width: 200,
            justifyContent: 'space-around',
          }}
        >
          <TouchableOpacity onPress={() => this.TambahAngka ()}>
            <Text style={{fontSize: 20}}> Tambah </Text>
          </TouchableOpacity>
          <Text style={{fontSize: 25}}>{this.state.conuter}</Text>
          <TouchableOpacity onPress={() => this.KurangAngka ()}>
            <Text style={{fontSize: 20}}> Berkurang </Text>
          </TouchableOpacity>

        </View>
      </View>
    );
  }
}

export default CounterApp;

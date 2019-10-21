

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import { connect} from 'react-redux'


class CounterApp extends React.Component{


  render(){
    return(
          <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
            <View style={{flexDirection:'row', width: 200, justifyContent:'space-around'}}>
            <TouchableOpacity onPress={() => this.props.TambahAngka()}>
              <Text style ={{ fontSize: 20}}> Tambah </Text>
            </TouchableOpacity>
            <Text  style ={{ fontSize: 25}}>{this.props.Nilai}</Text>
              <TouchableOpacity onPress={() => this.props.KurangAngka()}>
              <Text style ={{ fontSize: 20}}> Berkurang </Text>
            </TouchableOpacity>

            </View>
          </View>
      )
    }
  }

  function mapStateToProps(state){
    return{
      Nilai:state.Nilai
    }
  }

  function mapDispatchToProps(dispatch){
    return{
      TambahAngka : () => dispatch({
        type:'TAMBAHANGKA'
      }),
      KurangAngka : () => dispatch({
        type:'KURANGANGKA'
      }),
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(CounterApp)


import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import CounterApp from './src/counter/Counterapp'
import {createStore} from 'redux'
import { Provider } from 'react-redux'

const nilaiAwal = {
  Nilai : 0
}

const reducer = ( state = nilaiAwal, action) => {
      switch(action.type){
        case  'TAMBAHANGKA':
        return {Nilai : state.Nilai + 1}
        case 'KURANGANGKA' : 
        return{Nilai : state.Nilai - 1}
        
      }
      return state
}

const store = createStore(reducer) //
// Note :
// Store
// - Diambil dari halaman page ini terdapat fungsi-fungsi dari store, setelah terdapat action dan reducer. Di komponen ini yang terjadi adalah:
// - Menyimpan state aplikasi;
// - Mendapatkan akses ke dalam state, menggunakan getState();
// - Dapat melakukan perubahan state menggunakan dispatch();
// - Mendapatkan listener menggunakan subscribe(listener);
// - Menangani listener yang belum teregistrasi dari balikan nilai darisubscribe(listener)

class App extends React.Component{

  render(){
    return(
        <Provider store={store}>
         <CounterApp/>
        </Provider>
      )
    }
  }


  export default App


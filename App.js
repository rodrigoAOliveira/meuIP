import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import logo from './assets/meuip.png'



export default class App extends React.Component {
  constructor(props) {
    super(props)
    
  
    this.state = {
      data: ''
    }
  }
    findMyIp = async () => {
    this.setState({
      data: 'Descobrindo IP...'
    })

    const ip = await fetch('http://meuip.com/api/meuip.php');
    const data = await ip._bodyText;
    console.log(data);
    this.setState({
      data:data
      
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.body}>
          <Image source={logo} />

          <Text style={styles.ip}>{this.state.data}</Text>
          <Button title='Descobrir meu IP!'
            onPress={this.findMyIp}
          />
        </View>

        <View style={styles.footer}>
          <Text style={styles.made}>Feito por Rodrigo</Text>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2f2336',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'


  },
  ip: {
    color: 'white',
    paddingTop: 20,
    paddingBottom: 20,
  },
  footer: {
    paddingTop: 10,
    paddingBottom: 10
  },
  made: {
    color: 'white',
    textAlign: 'center'
  }
});

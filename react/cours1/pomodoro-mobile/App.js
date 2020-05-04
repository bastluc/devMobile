import React from 'react';
import Constants from 'expo-constants'
import moment from "moment"
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      time : moment(0),
      title: "Arrêté",
      buttonText: "Lancer",
      buttonFunction : this.work,
      interval : null,
      countColor: "black",
      titleBackground: "white"
    }
  }

  work = () => {
    this.setState(
      {
        title: "Travail",
        buttonText: "Pause",
        buttonFunction: this.pause,
        time: moment(0).add(45, 'm'),
        countColor: "black",
        titleBackground: "#C62828",
        interval: setInterval(
          () => {
            this.setState({time: this.state.time.subtract(1, "s")});

            if(this.state.time.diff(moment(0), "seconds") <= 20){
              this.setState({countColor: "#C62828"});
            }
    
            if(this.state.time.diff(moment(0), "seconds") === 0){
              clearInterval(this.state.interval);
              this.break();
            }
          },
          1000
        )
      }
    )
  }

  break = () => {
    this.setState(
      {
        title: "Prenez une pause",
        buttonText: "Pause",
        buttonFunction: this.pause,
        time: moment(0).add(5, "m"),
        countColor: "black",
        titleBackground: "green",
        interval: setInterval(
          () => {
            this.setState({time: this.state.time.subtract(1, "s")});

            if(this.state.time.diff(moment(0), "seconds") <= 20){
              this.setState({countColor: "#C62828"});
            }
    
            if(this.state.time.diff(moment(0), "seconds") === 0){
              clearInterval(this.state.interval);
              this.work();
            }
          },
          1000
        )
      }
    )
  }

  pause = () => {
    this.setState({
      buttonText: "Reprendre",
      buttonFunction: () => {this.continue()}
    });
    clearInterval(this.state.interval);
  }

  continue = () => {
    this.setState({
      interval: setInterval(
        () => {
          this.setState({time: this.state.time.subtract(1, "s")});

          if(this.state.time.diff(moment(0), "seconds") <= 20){
            this.setState({countColor: "#C62828"});
          }
  
          if(this.state.time.diff(moment(0), "seconds") === 0){
            clearInterval(this.state.interval);
            this.work();
          }
        },
        1000
      ),
      buttonText: "Pause",
      buttonFunction: () => {this.pause()}
    });
  }

  stop = () => {
    this.setState({
      title: "Arrêté",
      time: moment(0),
      buttonText: "Lancer",
      buttonFunction: this.work,
      countColor: "black",
      titleBackground: "white"
    })
    clearInterval(this.state.interval);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.titleContainer, {backgroundColor: this.state.titleBackground}]}>
          <Text style={styles.countTitle}>{this.state.title}</Text>
        </View>
        <View style={styles.countContainer}>
          <Text style={[styles.count, {color: this.state.countColor}]}>{ this.state.time.format("m:ss") }</Text>
          <TouchableOpacity style={styles.button} onPress={this.state.buttonFunction}>
            <Text style={{color: "white", fontSize: 20}}>{this.state.buttonText}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.resetButton} onPress={() => {this.stop()}}>
            <Text style={{color: "white", fontSize: 20}}>Reset</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: "#C62828",
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50
  },
  resetButton: {
    backgroundColor: "#2A2A2A",
    marginTop: 20,
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50
  },
  titleContainer: {
    flex: 0.2,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center"
  },
  countContainer: {
    alignSelf: "stretch",
    flex: 0.8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ECEFF1"
  },
  countTitle: {
    fontSize: 40,
    marginTop: 30,
    fontWeight: "bold"
  },
  count: {
    fontSize: 100,
    marginBottom: 40
  }
});

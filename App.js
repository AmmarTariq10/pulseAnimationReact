import React, {Component} from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Animated, Easing} from 'react-native';

export default class App extends Component {
	UNSAFE_componentWillMount(){
	
this.animatedValue = new Animated.Value(300)
	}

_startAnimation(){
	   var ops = this.animatedValue/1000
	    var opsF = ops.toString()
			Animated.timing(this.animatedValue,{
				toValue:400,
				duration:3000
			}).start()
			animatedValue.setValue(300)
			console.log('function called')
}

render(){

		const animatedStyle = {
			width: this.animatedValue ? this.animatedValue : 300,
			height: this.animatedValue ? this.animatedValue : 300,
			borderRadius: this.animatedValue ? this.animatedValue : 300
		}

		return(
			<View style={styles.btnContainer}>
		
                <TouchableOpacity onPress={this._startAnimation()}>
                	<Animated.View style={[styles.redbox,animatedStyle]}>
                		<Image source={require('./imgs/sos-btn.png')} style={styles.sostxt}></Image>
                	</Animated.View>
                </TouchableOpacity>
             </View>
		)
	}
}

const styles = StyleSheet.create({

	container:{
		flex:1,
		alignContent: 'center',
		justifyContent:'center',
		alignItems: 'center',
	},
	btnContainer:{
		flex:1,
		alignContent: 'center',
		justifyContent:'center',
		alignItems: 'center',
	},
	smBox:{
		flex:1,
	  	backgroundColor: 'rgb(223, 30, 54)',
	},
	redbox:{
   		width: 200,
		height: 200,
		borderRadius: 200,
		justifyContent: 'center',
		alignItems: 'center',
		  opacity:1,
		  backgroundColor: 'rgb(223, 30, 54)',
		  borderColor: 'rgba(223, 30, 54,0.4)' ,
	  },

})
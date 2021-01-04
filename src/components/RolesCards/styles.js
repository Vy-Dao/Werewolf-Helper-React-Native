import {StyleSheet, Dimensions} from 'react-native';

const { height } = Dimensions.get('window');
const imageHeight = height * (40/100);
const styles = StyleSheet.create({
    container:{
        width:200,
        justifyContent:"center",
        alignItems:"center",
    },
    image:{
        width:"100%",
        height:200,
        resizeMode:'contain',
        aspectRatio: 3/4,
    },
    text:{
        fontSize:15,
    },
});

export default styles;


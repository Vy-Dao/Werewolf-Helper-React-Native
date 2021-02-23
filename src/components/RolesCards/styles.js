import {StyleSheet, Dimensions} from 'react-native';

const { height } = Dimensions.get('window');
const imageHeight = height * (40/100);
const styles = StyleSheet.create({
    container:{
        width:220,
        marginLeft:10,
    },
    image:{
        width:"100%",
        height:300,
        resizeMode:'contain',
        aspectRatio: 3/4,
    },

});

export default styles;


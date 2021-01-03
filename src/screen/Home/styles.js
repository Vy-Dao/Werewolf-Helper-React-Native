import {StyleSheet, Dimensions} from "react-native";

const entireScreenWidth = Dimensions.get('window').width;
const entireScreenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    topContainer:{
       backgroundColor:"blue",
        width:"100%",
        height:"100%",
    },
    videobg:{
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    bottomContainer:{
        backgroundColor:"#FFFFFF",
        borderTopRightRadius:35,
        borderTopLeftRadius:35,
        width:"100%",
        height:"35%",
        position: 'absolute', 
        bottom: 0, 
    },
    welcomeTitle:{
        marginLeft:20,
        marginTop:30,
        fontWeight:"bold",
        width:"55%",
        fontSize:30,
    },

    swiperContainer:{
        marginTop:"1%",
        marginHorizontal:20,    
    },

    swiperText:{
        fontSize: 18, 
    },
    button:{
        position:"absolute",
        bottom:35,
        right:29,
    },

    gradient: {
        width:70,
        height:70,
        borderRadius:35,
        justifyContent:"center",
        alignItems:"center",
      }
});

export default styles;
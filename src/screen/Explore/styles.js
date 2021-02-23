import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#F9FAFF",
        width:"100%",
        height:"100%",
    },
    viewContainer:{
        justifyContent:'center',
        alignContent:'center'
    },
    tabTitle:{
        marginLeft:20,
        marginTop:10,
        fontSize:35,
        fontWeight:"bold",
    },
    title:{
        marginLeft:20,
        marginTop:20,
        fontSize:25,
        fontWeight:"bold",
    },
    searchButton:{
        flexDirection:'row',
        backgroundColor:'#FFFDFF',
        width:300,
        height:50,
        borderRadius:20 ,
        marginTop:10,
        justifyContent:'center',
        alignItems:'center',
    },
    searchButtonText:{
        color:"#B5B4B5",
    },
});

export default styles;
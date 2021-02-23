import {StyleSheet} from 'react-native'
const styles = StyleSheet.create({
    container:{
        marginLeft:10,
    },
    textInput:{
        marginTop:20,
        fontSize:25,
        marginBottom:20,
    },
    row:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderColor: '#d3d3d3'
    },
    smallIcon:{
        borderRadius:10,
        width: 100,
        height:100,
        resizeMode:'contain',
        aspectRatio: 1,
    },
    roleText:{
        fontSize:20,
    }
})
export default styles;
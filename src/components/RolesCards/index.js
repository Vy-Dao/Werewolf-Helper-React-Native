import React from 'react';
import { View, Image, Text, Pressable} from 'react-native';
import styles from './styles';
    
const RolesCards = (props) =>{
    const indivCard = props.indivCard;
    return(
        <View style={styles.container}>
            <Pressable
             onPress={() => console.warn(indivCard.role)}>
            {/*Image*/}
            <Image style={styles.image}
            source={{uri: indivCard.image}}
            />
            </Pressable>
        </View>
    );
}

export default RolesCards;


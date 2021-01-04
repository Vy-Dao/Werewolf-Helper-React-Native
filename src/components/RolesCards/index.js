import React from 'react';
import { View, Image, Text} from 'react-native';
import styles from './styles';
    
const RolesCards = (props) =>{
    const indivCard = props.indivCard;
    return(
        <View style={styles.container}>
            {/*Image*/}
            <Image style={styles.image}
            source={{uri: indivCard.image}}
            />
            {/*Name*/}
            <Text style={styles.text}>{indivCard.role}</Text>
        </View>
    );
}

export default RolesCards;


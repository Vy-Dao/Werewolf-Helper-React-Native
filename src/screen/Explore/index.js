import React from 'react';
import {
    View,
    Text,
    FlatList
} from 'react-native';
import styles from './styles';

//Import Data
import feed from '../../../assets/data/feed';
import RolesCards from '../../components/RolesCards/index';

const ExplorePage = (props) => {    
    const villageTeam = feed.filter((item) =>{
        return item.team === "Village Team"
    });
    
    const werewolfteam = feed.filter((item) =>{
        return item.team === "Werewolf Team"
    });

    const specialteam = feed.filter((item) =>{
        return item.team === "Special Team"
    });

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Search</Text>
            <View>
            <Text>Village Team</Text>
            <FlatList
                data = {villageTeam}
                renderItem = {({ item }) => <RolesCards indivCard={item} />}
                keyExtractor={(item) => item.role}
                horizontal
            /> 
             <Text>Werewolf Team</Text>
            <FlatList
                data = {werewolfteam}
                renderItem = {({ item }) => <RolesCards indivCard={item} />}
                keyExtractor={(item) => item.role}
                horizontal
            /> 
             <Text>Village Team</Text>
            <FlatList
                data = {specialteam}
                renderItem = {({ item }) => <RolesCards indivCard={item} />}
                keyExtractor={(item) => item.role}
                horizontal
            /> 
            </View>
        </View>
    );
};

export default ExplorePage;
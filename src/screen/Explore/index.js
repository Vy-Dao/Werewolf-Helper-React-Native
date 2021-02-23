import React from 'react';
import {
    View,
    Text,
    FlatList,
    Pressable,
    ScrollView
} from 'react-native';
import styles from './styles';
import Fontisto from "react-native-vector-icons/Fontisto"
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
        <ScrollView style={styles.container}>
           <View styles={styles.viewContainer}>
               <Text style={styles.tabTitle}>Explore</Text>
                <Text style={styles.title}>Village Team</Text>
                <View style={styles.flatlist}>
                    <FlatList
                        data = {villageTeam}
                        renderItem = {({ item }) => <RolesCards indivCard={item} />}
                        keyExtractor={(item) => item.role}
                        horizontal
                    /> 
                </View>
                <Text style={styles.title}>Werewolf Team</Text>
                <View style={styles.flatlist}>
                    <FlatList
                        data = {werewolfteam}
                        renderItem = {({ item }) => <RolesCards indivCard={item} />}
                        keyExtractor={(item) => item.role}
                        horizontal
                    /> 
                </View>
                <Text style={styles.title}>Special Team</Text>
                <View style={styles.flatlist}>
                    <FlatList
                        data = {specialteam}
                        renderItem = {({ item }) => <RolesCards indivCard={item} />}
                        keyExtractor={(item) => item.role}
                        horizontal
                    /> 
                </View>
           </View>
        </ScrollView>
    );
};

export default ExplorePage;
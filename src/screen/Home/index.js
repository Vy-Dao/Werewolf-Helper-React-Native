import React from 'react';
import {
    View,
    Text,
    Pressable,
    ImageBackground,
} from 'react-native';
import Swiper from 'react-native-swiper';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import Video from 'react-native-video';
const HomeScreen = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
            <Video
                style={styles.videobg}
                muted={true}
                repeat={true}
                resizeMode={"cover"}
                rate={1.0}
                ignoreSilentSwitch={"obey"}
                source={require('../../../assets/images/bg.mp4')}
            />
            </View>
            <View style={styles.bottomContainer}>
                <Text style={styles.welcomeTitle}>Welcome to Werewolf Helper</Text>
                <Swiper
                    loop={false}
                >
                    <View style={styles.swiperContainer}>
                        <Text style={styles.swiperText}>This application will help you generate player roles base on the number of player and exploree how each roles work in this game.</Text>
                    </View>
                    <View style={styles.swiperContainer}>
                        <Text style={styles.swiperText}>You can save the custom card sets into your profile, and customize the at anytime.</Text>
                    </View>
                </Swiper>

                <Pressable style={styles.button}
                    onPress={() => console.warn('Button is clicked')}>
                    <LinearGradient colors={['#0F47F2', '#417CF2']} style={styles.gradient}>
                        <AntDesign name="arrowright" size={30} color="white" />
                    </LinearGradient>
                </Pressable>
            </View>

        </View>
    );
};

export default HomeScreen;
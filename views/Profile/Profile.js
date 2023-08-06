import { View, Text, Image, SafeAreaView, TouchableOpacity, StyleSheet, Dimensions, Alert, ScrollView } from 'react-native';
import { COLORS, SHADOWS, SIZES, IMAGES, FONT, ICONS } from '../../constants';
import styles from './profile.style';

const Profile = ({ navigation }) => {

  return (
    <SafeAreaView style={styles.container} alignItems={"center"}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: "center" }} overScrollMode={Platform.OS === 'android' ? "never" : "auto"}>
        <View style={styles.textContainer}>
          <Text style={styles.textHeading}>Hey, Hello I am profile Screen </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

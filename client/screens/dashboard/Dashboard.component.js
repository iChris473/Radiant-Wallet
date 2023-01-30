import { View, Text, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import AltIcon from "../../svgs/AltIcon";
import UserCircleIcon from '../../svgs/UserCircleIcon';
import styles from './dashboard.style';
import RecentsComponent from './Recents.component';
import ServicesComponent from './Services.component';
import WalletCardComponent from './WalletCard.component';

export default function DashboardComponent({navigation, showSide, setShowSide, setShowPhrase}) {

    return (
        <View style={styles.container}>
            {showSide && <TouchableOpacity onPress={() => setShowSide(false)} style={styles.pressable} />}
            {/* MEBU BARS */}
            {/* <View style={styles.topBar}>
                <TouchableOpacity onPress={() => setShowSide(!showSide)}><AltIcon /></TouchableOpacity>
                <UserCircleIcon color="#4A414C" />
            </View> */}
            {/* MAIN CARD */}
            <View style={styles.topCurve} />
            <View style={styles.mainCard}>
                <View style={styles.cardIcons}>
                    <Text style={styles.welcome}>Welcome</Text>
                    <TouchableOpacity onPress={() => setShowPhrase(true)}>
                        <UserCircleIcon />
                    </TouchableOpacity>
                </View>
                {/* SUB CARD */}
                <WalletCardComponent navigation={navigation} />
                {/* SERVICES */}
                <ServicesComponent navigation={navigation} />
            </View>
            {/* RECENT ACTIVITY */}
            <RecentsComponent navigation={navigation} />
        </View>
    )
}




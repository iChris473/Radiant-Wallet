import { useIsFocused } from '@react-navigation/native';
import { useCallback, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, RefreshControl } from 'react-native';
import { request } from '../../axios';
import UserCircleIcon from '../../svgs/UserCircleIcon';
import styles from './dashboard.style';
import RecentsComponent from './Recents.component';
import ServicesComponent from './Services.component';
import WalletCardComponent from './WalletCard.component';

export default function DashboardComponent({navigation, setShowPhrase, setIsLoading}) {

    const [wallet, setWallet] = useState({});

    const isFocused = useIsFocused();

    const createWalletFunction = async () => {

        try {
        
            const res = await request.get('/wallet');
        
            setWallet(res?.data);
        
            setIsLoading(false);
        
        } catch (error) {
        
            setIsLoading(false);
        
        }

    }
    useEffect(() => {
        
        isFocused && createWalletFunction();

    }, [isFocused]);

    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(async () => {

        setRefreshing(true);

        await createWalletFunction();
        
        setRefreshing(false);
        
      }, []);

    return (
        <ScrollView
            refreshControl={
                <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
                colors={['#603F93']}
                tintColor="#603F93"
                />
            }
        >
            <View style={styles.container}>
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
                    <WalletCardComponent wallet={wallet} navigation={navigation} />
                    {/* SERVICES */}
                    <ServicesComponent navigation={navigation} />
                </View>
                {/* RECENT ACTIVITY */}
                <RecentsComponent wallet={wallet} navigation={navigation} />
            </View>
        </ScrollView>
    )
}




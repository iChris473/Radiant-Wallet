
import { View, Text, ScrollView, Image } from 'react-native';
import React from 'react';
import styles from "./sidebar.style";
import PencilIcon from '../../svgs/PencilIcon';
import SettingsIcon from '../../svgs/SettingsIcon';
import HistoryIcon from '../../svgs/HistoryIcon';
import UserIcon from '../../svgs/UserIcon';
import WalletIcon from '../../svgs/WalletIcon';

export default function Sidebar() {
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* PROFILE ICON */}
                <View>
                    <View style={styles.profileCont}>
                        <View style={styles.blueEllipes1} />
                        <View style={styles.pinkEllipes1} />
                        <View style={styles.purpleEllipse} />
                        <View style={styles.pinkLine1} />
                        <View style={styles.pinkLine2} />
                        <View style={styles.profileImgCont}>
                            <Image
                                resizeMode="contain"
                                style={styles.profileImg}
                                source={require("../../assets/userPic.png")}
                            />
                        </View>
                        <View style={styles.pencil}>
                            <PencilIcon color={"#23BF22"} />
                        </View>
                    </View>
                    <Text style={styles.fullName}>Chris Ndubuisi </Text>
                    <Text style={styles.email}>christianjoseph473@gmail.com</Text>
                </View>
                {/* OPTIONS */}
                <View style={{marginTop: 20}}>
                    {/* CREATE PIN */}
                    <View style={styles.optionsCont}>
                        <View style={{...styles.iconCont, backgroundColor: "#E7FCF5"}}>
                            <Image
                                resizeMode="contain"
                                style={styles.icons}
                                source={require("../../assets/lock.png")}
                            /> 
                        </View>
                        <Text style={styles.optionText}>Create Pin</Text>
                    </View>
                    {/* SETTINGS */}
                    <View style={styles.optionsCont}>
                        <View style={{...styles.iconCont, backgroundColor: "#FBE7FC"}}>
                            <SettingsIcon color={"#6843A1"} width={25} />
                        </View>
                        <Text style={styles.optionText}>Settings</Text>
                    </View>
                    {/* TRANSACTION HISTORY */}
                    <View style={styles.optionsCont}>
                        <View style={{...styles.iconCont, backgroundColor: "#E7E8FC"}}>
                            <HistoryIcon color={"#6843A1"} width={25} />
                        </View>
                        <Text style={styles.optionText}>Transaction History</Text>
                    </View>
                    {/* SUPPORT */}
                    <View style={styles.optionsCont}>
                        <View style={{...styles.iconCont, backgroundColor: "#FAE7FC"}}>
                            <UserIcon color={"#6843A1"} width={20} />
                        </View>
                        <Text style={styles.optionText}>Support</Text>
                    </View>
                    {/* FUND WALLET */}
                    <View style={styles.optionsCont}>
                        <View style={{...styles.iconCont, backgroundColor: "#E8FFEA"}}>
                            <WalletIcon color={"#6843A1"} width={23} />
                        </View>
                        <Text style={styles.optionText}>Fund Wallet</Text>
                    </View>
                    {/* REFERRALS */}
                    <View style={styles.optionsCont}>
                        <View style={{...styles.iconCont, backgroundColor: "#FCFBDD"}}>
                            <Image
                                resizeMode="contain"
                                style={{width: 25}}
                                source={require("../../assets/refIcon.png")}
                            /> 
                        </View>
                        <Text style={styles.optionText}>Referrals</Text>
                    </View>
                </View>
                {/* LOGOUT */}
                <View style={styles.termCont}>
                    <Text style={styles.terms}>Terms and Conditions</Text>
                    <Text style={styles.logout}>Logout</Text>
                </View>
            </ScrollView>
        </View>
    )
}


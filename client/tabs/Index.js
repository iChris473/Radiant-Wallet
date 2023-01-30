
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Dashboard from "../screens/dashboard/Dashboard";
import styles from "./tab.styles";
import HomeIcon from "../svgs/HomeIcon";
import UserIcon from '../svgs/UserIcon';
import SettingsIcon from '../svgs/SettingsIcon';
import WalletIcon from '../svgs/WalletIcon';

const Tab = createBottomTabNavigator()

export default function Tabs() {

    return (

        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarStyle: styles.tabBarStyle
            }}
        >
            {/* HOME TAB */}
             <Tab.Screen
                name="DashboardTab"
                component={Dashboard}
                options={{
                    tabBarIcon: ({ focused }) => <HomeIcon color={focused ? "#603F93" : "#A7A7A7"} />,
                  }}
            />
            {/* PROFILE TAB */}
             <Tab.Screen
                name="ProfileTab"
                component={Dashboard}
                options={{
                    tabBarIcon: ({ focused }) => <UserIcon color={focused ? "#603F93" : "#A7A7A7"} />,
                  }}
            />
            {/* SETTINGS TAB */}
             <Tab.Screen
                name="SettingsTab"
                component={Dashboard}
                options={{
                    tabBarIcon: ({ focused }) => <SettingsIcon color={focused ? "#603F93" : "#A7A7A7"} />,
                  }}
            />
             {/* WALLET TAB */}
             <Tab.Screen
                name="WalletTab"
                component={Dashboard}
                options={{
                    tabBarIcon: ({ focused }) => <WalletIcon color={focused ? "#603F93" : "#A7A7A7"} />,
                  }}
            />
        </Tab.Navigator>

    )

}
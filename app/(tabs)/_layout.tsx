import { FontAwesome } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";

export default () => {
    return(
        <Tabs screenOptions={{tabBarActiveTintColor: 'green', tabBarInactiveBackgroundColor: 'orange',  tabBarActiveBackgroundColor: 'orange'}}>
            <Tabs.Screen 
                name="home" 
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
            }} />
            <Tabs.Screen 
                name="list"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
            }} />
        </Tabs>
    )
}
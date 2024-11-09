import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { PieChart, Briefcase, Box, MessageSquare, Menu } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/core';

export default function Footer({ activeTab, onTabPress }) {
    const navigation = useNavigation()
 const tabs = [
    { name: 'Overview', icon: PieChart },
    { name: 'WorkOrders', icon: Briefcase },
    { name: 'Assets', icon: Box },
    // { name: 'Messages', icon: MessageSquare },
    { name: 'More', icon: Menu },
  ];
  const handleNavigate = (tab) =>{
    onTabPress(tab)
    navigation.navigate(tab)
  }
  return (

    <View style={styles.footer}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab.name}
          style={styles.footerItem}
          onPress={() => handleNavigate(tab.name)}
        >
          <tab.icon
            size={24}
            color={activeTab === tab.name ? '#2196F3' : '#757575'}
          />
          <Text
            style={[
              styles.footerText,
              activeTab === tab.name && styles.footerActiveText,
            ]}
          >
            {tab.name === 'WorkOrders' ? 'Work Orders' : tab.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    // position:'absolute',
    // bottom:0
  },
  footerItem: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 4,
  },
  footerText: {
    fontSize: 12,
    color: '#757575',
    marginTop: 4,
  },
  footerActiveText: {
    color: '#2196F3',
    fontWeight: 'bold',
  },
});
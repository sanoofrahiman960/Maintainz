import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  TextInput,
} from 'react-native';
import { Filter, MapPin, Plus, Scan } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/core';
import Footer from './FooterPage';

export default function LocationsScreen() {
    const navigation = useNavigation()
    const [activeTab, setActiveTab] = useState('Assets');
  const [activeTabs, setActiveTabs] = useState('locations');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Locations</Text>
        <View style={styles.headerActions}>
          <TouchableOpacity style={styles.headerButton}>
            <Filter size={20} color="#FFFFFF" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerButton}>
            <Scan size={20} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.tabs}>
        <TouchableOpacity onPress={()=>setActiveTabs('assets')} 
         style={[styles.tab, activeTabs === 'assets' && styles.activeTab]}>
        
          <Text style={styles.tabText}>ASSETS</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>setActiveTabs('locations')} 
         style={[styles.tab, activeTabs === 'locations' && styles.activeTab]}>
          <Text style={[styles.tabText, styles.activeTabText]}>LOCATIONS</Text>
        </TouchableOpacity>
      </View>
    {activeTabs == 'locations'?
     <>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search"
          style={styles.searchInput}
          placeholderTextColor="#999"
        />
      </View>

      <View style={styles.locationList}>
        {['General', 'Kuwait'].map((location, index) => (
          <TouchableOpacity key={index} style={styles.locationItem}>
            <View style={styles.locationIcon}>
              <MapPin size={24} color="#2196F3" />
            </View>
            <Text style={styles.locationText}>{location}</Text>
            <View style={styles.chevron} />
          </TouchableOpacity>
        ))}
      </View>
     </>
:null}

      <TouchableOpacity onPress={()=>navigation.navigate('OnBoard')} style={styles.floatingButton}>
        <Plus size={24} color="#FFFFFF" />
        <Text style={styles.floatingButtonText}>New Location</Text>
      </TouchableOpacity>
      <View style={styles.footer}>
      <Footer
        // style={styles.footer}
        activeTab={activeTab}
        onTabPress={(tab) => setActiveTab(tab)}
      />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#2196F3',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  headerActions: {
    flexDirection: 'row',
    gap: 16,
  },
  headerButton: {
    padding: 4,
  },
  footer: {
    position:'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  tabs: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
  },
  tab: {
    flex: 1,
    paddingVertical: 16,
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#2196F3',
  },
  tabText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#757575',
  },
  activeTabText: {
    color: '#2196F3',
  },
  searchContainer: {
    padding: 16,
  },
  searchInput: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  locationList: {
    padding: 16,
    gap: 16,
  },
  locationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 12,
    borderRadius: 8,
  },
  locationIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#F0F9FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  locationText: {
    fontSize: 16,
    color: '#333333',
    flex: 1,
  },
  chevron: {
    width: 8,
    height: 8,
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderColor: '#757575',
    transform: [{ rotate: '45deg' }],
  },
  floatingButton: {
    position: 'absolute',
    bottom: 24,
    right: 24,
    backgroundColor: '#2196F3',
    borderRadius: 24,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    marginBottom:60
  },
  floatingButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
   
  },
});
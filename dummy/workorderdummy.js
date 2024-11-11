
import { useNavigation } from '@react-navigation/native';
import { CalendarCheck, Filter } from 'lucide-react-native';
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Calendars from '../components/Calendar';
import Footer from '../screen/FooterPage';

export default function WorkDummy() {
    const [activeTab, setActiveTab] = useState('More');
    const navigation = useNavigation()
  const days = [
    { day: 'Mon', date: '11', selected: true },
    { day: 'Tue', date: '12', selected: false },
    { day: 'Wed', date: '13', selected: false },
    { day: 'Thu', date: '14', selected: false },
    { day: 'Fri', date: '15', selected: false },
    { day: 'Sat', date: '16', selected: false },
    { day: 'Sun', date: '17', selected: false },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      {/* Header */}
      {/* <View style={styles.header}>
        
        
        <View style={styles.searchContainer}>
          <Icon name="calendar" size={24} color="white" />
          <View style={styles.searchBox}>
            <TextInput
              placeholder="Search Work Orders"
              placeholderTextColor="#999"
              style={styles.searchInput}
            />
          </View>
          <Icon name="filter" size={24} color="white" />
        </View>
        
        <TouchableOpacity style={styles.switchViewButton}>
          <Text style={styles.switchViewText}>Switch to Month View</Text>
        </TouchableOpacity>
      </View> */}
     <View style={styles.header}>
        <View style={styles.searchContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('WorkOrders')}>
            <CalendarCheck size={20} color="#666"/>
          </TouchableOpacity>
          <TextInput
            style={styles.searchInput}
            placeholder="Search Work Orders"
            placeholderTextColor="#999"
          />
          <TouchableOpacity>
            <Filter size={20} color="#666" />
          </TouchableOpacity>
        </View>
      </View>
      {/* Calendar Week View */}
      {/* <View style={styles.calendarHeader}>
        <TouchableOpacity>
          <Icon name="chevron-left" size={24} color="#007AFF" />
        </TouchableOpacity>
        <Text style={styles.dateRangeText}>Nov 11 - Nov 17</Text>
        <TouchableOpacity>
          <Icon name="chevron-right" size={24} color="#007AFF" />
        </TouchableOpacity>
      </View> */}

      <View style={styles.weekDays}>
      <Calendars/>
      </View>

      {/* Work Orders List */}
      <View style={styles.workOrdersContainer}>
        <Text style={styles.dateHeader}>Monday, November 11th, 2024</Text>
        
        <TouchableOpacity style={styles.workOrderCard}>
          <View style={styles.workOrderIcon}>
            <Icon name="mail" size={24} color="#007AFF" />
          </View>
          <View style={styles.workOrderDetails}>
            <Text style={styles.workOrderTitle}>demo-work</Text>
            <Text style={styles.requestedBy}>Requested by Anand C</Text>
            <View style={styles.badges}>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>High</Text>
              </View>
              <View style={[styles.badge, styles.plannedBadge]}>
                <Icon name="calendar" size={12} color="#666" />
                <Text style={styles.badgeText}>Planned</Text>
              </View>
            </View>
          </View>
          <Icon name="chevron-right" size={24} color="#999" />
        </TouchableOpacity>
      </View>

      {/* Floating Action Button */}
      <TouchableOpacity style={styles.fab}>
        <Icon name="plus" size={24} color="white" />
        <Text style={styles.fabText}>New Work Order</Text>
      </TouchableOpacity>
    <View style={styles.footer}>
      <Footer 
      activeTab={activeTab}
      onTabPress={(tab) => setActiveTab(tab)} />
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
      },
      header: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
      },
      searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        marginBottom: 16,
      },
      avatar: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: '#F5F5F5',
      },
      searchInput: {
        flex: 1,
        height: 40,
        backgroundColor: '#F5F5F5',
        borderRadius: 4,
        paddingHorizontal: 12,
      },
  switchViewButton: {
    marginTop: 16,
    alignItems: 'center',
  },
  switchViewText: {
    color: 'white',
    fontSize: 16,
  },
  calendarHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  dateRangeText: {
    fontSize: 18,
    fontWeight: '600',
  },
  weekDays: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: 16,
  },
  dayColumn: {
    alignItems: 'center',
  },
  dayText: {
    fontSize: 14,
    marginBottom: 8,
  },
  dateCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedDate: {
    backgroundColor: '#007AFF',
  },
  dateText: {
    fontSize: 16,
  },
  selectedDateText: {
    color: 'white',
  },
  workOrdersContainer: {
    padding: 16,
  },
  dateHeader: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 16,
  },
  workOrderCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  workOrderIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#F0F9FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  workOrderDetails: {
    flex: 1,
  },
  workOrderTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  requestedBy: {
    color: '#666',
    marginVertical: 4,
  },
  badges: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 4,
  },
  badge: {
    backgroundColor: '#F1F5F9',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  plannedBadge: {
    backgroundColor: '#F1F5F9',
  },
  badgeText: {
    color: '#666',
    fontSize: 12,
  },
  fab: {
    position: 'absolute',
    bottom: 120,
    alignSelf: 'center',
    backgroundColor: '#007AFF',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 24,
    gap: 8,
  },
  fabText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    backgroundColor: 'white',
    paddingVertical: 8,
    position:'absolute',
    bottom:40
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  activeNavItem: {
    color: '#007AFF',
  },
  navText: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  activeNavText: {
    color: '#007AFF',
  },
  badgeNumber: {
    color: 'white',
    fontSize: 12,
    backgroundColor: '#007AFF',
    width: 16,
    height: 16,
    borderRadius: 8,
    textAlign: 'center',
    position: 'absolute',
    top: -8,
    right: -8,
  },
  footer: {
    position:"absolute",
    bottom:40,
    width:"100%"
  }
});
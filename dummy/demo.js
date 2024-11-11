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
import { CalendarCheck, Filter, Plus, ChevronRight } from 'lucide-react-native';
import Calendars from '../components/Calendar';
import Footer from '../screen/FooterPage';

export default function WorkDummy() {
  const [activeTab, setActiveTab] = useState('More');
  const [show, setShow] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.searchContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('WorkOrders')}>
            <CalendarCheck size={20} color="#007AFF"/>
          </TouchableOpacity>
          <TextInput
            style={styles.searchInput}
            placeholder="Search Work Orders"
            placeholderTextColor="#999"
          />
          <TouchableOpacity>
            <Filter size={20} color="#007AFF" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Calendar */}
     
        <View style={styles.calendarContainer}>
          <Calendars />
        </View>
      
      {/* Work Orders List */}
      <View style={styles.workOrdersContainer}>
        <Text style={styles.dateHeader}>Monday, November 11th, 2024</Text>
        
        <TouchableOpacity style={styles.workOrderCard}>
          <View style={styles.workOrderIcon}>
            <CalendarCheck size={24} color="#007AFF" />
          </View>
          <View style={styles.workOrderDetails}>
            <Text style={styles.workOrderTitle}>demo-work</Text>
            <Text style={styles.requestedBy}>Requested by Anand C</Text>
            <View style={styles.badges}>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>High</Text>
              </View>
              <View style={[styles.badge, styles.plannedBadge]}>
                <CalendarCheck size={12} color="#666" />
                <Text style={styles.badgeText}>Planned</Text>
              </View>
            </View>
          </View>
          <ChevronRight size={24} color="#999" />
        </TouchableOpacity>
      </View>

      {/* Floating Action Button */}
      <TouchableOpacity style={styles.fab}>
        <Plus size={24} color="white" />
        <Text style={styles.fabText}>New Work Order</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Footer 
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
    backgroundColor: '#FFFFFF',
  },
  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    backgroundColor: '#FFFFFF',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 40,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    marginLeft: 8,
  },
   calendarContainer: {
    // Add styles for calendar container
  },
  workOrdersContainer: {
    padding: 16,
  },
  dateHeader: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 16,
    color: '#333',
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
    color: '#333',
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
  footer: {
    position: "absolute",
    bottom: 40,
    width: "100%"
  }
});
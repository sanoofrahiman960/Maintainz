import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Image,
} from 'react-native';
import { CalendarCheck, Filter, Plus, Check, ChevronRight } from 'lucide-react-native';
import Calendars from '../components/Calendar';
import Footer from '../screen/FooterPage';
import { useNavigation } from '@react-navigation/native';

export default function WorkOrderScreen() {
  const [activeTab, setActiveTab] = useState('WorkOrders');
  const [activeTabs, setActiveTabs] = useState('ToDo');
  const [show, setShow] = useState(false);
  const navigation = useNavigation()
  const workOrders = [
    { id: 7, title: 'Title', completedBy: 'NAME', status: 'Done', priority: null },
    { id: 8, title: 'Title', completedBy: 'NAME', status: 'Pending', priority: null },
    { id: 9, title: 'Title', completedBy: 'NAME', status: 'Pending', priority: null },
    { id: 4, title: 'Title', completedBy: 'NAME', status: 'Pending', priority: 'High' },
    { id: 3, title: 'Title', completedBy: 'NAME', status: 'Done', priority: 'High' },
    { id: 1, title: 'Title', completedBy: 'NAME', status: 'Done', priority: null },
  ];

  const renderWorkOrder = (order) => (
    <TouchableOpacity key={order.id} style={styles.workOrderCard}>
      <View style={styles.workOrderLeft}>
        <Image
          source={{ uri: 'https://thumbs.dreamstime.com/b/generic-person-gray-photo-placeholder-man-silhouette-white-background-144511705.jpg' }}
          style={styles.workOrderImage}
        />
        <View style={styles.workOrderDetails}>
          <Text style={styles.workOrderTitle}>{order.title}</Text>
          <Text style={styles.workOrderSubtitle}>Completed by {order.completedBy}</Text>
          <Text style={styles.workOrderId}>#{order.id}</Text>
          <View style={styles.statusContainer}>
            <TouchableOpacity
              style={[
                styles.statusButton,
                order.status === 'Done' && styles.statusButtonDone
              ]}
            >
              {order.status === 'Done' && <Check size={16} color="#FFFFFF" />}
              <Text style={[
                styles.statusText,
                order.status === 'Done' && styles.statusTextDone
              ]}>{order.status}</Text>
            </TouchableOpacity>
            {order.priority === 'High' && (
              <View style={styles.priorityTag}>
                <Text style={styles.priorityText}>High</Text>
              </View>
            )}
          </View>
        </View>
      </View>
      <TouchableOpacity>
        <ChevronRight size={20} color="#666" />
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.searchContainer}>
          <CalendarCheck onPress={() => navigation.navigate('Dummy')} size={20} color="#666"/>
          <TextInput
            style={styles.searchInput}
            placeholder="Search Work Orders"
            placeholderTextColor="#666"
          />
          <TouchableOpacity>
            <Filter size={20} color="#666" />
          </TouchableOpacity>
        </View>
        <View style={styles.tabs}>
          <TouchableOpacity
            style={[styles.tab, activeTabs === 'ToDo' && styles.activeTab]}
            onPress={() => setActiveTabs('ToDo')}
          >
            <Text style={[styles.tabText, activeTabs === 'ToDo' && styles.activeTabText]}>
              ToDo
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTabs === 'Done' && styles.activeTab]}
            onPress={() => setActiveTabs('Done')}
          >
            <Text style={[styles.tabText, activeTabs === 'Done' && styles.activeTabText]}>
              Done
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Calendar */}
      {show && (
        <View style={styles.calendarContainer}>
          <Calendars />
        </View>
      )}

      {/* Work Orders List */}
      <ScrollView style={styles.content}>
        {workOrders.filter(order => 
          (activeTabs === 'ToDo' && order.status === 'Pending') || 
          (activeTabs === 'Done' && order.status === 'Done')
        ).map(renderWorkOrder)}
      </ScrollView>

      {/* Floating Action Button */}
      <TouchableOpacity style={styles.fab}>
        <Plus size={24} color="white" />
      </TouchableOpacity>

      {/* Footer */}
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
    backgroundColor: '#fff',
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
  searchInput: {
    flex: 1,
    height: 40,
    backgroundColor: '#F5F5F5',
    borderRadius: 4,
    paddingHorizontal: 12,
  },
  tabs: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: '#E0E0E0',
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#2196F3',
  },
  tabText: {
    fontSize: 16,
    color: '#666',
  },
  activeTabText: {
    color: '#2196F3',
    fontWeight: '500',
  },
  calendarContainer: {
    // Add styles for calendar container if needed
  },
  content: {
    flex: 1,
  },
  workOrderCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  workOrderLeft: {
    flexDirection: 'row',
    flex: 1,
  },
  workOrderImage: {
    width: 48,
    height: 48,
    borderRadius: 4,
    backgroundColor: '#F5F5F5',
    marginRight: 12,
  },
  workOrderDetails: {
    flex: 1,
  },
  workOrderTitle: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
  },
  workOrderSubtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  workOrderId: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  statusButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
    backgroundColor: '#F5F5F5',
  },
  statusButtonDone: {
    backgroundColor: '#2196F3',
  },
  statusText: {
    fontSize: 12,
    color: '#666',
  },
  statusTextDone: {
    color: '#FFFFFF',
  },
  priorityTag: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
    backgroundColor: '#FFE0B2',
  },
  priorityText: {
    fontSize: 12,
    color: '#F57C00',
  },
  fab: {
    position: 'absolute',
    right: 16,
    bottom: 80,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#2196F3',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
});
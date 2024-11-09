import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Image,
} from 'react-native';
import { Search, Filter, Plus, PieChart, Briefcase, Menu, Check,ChevronRight,CalendarCheck } from 'lucide-react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
export default function WorkOrdersList() {
  const [activeTab, setActiveTab] = useState('ToDo');
  const [date, setDate] = useState(new Date()); // Set an initial date
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date; // Use selectedDate or keep the current date
    // setShow(Platform.OS === 'ios'); // Close picker on Android
    setDate(currentDate); // Update selected date
  };

  const showDatePicker = () => {
    setShow(true);
  };
  const workOrders = [
    { id: 7, title: 'Title', completedBy: 'NAME', status: 'Done', priority: null },
    { id: 8, title: 'Title', completedBy: 'NAME', status: 'Pending', priority: null },
    { id: 9, title: 'Title', completedBy: 'NAME', status: 'Pending', priority: null },
    { id: 4, title: 'Title', completedBy: 'NAME', status: 'Pending', priority: 'High' },
    { id: 3, title: 'Title', completedBy: 'NAME', status: 'Done', priority: 'High' },
    { id: 1, title: 'Title', completedBy: 'NAME', status: 'Done', priority: null },
  ];

  const renderWorkOrder = (order) => (
    <>
    {activeTab == 'Done'?
    <TouchableOpacity key={order.id} style={styles.workOrderItem}>
      <View style={styles.workOrderLeft}>
        <Image
          source={{ uri: 'https://thumbs.dreamstime.com/b/generic-person-gray-photo-placeholder-man-silhouette-white-background-144511705.jpg' }}
          style={styles.workOrderImage}
        />
        <View style={styles.workOrderInfo}>
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
              ]}>Done</Text>
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
    :null}
    </>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.searchContainer}>
          <CalendarCheck onPress={()=>setShow(true)} size={20} color="#666"/>
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
            style={[styles.tab, activeTab === 'ToDo' && styles.activeTab]}
            onPress={() => setActiveTab('ToDo')}
          >
            <Text style={[styles.tabText, activeTab === 'ToDo' && styles.activeTabText]}>
              ToDo
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'Done' && styles.activeTab]}
            onPress={() => setActiveTab('Done')}
          >
            <Text style={[styles.tabText, activeTab === 'Done' && styles.activeTabText]}>
              Done
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {show && (
        <DateTimePicker
        testID='dateTimePicker'
        value={date}
        mode="date" // Can be 'time' or 'datetime' as needed
        display="default"
        onChange={onChange}
      />
      )}
      <ScrollView style={styles.content}>
        {workOrders.map(renderWorkOrder)}
      </ScrollView>

      <TouchableOpacity style={styles.fab}>
        <Plus size={24} color="#FFFFFF" />
      </TouchableOpacity>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.bottomNavItem}>
          <PieChart size={24} color="#666" />
          <Text style={styles.bottomNavText}>Overview</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.bottomNavItem, styles.bottomNavItemActive]}>
          <Briefcase size={24} color="#2196F3" />
          <Text style={[styles.bottomNavText, styles.bottomNavTextActive]}>Work Orders</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomNavItem}>
          <Briefcase size={24} color="#666" />
          <Text style={styles.bottomNavText}>Assets</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomNavItem}>
          <Menu size={24} color="#666" />
          <Text style={styles.bottomNavText}>More</Text>
        </TouchableOpacity>
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
  content: {
    flex: 1,
  },
  workOrderItem: {
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
  workOrderInfo: {
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
    marginBottom:26
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 12,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    backgroundColor: '#FFFFFF',
  },
  bottomNavItem: {
    alignItems: 'center',
  },
  bottomNavItemActive: {
    color: '#2196F3',
  },
  bottomNavText: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  bottomNavTextActive: {
    color: '#2196F3',
  },
});
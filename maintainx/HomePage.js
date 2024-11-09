import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Animated,
  Easing,
  Dimensions,
} from 'react-native';
import { Clock, Plus, QrCode, HelpCircle, AlertCircle, CheckCircle, Menu, Briefcase, PieChart, User } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');
const cardWidth = (width - 48) / 2; // 16px padding on each side, 16px gap

export default function DashboardScreen() {
  const [scaleAnim] = useState(new Animated.Value(0.95));
    const navigation = useNavigation();
  React.useEffect(() => {
    Animated.timing(scaleAnim, {
      toValue: 1,
      duration: 300,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    }).start();
  }, []);

  const actionButtons = [
    { id: 1, title: 'Due Today', icon: Clock, color: '#4CAF50' },
    { id: 2, title: 'Add', icon: Plus, color: '#2196F3' },
    { id: 3, title: 'Scan Code', icon: QrCode, color: '#FF9800' },
    { id: 4, title: 'Support', icon: HelpCircle, color: '#9C27B0' },
  ];

  const statusCards = [
    { 
      id: 1, 
      title: 'High Priority', 
      icon: AlertCircle,
      count: 3,
      color: '#F44336'
    },
    { 
      id: 2, 
      title: 'Overdue', 
      icon: Clock,
      count: 0,
      color: '#FF9800'
    },
    { 
      id: 3, 
      title: 'Pending Approval', 
      icon: AlertCircle,
      count: 5,
      color: '#4CAF50'
    },
    { 
      id: 4, 
      title: 'Completed', 
      icon: CheckCircle,
      count: 12,
      color: '#2196F3'
    },
  ];

  const renderActionButton = ({ title, icon: Icon, color }) => (
    <TouchableOpacity style={styles.actionButton} key={title}>
      <View style={[styles.actionIconContainer, { backgroundColor: color }]}>
        <Icon size={24} color="#FFFFFF" />
      </View>
      <Text style={styles.actionButtonText}>{title}</Text>
    </TouchableOpacity>
  );

  const renderStatusCard = ({ title, icon: Icon, count, color }) => (
    <TouchableOpacity style={[styles.statusCard, { width: cardWidth }]} key={title}>
      <View style={[styles.statusCardIcon, { backgroundColor: color }]}>
        <Icon size={24} color="#FFFFFF" />
      </View>
      <Text style={styles.statusCount}>{count}</Text>
      <Text style={styles.statusTitle}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Animated.View style={[styles.content, { transform: [{ scale: scaleAnim }] }]}>
          <View style={styles.header}>
            <Text style={styles.name}>John Doe</Text>
            <TouchableOpacity style={styles.accountButton}>
              <User size={20} color="#FFFFFF" />
            </TouchableOpacity>
          </View>

          <View style={styles.welcome}>
            {/* <Text style={styles.greeting}>Hello, John</Text> */}
            <Text style={styles.organisation}>Welcome to Mash Solutions</Text>
          </View>

          <View style={styles.actionButtonsContainer}>
            {actionButtons.map(renderActionButton)}
          </View>

          <View style={styles.statusSection}>
            <Text style={styles.sectionTitle}>WORK ORDERS STATUS</Text>
            <View style={styles.statusCardsContainer}>
              {statusCards.map(renderStatusCard)}
            </View>
          </View>

          <View style={styles.todoSection}>
            <Text style={styles.sectionTitle}>TODOLIST</Text>
            <View style={styles.todoCard}>
              <View style={styles.todoAssigned}>
                <View style={styles.avatarPlaceholder}>
                  <User size={16} color="#FFFFFF" />
                </View>
                <Text style={styles.todoAssignedText}>Assigned To Me (1)</Text>
              </View>
              <View style={styles.todoItem}>
                <Text style={styles.todoTitle}>Maintenance Check</Text>
                <Text style={styles.todoId}>#1</Text>
                <View style={styles.todoStatus}>
                  <Text style={styles.todoStatusText}>In Progress</Text>
                </View>
              </View>
            </View>
          </View>
        </Animated.View>
      </ScrollView>

      <TouchableOpacity style={styles.createButton}>
        <Plus size={24} color="#FFFFFF" />
        <Text style={styles.createButtonText}>Create</Text>
      </TouchableOpacity>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.bottomNavItem}>
          <PieChart size={24} color="#2196F3" />
          <Text style={[styles.bottomNavText, styles.bottomNavActive]}>Overview</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('Filter')} style={styles.bottomNavItem}>
          <Briefcase size={24} color="#757575" />
          <Text style={styles.bottomNavText}>Work Orders</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomNavItem}>
          <Briefcase size={24} color="#757575" />
          <Text style={styles.bottomNavText}>Asset</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomNavItem}>
          <Menu size={24} color="#757575" />
          <Text style={styles.bottomNavText}>More</Text>
        </TouchableOpacity>
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
  content: {
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
  },
  accountButton: {
    backgroundColor: '#2196F3',
    borderRadius: 20,
    padding: 8,
  },
  welcome: {
    marginBottom: 24,
  },
  greeting: {
    fontSize: 24,
    color: '#333333',
  },
  organisation: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#2196F3',
    marginTop: 4,
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  actionButton: {
    alignItems: 'center',
    width: 80,
  },
  actionIconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  actionButtonText: {
    fontSize: 12,
    textAlign: 'center',
    color: '#333333',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 16,
  },
  statusSection: {
    marginBottom: 24,
  },
  statusCardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 16,
  },
  statusCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statusCardIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  statusCount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 4,
  },
  statusTitle: {
    fontSize: 14,
    color: '#757575',
    textAlign: 'center',
  },
  todoSection: {
    marginBottom: 24,
  },
  todoCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  todoAssigned: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatarPlaceholder: {
    width: 32,
    height: 32,
    backgroundColor: '#2196F3',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  todoAssignedText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
  todoItem: {
    marginTop: 8,
  },
  todoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
  },
  todoId: {
    fontSize: 14,
    color: '#757575',
    marginTop: 4,
  },
  todoStatus: {
    backgroundColor: '#E3F2FD',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    alignSelf: 'flex-start',
    marginTop: 8,
  },
  todoStatusText: {
    fontSize: 12,
    color: '#2196F3',
    fontWeight: 'bold',
  },
  createButton: {
    position: 'absolute',
    right: 16,
    bottom: 80,
    backgroundColor: '#2196F3',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
    marginBottom:26
  },
  createButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
  },
  bottomNavItem: {
    alignItems: 'center',
  },
  bottomNavText: {
    fontSize: 12,
    color: '#757575',
    marginTop: 4,
  },
  bottomNavActive: {
    color: '#2196F3',
    fontWeight: 'bold',
  },
});
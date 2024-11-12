import React, { useState, useEffect } from 'react';
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
  Modal,
} from 'react-native';
import { Clock, Plus, QrCode, HelpCircle, AlertCircle, CheckCircle, User } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import Footer from './FooterPage';
import { BarCodeScanner } from 'expo-barcode-scanner';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const { width } = Dimensions.get('window');
const cardWidth = (width - 48) / 2; // 16px padding on each side, 16px gap

export default function DashboardScreen() {
  const [scaleAnim] = useState(new Animated.Value(0.95));
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState('Overview');
  const [hasPermission, setHasPermission] = useState(null);
  const [isScanning, setIsScanning] = useState(false);
  const [scannedData, setScannedData] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);

  const CreateOption = ({ icon, label }) => (
    <TouchableOpacity style={styles.createOption}>
      <View style={styles.createIconContainer}>
        <Icon name={icon} size={24} color="#007AFF" />
      </View>
      <Text style={styles.createOptionLabel}>{label}</Text>
      <Icon name="chevron-right" size={24} color="#999" />
    </TouchableOpacity>
  );

  useEffect(() => {
    Animated.timing(scaleAnim, {
      toValue: 1,
      duration: 300,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    }).start();

    // Request camera permission
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setIsScanning(false); // Stop the scanner
    setScannedData(data); // Save scanned data
    alert(`Scanned data: ${data}`);
  };

  const actionButtons = [
    { id: 1, title: 'Due Today', icon: Clock, color: '#4CAF50' },
    { id: 2, title: 'Add', icon: Plus, color: '#2196F3' },
    { id: 3, title: 'Scan Code', icon: QrCode, color: '#FF9800' },
    { id: 4, title: 'Support', icon: HelpCircle, color: '#9C27B0' },
  ];

  const statusCards = [
    { id: 1, title: 'High Priority', icon: AlertCircle, count: 3, color: '#F44336' },
    { id: 2, title: 'Overdue', icon: Clock, count: 0, color: '#FF9800' },
    { id: 3, title: 'Pending Approval', icon: AlertCircle, count: 5, color: '#4CAF50' },
    { id: 4, title: 'Completed', icon: CheckCircle, count: 12, color: '#2196F3' },
  ];

  const renderActionButton = ({ title, icon: Icon, color }) => (
    <TouchableOpacity
      style={styles.actionButton}
      key={title}
      onPress={() => {
        if (title === 'Scan Code') {
          setIsScanning(true); // Activate scanner
        }
      }}
    >
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

  if (isScanning) {
    return (
      <View style={styles.scannerContainer}>
        <BarCodeScanner
          onBarCodeScanned={handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
        <TouchableOpacity style={styles.closeScannerButton} onPress={() => setIsScanning(false)}>
          <Text style={styles.closeScannerButtonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    );
  }

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
            <Text style={styles.organisation}>Welcome to Organisation Name</Text>
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
      
      {/* Create Modal */}
      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>What would you like to Create?</Text>
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={styles.closeButton}
              >
                <Icon name="close" size={24} color="#000" />
              </TouchableOpacity>
            </View>
            <CreateOption icon="clipboard-text" label="Work Order" />
            <CreateOption icon="file-document" label="Procedure" />
            <CreateOption icon="cube" label="Asset" />
            <CreateOption icon="map-marker" label="Location" />
            <CreateOption icon="cog" label="Part" />
          </View>
        </View>
      </Modal>

      {/* Floating Action Button */}
      <TouchableOpacity
        style={styles.fab}
        onPress={() => setModalVisible(true)}
      >
        <Icon name="plus" size={28} color="#FFF" />
      </TouchableOpacity>

      <Footer
        activeTab={activeTab}
        onTabPress={(tab) => setActiveTab(tab)}
      />
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
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#FFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 16,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  closeButton: {
    padding: 8,
  },
  createOption: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  createIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F0F8FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  createOptionLabel: {
    flex: 1,
    fontSize: 16,
  },
  scannerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeScannerButton: {
    position: 'absolute',
    bottom: 40,
    backgroundColor: '#2196F3',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  closeScannerButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  fab: {
    position: 'absolute',
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    right: 20,
    bottom: 120, // Adjusted to be above the Footer
    backgroundColor: '#007AFF',
    borderRadius: 28,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
});
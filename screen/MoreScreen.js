import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Phone, User, List, Download, Settings, Activity, FileText, BarChart3 } from 'lucide-react-native';
import Footer from './FooterPage';

export default function ProductFeaturesScreen() {
    const [activeTab, setActiveTab] = useState('More');
  const features = [
    { id: 1, title: 'Procedures', icon: List, bgColor: '#F3F0FF', iconColor: '#7C3AED' },
    { id: 2, title: 'Requests', icon: Download, bgColor: '#ECFDF5', iconColor: '#059669' },
    { id: 3, title: 'Parts Inventory', icon: Settings, bgColor: '#FFF7ED', iconColor: '#EA580C' },
    { id: 4, title: 'Meters', icon: Activity, bgColor: '#F0F9FF', iconColor: '#0284C7' },
    { id: 5, title: 'Vendors', icon: FileText, bgColor: '#FDF2F8', iconColor: '#DB2777' },
    { id: 6, title: 'Reporting', icon: BarChart3, bgColor: '#FEFCE8', iconColor: '#CA8A04' },
    { id: 7, title: 'Get Desktop App', icon: List, bgColor: '#F1F5F9', iconColor: '#0F172A' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.callIndicator}>
          <Phone size={20} color="#666666" />
        </View>
        <Text style={styles.headerTitle}>Organisation Name</Text>
        <TouchableOpacity style={styles.accountButton}>
          <User size={24} color="#2196F3" />
        </TouchableOpacity>
      </View>

      {/* Notification Banner */}
      <View style={styles.notificationBanner}>
        <Text style={styles.notificationText}>Notifications are disabled</Text>
      </View>

      <ScrollView style={styles.scrollView}>
        {/* Product Features Section */}
        <Text style={styles.sectionTitle}>PRODUCT FEATURES</Text>
        
        <View style={styles.featuresGrid}>
          {features.map((feature) => (
            <TouchableOpacity key={feature.id} style={styles.featureCard}>
              <View style={[styles.iconContainer, { backgroundColor: feature.bgColor }]}>
                <feature.icon size={24} color={feature.iconColor} />
              </View>
              <Text style={styles.featureTitle}>{feature.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <Footer 
      activeTab={activeTab}
      onTabPress={(tab) => setActiveTab(tab)} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  callIndicator: {
    backgroundColor: '#E5E5E5',
    padding: 8,
    borderRadius: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
  },
  accountButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E3F2FD',
    alignItems: 'center',
    justifyContent: 'center',
  },
  notificationBanner: {
    backgroundColor: '#F5F5F5',
    padding: 12,
    alignItems: 'center',
  },
  notificationText: {
    color: '#666666',
    fontSize: 16,
  },
  scrollView: {
    flex: 1,
    padding: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 16,
  },
  featuresGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 16,
  },
  featureCard: {
    width: '47%',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
  iconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333333',
    textAlign: 'center',
  },
});
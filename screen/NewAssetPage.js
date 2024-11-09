import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { Camera, ChevronRight, Lock } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/core';
import Footer from './FooterPage';

export default function NewAssetScreen() {
    const navigation = useNavigation()
    const [activeTab, setActiveTab] = useState('Assets');

  const renderField = (label, actionText, icon) => (
    <View style={styles.fieldContainer}>
      <Text style={styles.fieldLabel}>{label}</Text>
      {actionText ? (
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionText}>{actionText}</Text>
          <ChevronRight size={20} color="#2196F3" />
        </TouchableOpacity>
      ) : icon ? (
        <Lock size={16} color="#2196F3" />
      ) : (
        <TextInput
          placeholder="Enter Text"
          style={styles.input}
          placeholderTextColor="#999"
        />
      )}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>New Asset</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('Assets')}>
          <Text style={styles.createButton}>CREATE</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView}>
        <TextInput
          placeholder="Enter Asset Name"
          style={styles.nameInput}
          placeholderTextColor="#999"
        />

        <TouchableOpacity style={styles.imageUpload}>
          <Camera size={24} color="#2196F3" />
          <Text style={styles.imageUploadText}>Add or take pictures</Text>
        </TouchableOpacity>

        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionLabel}>Description</Text>
          <TextInput
            placeholder="Add a description"
            multiline
            numberOfLines={4}
            style={styles.descriptionInput}
            placeholderTextColor="#999"
          />
        </View>

        {renderField('QR Code/Barcode', 'Assign')}
        {renderField('Location', 'Assign Location')}
        {renderField('Criticality', 'Assign')}
        {renderField('Serial Number')}
        {renderField('Model')}
        {renderField('Manufacturer')}
        {renderField('Year')}
        {renderField('Files', 'Attach')}
        {renderField('Parent Asset', 'Assign Asset', true)}
        {renderField('Asset Types', 'Add')}
        {renderField('Teams in charge', 'Choose')}
        {renderField('Vendors', 'Assign')}
        {renderField('Parts', 'Add Parts')}
      </ScrollView>
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
  createButton: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '500',
  },
  scrollView: {
    flex: 1,
    padding: 16,
  },
  nameInput: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 16,
  },
  imageUpload: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F0F9FF',
    borderRadius: 8,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#2196F3',
    padding: 20,
    marginBottom: 16,
    gap: 8,
  },
  imageUploadText: {
    color: '#2196F3',
    fontSize: 16,
  },
  descriptionContainer: {
    marginBottom: 16,
  },
  descriptionLabel: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
  },
  descriptionInput: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    height: 100,
    textAlignVertical: 'top',
  },
  fieldContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  fieldLabel: {
    fontSize: 16,
    color: '#333333',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionText: {
    color: '#2196F3',
    fontSize: 16,
    marginRight: 4,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    flex: 1,
    maxWidth: 200,
    textAlign: 'right',
  },
});
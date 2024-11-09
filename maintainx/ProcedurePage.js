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
import { ArrowLeft, Camera, Plus, Check } from 'lucide-react-native';

export default function InspectionForm() {
  const [formData, setFormData] = useState({
    visualInspection: '',
    visualStatus: null,
    photos: [],
    operationalStatus: null,
    notes: '',
    documentation: '',
  });

  const renderHeader = () => (
    <View style={styles.header}>
      <TouchableOpacity>
        <ArrowLeft size={24} color="#000" />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>Choose this Procedure</Text>
      <TouchableOpacity style={styles.doneButton}>
        <Text style={styles.doneButtonText}>DONE</Text>
      </TouchableOpacity>
    </View>
  );

  const renderStatusButtons = (type, options) => (
    <View style={styles.statusButtons}>
      {options.map((option) => (
        <TouchableOpacity
          key={option}
          style={[
            styles.statusButton,
            formData[type] === option && styles.statusButtonSelected
          ]}
          onPress={() => setFormData({ ...formData, [type]: option })}
        >
          <Text style={[
            styles.statusButtonText,
            formData[type] === option && styles.statusButtonTextSelected
          ]}>
            {option}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      <ScrollView style={styles.content}>
        <Text style={styles.title}>Testing Procedure -Daily Maintenance</Text>
        <TouchableOpacity style={styles.addDescription}>
          <Plus size={20} color="#666" />
          <Text style={styles.addDescriptionText}>Add Description</Text>
        </TouchableOpacity>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Visual Inspection</Text>
          <TextInput
            style={styles.questionInput}
            placeholder="question"
            value={formData.visualInspection}
            onChangeText={(text) => setFormData({ ...formData, visualInspection: text })}
          />
          {renderStatusButtons('visualStatus', ['PASS', 'FLAG', 'FAIL'])}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Upload photos of</Text>
          <TouchableOpacity style={styles.uploadButton}>
            <Camera size={24} color="#666" />
            <Text style={styles.uploadButtonText}>added here</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Operational Checks</Text>
          <TextInput
            style={styles.questionInput}
            placeholder="Question"
          />
          {renderStatusButtons('operationalStatus', ['Yes', 'No', 'N/A'])}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Notes</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Text will be entered here"
            multiline
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Documentation</Text>
          <Text style={styles.label}>Note any</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Text will be"
            multiline
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Signature</Text>
          <TouchableOpacity style={styles.signatureBox}>
            <Text style={styles.signatureText}>Signature will be added here</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.actionButton}>
            <Plus size={24} color="#666" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Camera size={24} color="#666" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Check size={24} color="#666" />
          </TouchableOpacity>
        </View>
      </ScrollView>
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
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '500',
  },
  doneButton: {
    backgroundColor: '#2196F3',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 4,
  },
  doneButtonText: {
    color: '#FFFFFF',
    fontWeight: '500',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  addDescription: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  addDescriptionText: {
    marginLeft: 8,
    color: '#666',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 12,
  },
  questionInput: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 4,
    padding: 12,
    marginBottom: 12,
  },
  statusButtons: {
    gap: 8,
  },
  statusButton: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 4,
    padding: 12,
    alignItems: 'center',
  },
  statusButtonSelected: {
    backgroundColor: '#2196F3',
    borderColor: '#2196F3',
  },
  statusButtonText: {
    color: '#666',
  },
  statusButtonTextSelected: {
    color: '#FFFFFF',
  },
  uploadButton: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 4,
    padding: 16,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
  },
  uploadButtonText: {
    color: '#666',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 4,
    padding: 12,
    height: 100,
    textAlignVertical: 'top',
  },
  label: {
    color: '#666',
    marginBottom: 8,
  },
  signatureBox: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 4,
    padding: 16,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
  },
  signatureText: {
    color: '#666',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  actionButton: {
    padding: 12,
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
  },
});
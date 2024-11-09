import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { ArrowDown, CheckCircle } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/core';

export default function WelcomeScreen() {
    const navigation = useNavigation()
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <ArrowDown size={48} color="#FFFFFF" />
        </View>

        <Text style={styles.title}>New Asset for Organization Name</Text>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <CheckCircle size={24} color="#2196F3" />
            <Text style={styles.sectionTitle}>What are Assets?</Text>
          </View>
          <Text style={styles.sectionText}>
            All the equipment and tools that you are in charge of either operating or
            maintaining.
          </Text>
          <Text style={styles.sectionText}>
            By adding them here you'll be able to see their Work Orders and keep
            track of their uptime.
          </Text>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <CheckCircle size={24} color="#2196F3" />
            <Text style={styles.sectionTitle}>Adding assets is easy!</Text>
          </View>
          <Text style={styles.sectionText}>
            You can attach pictures or files to every asset and their location.
            Include any additional information your Team will need to get the job
            done.
          </Text>
        </View>

        <TouchableOpacity onPress={()=>navigation.navigate('NewAsset')} style={styles.button}>
          <Text style={styles.buttonText}>Got it!</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2196F3',
  },
  content: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    width: 96,
    height: 96,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 32,
  },
  section: {
    marginBottom: 24,
    width: '100%',
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    gap: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  sectionText: {
    fontSize: 16,
    color: '#FFFFFF',
    opacity: 0.9,
    marginBottom: 8,
    lineHeight: 24,
  },
  button: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 8,
    marginTop: 16,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2196F3',
  },
});
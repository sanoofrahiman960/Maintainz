import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  TextInput,
} from 'react-native';
import { ArrowLeft, ChevronRight, Search, User, Clock, MapPin, AlertCircle, Plus, Filter } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';

export default function FilterScreen() {
    const navigation = useNavigation()
  const filterOptions = [
    { icon: Filter, title: 'My Filters' },
    { icon: User, title: 'Assigned to' },
    { icon: Clock, title: 'Due Date' },
    { icon: MapPin, title: 'Location' },
    { icon: AlertCircle, title: 'Priority' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
          <ArrowLeft size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Add Filter</Text>
        <View style={styles.headerRight} />
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.searchContainer}>
          <Search size={20} color="#666" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Filter by."
            placeholderTextColor="#666"
          />
        </View>

        <TouchableOpacity style={styles.optionButton}>
          <View style={styles.optionLeft}>
            <Filter size={20} color="#666" />
            <Text style={styles.optionText}>Sort by</Text>
          </View>
          <ChevronRight size={20} color="#666" />
        </TouchableOpacity>

        {filterOptions.map((option, index) => (
          <TouchableOpacity key={index} style={styles.optionButton}>
            <View style={styles.optionLeft}>
              <option.icon size={20} color="#666" />
              <Text style={styles.optionText}>{option.title}</Text>
            </View>
            <ChevronRight size={20} color="#666" />
          </TouchableOpacity>
        ))}

        <TouchableOpacity style={styles.optionButton}>
          <View style={styles.optionLeft}>
            <Plus size={20} color="#666" />
            <Text style={styles.optionText}>More Filters</Text>
          </View>
          <ChevronRight size={20} color="#666" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.optionText}>Results per page</Text>
          <View style={styles.optionRight}>
            <Text style={styles.countText}>60</Text>
            <ChevronRight size={20} color="#666" />
          </View>
        </TouchableOpacity>
      </ScrollView>

      <TouchableOpacity style={styles.applyButton}>
        <Text style={styles.applyButtonText}>Apply</Text>
      </TouchableOpacity>
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
  headerRight: {
    width: 24,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 4,
    padding: 12,
    marginBottom: 16,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  optionButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 4,
    marginBottom: 12,
  },
  optionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  optionRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
  countText: {
    fontSize: 16,
    color: '#666',
  },
  applyButton: {
    margin: 16,
    backgroundColor: '#2196F3',
    padding: 16,
    borderRadius: 4,
    alignItems: 'center',
  },
  applyButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
});
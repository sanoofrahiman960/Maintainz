
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';

export default function Calendars() {
  const [selectedDate, setSelectedDate] = useState('');

  const onDayPress = (day) => {
    setSelectedDate(day.dateString);
  };

  return (
    <View style={styles.container}>
      {/* <Text style={styles.header}>Calendar View</Text> */}
      <Calendar
        onDayPress={onDayPress}
        markedDates={{
          [selectedDate]: { selected: true, selectedColor: '#3498db' },
        }}
        // Enable viewing of all months
        enableSwipeMonths={true}
        // Show month navigation arrows
        monthFormat={'MMMM yyyy'}
        hideExtraDays={false}
        firstDay={1}
        onMonthChange={(month) => {
          console.log('month changed', month);
        }}
        theme={{
          backgroundColor: '#ffffff',
          calendarBackground: '#ffffff',
          textSectionTitleColor: '#b6c1cd',
          selectedDayBackgroundColor: '#3498db',
          selectedDayTextColor: '#ffffff',
          todayTextColor: '#3498db',
          dayTextColor: '#2d4150',
          textDisabledColor: '#d9e1e8',
          dotColor: '#3498db',
          selectedDotColor: '#ffffff',
          arrowColor: '#3498db',
          monthTextColor: '#3498db',
          indicatorColor: '#3498db',
          textDayFontWeight: '300',
          textMonthFontWeight: 'bold',
          textDayHeaderFontWeight: '300',
          textDayFontSize: 16,
          textMonthFontSize: 18,
          textDayHeaderFontSize: 14
        }}
      />
      {/* {selectedDate ? (
        <Text style={styles.selectedDate}>Selected Date: {selectedDate}</Text>
      ) : null} */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  selectedDate: {
    marginTop: 20,
    fontSize: 18,
    textAlign: 'center',
  },
});
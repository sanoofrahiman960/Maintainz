import React from 'react';
import Routing from './Navigation/Routing';
import Footer from './screen/FooterPage';
import LocationsScreen from './screen/LocationPage';
import NewAssetScreen from './screen/NewAssetPage';
import WelcomeScreen from './screen/OnBoardingPage';


function App() {
  return (
    <>
    {/* <Navigation/> */}
   <Routing/>
    {/* <WelcomeScreen/> */}
    </>
  );
}
export default App;


// import React, { useState } from 'react';
// import {
//   SafeAreaView,
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   Modal,
//   StatusBar,
//   Platform,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// export default function App() {
//   const [isModalVisible, setModalVisible] = useState(false);

//   const ActionButton = ({ icon, label, badge }) => (
//     <TouchableOpacity style={styles.actionButton}>
//       <Icon name={icon} size={24} color="#007AFF" />
//       <Text style={styles.actionLabel}>{label}</Text>
//       {badge && (
//         <View style={styles.badge}>
//           <Text style={styles.badgeText}>{badge}</Text>
//         </View>
//       )}
//     </TouchableOpacity>
//   );

//   const CreateOption = ({ icon, label }) => (
//     <TouchableOpacity style={styles.createOption}>
//       <View style={styles.createIconContainer}>
//         <Icon name={icon} size={24} color="#007AFF" />
//       </View>
//       <Text style={styles.createOptionLabel}>{label}</Text>
//       <Icon name="chevron-right" size={24} color="#999" />
//     </TouchableOpacity>
//   );

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar barStyle="light-content" backgroundColor="#007AFF" />
      
//       {/* Header */}
//       <View style={styles.header}>
//         <Text style={styles.headerTitle}>Mash Solutions</Text>
//         <TouchableOpacity style={styles.accountButton}>
//           <Icon name="account-circle" size={28} color="#FFF" />
//         </TouchableOpacity>
//       </View>

//       {/* Welcome Section */}
//       <View style={styles.welcomeSection}>
//         <Text style={styles.greeting}>Hello, Anand!</Text>
//         <Text style={styles.welcomeText}>Welcome to Mash Solutions</Text>
//       </View>

//       {/* Action Buttons */}
//       <View style={styles.actionGrid}>
//         <ActionButton icon="calendar" label="Due Today" />
//         <ActionButton icon="account-plus" label="Invite" />
//         <ActionButton icon="qrcode-scan" label="Scan Code" />
//         <ActionButton icon="help-circle" label="Support" badge="1" />
//       </View>

//       {/* Work Orders Status */}
//       <View style={styles.workOrdersSection}>
//         <Text style={styles.sectionTitle}>WORK ORDERS STATUS</Text>
//         {/* Add work orders status content here */}
//       </View>

//       {/* Create Modal */}
//       <Modal
//         visible={isModalVisible}
//         animationType="slide"
//         transparent={true}
//         onRequestClose={() => setModalVisible(false)}
//       >
//         <View style={styles.modalContainer}>
//           <View style={styles.modalContent}>
//             <View style={styles.modalHeader}>
//               <Text style={styles.modalTitle}>What would you like to Create?</Text>
//               <TouchableOpacity
//                 onPress={() => setModalVisible(false)}
//                 style={styles.closeButton}
//               >
//                 <Icon name="close" size={24} color="#000" />
//               </TouchableOpacity>
//             </View>
//             <CreateOption icon="clipboard-text" label="Work Order" />
//             <CreateOption icon="file-document" label="Procedure" />
//             <CreateOption icon="cube" label="Asset" />
//             <CreateOption icon="map-marker" label="Location" />
//             <CreateOption icon="cog" label="Part" />
//           </View>
//         </View>
//       </Modal>

//       {/* Bottom Navigation */}
//       <View style={styles.bottomNav}>
//         <TouchableOpacity>
//           <Icon name="square" size={24} color="#666" />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => setModalVisible(true)}>
//           <View style={styles.centerButton}>
//             <Icon name="plus" size={28} color="#FFF" />
//           </View>
//         </TouchableOpacity>
//         <TouchableOpacity>
//           <Icon name="chevron-left" size={24} color="#666" />
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFF',
//   },
//   header: {
//     backgroundColor: '#007AFF',
//     padding: 16,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   headerTitle: {
//     color: '#FFF',
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   accountButton: {
//     padding: 4,
//   },
//   welcomeSection: {
//     padding: 16,
//   },
//   greeting: {
//     fontSize: 24,
//     color: '#333',
//   },
//   welcomeText: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: '#333',
//     marginTop: 8,
//   },
//   actionGrid: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     padding: 16,
//     justifyContent: 'space-between',
//   },
//   actionButton: {
//     width: '23%',
//     alignItems: 'center',
//     marginBottom: 16,
//   },
//   actionLabel: {
//     marginTop: 8,
//     fontSize: 12,
//     textAlign: 'center',
//     color: '#333',
//   },
//   badge: {
//     position: 'absolute',
//     top: -4,
//     right: -4,
//     backgroundColor: 'red',
//     borderRadius: 10,
//     width: 20,
//     height: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   badgeText: {
//     color: '#FFF',
//     fontSize: 12,
//     fontWeight: 'bold',
//   },
//   workOrdersSection: {
//     padding: 16,
//   },
//   sectionTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     backgroundColor: 'rgba(0,0,0,0.5)',
//   },
//   modalContent: {
//     backgroundColor: '#FFF',
//     borderTopLeftRadius: 20,
//     borderTopRightRadius: 20,
//     padding: 16,
//   },
//   modalHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 16,
//   },
//   modalTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   createOption: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 16,
//     borderBottomWidth: 1,
//     borderBottomColor: '#EEE',
//   },
//   createIconContainer: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     backgroundColor: '#F0F8FF',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 16,
//   },
//   createOptionLabel: {
//     flex: 1,
//     fontSize: 16,
//   },
//   bottomNav: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     padding: 16,
//     backgroundColor: '#FFF',
//     borderTopWidth: 1,
//     borderTopColor: '#EEE',
//   },
//   centerButton: {
//     width: 56,
//     height: 56,
//     borderRadius: 28,
//     backgroundColor: '#007AFF',
//     justifyContent: 'center',
//     alignItems: 'center',
//     elevation: 4,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//   },
// });

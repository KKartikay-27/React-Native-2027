import { ScrollView, StyleSheet, Text, TouchableOpacity, View , TextInput } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const home = () => {

     // Minimal placeholder data (UI only)
  const categories = [
    { id: 1, name: 'Fruits', icon: '🍎', color: 'bg-red-100' },
    { id: 2, name: 'Vegetables', icon: '🥬', color: 'bg-green-100' },
    { id: 3, name: 'Dairy', icon: '🥛', color: 'bg-blue-100' },
  ];

  const products = [
    { id: 1, name: 'Tomatoes', price: '₹49', image: '🍅', category: 'Vegetables' },
    { id: 2, name: 'Bananas', price: '₹39', image: '🍌', category: 'Fruits' },
    { id: 3, name: 'Milk', price: '₹65', image: '🥛', category: 'Dairy' },
  ];



  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}

     <View className="bg-emerald-600 px-4 pt-2 pb-4">
        <View className="flex-row items-center justify-between mb-3">
             <View className="flex-1">
            <Text className="text-white text-xs opacity-90">Delivery to</Text>
               <View className="flex-row items-center">
                 <Text className="text-white text-base font-bold mr-1">Home</Text>                 <Text className="text-white text-lg">▼</Text>
             </View>
             </View>
          
          <TouchableOpacity>
             <Text className="text-white text-l font-semibold">📍 Change</Text>
          </TouchableOpacity>
          
           {/* searchBar */}

          
            <View className="bg-white rounded-xl px-4 py-3 flex-row items-center">
            <Text className="text-gray-400 mr-2">🔍</Text>
           <TextInput
             className="flex-1 text-gray-800"
             placeholder="Search for products..."
              placeholderTextColor="#9CA3AF"
             />
           </View>
         

          </View>
     </View>
      
    </SafeAreaView>
  );
};

export default home;

const styles = StyleSheet.create({});

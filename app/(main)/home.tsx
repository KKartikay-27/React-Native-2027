import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const home = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}

      <View className="bg-emerald-600 px-4 pt-2 mb-3 ">
           <View className="">
             <View className="">
                <Text className="">Delivery To</Text>
             </View>
           </View >


           <View className="">

           </View>
        </View>
      
    </SafeAreaView>
  );
};

export default home;

const styles = StyleSheet.create({});

import React from "react";
import { View, Text, TouchableOpacity, Image,  } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles/WelcomeScreen.style";

export const WelcomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <Text style={styles.brandText}>SkinSight AI</Text>
        </View>

        <View style={styles.taglineContainer}>
          <Text style={styles.tagline}>
            Are you ready to get to{"\n"}know your skin better?
          </Text>
        </View>

        <View>
          <Image
            source={require("../../assets/welcomeScreen.jpg")}
            style={styles.illustration}
            resizeMode="contain"
          />
        </View>

        {/* Bottom Section */}
        <View style={styles.bottomSection}>
          {/* Disclaimer */}
          <View style={styles.disclaimerContainer}>
            <View style={styles.disclaimerContent}>
              <Text style={styles.disclaimerIcon}>⚠️</Text>
              <Text style={styles.disclaimerText}>
                <Text style={styles.disclaimerBold}>Disclaimer: </Text>
                This app is for informational purposes only and is not a medical
                diagnosis. Always consult a professional doctor.
              </Text>
            </View>
          </View>

          {/* Let's Get Started Button */}
          <TouchableOpacity
            style={styles.createButton}
            onPress={() => {
              
               navigation.navigate('Upload');
              console.log("Lets get started pressed");
            }}
            activeOpacity={0.8}
          >
            <Text style={styles.createButtonText}>Let&apos;s Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};


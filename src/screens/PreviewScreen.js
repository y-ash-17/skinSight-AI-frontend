import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  ActivityIndicator,
  Platform,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window');

export const PreviewScreen = ({ navigation, route }) => {
  const { imageUri } = route.params;
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);

  const handleRetake = () => {
    // Go back to camera
    navigation.goBack();
  };

  const handleAnalyze = async () => {
    console.log('🚀 Analyze button clicked');
    console.log('📸 Image URI:', imageUri);
    
    try {
      setIsAnalyzing(true);
      console.log('⏳ Set isAnalyzing to true');

      const formData = new FormData();
    
      console.log('📦 Creating FormData with URI:', imageUri);
      
      formData.append("file", {
        uri: imageUri,
        name: "skin_image.jpg",
        type: "image/jpeg",
      });
      
      const API_URL = "https://3q71dqfv-8000.inc1.devtunnels.ms/api/predict";

      console.log("📡 Sending request to backend:", API_URL);

      const response = await fetch(API_URL, {
        method: "POST",
        body: formData,
      });

      console.log("✅ Request sent, awaiting response...");
      console.log("📊 Response status:", response.status);

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const data = await response.json();

      console.log("✨ API Response:", JSON.stringify(data, null, 2));
      setAnalysisResult(data);
      
      // Success! Now show the "View Results" button
      console.log('✅ Analysis complete, showing results button');
      
    } catch (error) {
      console.error("❌ Error analyzing image:", error);
      console.error("Error details:", error.message);
      Alert.alert(
        "Analysis Failed",
        "Something went wrong during analysis. Please try again.",
        [
          { text: "OK", onPress: () => setIsAnalyzing(false) }
        ]
      );
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleViewResults = () => {
    console.log('🎯 Navigating to results screen');
    navigation.navigate('Analysis', { analysisResult });
  };

  return (
    <View style={styles.container}>
      {/* Image Preview */}
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: imageUri }}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      {/* Top Header */}
      <SafeAreaView style={styles.topOverlay} edges={['top']}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => navigation.navigate('Upload')}
            activeOpacity={0.8}
            disabled={isAnalyzing}
          >
            <Text style={styles.closeButtonText}>✕</Text>
          </TouchableOpacity>
          <View style={styles.headerTextContainer}>
            <Text style={styles.headerTitle}>Photo Preview</Text>
            <Text style={styles.headerSubtitle}>Review before analysis</Text>
          </View>
          <View style={styles.placeholder} />
        </View>
      </SafeAreaView>

      {/* Loading Overlay */}
      {isAnalyzing && (
        <View style={styles.loadingOverlay}>
          <View style={styles.loadingBox}>
            <ActivityIndicator size="large" color="#10B981" />
            <Text style={styles.loadingText}>
              Our AI model is analyzing...{'\n'}Please wait
            </Text>
          </View>
        </View>
      )}

      {/* Bottom Actions */}
      <SafeAreaView style={styles.bottomOverlay} edges={['bottom']}>
        <View style={styles.actions}>
          {/* Show different buttons based on state */}
          {!analysisResult ? (
            <>
              {/* Retake Button */}
              <TouchableOpacity
                style={styles.retakeButton}
                onPress={handleRetake}
                activeOpacity={0.8}
                disabled={isAnalyzing}
              >
                <Text style={styles.retakeIcon}>🔄</Text>
                <Text style={styles.retakeButtonText}>Retake Photo</Text>
              </TouchableOpacity>

              {/* Analyze Button */}
              <TouchableOpacity
                style={[styles.analyzeButton, isAnalyzing && styles.buttonDisabled]}
                onPress={handleAnalyze}
                activeOpacity={0.8}
                disabled={isAnalyzing}
              >
                <Text style={styles.analyzeButtonText}>
                  {isAnalyzing ? 'Analyzing...' : 'Analyze Photo →'}
                </Text>
              </TouchableOpacity>
            </>
          ) : (
            <>
              {/* Analyze Again Button */}
              <TouchableOpacity
                style={styles.retakeButton}
                onPress={handleAnalyze}
                activeOpacity={0.8}
              >
                <Text style={styles.retakeIcon}>🔄</Text>
                <Text style={styles.retakeButtonText}>Analyze Again</Text>
              </TouchableOpacity>

              {/* View Results Button */}
              <TouchableOpacity
                style={styles.viewResultsButton}
                onPress={handleViewResults}
                activeOpacity={0.8}
              >
                <Text style={styles.viewResultsButtonText}>View Results →</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  imageContainer: {
    flex: 0.9,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  image: {
    width: width,
    height: height,
  },
  topOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    height: 50,
  },
  closeButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '300',
  },
  headerTextContainer: {
    alignItems: 'center',
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },
  headerSubtitle: {
    color: '#E2E8F0',
    fontSize: 12,
    fontWeight: '400',
    marginTop: 2,
  },
  placeholder: {
    width: 40,
  },
  loadingOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  loadingBox: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 32,
    alignItems: 'center',
    minWidth: 200,
  },
  loadingText: {
    marginTop: 20,
    fontSize: 16,
    color: '#64748B',
    textAlign: 'center',
    lineHeight: 24,
  },
  bottomOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
  },
  actions: {
    backgroundColor: '#F0F8FF',
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 12,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    gap: 12,
  },
  retakeButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#E2E8F0',
  },
  retakeIcon: {
    fontSize: 20,
    marginRight: 8,
  },
  retakeButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#475569',
  },
  analyzeButton: {
    backgroundColor: '#10B981',
    borderRadius: 16,
    padding: 18,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },
  analyzeButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  viewResultsButton: {
    backgroundColor: '#3B82F6',
    borderRadius: 16,
    padding: 18,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },
  viewResultsButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});
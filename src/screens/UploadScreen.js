import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export const UploadScreen = ({ navigation }) => {
  const handleTakePhoto = () => {
    // Navigate to Camera screen
    navigation.navigate('Camera');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        {/* Header/Instructions */}
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Take a Photo</Text>
          <Text style={styles.subtitle}>
            Clear, simple instructions on how to take a good photo.
          </Text>
        </View>

        {/* Instructions Box */}
        <View style={styles.instructionsContainer}>
          <Text style={styles.instructionsTitle}>For Best Results:</Text>
          <Text style={styles.instructionsText}>
            Please take a clear, well-lit, close-up photo of the skin area.
          </Text>
        </View>

        {/* Visual Guide Section */}
        <View style={styles.visualGuideContainer}>
          <Text style={styles.visualGuideTitle}>Visual Guide</Text>
          
          <View style={styles.guideGrid}>
            {/* Good Example */}
            <View style={styles.guideItem}>
              <View style={[styles.guideImagePlaceholder, styles.goodExample]}>
                <Text style={styles.guideEmoji}>✅</Text>
                <Text style={styles.guideLabel}>Good</Text>
              </View>
              <Text style={styles.guideDescription}>
                Clear, well-lit, close-up
              </Text>
            </View>

            {/* Bad Example */}
            <View style={styles.guideItem}>
              <View style={[styles.guideImagePlaceholder, styles.badExample]}>
                <Text style={styles.guideEmoji}>❌</Text>
                <Text style={styles.guideLabel}>Avoid</Text>
              </View>
              <Text style={styles.guideDescription}>
                Blurry or too far away
              </Text>
            </View>
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.buttonsContainer}>
          {/* Take Photo Button */}
          <TouchableOpacity
            style={styles.takePhotoButton}
            onPress={handleTakePhoto}
            activeOpacity={0.8}
          >
            <View style={styles.buttonContent}>
              <Text style={styles.cameraIcon}>📷</Text>
              <Text style={styles.buttonText}>Take Photo</Text>
            </View>
            <Text style={styles.buttonSubtext}>Opens the phone&apos;s camera</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F8FF',
  },
  scrollContent: {
    padding: 24,
    paddingBottom: 40,
  },
  headerContainer: {
    marginBottom: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1E293B',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: '#64748B',
    lineHeight: 24,
  },
  instructionsContainer: {
    backgroundColor: '#E0F2FE',
    borderLeftWidth: 4,
    borderLeftColor: '#0EA5E9',
    borderRadius: 12,
    padding: 16,
    marginBottom: 32,
  },
  instructionsTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0C4A6E',
    marginBottom: 8,
  },
  instructionsText: {
    fontSize: 14,
    color: '#0C4A6E',
    lineHeight: 20,
  },
  visualGuideContainer: {
    marginBottom: 32,
  },
  visualGuideTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1E293B',
    marginBottom: 16,
  },
  guideGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16,
  },
  guideItem: {
    flex: 1,
    alignItems: 'center',
  },
  guideImagePlaceholder: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  goodExample: {
    backgroundColor: '#D1FAE5',
    borderWidth: 2,
    borderColor: '#10B981',
  },
  badExample: {
    backgroundColor: '#FEE2E2',
    borderWidth: 2,
    borderColor: '#EF4444',
  },
  guideEmoji: {
    fontSize: 40,
    marginBottom: 8,
  },
  guideLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1E293B',
  },
  guideDescription: {
    fontSize: 13,
    color: '#64748B',
    textAlign: 'center',
    lineHeight: 18,
  },
  buttonsContainer: {
    gap: 16,
  },
  takePhotoButton: {
    backgroundColor: '#475569',
    borderRadius: 16,
    padding: 20,
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
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  cameraIcon: {
    fontSize: 24,
    marginRight: 12,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  buttonSubtext: {
    fontSize: 13,
    color: '#CBD5E1',
    marginTop: 4,
  },
});


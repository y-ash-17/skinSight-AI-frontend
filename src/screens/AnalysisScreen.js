import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");

export const AnalysisScreen = ({ navigation, route }) => {
  const { analysisResult } = route.params;

  console.log('📊 Analysis Screen rendered with results:', analysisResult);

  // Transform the API response to match the expected format
  const transformedResult = {
    descriptionAI: analysisResult.helpful_info || "Analysis complete. Please review the results below and consult with a dermatologist for proper diagnosis and treatment.",
    confidenceOverall: analysisResult.confidence || 0,
    conditionsIdentified: [
      {
        name: analysisResult.prediction || "Unknown Condition",
        description: "Detected skin condition based on image analysis",
        severity: getSeverityFromConfidence(analysisResult.confidence),
        confidence: analysisResult.confidence || 0
      }
    ]
  };

  function getSeverityFromConfidence(confidence) {
    if (confidence >= 0.9) return "Significant";
    if (confidence >= 0.7) return "Moderate";
    return "Mild";
  }

  const getSeverityColor = (severity) => {
    switch (severity.toLowerCase()) {
      case "mild":
        return "#10B981";
      case "moderate":
        return "#F59E0B";
      case "significant":
        return "#EF4444";
      default:
        return "#6B7280";
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Upload")}
            style={styles.backButton}
          >
            <Text style={styles.backIcon}>←</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Skin Analysis Results</Text>
        </View>

        {/* Report Header */}
        <View style={styles.reportHeader}>
          <Text style={styles.reportTitle}>Your Personalized Skin Report</Text>
          <Text style={styles.reportSubtitle}>
            Powered by Advanced AI Analysis
          </Text>
        </View>

        {/* AI Description */}
        <View style={styles.descriptionCard}>
          <Text style={styles.descriptionText}>
            {transformedResult.descriptionAI}
          </Text>
        </View>

        {/* Overall Confidence */}
        <View style={styles.confidenceCard}>
          <Text style={styles.confidenceLabel}>
            Overall AI Confidence in Analysis:
          </Text>
          <View style={styles.confidenceRow}>
            <View style={styles.confidenceCircle}>
              <Text style={styles.confidencePercentage}>
                {Math.round(transformedResult.confidenceOverall * 100)}%
              </Text>
            </View>
            <Text style={styles.confidenceValue}>
              {(transformedResult.confidenceOverall * 100).toFixed(1)}%
            </Text>
          </View>
        </View>

        {/* Conditions Identified */}
        <View style={styles.conditionsSection}>
          <Text style={styles.sectionTitle}>
            Potential Conditions Identified
          </Text>

          {transformedResult.conditionsIdentified.map((condition, index) => (
            <TouchableOpacity
              key={index}
              style={styles.conditionCard}
              activeOpacity={0.7}
            >
              <View style={styles.conditionHeader}>
                <View style={styles.conditionLeft}>
                  <View style={styles.conditionIcon}>
                    <Text style={styles.conditionIconText}>🔬</Text>
                  </View>
                  <View style={styles.conditionInfo}>
                    <Text style={styles.conditionName}>{condition.name}</Text>
                    <Text style={styles.conditionDescription}>
                      {condition.description}
                    </Text>
                  </View>
                </View>
                <Text style={styles.chevron}>›</Text>
              </View>

              <View style={styles.conditionDetails}>
                <View style={styles.severityBadge}>
                  <Text
                    style={[
                      styles.severityText,
                      { color: getSeverityColor(condition.severity) },
                    ]}
                  >
                    {condition.severity} Severity
                  </Text>
                </View>

                <View style={styles.confidenceBar}>
                  <View style={styles.confidenceBarTrack}>
                    <View
                      style={[
                        styles.confidenceBarFill,
                        {
                          width: `${condition.confidence * 100}%`,
                          backgroundColor: getSeverityColor(condition.severity),
                        },
                      ]}
                    />
                  </View>
                  <Text style={styles.confidenceBarText}>
                    {Math.round(condition.confidence * 100)}% confidence
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Action Buttons */}
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.primaryButton} activeOpacity={0.8}>
            <Text style={styles.primaryButtonText}>Book a Consultation</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryButton} activeOpacity={0.8}>
            <Text style={styles.secondaryButtonText}>
              Learn More About Skin Health
            </Text>
          </TouchableOpacity>
        </View>

        {/* Disclaimer */}
        <View style={styles.disclaimer}>
          <Text style={styles.disclaimerIcon}>⚠️</Text>
          <Text style={styles.disclaimerText}>
            <Text style={styles.disclaimerBold}>Important: </Text>
            This analysis is for informational purposes only and should not
            replace professional medical advice. Please consult a dermatologist
            for proper diagnosis and treatment.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F8FF",
  },
  scrollContent: {
    paddingBottom: 40,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#E2E8F0",
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  backIcon: {
    fontSize: 24,
    color: "#1E293B",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1E293B",
    marginLeft: 12,
  },
  reportHeader: {
    padding: 24,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#E2E8F0",
  },
  reportTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1E293B",
    marginBottom: 6,
  },
  reportSubtitle: {
    fontSize: 14,
    color: "#64748B",
  },
  descriptionCard: {
    margin: 20,
    marginBottom: 16,
    padding: 16,
    backgroundColor: "#E0F2FE",
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: "#0EA5E9",
  },
  descriptionText: {
    fontSize: 14,
    color: "#0C4A6E",
    lineHeight: 20,
  },
  confidenceCard: {
    marginHorizontal: 20,
    marginBottom: 24,
    padding: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  confidenceLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#64748B",
    marginBottom: 16,
  },
  confidenceRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  confidenceCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#10B981",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20,
  },
  confidencePercentage: {
    fontSize: 24,
    fontWeight: "700",
    color: "#FFFFFF",
  },
  confidenceValue: {
    fontSize: 32,
    fontWeight: "700",
    color: "#1E293B",
  },
  conditionsSection: {
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1E293B",
    marginBottom: 16,
  },
  conditionCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  conditionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  conditionLeft: {
    flexDirection: "row",
    flex: 1,
  },
  conditionIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#F0F8FF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  conditionIconText: {
    fontSize: 24,
  },
  conditionInfo: {
    flex: 1,
  },
  conditionName: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1E293B",
    marginBottom: 4,
  },
  conditionDescription: {
    fontSize: 13,
    color: "#64748B",
    lineHeight: 18,
  },
  chevron: {
    fontSize: 24,
    color: "#CBD5E1",
    marginLeft: 8,
  },
  conditionDetails: {
    marginTop: 8,
  },
  severityBadge: {
    alignSelf: "flex-start",
    marginBottom: 12,
  },
  severityText: {
    fontSize: 13,
    fontWeight: "600",
  },
  confidenceBar: {
    marginTop: 4,
  },
  confidenceBarTrack: {
    height: 6,
    backgroundColor: "#E2E8F0",
    borderRadius: 3,
    overflow: "hidden",
  },
  confidenceBarFill: {
    height: "100%",
    borderRadius: 3,
  },
  confidenceBarText: {
    fontSize: 12,
    color: "#64748B",
    marginTop: 6,
  },
  actionButtons: {
    paddingHorizontal: 20,
    marginTop: 24,
    gap: 12,
  },
  primaryButton: {
    backgroundColor: "#10B981",
    borderRadius: 16,
    padding: 18,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },
  primaryButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFFFFF",
  },
  secondaryButton: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 18,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#E2E8F0",
  },
  secondaryButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#475569",
  },
  disclaimer: {
    flexDirection: "row",
    margin: 20,
    padding: 16,
    backgroundColor: "#FFF3CD",
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: "#FFC107",
  },
  disclaimerIcon: {
    fontSize: 18,
    marginRight: 12,
    marginTop: 2,
  },
  disclaimerText: {
    flex: 1,
    fontSize: 13,
    color: "#664D03",
    lineHeight: 18,
  },
  disclaimerBold: {
    fontWeight: "700",
  },
});
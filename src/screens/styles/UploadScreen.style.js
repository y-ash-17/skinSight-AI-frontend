import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F8FF",
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
    fontWeight: "700",
    color: "#1E293B",
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: "#64748B",
    lineHeight: 24,
  },
  instructionsContainer: {
    backgroundColor: "#E0F2FE",
    borderLeftWidth: 4,
    borderLeftColor: "#0EA5E9",
    borderRadius: 12,
    padding: 16,
    marginBottom: 32,
  },
  instructionsTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#0C4A6E",
    marginBottom: 8,
  },
  instructionsText: {
    fontSize: 14,
    color: "#0C4A6E",
    lineHeight: 20,
  },
  visualGuideContainer: {
    marginBottom: 32,
  },
  visualGuideTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1E293B",
    marginBottom: 16,
  },
  guideGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 16,
  },
  guideItem: {
    flex: 1,
    alignItems: "center",
  },
  guideImagePlaceholder: {
    width: "100%",
    aspectRatio: 1,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  goodExample: {
    backgroundColor: "#D1FAE5",
    borderWidth: 2,
    borderColor: "#10B981",
  },
  badExample: {
    backgroundColor: "#FEE2E2",
    borderWidth: 2,
    borderColor: "#EF4444",
  },
  guideEmoji: {
    fontSize: 40,
    marginBottom: 8,
  },
  guideLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1E293B",
  },
  guideDescription: {
    fontSize: 13,
    color: "#64748B",
    textAlign: "center",
    lineHeight: 18,
  },
  buttonsContainer: {
    gap: 16,
  },
  takePhotoButton: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },
  uploadButton: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 20,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#E2E8F0",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  cameraIcon: {
    fontSize: 24,
    marginRight: 12,
  },
  galleryIcon: {
    fontSize: 24,
    marginRight: 12,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1E293B",
  },
  buttonSubtext: {
    fontSize: 13,
    color: "#64748B",
    marginTop: 4,
  },
});
import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F8FF',
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    paddingVertical: 48,
  },
  logoContainer: {
    marginTop: 32,
    alignItems: 'center',
  },
  brandText: {
    fontSize: 50,
    fontWeight: '700',
    color: '#FF5733',
    lineHeight: 60,
    letterSpacing: -1,
  },
  taglineContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  tagline: {
    fontSize: 24,
    fontWeight: '600',
    color: '#334155',
    textAlign: 'center',
    lineHeight: 34,
  },
  illustrationContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 32,
  },
  illustrationPlaceholder: {
    width: 320,
    height: 320,
    borderRadius: 160,
    backgroundColor: '#E0F2FE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderEmoji: {
    fontSize: 72,
    marginBottom: 8,
  },
  placeholderText: {
    fontSize: 14,
    color: '#64748B',
    marginTop: 8,
  },
  placeholderSubtext: {
    fontSize: 12,
    color: '#94A3B8',
    marginTop: 4,
  },
  illustration: {
    width: width * 0.8,
    height: height * 0.4,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  bottomSection: {
    marginBottom: 28,
  },
  disclaimerContainer: {
    backgroundColor: '#FFF3CD',
    borderLeftWidth: 4,
    borderLeftColor: '#FFC107',
    borderRadius: 8,
    padding: 12,
    marginBottom: 24,
  },
  disclaimerContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  disclaimerIcon: {
    fontSize: 18,
    marginRight: 8,
    marginTop: 2,
  },
  disclaimerText: {
    flex: 1,
    fontSize: 13,
    color: '#664D03',
    lineHeight: 18,
  },
  disclaimerBold: {
    fontWeight: '700',
  },
  createButton: {
    backgroundColor: '#475569',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
    marginTop : 12
  },
  createButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  loginText: {
    color: '#94A3B8',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '500',
  },
});

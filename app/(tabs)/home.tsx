import { IconSymbol } from "@/components/ui/icon-symbol";
import { useTheme } from "@/contexts/ThemeContext";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { useState } from "react";
import { Image, Linking, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const profileImage = require("../../assets/images/profile_portolio.jpg");

export default function HomeScreen() {
  const [showGitHubModal, setShowGitHubModal] = useState(false);
  const [showEmailModal, setShowEmailModal] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const colorScheme = useColorScheme();

  const handleGitHubPress = () => {
    setShowGitHubModal(true);
  };

  const handleEmailPress = () => {
    setShowEmailModal(true);
  };

  const openGitHub = () => {
    setShowGitHubModal(false);
    Linking.openURL('https://github.com/geloyaco');
  };

  const openPersonalEmail = () => {
    setShowEmailModal(false);
    Linking.openURL('mailto:yacomurielangelo@gmail.com');
  };

  const openUniversityEmail = () => {
    setShowEmailModal(false);
    Linking.openURL('mailto:myaco_220000000228@uic.edu.ph');
  };

  // Dynamic styles based on theme
  const dynamicStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDarkMode ? "#1a1a1a" : "#faf7ff",
    },
    header: {
      alignItems: "center",
      paddingTop: 40,
      paddingBottom: 30,
      paddingHorizontal: 20,
      backgroundColor: isDarkMode ? "#2a2a2a" : "#ffffff",
      borderBottomLeftRadius: 30,
      borderBottomRightRadius: 30,
      shadowColor: isDarkMode ? "#000" : "#8b5cf6",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: isDarkMode ? 0.3 : 0.15,
      shadowRadius: 12,
      elevation: 8,
      position: "relative",
    },
    name: {
      fontSize: 28,
      fontWeight: "bold",
      color: isDarkMode ? "#ffffff" : "#1e1b4b",
      textAlign: "center",
      marginBottom: 5,
    },
    title: {
      fontSize: 18,
      color: "#8b5cf6",
      fontWeight: "600",
      textAlign: "center",
      marginBottom: 5,
    },
    subtitle: {
      fontSize: 14,
      color: isDarkMode ? "#a0a0a0" : "#6b7280",
      textAlign: "center",
      marginBottom: 25,
    },
    section: {
      padding: 25,
      backgroundColor: isDarkMode ? "#2a2a2a" : "#ffffff",
      marginHorizontal: 15,
      marginTop: 15,
      borderRadius: 20,
      shadowColor: isDarkMode ? "#000" : "#8b5cf6",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: isDarkMode ? 0.3 : 0.08,
      shadowRadius: 8,
      elevation: 4,
    },
    sectionTitle: {
      fontSize: 20,
      fontWeight: "bold",
      color: isDarkMode ? "#ffffff" : "#1e1b4b",
      marginBottom: 15,
    },
    aboutText: {
      fontSize: 15,
      lineHeight: 24,
      color: isDarkMode ? "#d0d0d0" : "#4b5563",
      textAlign: "justify",
    },
  });

  return (
    <ScrollView style={dynamicStyles.container} showsVerticalScrollIndicator={false}>
      {/* Header Section */}
      <View style={dynamicStyles.header}>
        {/* Theme Toggle Button */}
        <TouchableOpacity style={styles.themeToggle} onPress={toggleTheme}>
          <IconSymbol 
            size={24} 
            name={isDarkMode ? 'sun.max' : 'moon'} 
            color={isDarkMode ? '#fbbf24' : '#1e1b4b'} 
          />
        </TouchableOpacity>
        
        <View style={styles.profileContainer}>
          <Image
            source={profileImage}
            style={styles.profileImage}
            resizeMode="cover"
          />
          <View style={styles.statusIndicator} />
        </View>
        
        <Text style={dynamicStyles.name}>Muriel Angelo M. Yaco</Text>
        <Text style={dynamicStyles.title}>UI/UX Designer & Project Manager</Text>
        <Text style={dynamicStyles.subtitle}>4th Year • BSIT • Creative Problem Solver</Text>
        
        {/* Social Links */}
        <View style={styles.socialContainer}>
          <TouchableOpacity style={styles.socialButton} onPress={handleGitHubPress}>
            <Text style={styles.socialText}>GitHub</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton} onPress={handleEmailPress}>
            <Text style={styles.socialText}>Email</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* About Section */}
      <View style={dynamicStyles.section}>
        <Text style={dynamicStyles.sectionTitle}>About Me</Text>
        <Text style={dynamicStyles.aboutText}>
          I'm a passionate 4th year Information Technology student with a strong focus on 
          UI/UX design, project management, and technical writing. I love creating beautiful, 
          user-friendly interfaces and managing projects from conception to completion. 
          My strength lies in translating complex ideas into clear documentation and 
          intuitive designs that users love.
        </Text>
      </View>

      {/* Skills Section */}
      <View style={dynamicStyles.section}>
        <Text style={dynamicStyles.sectionTitle}>Core Skills & Tools</Text>
        <View style={styles.skillsContainer}>
          <View style={styles.skillRow}>
            <View style={[styles.skillTag, styles.primarySkill]}>
              <Text style={styles.skillText}>Figma</Text>
            </View>
            <View style={[styles.skillTag, styles.primarySkill]}>
              <Text style={styles.skillText}>Canva</Text>
            </View>
            <View style={[styles.skillTag, styles.primarySkill]}>
              <Text style={styles.skillText}>UI/UX Design</Text>
            </View>
          </View>
          <View style={styles.skillRow}>
            <View style={[styles.skillTag, styles.secondarySkill]}>
              <Text style={styles.skillText}>Project Management</Text>
            </View>
            <View style={[styles.skillTag, styles.secondarySkill]}>
              <Text style={styles.skillText}>Technical Writing</Text>
            </View>
          </View>
          <View style={styles.skillRow}>
            <View style={[styles.skillTag, styles.tertiarySkill]}>
              <Text style={styles.skillText}>Monday</Text>
            </View>
            <View style={[styles.skillTag, styles.tertiarySkill]}>
              <Text style={styles.skillText}>ClickUp</Text>
            </View>
            <View style={[styles.skillTag, styles.tertiarySkill]}>
              <Text style={styles.skillText}>Notion</Text>
            </View>
            <View style={[styles.skillTag, styles.tertiarySkill]}>
              <Text style={styles.skillText}>Google Docs</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Call to Action */}
      <View style={styles.ctaSection}>
        <TouchableOpacity style={styles.ctaButton}>
          <Text style={styles.ctaText}>View My Projects</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.secondaryButton} onPress={handleEmailPress}>
          <Text style={styles.secondaryButtonText}>Get In Touch</Text>
        </TouchableOpacity>
      </View>

      {/* GitHub Modal */}
      <Modal
        visible={showGitHubModal}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShowGitHubModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Visit GitHub Profile</Text>
            <Text style={styles.modalText}>
              Would you like to visit my GitHub profile to see my projects and repositories?
            </Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity 
                style={styles.modalCancelButton} 
                onPress={() => setShowGitHubModal(false)}
              >
                <Text style={styles.modalCancelText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.modalConfirmButton} 
                onPress={openGitHub}
              >
                <Text style={styles.modalConfirmText}>Open GitHub</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Email Modal */}
      <Modal
        visible={showEmailModal}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShowEmailModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Choose Email</Text>
            <Text style={styles.modalText}>
              Which email would you like to use to contact me?
            </Text>
            <View style={styles.emailOptions}>
              <TouchableOpacity 
                style={styles.emailOption} 
                onPress={openPersonalEmail}
              >
                <Text style={styles.emailLabel}>Personal Email</Text>
                <Text style={styles.emailAddress}>yacomurielangelo@gmail.com</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.emailOption} 
                onPress={openUniversityEmail}
              >
                <Text style={styles.emailLabel}>University Email</Text>
                <Text style={styles.emailAddress}>myaco_220000000228@uic.edu.ph</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity 
              style={styles.modalCancelButton} 
              onPress={() => setShowEmailModal(false)}
            >
              <Text style={styles.modalCancelText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#faf7ff",
  },
  header: {
    alignItems: "center",
    paddingTop: 40,
    paddingBottom: 30,
    paddingHorizontal: 20,
    backgroundColor: "#ffffff",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    shadowColor: "#8b5cf6",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
    position: "relative",
  },
  themeToggle: {
    position: "absolute",
    top: 15,
    right: 20,
    backgroundColor: "#f3f4f6",
    borderRadius: 20,
    padding: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  profileContainer: {
    position: "relative",
    marginBottom: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: "#8b5cf6",
  },
  statusIndicator: {
    position: "absolute",
    bottom: 5,
    right: 5,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#10b981",
    borderWidth: 3,
    borderColor: "#ffffff",
  },
  name: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1e1b4b",
    textAlign: "center",
    marginBottom: 5,
  },
  title: {
    fontSize: 18,
    color: "#8b5cf6",
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: "#6b7280",
    textAlign: "center",
    marginBottom: 25,
  },
  socialContainer: {
    flexDirection: "row",
    gap: 15,
  },
  socialButton: {
    backgroundColor: "#f3f4f6",
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },
  socialText: {
    color: "#4b5563",
    fontSize: 12,
    fontWeight: "500",
  },
  section: {
    padding: 25,
    backgroundColor: "#ffffff",
    marginHorizontal: 15,
    marginTop: 15,
    borderRadius: 20,
    shadowColor: "#8b5cf6",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1e1b4b",
    marginBottom: 15,
  },
  aboutText: {
    fontSize: 15,
    lineHeight: 24,
    color: "#4b5563",
    textAlign: "justify",
  },
  skillsContainer: {
    gap: 12,
  },
  skillRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  skillTag: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  primarySkill: {
    backgroundColor: "#ede9fe",
    borderWidth: 1,
    borderColor: "#8b5cf6",
  },
  secondarySkill: {
    backgroundColor: "#f0fdf4",
    borderWidth: 1,
    borderColor: "#10b981",
  },
  tertiarySkill: {
    backgroundColor: "#fef3c7",
    borderWidth: 1,
    borderColor: "#f59e0b",
  },
  skillText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#1e1b4b",
  },
  ctaSection: {
    padding: 25,
    alignItems: "center",
    gap: 15,
  },
  ctaButton: {
    backgroundColor: "#8b5cf6",
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 25,
    width: "100%",
    alignItems: "center",
    shadowColor: "#8b5cf6",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  ctaText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
  secondaryButton: {
    backgroundColor: "transparent",
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "#8b5cf6",
    width: "100%",
    alignItems: "center",
  },
  secondaryButtonText: {
    color: "#8b5cf6",
    fontSize: 16,
    fontWeight: "600",
  },
  // Modal Styles
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  modalContent: {
    backgroundColor: "#ffffff",
    borderRadius: 20,
    padding: 25,
    width: "100%",
    maxWidth: 350,
    shadowColor: "#8b5cf6",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    elevation: 10,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1e1b4b",
    textAlign: "center",
    marginBottom: 15,
  },
  modalText: {
    fontSize: 15,
    color: "#4b5563",
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 25,
  },
  modalButtons: {
    flexDirection: "row",
    gap: 15,
  },
  modalCancelButton: {
    flex: 1,
    backgroundColor: "#f3f4f6",
    paddingVertical: 12,
    borderRadius: 15,
    alignItems: "center",
  },
  modalCancelText: {
    color: "#6b7280",
    fontSize: 14,
    fontWeight: "600",
  },
  modalConfirmButton: {
    flex: 1,
    backgroundColor: "#8b5cf6",
    paddingVertical: 12,
    borderRadius: 15,
    alignItems: "center",
  },
  modalConfirmText: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "600",
  },
  // Email Options Styles
  emailOptions: {
    gap: 12,
    marginBottom: 20,
  },
  emailOption: {
    backgroundColor: "#f8fafc",
    borderWidth: 1,
    borderColor: "#e2e8f0",
    borderRadius: 12,
    padding: 15,
    alignItems: "center",
  },
  emailLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1e1b4b",
    marginBottom: 4,
  },
  emailAddress: {
    fontSize: 12,
    color: "#6b7280",
    textAlign: "center",
  },
});

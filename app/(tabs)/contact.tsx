import { IconSymbol } from "@/components/ui/icon-symbol";
import { useTheme } from "@/contexts/ThemeContext";
import { useState } from "react";
import { Linking, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: string;
  color: string;
  description: string;
}

export default function ContactScreen() {
  const [showEmailModal, setShowEmailModal] = useState(false);
  const { isDarkMode } = useTheme();

  const socialLinks: SocialLink[] = [
    {
      id: 'facebook',
      name: 'Facebook',
      url: 'https://www.facebook.com/angelo.yacoii',
      icon: 'facebook',
      color: '#1877F2',
      description: 'Connect with me on Facebook'
    },
    {
      id: 'instagram',
      name: 'Instagram',
      url: 'https://www.instagram.com/a.xgelo/',
      icon: 'instagram',
      color: '#E4405F',
      description: 'Follow me on Instagram'
    },
    {
      id: 'email',
      name: 'Email',
      url: 'mailto:yacomurielangelo@gmail.com',
      icon: 'email',
      color: '#8b5cf6',
      description: 'Send me an email'
    },
    {
      id: 'github',
      name: 'GitHub',
      url: 'https://github.com/geloyaco',
      icon: 'github',
      color: '#333333',
      description: 'View my code repositories'
    }
  ];

  const handleSocialPress = (social: SocialLink) => {
    if (social.id === 'email') {
      setShowEmailModal(true);
    } else {
      Linking.openURL(social.url);
    }
  };

  const sendEmail = () => {
    setShowEmailModal(false);
    Linking.openURL('mailto:yacomurielangelo@gmail.com');
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
    },
    title: {
      fontSize: 28,
      fontWeight: "bold",
      color: isDarkMode ? "#ffffff" : "#1e1b4b",
      textAlign: "center",
      marginBottom: 5,
    },
    subtitle: {
      fontSize: 16,
      color: isDarkMode ? "#a0a0a0" : "#6b7280",
      textAlign: "center",
      marginBottom: 20,
    },
    contactCard: {
      backgroundColor: isDarkMode ? "#2a2a2a" : "#ffffff",
      marginHorizontal: 15,
      marginTop: 15,
      borderRadius: 20,
      padding: 25,
      shadowColor: isDarkMode ? "#000" : "#8b5cf6",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: isDarkMode ? 0.3 : 0.08,
      shadowRadius: 8,
      elevation: 4,
    },
    cardTitle: {
      fontSize: 20,
      fontWeight: "bold",
      color: isDarkMode ? "#ffffff" : "#1e1b4b",
      marginBottom: 15,
      textAlign: "center",
    },
    cardDescription: {
      fontSize: 15,
      color: isDarkMode ? "#d0d0d0" : "#4b5563",
      lineHeight: 22,
      textAlign: "center",
      marginBottom: 25,
    },
    socialGrid: {
      gap: 15,
    },
    socialButton: {
      backgroundColor: isDarkMode ? "#3a3a3a" : "#f8fafc",
      borderRadius: 15,
      padding: 20,
      flexDirection: "row",
      alignItems: "center",
      borderWidth: 1,
      borderColor: isDarkMode ? "#4a4a4a" : "#e2e8f0",
    },
    socialIcon: {
      width: 50,
      height: 50,
      borderRadius: 25,
      justifyContent: "center",
      alignItems: "center",
      marginRight: 15,
    },
    socialInfo: {
      flex: 1,
    },
    socialName: {
      fontSize: 16,
      fontWeight: "600",
      color: isDarkMode ? "#ffffff" : "#1e1b4b",
      marginBottom: 4,
    },
    socialDescription: {
      fontSize: 12,
      color: isDarkMode ? "#a0a0a0" : "#6b7280",
    },
    modalOverlay: {
      flex: 1,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
    },
    modalContent: {
      backgroundColor: isDarkMode ? "#2a2a2a" : "#ffffff",
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
      color: isDarkMode ? "#ffffff" : "#1e1b4b",
      textAlign: "center",
      marginBottom: 15,
    },
    modalText: {
      fontSize: 15,
      color: isDarkMode ? "#d0d0d0" : "#4b5563",
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
      backgroundColor: isDarkMode ? "#3a3a3a" : "#f3f4f6",
      paddingVertical: 12,
      borderRadius: 15,
      alignItems: "center",
    },
    modalCancelText: {
      color: isDarkMode ? "#ffffff" : "#6b7280",
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
  });

  return (
    <ScrollView style={dynamicStyles.container} showsVerticalScrollIndicator={false}>
      {/* Header Section */}
      <View style={dynamicStyles.header}>
        <Text style={dynamicStyles.title}>Get In Touch</Text>
        <Text style={dynamicStyles.subtitle}>
          Let's connect and create something amazing together
        </Text>
      </View>

      {/* Contact Card */}
      <View style={dynamicStyles.contactCard}>
        <Text style={dynamicStyles.cardTitle}>Connect With Me</Text>
        <Text style={dynamicStyles.cardDescription}>
          I'm always open to discussing new opportunities, creative projects, 
          or just having a chat about technology and design. Feel free to reach out!
        </Text>
        
        <View style={dynamicStyles.socialGrid}>
          {socialLinks.map((social) => (
            <TouchableOpacity
              key={social.id}
              style={dynamicStyles.socialButton}
              onPress={() => handleSocialPress(social)}
            >
              <View style={[dynamicStyles.socialIcon, { backgroundColor: social.color }]}>
                <IconSymbol 
                  size={24} 
                  name={social.icon as any} 
                  color="#ffffff" 
                />
              </View>
              <View style={dynamicStyles.socialInfo}>
                <Text style={dynamicStyles.socialName}>{social.name}</Text>
                <Text style={dynamicStyles.socialDescription}>{social.description}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Email Modal */}
      <Modal
        visible={showEmailModal}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShowEmailModal(false)}
      >
        <View style={dynamicStyles.modalOverlay}>
          <View style={dynamicStyles.modalContent}>
            <Text style={dynamicStyles.modalTitle}>Send Email</Text>
            <Text style={dynamicStyles.modalText}>
              Would you like to send me an email? I'll get back to you as soon as possible!
            </Text>
            <View style={dynamicStyles.modalButtons}>
              <TouchableOpacity 
                style={dynamicStyles.modalCancelButton} 
                onPress={() => setShowEmailModal(false)}
              >
                <Text style={dynamicStyles.modalCancelText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={dynamicStyles.modalConfirmButton} 
                onPress={sendEmail}
              >
                <Text style={dynamicStyles.modalConfirmText}>Send Email</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}

import { useTheme } from "@/contexts/ThemeContext";
import { useState } from "react";
import { Image, Linking, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

// Import document images
const softwareEngineeringDoc = require("../../assets/images/softwareengineering_document.png");
const technicalWritingDoc = require("../../assets/images/technicalwriting_document.png");
const capstoneDoc = require("../../assets/images/capstone_document.png");

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  image: string;
  github: string;
  status: string;
  role: string;
}

interface Document {
  id: number;
  title: string;
  subject: string;
  description: string;
  image: any;
  type: string;
  semester: string;
  status: string;
}

export default function ProjectsScreen() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeTab, setActiveTab] = useState<'github' | 'school'>('github');
  const { isDarkMode } = useTheme();

  const projects = [
    {
      id: 1,
      title: "JRU LMS Platform",
      category: "Full-Stack Development",
      description: "Learning Management System for Jose Rizal University with user-friendly interface design and comprehensive project management.",
      technologies: ["Python", "Django", "Figma", "UI/UX Design"],
      image: "📚",
      github: "https://github.com/geloyaco/JRU-Backend",
      status: "Completed",
    },
    {
      id: 2,
      title: "Financial Tracker App",
      category: "Mobile Development",
      description: "Personal finance management application with intuitive design and comprehensive tracking features.",
      technologies: ["CSS", "JavaScript", "Figma", "Canva"],
      image: "💰",
      github: "https://github.com/geloyaco/FinancialTracker",
      status: "Archived",
    },
    {
      id: 3,
      title: "KaffeHaus Coffee Shop",
      category: "Mobile Development",
      description: "Coffee shop management system with modern interface design and efficient project workflow management.",
      technologies: ["C++", "Mobile Dev", "Figma"],
      image: "☕",
      github: "https://github.com/geloyaco/KaffeHaus",
      status: "Completed",
    },
    {
      id: 4,
      title: "LabClass Backend",
      category: "Backend Development",
      description: "Laboratory class management system with clean API design and comprehensive documentation.",
      technologies: ["Python", "API Design"],
      image: "🔬",
      github: "https://github.com/geloyaco/LabClass_BackEnd",
      status: "Completed",
    },
    {
      id: 5,
      title: "Dart Coffee Shop",
      category: "Mobile Development",
      description: "Preliminary mobile development project showcasing UI/UX design principles and project management skills.",
      technologies: ["Dart", "Flutter", "Figma"],
      image: "📱",
      github: "https://github.com/geloyaco/prelim_project_dart-coffee-shop",
      status: "Completed",
    }
  ];

  const schoolProjects: Document[] = [
    {
      id: 1,
      title: "Software Engineering Document",
      subject: "Software Engineering",
      description: "Comprehensive software engineering documentation covering both implementation and documentation aspects, including system design, requirements analysis, and project management methodologies.",
      image: softwareEngineeringDoc,
      type: "Academic Document",
      semester: "3rd Year",
      status: "Completed"
    },
    {
      id: 2,
      title: "Technical Writing Document",
      subject: "Technical Writing",
      description: "Research document showcasing technical writing skills, documentation methodologies, and technical communication expertise in academic research context.",
      image: technicalWritingDoc,
      type: "Research Document",
      semester: "3rd Year",
      status: "Completed"
    },
    {
      id: 3,
      title: "Capstone Project Document",
      subject: "Capstone Project",
      description: "Final capstone project documentation demonstrating comprehensive research, development, and implementation of a complete system for graduation requirements.",
      image: capstoneDoc,
      type: "Capstone Document",
      semester: "4th Year",
      status: "In Progress"
    }
  ];

  const openProject = (project: Project) => {
    setSelectedProject(project);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  const openGitHub = (url: string) => {
    Linking.openURL(url);
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
    tabContainer: {
      flexDirection: "row",
      backgroundColor: isDarkMode ? "#3a3a3a" : "#f3f4f6",
      borderRadius: 15,
      padding: 4,
      marginHorizontal: 15,
      marginTop: 15,
    },
    tabButton: {
      flex: 1,
      paddingVertical: 12,
      paddingHorizontal: 20,
      borderRadius: 12,
      alignItems: "center",
    },
    activeTab: {
      backgroundColor: "#8b5cf6",
    },
    inactiveTab: {
      backgroundColor: "transparent",
    },
    tabText: {
      fontSize: 14,
      fontWeight: "600",
    },
    activeTabText: {
      color: "#ffffff",
    },
    inactiveTabText: {
      color: isDarkMode ? "#a0a0a0" : "#6b7280",
    },
    projectCard: {
      backgroundColor: isDarkMode ? "#2a2a2a" : "#ffffff",
      marginHorizontal: 15,
      marginTop: 15,
      borderRadius: 20,
      padding: 20,
      shadowColor: isDarkMode ? "#000" : "#8b5cf6",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: isDarkMode ? 0.3 : 0.08,
      shadowRadius: 8,
      elevation: 4,
    },
    projectTitle: {
      fontSize: 20,
      fontWeight: "bold",
      color: isDarkMode ? "#ffffff" : "#1e1b4b",
      marginBottom: 8,
    },
    projectCategory: {
      fontSize: 14,
      color: "#8b5cf6",
      fontWeight: "600",
      marginBottom: 12,
    },
    projectDescription: {
      fontSize: 14,
      color: isDarkMode ? "#d0d0d0" : "#4b5563",
      lineHeight: 20,
      marginBottom: 15,
    },
    techContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
      gap: 8,
      marginBottom: 15,
    },
    techTag: {
      backgroundColor: isDarkMode ? "#3a3a3a" : "#ede9fe",
      paddingHorizontal: 12,
      paddingVertical: 6,
      borderRadius: 15,
      borderWidth: 1,
      borderColor: "#8b5cf6",
    },
    techText: {
      fontSize: 11,
      fontWeight: "600",
      color: isDarkMode ? "#ffffff" : "#1e1b4b",
    },
    projectFooter: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    statusBadge: {
      paddingHorizontal: 12,
      paddingVertical: 6,
      borderRadius: 15,
    },
    statusText: {
      fontSize: 11,
      fontWeight: "600",
    },
    viewButton: {
      backgroundColor: "#8b5cf6",
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderRadius: 15,
    },
    viewButtonText: {
      color: "#ffffff",
      fontSize: 12,
      fontWeight: "600",
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
      maxWidth: 400,
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
      fontSize: 22,
      fontWeight: "bold",
      color: isDarkMode ? "#ffffff" : "#1e1b4b",
      textAlign: "center",
      marginBottom: 10,
    },
    modalCategory: {
      fontSize: 16,
      color: "#8b5cf6",
      fontWeight: "600",
      textAlign: "center",
      marginBottom: 15,
    },
    modalDescription: {
      fontSize: 15,
      color: isDarkMode ? "#d0d0d0" : "#4b5563",
      lineHeight: 22,
      marginBottom: 20,
    },
    modalButtons: {
      flexDirection: "row",
      gap: 15,
    },
    modalButton: {
      flex: 1,
      backgroundColor: "#8b5cf6",
      paddingVertical: 12,
      borderRadius: 15,
      alignItems: "center",
    },
    modalButtonText: {
      color: "#ffffff",
      fontSize: 14,
      fontWeight: "600",
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
    documentCard: {
      backgroundColor: isDarkMode ? "#2a2a2a" : "#ffffff",
      marginHorizontal: 15,
      marginTop: 15,
      borderRadius: 20,
      padding: 20,
      shadowColor: isDarkMode ? "#000" : "#8b5cf6",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: isDarkMode ? 0.3 : 0.08,
      shadowRadius: 8,
      elevation: 4,
    },
    documentImage: {
      width: "100%",
      height: 200,
      borderRadius: 15,
      marginBottom: 15,
      resizeMode: "cover",
    },
    documentTitle: {
      fontSize: 18,
      fontWeight: "bold",
      color: isDarkMode ? "#ffffff" : "#1e1b4b",
      marginBottom: 8,
    },
    documentSubject: {
      fontSize: 14,
      color: "#8b5cf6",
      fontWeight: "600",
      marginBottom: 8,
    },
    documentDescription: {
      fontSize: 14,
      color: isDarkMode ? "#d0d0d0" : "#4b5563",
      lineHeight: 20,
      marginBottom: 15,
    },
    documentFooter: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    documentType: {
      fontSize: 12,
      color: isDarkMode ? "#a0a0a0" : "#6b7280",
      fontStyle: "italic",
    },
    viewDocumentButton: {
      backgroundColor: "#8b5cf6",
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderRadius: 15,
    },
    viewDocumentButtonText: {
      color: "#ffffff",
      fontSize: 12,
      fontWeight: "600",
    },
    documentModalContent: {
      backgroundColor: isDarkMode ? "#2a2a2a" : "#ffffff",
      borderRadius: 20,
      padding: 20,
      width: "100%",
      maxWidth: 400,
      maxHeight: "90%",
      shadowColor: "#8b5cf6",
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.25,
      shadowRadius: 20,
      elevation: 10,
    },
    documentModalImage: {
      width: "100%",
      height: 300,
      borderRadius: 15,
      marginBottom: 15,
      resizeMode: "contain",
    },
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return { backgroundColor: "#10b981", color: "#ffffff" };
      case "In Progress":
        return { backgroundColor: "#f59e0b", color: "#ffffff" };
      case "Archived":
        return { backgroundColor: "#6b7280", color: "#ffffff" };
      default:
        return { backgroundColor: "#8b5cf6", color: "#ffffff" };
    }
  };

  return (
    <ScrollView style={dynamicStyles.container} showsVerticalScrollIndicator={false}>
      {/* Header Section */}
      <View style={dynamicStyles.header}>
        <Text style={dynamicStyles.title}>My Projects</Text>
        <Text style={dynamicStyles.subtitle}>
          {activeTab === 'github' 
            ? 'GitHub Repositories • All projects available on my GitHub profile'
            : 'Academic Documents • School projects and academic work'
          }
        </Text>
      </View>

      {/* Tab Navigation */}
      <View style={dynamicStyles.tabContainer}>
        <TouchableOpacity
          style={[
            dynamicStyles.tabButton,
            activeTab === 'github' ? dynamicStyles.activeTab : dynamicStyles.inactiveTab
          ]}
          onPress={() => setActiveTab('github')}
        >
          <Text style={[
            dynamicStyles.tabText,
            activeTab === 'github' ? dynamicStyles.activeTabText : dynamicStyles.inactiveTabText
          ]}>
            GitHub Projects
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            dynamicStyles.tabButton,
            activeTab === 'school' ? dynamicStyles.activeTab : dynamicStyles.inactiveTab
          ]}
          onPress={() => setActiveTab('school')}
        >
          <Text style={[
            dynamicStyles.tabText,
            activeTab === 'school' ? dynamicStyles.activeTabText : dynamicStyles.inactiveTabText
          ]}>
            School Projects
          </Text>
        </TouchableOpacity>
      </View>

      {/* Content based on active tab */}
      {activeTab === 'github' ? (
        /* GitHub Projects List */
        projects.map((project) => (
        <View key={project.id} style={dynamicStyles.projectCard}>
          <View style={styles.projectHeader}>
            <Text style={styles.projectEmoji}>{project.image}</Text>
            <View style={styles.projectInfo}>
              <Text style={dynamicStyles.projectTitle}>{project.title}</Text>
              <Text style={dynamicStyles.projectCategory}>{project.category}</Text>
            </View>
          </View>
          
          <Text style={dynamicStyles.projectDescription}>{project.description}</Text>
          
          <View style={dynamicStyles.techContainer}>
            {project.technologies.map((tech, index) => (
              <View key={index} style={dynamicStyles.techTag}>
                <Text style={dynamicStyles.techText}>{tech}</Text>
              </View>
            ))}
          </View>
          
          <View style={dynamicStyles.projectFooter}>
            <View style={[dynamicStyles.statusBadge, getStatusColor(project.status)]}>
              <Text style={[dynamicStyles.statusText, { color: getStatusColor(project.status).color }]}>
                {project.status}
              </Text>
            </View>
            <TouchableOpacity 
              style={dynamicStyles.viewButton}
              onPress={() => openProject(project)}
            >
              <Text style={dynamicStyles.viewButtonText}>View Details</Text>
            </TouchableOpacity>
          </View>
        </View>
        ))
      ) : (
        /* School Projects List */
        schoolProjects.map((document) => (
          <View key={document.id} style={dynamicStyles.documentCard}>
            <Image
              source={document.image}
              style={dynamicStyles.documentImage}
            />
            <Text style={dynamicStyles.documentTitle}>{document.title}</Text>
            <Text style={dynamicStyles.documentSubject}>{document.subject}</Text>
            <Text style={dynamicStyles.documentDescription}>{document.description}</Text>
            
            <View style={dynamicStyles.documentFooter}>
              <Text style={dynamicStyles.documentType}>
                {document.type} • {document.semester}
              </Text>
              <View style={[dynamicStyles.statusBadge, getStatusColor(document.status)]}>
                <Text style={[dynamicStyles.statusText, { color: getStatusColor(document.status).color }]}>
                  {document.status}
                </Text>
              </View>
            </View>
          </View>
        ))
      )}

      {/* Project Detail Modal */}
      <Modal
        visible={selectedProject !== null}
        transparent={true}
        animationType="fade"
        onRequestClose={closeProject}
      >
        <View style={dynamicStyles.modalOverlay}>
          <View style={dynamicStyles.modalContent}>
            {selectedProject && (
              <>
                <Text style={styles.modalEmoji}>{selectedProject.image}</Text>
                <Text style={dynamicStyles.modalTitle}>{selectedProject.title}</Text>
                <Text style={dynamicStyles.modalCategory}>{selectedProject.category}</Text>
                <Text style={dynamicStyles.modalDescription}>{selectedProject.description}</Text>
                
                <View style={styles.modalTechContainer}>
                  <Text style={[styles.modalTechTitle, { color: isDarkMode ? "#ffffff" : "#1e1b4b" }]}>
                    Technologies Used:
                  </Text>
                  <View style={dynamicStyles.techContainer}>
                    {selectedProject.technologies.map((tech: string, index: number) => (
                      <View key={index} style={dynamicStyles.techTag}>
                        <Text style={dynamicStyles.techText}>{tech}</Text>
                      </View>
                    ))}
                  </View>
                </View>
                
                <View style={dynamicStyles.modalButtons}>
                  <TouchableOpacity 
                    style={dynamicStyles.modalCancelButton} 
                    onPress={closeProject}
                  >
                    <Text style={dynamicStyles.modalCancelText}>Close</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={dynamicStyles.modalButton} 
                    onPress={() => openGitHub(selectedProject.github)}
                  >
                    <Text style={dynamicStyles.modalButtonText}>View on GitHub</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </View>
        </View>
      </Modal>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  projectHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  projectEmoji: {
    fontSize: 32,
    marginRight: 15,
  },
  projectInfo: {
    flex: 1,
  },
  modalEmoji: {
    fontSize: 48,
    textAlign: "center",
    marginBottom: 15,
  },
  modalTechContainer: {
    marginBottom: 20,
  },
  modalTechTitle: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 10,
  },
});

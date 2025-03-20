import { Document, Page, Text, View, StyleSheet, Image } from "@react-pdf/renderer";

// Logo path should start from the public directory
const logo = '/logobat.webp'; // Correct path to the logo

const MyPDFDocument = ({ content }) => {
  const styles = StyleSheet.create({
    page: { flexDirection: "column", padding: 20 },
    section: { margin: 10, padding: 10, fontSize: 12 },
    heading: { fontSize: 20, fontWeight: "bold", marginBottom: 10, color: '#152765' },
    paragraph: { fontSize: 12, marginBottom: 8 },
    logo: { width: 100, height: 50, marginBottom: 20 }, // Adjust the size as needed
  });

  return (
    <Document>
      <Page style={styles.page}>
        <View style={{ alignItems: "center", marginBottom: 20 }}>
          <Image style={styles.logo} src={logo} /> {/* Use the logo variable */}
        </View>
        <View style={styles.section}>
          <Text style={styles.heading}>Summary</Text>
          <Text style={styles.paragraph}>{content.summary}</Text>

          <Text style={styles.heading}>Objectives and Target Group</Text>
          <Text style={styles.paragraph}>{content.objectives}</Text>

          <Text style={styles.heading}>Course Content</Text>
          <Text style={styles.paragraph}>{content.courseContent}</Text>
        </View>
      </Page>
    </Document>
  );
};

export default MyPDFDocument;

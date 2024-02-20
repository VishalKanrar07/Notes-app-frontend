import { Box, Heading, Text } from "@chakra-ui/react";
import note from "../assets/note.jpg";

const Homepage = () => {
  return (
    <Box padding={20} textAlign={"center"}>
      <Heading mt={1} size={"3xl"}>
        Notes App
      </Heading>
      <Text mt={8} paddingLeft={20} paddingRight={20} textAlign={"justify"}>
        Introducing our innovative note-taking application, designed to elevate
        your productivity and organization effortlessly. Our note application is
        crafted with the modern user in mind, providing a seamless and intuitive
        experience for capturing, organizing, and accessing your thoughts,
        ideas, and tasks anytime, anywhere. At the heart of our note application
        lies its simplicity and versatility. With a clean and user-friendly
        interface, jotting down notes becomes a breeze, whether you're
        brainstorming ideas, taking meeting minutes, or simply making a to-do
        list. Our app offers a range of formatting options, allowing you to
        customize your notes to suit your preferences and needs. From bold and
        italic text to bullet points and headings, you have the flexibility to
        structure your notes exactly how you want them. One of the standout
        features of our note application is its synchronization capability
        across multiple devices.
      </Text>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        <img
          src={note}
          alt="Note Image"
          style={{ marginTop: "20px", marginBottom: "20px" }}
        />
      </div>
      <Text mt={8} paddingLeft={20} paddingRight={20} textAlign={"justify"}>
        Furthermore, our note application prioritizes security and privacy,
        ensuring that your sensitive information remains safe and protected.
        With end-to-end encryption and secure cloud storage, you can trust that
        your data is in good hands. Experience the power of efficient
        note-taking with our application, revolutionizing the way you capture
        and organize information in your personal and professional life. Say
        goodbye to scattered thoughts and disorganized notes – with our app,
        staying organized has never been easier.
      </Text>
    </Box>
  );
};

export default Homepage;

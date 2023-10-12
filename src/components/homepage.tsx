import Section from "./section";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/navigation";

const Homepage = () => {
  const router = useRouter();
  return (
    <Section>
      <div id="home" className={styles.appHeader}>
        <div className={styles.body}>
          <Stack direction="row">
            <a href="https://github.com/AlicinaCat" target="_blank"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/alicina-casaburi-4bb875170/" target="_blank"><LinkedInIcon /></a>
          </Stack>
        </div>
        <h1>alicina.se</h1>
        <p>Web developer specialized in frontend.</p>
        <div className={styles.body}>
          <Stack direction="row" spacing={2}>
            <Chip label="About" onClick={() => router.push("#about")} />
            <Chip label="Portfolio" onClick={() => router.push("#portfolio")} />
            <Chip label="Contact" onClick={() => router.push("#contact")} />
          </Stack>
        </div>
      </div>
    </Section>
  );
};

export default Homepage;

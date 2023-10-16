import Section from "./section";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import styles from "@/styles/Home.module.scss";
import { useRouter } from "next/navigation";

const Homepage = () => {
  const router = useRouter();
  return (
    <div id="home">
      <Section>
        <div className={styles.appHeader}>
          <div className={styles.body}>
            <Stack direction="row">
              <a href="https://github.com/AlicinaCat" target="_blank"><GitHubIcon fontSize="large" /></a>
              <a href="https://www.linkedin.com/in/alicina-casaburi-4bb875170/" target="_blank"><LinkedInIcon fontSize="large" /></a>
            </Stack>
          </div>
          <h1>alicina.se</h1>
          <p>Web developer specialized in frontend~</p>
          <div className={styles.body}>
            <Stack direction="row" spacing={2}>
              <Chip className={styles.chip} label="About" onClick={() => router.push("#about")} />
              <Chip className={styles.chip} label="Portfolio" onClick={() => router.push("#portfolio")} />
              <Chip className={styles.chip} label="Contact" onClick={() => router.push("#contact")} />
            </Stack>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Homepage;

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Fade from "@mui/material/Fade";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import styles from "@/styles/Home.module.scss";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Slide from "@mui/material/Slide";

interface Props {
  children: React.ReactNode;
}

const ScrollTop = (props: Props) => {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector("#back-to-top-anchor");

    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

const HideOnScroll = (props: Props) => {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} in={trigger}>
      {children} 
    </Slide>
  );
}

const Navbar = (props: Props) => {
  const { children } = props;
  const router = useRouter();

  return (
    <>
      <HideOnScroll {...props}>
        <AppBar className="navbar">
          <Toolbar>
            <Link href="/#home" className="main-page">alicina.se</Link>

            <Stack direction="row" spacing={2}>
              <Chip
                className={styles.chip}
                label="About"
                onClick={() => router.push("#about")}
              />
              <Chip
                className={styles.chip}
                label="Portfolio"
                onClick={() => router.push("#portfolio")}
              />
              <Chip
                className={styles.chip}
                label="Contact"
                onClick={() => router.push("#contact")}
              />
            </Stack>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar id="back-to-top-anchor" />
      {children}
      <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  );
}

export default Navbar;

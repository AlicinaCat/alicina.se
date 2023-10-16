import Section from "./section";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {

  return (
    <div id="contact">
      <Section background>
        <div>
          <h2>Contact section</h2>
          <h3>Let's Get in Touch!</h3>
          <p>
            Got a burning question, a cool project idea, or just want to chat
            about web development? I'd love to hear from you!
          </p>
          <h3>How To Reach Me</h3>
          <List className="list">
          <a href="mailto:alicina.casaburi@gmail.com" target="_blank">
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <EmailIcon />
              </ListItemIcon>
              <ListItemText primary="Email" />
            </ListItemButton>
          </ListItem>
          </a>
          <a href="https://www.linkedin.com/in/alicina-casaburi-4bb875170/" target="_blank">
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <LinkedInIcon />
              </ListItemIcon>
              <ListItemText primary="Linkedin" />
            </ListItemButton>
          </ListItem>
          </a>
          <a href="https://github.com/AlicinaCat" target="_blank">
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <GitHubIcon />
              </ListItemIcon>
              <ListItemText primary="GitHub" />
            </ListItemButton>
          </ListItem>
            </a>
        </List>
          <p>
            Whether you're a fellow tech enthusiast or a business owner looking
            to revamp your online presence, I'm here to help~!
          </p>
          <h3>Contact Form</h3>
          <p>[Contact Form]</p>
        </div>
      </Section>
    </div>
  );
};

export default Contact;

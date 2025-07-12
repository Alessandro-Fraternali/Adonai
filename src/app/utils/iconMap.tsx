import MenuIcon from "@mui/icons-material/Menu";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { JSX } from "react";

export const iconMap: Record<string, JSX.Element> = {
  menuicon: <MenuIcon />,
  email: <EmailIcon />,
  phone: <PhoneIcon />,
  home: <LocationOnIcon />,
};

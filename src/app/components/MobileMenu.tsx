"use client";

import { Dispatch, SetStateAction } from "react";
import links from "../texts/links.json";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@mui/material/styles";
import { useRouter } from "next/navigation";

interface MobileMenuProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export default function MobileMenu({ open, setOpen }: MobileMenuProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const router = useRouter();

  const handleToggleDrawer = () => {
    setOpen((prev) => !prev);
  };

  const handleNavigation = (href: string) => {
    setOpen(false);
    router.push(href);
  };

  return (
    <>
      {isMobile && (
        <>
          <IconButton
            sx={{ color: "white", marginRight: "20px" }}
            onClick={handleToggleDrawer}
          >
            <MenuIcon fontSize="large" />
          </IconButton>

          <Drawer
            anchor="right"
            open={open}
            onClose={() => setOpen(false)}
            hideBackdrop
            slotProps={{
              backdrop: { style: { display: "none" } },
              root: { style: { zIndex: 90 } },
            }}
            PaperProps={{
              sx: {
                width: "100vw",
                height: "calc(100vh - var(--header-height))",
                top: "var(--header-height)",
                background: "linear-gradient(to right, #4E54BF, #8096E9)",
                color: "white",
                textAlign: "center",
                boxShadow: "none",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              },
            }}
          >
            <List sx={{ gap: "30px", flexGrow: 1 }}>
              {links.map((link) => (
                <ListItem disablePadding key={link.label}>
                  <ListItemButton
                    onClick={() => handleNavigation(link.href)}
                    sx={{
                      textAlign: "center",
                      paddingTop: "20px",
                      paddingBottom: "20px",
                    }}
                  >
                    <ListItemText
                      primary={link.label}
                      primaryTypographyProps={{ fontSize: 20 }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => setOpen(false)}
                  sx={{
                    justifyContent: "center",
                    paddingY: "20px",
                  }}
                >
                  <CloseIcon fontSize="large" />
                </ListItemButton>
              </ListItem>
            </List>
          </Drawer>
        </>
      )}
    </>
  );
}

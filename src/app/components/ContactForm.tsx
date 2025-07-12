"use client";

import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Invio in corso...");

    const res = await fetch("/api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setStatus("Il tuo messaggio è stato inviato!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus("Errore nell'invio. Riprova.");
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ maxWidth: 600, margin: "auto" }}
    >
      <TextField
        fullWidth
        label="Nome completo"
        name="name"
        value={formData.name}
        onChange={handleChange}
        margin="normal"
        required
      />
      <TextField
        fullWidth
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        margin="normal"
        required
      />
      <TextField
        fullWidth
        label="Messaggio"
        name="message"
        multiline
        rows={4}
        value={formData.message}
        onChange={handleChange}
        margin="normal"
        required
      />
      <Box display={"flex"}>
        <Button type="submit" variant="contained" sx={{ mt: 2 }}>
          Invia
        </Button>
        <Typography mt={3} ml={2}>
          {status}
        </Typography>
      </Box>
    </Box>
  );
}

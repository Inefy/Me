import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Typography,
  Paper,
  Grid,
  InputAdornment,
} from '@mui/material';
import { styled } from '@mui/system';
import { motion } from 'framer-motion';
import { AccountCircle, Email, Message } from '@mui/icons-material';

const FormWrapper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: '10px',
}));

const FormTitle = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(2),
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  alignSelf: 'center',
}));

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const successMessageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const isFormValid = formData.name && formData.email && formData.message;

  return (
    <Grid container justifyContent="center" style={{ height: 'calc(100vh - 64px)' }}>
      <Grid item xs={12} sm={8} md={6}>
        <FormWrapper
          elevation={3}
          component={motion.div}
          initial="hidden"
          animate="visible"
          variants={formVariants}
          transition={{ duration: 0.5 }}
        >
          <Container maxWidth="sm">
            <FormTitle variant="h4" gutterBottom>
              Contact Me
            </FormTitle>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                margin="normal"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                margin="normal"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Email />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                fullWidth
                label="Message"
                name="message"
                multiline
                rows={4}
                value={formData.message}
                onChange={handleChange}
                margin="normal"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Message />
                    </InputAdornment>
                  ),
                }}
              />
              <SubmitButton type="submit" variant="contained" color="primary" disabled={!isFormValid}>
                Send Message
              </SubmitButton>
            </form>

            {isSubmitted && (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={successMessageVariants}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Typography variant="h6" color="success.main" align="center" style={{ marginTop: '16px' }}>
                  Message sent successfully!
                </Typography>
              </motion.div>
            )}
          </Container>
        </FormWrapper>
      </Grid>
    </Grid>
  );
};

export default Contact;
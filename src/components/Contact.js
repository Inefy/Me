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
import { useForm, ValidationError } from '@formspree/react';

// Define styles for FormWrapper, FormTitle, and SubmitButton components
const FormWrapper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: '10px',
  marginTop: theme.spacing(2), // Add top margin
  [theme.breakpoints.up('md')]: {
    marginTop: theme.spacing(8), // Increase top margin on medium screens and up
  },
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
  // Integrate Formspree into React form
  const [state, handleSubmit] = useForm("xwkjvjnj");
  // Set initial form data state
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  // Define animation variants for form
  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  // Handle form input change events
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  // Check if the form data is valid
  const isFormValid = formData.name && formData.email && formData.message;

  return (
    <Grid container justifyContent="center" style={{ minHeight: 'calc(100vh - 64px)' }}>
      <Grid item xs={12} sm={10} md={8} lg={6}>
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
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
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
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
              <SubmitButton
                type="submit"
                variant="contained"
                color="primary"
                disabled={!isFormValid || state.submitting}
              >
                Send Message
              </SubmitButton>
            </form>

            {state.succeeded && (
              <Typography
                variant="h6"
                color="success.main"
                align="center"
                style={{ marginTop: '16px' }}
              >
                Message sent successfully!
              </Typography>
            )}
          </Container>
        </FormWrapper>
      </Grid>
    </Grid>
  );
};

export default Contact;

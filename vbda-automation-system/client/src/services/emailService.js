import axios from 'axios';

export const sendInvitation = async (formData) => {
  try {
    const response = await axios.post('/api/email/generate', formData);  // ✅ correct route
    return { message: 'Invitation sent successfully!' };
  } catch (error) {
    console.error('Error sending invitation:', error.response?.data || error.message);
    return { message: 'Failed to send invitation. Please try again.' };
  }
};

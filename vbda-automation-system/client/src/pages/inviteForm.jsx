import { useState } from "react";
import { sendInvitation } from "../services/emailService";

function InviteForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    role: "",
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // Email validation function
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  // Basic email validation regex
    return regex.test(email);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if email is valid
    if (!validateEmail(formData.email)) {
      setError("Please enter a valid email address.");
      return; 
    }

    setError(""); 
    const res = await sendInvitation(formData);
    setMessage(res.message); // Show success message
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Organization"
        value={formData.organization}
        onChange={(e) =>
          setFormData({ ...formData, organization: e.target.value })
        }
        required
      />
      <input
        type="text"
        placeholder="Role"
        value={formData.role}
        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
        required
      />
      <button type="submit">Send Invitation</button>

      {/* Show error message if the email is invalid */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Show success or status message */}
      {message && <p>{message}</p>}
    </form>
  );
}

export default InviteForm;

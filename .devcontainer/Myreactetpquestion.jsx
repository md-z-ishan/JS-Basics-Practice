import { useState } from "react";

function UserProfile() {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto" }}>
      <h2>Edit Profile</h2>

      <form>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={profile.password}
            onChange={handleChange}
          />
        </div>
      </form>

      <hr />

      <h3>Live Profile Preview</h3>
      <p><strong>Name:</strong> {profile.name}</p>
      <p><strong>Email:</strong> {profile.email}</p>
      <p>
        <strong>Password:</strong>{" "}
        {"*".repeat(profile.password.length)}
      </p>
    </div>
  );
}

export default UserProfile;

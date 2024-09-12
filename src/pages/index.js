"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container, Typography, Box, Grid } from "@mui/material";
import logodark from "../../public/Images/logodark.png";
import authwidgets from "../../public/Images/authwidgets.png";
import ButtonOne from "../../src/Components/Common/Button/ButtonOne";
import TextFieldSimple from "../../src/Components/Common/Input/TextFieldSimple";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); // Add loading state

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") setEmail(value);
    else if (name === "password") setPassword(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true); // Set loading to true when submitting

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.message || "Unknown error occurred");
        setLoading(false);
        return;
      }

      const data = await response.json();
      const token = data.token;

      // Save the token to cookies or localStorage
      document.cookie = `token=${token}; path=/; secure; samesite=strict; max-age=3600`;
    localStorage.setItem('userEmail', email); // Save email to localStorage
      console.log("Login successful:", data);
      window.location.href = "/HoverviewLayout"; // Redirect on success
    } catch (error) {
      setError("An error occurred. Please try again.");
      console.error("Error:", error);
    } finally {
      setLoading(false); // Set loading to false after request is complete
    }
  };

  return (
    <Box
      sx={{
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100%",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} lg={6}>
          <Container maxWidth="sm">
            <Box sx={{ paddingTop: { xs: "10px", md: "40px" } }}>
              <Image src={logodark} alt="logo image" width={122} height={32} />
            </Box>
            <Box
              sx={{
                marginTop: { xs: "20px", md: "110px" },
                marginLeft: { xs: "0", md: "60px" },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <Box sx={{ mb: 3 }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: "Poppins-Medium",
                    fontSize: { xs: "1.5rem", md: "2rem" },
                  }}
                >
                  Sign in
                </Typography>
                <Typography
                  sx={{
                    fontSize: "0.875rem",
                    fontFamily: "Poppins-Regular",
                    fontWeight: "400",
                    lineHeight: "1.57",
                    color: "#667085",
                    mt: 1,
                  }}
                >
                  Don't have an account?{" "}
                  <span style={{ color: "#635bff", cursor: "pointer" }}>
                    Sign up
                  </span>
                </Typography>
              </Box>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={10}>
                  <Box sx={{ display: "flex", mb: 1, width: "100%" }}>
                    <TextFieldSimple
                      id="outlined-required"
                      variant="outlined"
                      required={true}
                      label="Email"
                      name="email"
                      autoFocus
                      value={email}
                      onChange={handleInputChange}
                    />
                  </Box>

                  <TextFieldSimple
                    type="password"
                    label="Password"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    placeholder="Enter your password"
                    name="password"
                    value={password}
                    onChange={handleInputChange}
                  />

                  <Typography sx={{ mt: 5 }}>
                    <Link
                      href=""
                      style={{
                        textDecoration: "underlined",
                        color: "#635bff",
                        fontFamily: "Poppins-Regular",
                        transition: "Color 0.3s",
                      }}
                    >
                      Forget password?
                    </Link>
                  </Typography>
                  <Box sx={{ mt: 5 }}>
                    <ButtonOne
                      handleSubmit={handleSubmit}
                      btnText={loading ? "Signing In..." : "Sign In"} // Show loading text
                      disabled={loading}
                    />
                  </Box>
                  <Box>
                    {error && <div style={{ color: "red" }}>{error}</div>}
                  </Box>

                  <Typography
                    sx={{
                      mt: 4,
                      mb: 3,
                      fontFamily: "Poppins-Regular",
                      borderRadius: "8px",
                      fontWeight: "400",
                      padding: "6px 16px",
                      color: "rgb(102, 74, 12)",
                      backgroundColor: "rgb(255, 248, 232)",
                    }}
                  >
                    Use{" "}
                    <span
                      style={{ color: "rgb(102, 74, 12)", fontWeight: "700" }}
                    >
                      sofia@devias.io
                    </span>{" "}
                    with password{" "}
                    <span
                      style={{ color: "rgb(102, 74, 12)", fontWeight: "700" }}
                    >
                      Secret1
                    </span>
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Grid>
        <Grid item xs={12} sm={6} sx={{ padding: 0 }}>
          <Box
            sx={{
              backgroundColor: "black",
              padding: { xs: "20px 10px", sm: "20px 0px" },
              textAlign: "center",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                textAlign: "center",
                color: "white",
                fontFamily: "Poppins-Medium",
                paddingTop: "20px",
                fontSize: { xs: "24px", md: "24px" },
              }}
            >
              Welcome to{" "}
              <span
                style={{
                  color: "rgb(21, 183, 158)",
                  fontFamily: "Poppins-Medium",
                  fontSize: { xs: "24px", md: "24px" },
                }}
              >
                Devias Kit
              </span>
            </Typography>
            <Typography
              variant="body1"
              sx={{
                textAlign: "center",
                color: "white",
                fontFamily: "Poppins-Medium",
                fontSize: { xs: "14px", md: "15px" },
                paddingTop: { xs: "10px", md: "10px" },
              }}
            >
              A professional template that comes with ready-to-use MUI
              components.
            </Typography>
            <Image
              src={authwidgets}
              alt="auth widgets"
              height="100vh"
              width={600}
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;

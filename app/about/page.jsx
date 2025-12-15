"use client";
import React from "react";
import Header from "../components/header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faUsers,
  faTrophy,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";

const About = () => {
  const team = [
    {
      name: "Dr. Sarah Johnson",
      role: "Nutrition Expert",
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop",
      bio: "15+ years in sports nutrition",
    },
    {
      name: "Mike Chen",
      role: "Fitness Trainer",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
      bio: "Certified personal trainer & coach",
    },
    {
      name: "Lisa Rodriguez",
      role: "Wellness Coach",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHQT_CsTXqeXSb9GvdS2IpwqqVsf76_9vaTw&s",
      bio: "Mental health & wellness specialist",
    },
  ];

  return (
    <>
      {/* <Header /> */}

      <main
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #fef3c7 0%, #ffffff 100%)",
        }}
      >
        {/* Hero Section */}
        <section
          style={{
            background: "linear-gradient(135deg, #059669 0%, #10b981 100%)",
            color: "white",
            padding: "4rem 1rem",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <h1
              style={{
                fontSize: "3rem",
                fontWeight: "bold",
                marginBottom: "1rem",
              }}
            >
              About FitLife
            </h1>
            <p
              style={{
                fontSize: "1.25rem",
                marginBottom: "2rem",
                opacity: 0.9,
                maxWidth: "600px",
                margin: "0 auto 2rem",
              }}
            >
              Empowering millions to live healthier, happier lives through
              expert guidance and community support
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section style={{ padding: "4rem 1rem", background: "white" }}>
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            <h2
              style={{
                fontSize: "2.5rem",
                fontWeight: "bold",
                color: "#1f2937",
                marginBottom: "2rem",
              }}
            >
              Our Mission
            </h2>
            <p
              style={{
                fontSize: "1.25rem",
                color: "#6b7280",
                lineHeight: "1.8",
                maxWidth: "800px",
                margin: "0 auto",
              }}
            >
              At FitLife, we believe that everyone deserves access to quality
              health and fitness information. Our mission is to provide
              science-backed nutrition advice, effective workout programs, and
              wellness guidance to help you achieve your health goals.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section style={{ padding: "4rem 1rem", background: "#f9fafb" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <h2
              style={{
                fontSize: "2.5rem",
                fontWeight: "bold",
                color: "#1f2937",
                marginBottom: "3rem",
                textAlign: "center",
              }}
            >
              Our Values
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "2rem",
              }}
            >
              {[
                {
                  icon: faHeart,
                  title: "Health First",
                  description:
                    "Your wellbeing is our top priority in everything we do",
                  color: "#ef4444",
                },
                {
                  icon: faUsers,
                  title: "Community",
                  description:
                    "Building a supportive community of health enthusiasts",
                  color: "#3b82f6",
                },
                {
                  icon: faTrophy,
                  title: "Excellence",
                  description:
                    "Delivering the highest quality content and programs",
                  color: "#f59e0b",
                },
                {
                  icon: faGraduationCap,
                  title: "Education",
                  description:
                    "Empowering through knowledge and evidence-based advice",
                  color: "#8b5cf6",
                },
              ].map((value, index) => (
                <div
                  key={index}
                  style={{
                    background: "white",
                    padding: "2rem",
                    borderRadius: "20px",
                    textAlign: "center",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                  }}
                >
                  <FontAwesomeIcon
                    icon={value.icon}
                    style={{
                      fontSize: "3rem",
                      color: value.color,
                      marginBottom: "1rem",
                    }}
                  />
                  <h3
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "bold",
                      color: "#1f2937",
                      marginBottom: "1rem",
                    }}
                  >
                    {value.title}
                  </h3>
                  <p style={{ color: "#6b7280", lineHeight: "1.6" }}>
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section style={{ padding: "4rem 1rem", background: "white" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <h2
              style={{
                fontSize: "2.5rem",
                fontWeight: "bold",
                color: "#1f2937",
                marginBottom: "3rem",
                textAlign: "center",
              }}
            >
              Meet Our Team
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "2rem",
              }}
            >
              {team.map((member, index) => (
                <div
                  key={index}
                  style={{
                    background: "#f9fafb",
                    padding: "2rem",
                    borderRadius: "20px",
                    textAlign: "center",
                    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                  }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    style={{
                      width: "120px",
                      height: "120px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      marginBottom: "1rem",
                      border: "4px solid #059669",
                    }}
                  />
                  <h3
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "bold",
                      color: "#1f2937",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {member.name}
                  </h3>
                  <p
                    style={{
                      color: "#059669",
                      fontWeight: "bold",
                      marginBottom: "1rem",
                    }}
                  >
                    {member.role}
                  </p>
                  <p style={{ color: "#6b7280", lineHeight: "1.6" }}>
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section
          style={{
            padding: "4rem 1rem",
            background: "#059669",
            color: "white",
          }}
        >
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "2rem",
                textAlign: "center",
              }}
            >
              {[
                { number: "50K+", label: "Happy Members" },
                { number: "1000+", label: "Success Stories" },
                { number: "500+", label: "Expert Articles" },
                { number: "5 Years", label: "Experience" },
              ].map((stat, index) => (
                <div key={index}>
                  <h3
                    style={{
                      fontSize: "3rem",
                      fontWeight: "bold",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {stat.number}
                  </h3>
                  <p style={{ fontSize: "1.1rem", opacity: 0.9 }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;

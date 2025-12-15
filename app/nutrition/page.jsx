"use client";
import React, { useState } from "react";
import Header from "../components/header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAppleAlt,
  faLeaf,
  faClock,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

const Nutrition = () => {
  const [activeTab, setActiveTab] = useState("meal-plans");

  const mealPlans = [
    {
      id: 1,
      title: "Weight Loss Plan",
      calories: "1200-1500 cal",
      duration: "4 weeks",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=300&fit=crop",
    },
    {
      id: 2,
      title: "Muscle Building Plan",
      calories: "2500-3000 cal",
      duration: "6 weeks",
      image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop",
    },
    {
      id: 3,
      title: "Balanced Diet Plan",
      calories: "1800-2200 cal",
      duration: "8 weeks",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop",
    },
  ];

  const superfoods = [
    { name: "Quinoa", benefit: "Complete protein", icon: "🌾" },
    { name: "Blueberries", benefit: "Antioxidants", icon: "🫐" },
    { name: "Salmon", benefit: "Omega-3 fatty acids", icon: "🐟" },
    { name: "Spinach", benefit: "Iron & vitamins", icon: "🥬" },
    { name: "Avocado", benefit: "Healthy fats", icon: "🥑" },
    { name: "Greek Yogurt", benefit: "Probiotics", icon: "🥛" },
  ];

  return (
    <>
      {/* <Header /> */}
      
      <main style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f0fdf4 0%, #ffffff 100%)' }}>
        {/* Hero Section */}
        <section style={{
          background: 'linear-gradient(135deg, #059669 0%, #10b981 100%)',
          color: 'white',
          padding: '4rem 1rem',
          textAlign: 'center'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>
              Nutrition Hub
            </h1>
            <p style={{ fontSize: '1.25rem', marginBottom: '2rem', opacity: 0.9 }}>
              Transform your health with science-backed nutrition plans and expert guidance
            </p>
            <button style={{
              background: 'white',
              color: '#059669',
              padding: '1rem 2rem',
              border: 'none',
              borderRadius: '50px',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
              transition: 'transform 0.3s ease'
            }}>
              Start Your Journey
            </button>
          </div>
        </section>

        {/* Stats Section */}
        <section style={{ padding: '3rem 1rem', background: 'white' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '2rem',
              textAlign: 'center'
            }}>
              {[
                { icon: faAppleAlt, number: "500+", label: "Healthy Recipes", color: "#ef4444" },
                { icon: faLeaf, number: "50+", label: "Superfoods", color: "#22c55e" },
                { icon: faClock, number: "15 min", label: "Quick Meals", color: "#3b82f6" },
                { icon: faUsers, number: "10K+", label: "Happy Users", color: "#a855f7" },
              ].map((stat, index) => (
                <div key={index} style={{ padding: '1.5rem' }}>
                  <FontAwesomeIcon 
                    icon={stat.icon} 
                    style={{ fontSize: '3rem', color: stat.color, marginBottom: '1rem' }} 
                  />
                  <h3 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '0.5rem' }}>
                    {stat.number}
                  </h3>
                  <p style={{ color: '#6b7280', fontWeight: '500' }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tab Navigation */}
        <section style={{ padding: '3rem 1rem', background: '#f9fafb' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1rem',
              marginBottom: '3rem',
              flexWrap: 'wrap'
            }}>
              {[
                { id: "meal-plans", label: "Meal Plans" },
                { id: "superfoods", label: "Superfoods" },
                { id: "tips", label: "Nutrition Tips" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    padding: '0.75rem 1.5rem',
                    borderRadius: '25px',
                    border: 'none',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    background: activeTab === tab.id ? '#059669' : 'white',
                    color: activeTab === tab.id ? 'white' : '#374151',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            {activeTab === "meal-plans" && (
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem'
              }}>
                {mealPlans.map((plan) => (
                  <div key={plan.id} style={{
                    background: 'white',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                    transition: 'transform 0.3s ease'
                  }}>
                    <img 
                      src={plan.image} 
                      alt={plan.title} 
                      style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                    />
                    <div style={{ padding: '1.5rem' }}>
                      <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1rem' }}>
                        {plan.title}
                      </h3>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                        <span style={{ color: '#059669', fontWeight: 'bold' }}>{plan.calories}</span>
                        <span style={{ color: '#6b7280' }}>{plan.duration}</span>
                      </div>
                      <button style={{
                        width: '100%',
                        background: 'linear-gradient(135deg, #059669, #10b981)',
                        color: 'white',
                        padding: '0.75rem',
                        border: 'none',
                        borderRadius: '10px',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        transition: 'transform 0.3s ease'
                      }}>
                        View Plan
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "superfoods" && (
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '1.5rem'
              }}>
                {superfoods.map((food, index) => (
                  <div key={index} style={{
                    background: 'white',
                    padding: '2rem',
                    borderRadius: '20px',
                    textAlign: 'center',
                    boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                    transition: 'transform 0.3s ease'
                  }}>
                    <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{food.icon}</div>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '0.5rem' }}>
                      {food.name}
                    </h3>
                    <p style={{ color: '#6b7280' }}>{food.benefit}</p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "tips" && (
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem'
              }}>
                {[
                  {
                    title: "Hydration Tips",
                    icon: "💧",
                    tips: [
                      "Drink 8-10 glasses of water daily",
                      "Start your day with a glass of water",
                      "Add lemon for extra vitamin C",
                      "Monitor urine color for hydration levels",
                    ],
                  },
                  {
                    title: "Portion Control",
                    icon: "🍽️",
                    tips: [
                      "Use smaller plates and bowls",
                      "Fill half your plate with vegetables",
                      "Eat slowly and mindfully",
                      "Stop eating when 80% full",
                    ],
                  },
                  {
                    title: "Meal Timing",
                    icon: "⏰",
                    tips: [
                      "Eat breakfast within 1 hour of waking",
                      "Have 3 main meals and 2 snacks",
                      "Don't skip meals",
                      "Stop eating 3 hours before bed",
                    ],
                  },
                  {
                    title: "Smart Snacking",
                    icon: "🥜",
                    tips: [
                      "Choose protein-rich snacks",
                      "Include fruits and vegetables",
                      "Avoid processed foods",
                      "Plan snacks in advance",
                    ],
                  },
                ].map((section, index) => (
                  <div key={index} style={{
                    background: 'white',
                    padding: '2rem',
                    borderRadius: '20px',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                      <span style={{ fontSize: '2.5rem' }}>{section.icon}</span>
                      <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937' }}>{section.title}</h3>
                    </div>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                      {section.tips.map((tip, tipIndex) => (
                        <li key={tipIndex} style={{
                          color: '#6b7280',
                          marginBottom: '0.75rem',
                          paddingLeft: '1rem',
                          position: 'relative'
                        }}>
                          <span style={{
                            position: 'absolute',
                            left: 0,
                            color: '#059669',
                            fontWeight: 'bold'
                          }}>•</span>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export default Nutrition;

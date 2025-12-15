"use client";
import React, { useState } from "react";
import Header from "../components/header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDumbbell,
  faRunning,
  faHeart,
  faClock,
  faFire,
  faPlay,
  faStar,
  faUsers,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";

const Workouts = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [hoveredWorkout, setHoveredWorkout] = useState(null);

  const workouts = [
    {
      id: 1,
      title: "HIIT Cardio Blast",
      duration: "20 min",
      difficulty: "Intermediate",
      calories: "300-400",
      category: "cardio",
      rating: 4.8,
      participants: "2.5K",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      description: "High-intensity interval training to boost metabolism"
    },
    {
      id: 2,
      title: "Full Body Strength",
      duration: "45 min",
      difficulty: "Advanced",
      calories: "400-500",
      category: "strength",
      rating: 4.9,
      participants: "1.8K",
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400&h=300&fit=crop",
      description: "Complete strength training for all muscle groups"
    },
    {
      id: 3,
      title: "Morning Yoga Flow",
      duration: "30 min",
      difficulty: "Beginner",
      calories: "150-200",
      category: "flexibility",
      rating: 4.7,
      participants: "3.2K",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=300&fit=crop",
      description: "Gentle yoga to start your day with energy"
    },
    {
      id: 4,
      title: "Core Power Blast",
      duration: "25 min",
      difficulty: "Intermediate",
      calories: "250-300",
      category: "strength",
      rating: 4.6,
      participants: "1.5K",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      description: "Intense core workout for stronger abs"
    },
    {
      id: 5,
      title: "Dance Cardio Fun",
      duration: "35 min",
      difficulty: "Beginner",
      calories: "280-350",
      category: "cardio",
      rating: 4.8,
      participants: "4.1K",
      image: "https://media.istockphoto.com/id/670724074/photo/exercising-at-the-gym.jpg?s=612x612&w=0&k=20&c=jr9YMXFCD2ON4QsU9-ZdVSUd7tdR4vhx0TXaysfasTc=",
      description: "Fun dance moves that burn calories"
    },
    {
      id: 6,
      title: "Power Pilates",
      duration: "40 min",
      difficulty: "Intermediate",
      calories: "200-280",
      category: "flexibility",
      rating: 4.7,
      participants: "2.1K",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=300&fit=crop",
      description: "Strengthen and tone with controlled movements"
    },
  ];

  const categories = [
    { id: "all", name: "All Workouts", icon: faChartLine },
    { id: "cardio", name: "Cardio", icon: faRunning },
    { id: "strength", name: "Strength", icon: faDumbbell },
    { id: "flexibility", name: "Flexibility", icon: faHeart },
  ];

  const filteredWorkouts = selectedCategory === "all" 
    ? workouts 
    : workouts.filter(workout => workout.category === selectedCategory);

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'Beginner': return '#22c55e';
      case 'Intermediate': return '#f59e0b';
      case 'Advanced': return '#ef4444';
      default: return '#6b7280';
    }
  };

  return (
    <>
      <Header />
      
      <main style={{ paddingTop: '80px', minHeight: '100vh', background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)' }}>
        {/* Hero Section */}
        <section style={{
          background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.8) 100%), url("https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=600&fit=crop") center/cover',
          color: 'white',
          padding: '6rem 1rem',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 70%)'
          }}></div>
          <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
            <div style={{ 
              display: 'inline-block',
              background: 'rgba(59, 130, 246, 0.2)',
              padding: '1rem 2rem',
              borderRadius: '50px',
              marginBottom: '2rem',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <FontAwesomeIcon icon={faDumbbell} style={{ marginRight: '0.5rem' }} />
              Premium Workouts
            </div>
            <h1 style={{ 
              fontSize: '4rem', 
              fontWeight: 'bold', 
              marginBottom: '1.5rem',
              background: 'linear-gradient(45deg, #ffffff, #3b82f6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Transform Your Body
            </h1>
            <p style={{ fontSize: '1.5rem', marginBottom: '3rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto 3rem' }}>
              Join thousands of fitness enthusiasts with our expert-designed workout programs
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button style={{
                background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                color: 'white',
                padding: '1rem 2rem',
                border: 'none',
                borderRadius: '50px',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                boxShadow: '0 10px 30px rgba(59, 130, 246, 0.4)',
                transition: 'all 0.3s ease'
              }}>
                <FontAwesomeIcon icon={faPlay} style={{ marginRight: '0.5rem' }} />
                Start Training
              </button>
              <button style={{
                background: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                padding: '1rem 2rem',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '50px',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease'
              }}>
                View Programs
              </button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section style={{ padding: '4rem 1rem', background: 'rgba(15, 23, 42, 0.8)', backdropFilter: 'blur(10px)' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '2rem',
              textAlign: 'center'
            }}>
              {[
                { icon: faDumbbell, number: "150+", label: "Workouts", color: "#ef4444", bg: "rgba(239, 68, 68, 0.1)" },
                { icon: faRunning, number: "75+", label: "Cardio Sessions", color: "#3b82f6", bg: "rgba(59, 130, 246, 0.1)" },
                { icon: faHeart, number: "50+", label: "Yoga Classes", color: "#ec4899", bg: "rgba(236, 72, 153, 0.1)" },
                { icon: faFire, number: "10K+", label: "Calories Burned", color: "#f59e0b", bg: "rgba(245, 158, 11, 0.1)" },
              ].map((stat, index) => (
                <div key={index} style={{ 
                  padding: '2rem',
                  background: stat.bg,
                  borderRadius: '20px',
                  border: `1px solid ${stat.color}30`,
                  transition: 'transform 0.3s ease'
                }}>
                  <FontAwesomeIcon 
                    icon={stat.icon} 
                    style={{ fontSize: '3rem', color: stat.color, marginBottom: '1rem' }} 
                  />
                  <h3 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'white', marginBottom: '0.5rem' }}>
                    {stat.number}
                  </h3>
                  <p style={{ color: '#94a3b8', fontWeight: '500' }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Filter and Workouts */}
        <section style={{ padding: '4rem 1rem', background: 'rgba(30, 41, 59, 0.5)' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <h2 style={{ 
              fontSize: '3rem', 
              fontWeight: 'bold', 
              color: 'white', 
              textAlign: 'center', 
              marginBottom: '3rem' 
            }}>
              Choose Your Workout
            </h2>
            
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1rem',
              marginBottom: '4rem',
              flexWrap: 'wrap'
            }}>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  style={{
                    padding: '1rem 2rem',
                    borderRadius: '50px',
                    border: selectedCategory === category.id ? '2px solid #3b82f6' : '2px solid transparent',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    background: selectedCategory === category.id 
                      ? 'linear-gradient(135deg, #3b82f6, #1d4ed8)' 
                      : 'rgba(255, 255, 255, 0.1)',
                    color: 'white',
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <FontAwesomeIcon icon={category.icon} />
                  {category.name}
                </button>
              ))}
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '2rem'
            }}>
              {filteredWorkouts.map((workout) => (
                <div 
                  key={workout.id} 
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '25px',
                    overflow: 'hidden',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    transition: 'all 0.3s ease',
                    transform: hoveredWorkout === workout.id ? 'translateY(-10px) scale(1.02)' : 'translateY(0) scale(1)',
                    boxShadow: hoveredWorkout === workout.id 
                      ? '0 20px 40px rgba(59, 130, 246, 0.3)' 
                      : '0 10px 25px rgba(0,0,0,0.2)'
                  }}
                  onMouseEnter={() => setHoveredWorkout(workout.id)}
                  onMouseLeave={() => setHoveredWorkout(null)}
                >
                  <div style={{ position: 'relative' }}>
                    <img 
                      src={workout.image} 
                      alt={workout.title} 
                      style={{ 
                        width: '100%', 
                        height: '220px', 
                        objectFit: 'cover',
                        filter: hoveredWorkout === workout.id ? 'brightness(1.1)' : 'brightness(0.9)'
                      }}
                    />
                    <div style={{
                      position: 'absolute',
                      top: '1rem',
                      right: '1rem',
                      background: 'rgba(0,0,0,0.7)',
                      borderRadius: '20px',
                      padding: '0.5rem 1rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}>
                      <FontAwesomeIcon icon={faStar} style={{ color: '#fbbf24', fontSize: '0.875rem' }} />
                      <span style={{ color: 'white', fontSize: '0.875rem', fontWeight: 'bold' }}>{workout.rating}</span>
                    </div>
                    <div style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      background: 'rgba(59, 130, 246, 0.9)',
                      borderRadius: '50%',
                      padding: '1.5rem',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      opacity: hoveredWorkout === workout.id ? 1 : 0.8,
                      transform: hoveredWorkout === workout.id 
                        ? 'translate(-50%, -50%) scale(1.1)' 
                        : 'translate(-50%, -50%) scale(1)'
                    }}>
                      <FontAwesomeIcon icon={faPlay} style={{ color: 'white', fontSize: '1.5rem' }} />
                    </div>
                  </div>
                  
                  <div style={{ padding: '2rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                      <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white', flex: 1 }}>
                        {workout.title}
                      </h3>
                      <span style={{ 
                        background: getDifficultyColor(workout.difficulty),
                        color: 'white',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '15px',
                        fontSize: '0.75rem',
                        fontWeight: 'bold'
                      }}>
                        {workout.difficulty}
                      </span>
                    </div>
                    
                    <p style={{ color: '#94a3b8', marginBottom: '1.5rem', lineHeight: '1.5' }}>
                      {workout.description}
                    </p>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <FontAwesomeIcon icon={faClock} style={{ color: '#3b82f6' }} />
                        <span style={{ color: '#e2e8f0', fontSize: '0.875rem' }}>{workout.duration}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <FontAwesomeIcon icon={faFire} style={{ color: '#f59e0b' }} />
                        <span style={{ color: '#e2e8f0', fontSize: '0.875rem' }}>{workout.calories}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <FontAwesomeIcon icon={faUsers} style={{ color: '#ec4899' }} />
                        <span style={{ color: '#e2e8f0', fontSize: '0.875rem' }}>{workout.participants}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <FontAwesomeIcon icon={faStar} style={{ color: '#fbbf24' }} />
                        <span style={{ color: '#e2e8f0', fontSize: '0.875rem' }}>{workout.rating}</span>
                      </div>
                    </div>
                    
                    <button style={{
                      width: '100%',
                      background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                      color: 'white',
                      padding: '1rem',
                      border: 'none',
                      borderRadius: '15px',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      fontSize: '1rem'
                    }}>
                      <FontAwesomeIcon icon={faPlay} style={{ marginRight: '0.5rem' }} />
                      Start Workout
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Workouts;

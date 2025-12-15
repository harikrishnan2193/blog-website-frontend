"use client";
import React, { useEffect, useState } from "react";
import Header from "../components/header";
import { useRouter } from "next/navigation";

function Home() {
  const [scrollY, setScrollY] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleStartWorkout = () => {
    router.push('/workouts');
  };

  return (
    <div className="home-container">
      <Header/>
      {/* Hero Section */}
      <section className="hero">
        <div
          className="hero-bg"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        ></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title typewriter">
            Transform Your Health Journey
          </h1>
          <p className="hero-subtitle fade-in-text">
            Discover expert articles on fitness, nutrition, and wellness
          </p>
          <button className="cta-button" onClick={handleStartWorkout}>
            Start Workout
          </button>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="categories">
        <h2 className="section-title">Popular Categories</h2>
        <div className="category-grid">
          <div className="category-card">
            <span className="category-icon">🏋️</span>
            <h3>Strength Training</h3>
            <p>Build muscle and increase power</p>
          </div>
          <div className="category-card">
            <span className="category-icon">🥗</span>
            <h3>Nutrition</h3>
            <p>Healthy eating and meal plans</p>
          </div>
          <div className="category-card">
            <span className="category-icon">🧘</span>
            <h3>Wellness</h3>
            <p>Mental health and mindfulness</p>
          </div>
        </div>
      </section>

      {/* Latest Articles Preview */}
      <section className="articles-preview">
        <h2 className="section-title">Latest Articles</h2>
        <div className="articles-grid">
          <article className="article-card">
            <div className="article-image">📖</div>
            <h3>10 Minute Morning Workout</h3>
            <p>Start your day with energy...</p>
            <span className="read-time">5 min read</span>
          </article>
          <article className="article-card">
            <div className="article-image">🍎</div>
            <h3>Superfoods for Athletes</h3>
            <p>Boost performance naturally...</p>
            <span className="read-time">8 min read</span>
          </article>
        </div>
      </section>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap");

        .home-container {
          min-height: 100vh;
          font-family: "Inter", system-ui, -apple-system, sans-serif;
        }

        .hero {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          text-align: center;
          color: white;
          padding: 2rem;
          position: relative;
          overflow: hidden;
        }

        .hero-title {
          font-size: 4rem;
          font-weight: 800;
          margin-bottom: 1.5rem;
          text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.4);
          background: linear-gradient(45deg, #ffffff, #f0fdf4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1.1;
          opacity: 0;
          transform: translateY(50px) scale(0.8);
          animation: slideInScale 1.5s ease-out 0.5s both;
        }

        .hero-bg {
          position: absolute;
          top: -20%;
          left: 0;
          right: 0;
          bottom: -20%;
          background-image: url("https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80");
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          will-change: transform;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            135deg,
            rgba(34, 197, 94, 0.8) 0%,
            rgba(16, 185, 129, 0.9) 100%
          );
          z-index: 1;
        }

        .hero-content {
          max-width: 700px;
          position: relative;
          z-index: 2;
        }

        .fade-in-text {
          font-size: 1.4rem;
          margin-bottom: 2.5rem;
          font-weight: 500;
          color: #f0fdf4;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
          opacity: 0;
          animation: fadeInText 1s ease-out 1.8s both;
        }
        .cta-button {
          background: linear-gradient(135deg, #ffffff, #f8fafc);
          color: #059669;
          border: none;
          padding: 1.2rem 3rem;
          font-size: 1.2rem;
          font-weight: 700;
          border-radius: 60px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
          text-transform: uppercase;
          letter-spacing: 1px;
          opacity: 0;
          animation: slideUp 1s ease-out 2.5s both;
        }

        .cta-button:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.3);
        }

        .categories,
        .articles-preview {
          background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
          padding: 5rem 2rem;
          position: relative;
          z-index: 3;
        }

        .section-title {
          text-align: center;
          font-size: 2.5rem;
          font-weight: 700;
          background: linear-gradient(135deg, #059669, #10b981);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 4rem;
        }

        .category-grid,
        .articles-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2.5rem;
        }

        .category-card,
        .article-card {
          background: linear-gradient(145deg, #ffffff, #f1f5f9);
          padding: 2.5rem;
          border-radius: 20px;
          text-align: center;
          transition: all 0.3s ease;
          border: 1px solid #e2e8f0;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
        }

        .category-card:hover,
        .article-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 40px rgba(5, 150, 105, 0.15);
        }

        .category-icon {
          font-size: 3.5rem;
          display: block;
          margin-bottom: 1.5rem;
        }

        .category-card h3,
        .article-card h3 {
          color: #0f172a;
          margin-bottom: 1rem;
          font-size: 1.4rem;
          font-weight: 600;
        }

        .category-card p,
        .article-card p {
          color: #475569;
          font-weight: 500;
          line-height: 1.6;
        }

        .article-image {
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
        }

        .read-time {
          color: #059669;
          font-size: 1rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        @keyframes typewriter {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        @keyframes slideInScale {
          0% {
            opacity: 0;
            transform: translateY(50px) scale(0.8);
          }
          60% {
            opacity: 1;
            transform: translateY(-10px) scale(1.05);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes fadeInText {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .typewriter {
            font-size: 2.5rem;
          }
          .fade-in-text {
            font-size: 1.1rem;
          }
          .category-grid,
          .articles-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}

export default Home;

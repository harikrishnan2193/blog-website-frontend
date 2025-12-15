"use client";
import React, { useState } from "react";
import Header from "../components/header";

const Articles = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const articles = [
    {
      id: 1,
      title: "10 Minute Morning Workout Routine",
      excerpt: "Start your day with energy and boost your metabolism with this quick workout routine.",
      category: "fitness",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop",
      date: "Dec 15, 2024"
    },
    {
      id: 2,
      title: "Superfoods for Athletic Performance",
      excerpt: "Discover the best foods to fuel your workouts and enhance recovery naturally.",
      category: "nutrition",
      readTime: "8 min read",
      image: "https://arborealstevia.com/wp-content/uploads/2023/06/sports-nutrition-market.jpeg",
      date: "Dec 12, 2024"
    },
    {
      id: 3,
      title: "Mental Health and Exercise Connection",
      excerpt: "Learn how regular exercise can improve your mental wellbeing and reduce stress.",
      category: "wellness",
      readTime: "6 min read",
      image: "https://i.ytimg.com/vi/pv7Z52VHul8/mqdefault.jpg",
      date: "Dec 10, 2024"
    },
    {
      id: 4,
      title: "Building Muscle: Complete Guide",
      excerpt: "Everything you need to know about strength training and muscle building.",
      category: "fitness",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400&h=250&fit=crop",
      date: "Dec 8, 2024"
    }
  ];

  const categories = [
    { id: "all", name: "All Articles" },
    { id: "fitness", name: "Fitness" },
    { id: "nutrition", name: "Nutrition" },
    { id: "wellness", name: "Wellness" }
  ];

  const filteredArticles = selectedCategory === "all" 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  return (
    <div className="articles-page">
      {/* <Header /> */}
      
      <main className="main-content">
        <div className="hero-section">
          <h1>Health & Fitness Articles</h1>
          <p>Expert insights on fitness, nutrition, and wellness</p>
        </div>

        <div className="container">
          <div className="filter-section">
            {categories.map(category => (
              <button
                key={category.id}
                className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="articles-grid">
            {filteredArticles.map(article => (
              <article key={article.id} className="article-card">
                <div className="article-image">
                  <img src={article.image} alt={article.title} />
                  <span className="category-tag">{article.category}</span>
                </div>
                <div className="article-content">
                  <h3>{article.title}</h3>
                  <p>{article.excerpt}</p>
                  <div className="article-meta">
                    <span className="read-time">{article.readTime}</span>
                    <span className="date">{article.date}</span>
                  </div>
                  <button className="read-more">Read More</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      <style jsx>{`
        .articles-page {
          min-height: 100vh;
          background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
        }

        // .main-content {
        //   padding-top: 80px;
        // }

        .hero-section {
          background: linear-gradient(135deg, #059669, #10b981);
          color: white;
          text-align: center;
          padding: 4rem 2rem;
        }

        .hero-section h1 {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .hero-section p {
          font-size: 1.2rem;
          opacity: 0.9;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 3rem 2rem;
        }

        .filter-section {
          display: flex;
          gap: 1rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }

        .filter-btn {
          padding: 0.8rem 1.5rem;
          border: 2px solid #e2e8f0;
          background: white;
          color: #374151;
          border-radius: 25px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .filter-btn:hover {
          border-color: #059669;
          color: #059669;
        }

        .filter-btn.active {
          background: #059669;
          border-color: #059669;
          color: white;
        }

        .articles-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }

        .article-card {
          background: white;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s ease;
        }

        .article-card:hover {
          transform: translateY(-5px);
        }

        .article-image {
          position: relative;
          height: 200px;
          overflow: hidden;
        }

        .article-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .category-tag {
          position: absolute;
          top: 1rem;
          left: 1rem;
          background: #059669;
          color: white;
          padding: 0.3rem 0.8rem;
          border-radius: 15px;
          font-size: 0.8rem;
          font-weight: 500;
          text-transform: capitalize;
        }

        .article-content {
          padding: 1.5rem;
        }

        .article-content h3 {
          font-size: 1.3rem;
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 0.8rem;
          line-height: 1.4;
        }

        .article-content p {
          color: #6b7280;
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        .article-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
          font-size: 0.9rem;
        }

        .read-time {
          color: #059669;
          font-weight: 500;
        }

        .date {
          color: #9ca3af;
        }

        .read-more {
          background: #059669;
          color: white;
          border: none;
          padding: 0.8rem 1.5rem;
          border-radius: 25px;
          font-weight: 500;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .read-more:hover {
          background: #047857;
        }

        @media (max-width: 768px) {
          .hero-section h1 {
            font-size: 2rem;
          }
          .articles-grid {
            grid-template-columns: 1fr;
          }
          .filter-section {
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
};

export default Articles;

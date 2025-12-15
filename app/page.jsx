"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRunning, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: ""
  });
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push('/home');
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem',
      fontFamily: 'Inter, system-ui, sans-serif'
    }}>
      <div style={{
        background: 'rgba(255, 255, 255, 0.98)',
        borderRadius: '24px',
        padding: '2rem',
        width: '100%',
        maxWidth: '400px',
        boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.2)'
      }}>
        {/* Logo */}
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontSize: '1.75rem',
            fontWeight: '800',
            color: '#059669'
          }}>
            <FontAwesomeIcon icon={faRunning} />
            <span>FitLife</span>
          </div>
          <p style={{ color: '#64748b', marginTop: '0.25rem', fontSize: '0.875rem' }}>
            Your fitness journey starts here
          </p>
        </div>

        {/* Toggle Buttons */}
        <div style={{
          display: 'flex',
          background: '#f1f5f9',
          borderRadius: '12px',
          padding: '0.25rem',
          marginBottom: '1.5rem'
        }}>
          <button
            onClick={() => setIsLogin(true)}
            style={{
              flex: 1,
              padding: '0.625rem',
              borderRadius: '10px',
              border: 'none',
              background: isLogin ? '#059669' : 'transparent',
              color: isLogin ? 'white' : '#64748b',
              fontWeight: '600',
              fontSize: '0.875rem',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            style={{
              flex: 1,
              padding: '0.625rem',
              borderRadius: '10px',
              border: 'none',
              background: !isLogin ? '#059669' : 'transparent',
              color: !isLogin ? 'white' : '#64748b',
              fontWeight: '600',
              fontSize: '0.875rem',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            Register
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
          {!isLogin && (
            <div style={{ marginBottom: '1rem' }}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required={!isLogin}
                style={{
                  width: '100%',
                  padding: '0.875rem 1rem',
                  border: '2px solid #e2e8f0',
                  borderRadius: '12px',
                  fontSize: '0.875rem',
                  transition: 'all 0.2s ease',
                  outline: 'none',
                  background: '#fafafa'
                }}
                placeholder="Full name"
                onFocus={(e) => e.target.style.borderColor = '#059669'}
                onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
              />
            </div>
          )}

          <div style={{ marginBottom: '1rem' }}>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              style={{
                width: '100%',
                padding: '0.875rem 1rem',
                border: '2px solid #e2e8f0',
                borderRadius: '12px',
                fontSize: '0.875rem',
                transition: 'all 0.2s ease',
                outline: 'none',
                background: '#fafafa'
              }}
              placeholder="Email address"
              onFocus={(e) => e.target.style.borderColor = '#059669'}
              onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
            />
          </div>

          <div style={{ marginBottom: isLogin ? '1.5rem' : '1rem' }}>
            <div style={{ position: 'relative' }}>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
                style={{
                  width: '100%',
                  padding: '0.875rem 1rem',
                  paddingRight: '3rem',
                  border: '2px solid #e2e8f0',
                  borderRadius: '12px',
                  fontSize: '0.875rem',
                  transition: 'all 0.2s ease',
                  outline: 'none',
                  background: '#fafafa'
                }}
                placeholder="Password"
                onFocus={(e) => e.target.style.borderColor = '#059669'}
                onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: 'absolute',
                  right: '1rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  color: '#64748b',
                  cursor: 'pointer',
                  fontSize: '0.875rem'
                }}
              >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </button>
            </div>
          </div>

          {!isLogin && (
            <div style={{ marginBottom: '1.5rem' }}>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required={!isLogin}
                style={{
                  width: '100%',
                  padding: '0.875rem 1rem',
                  border: '2px solid #e2e8f0',
                  borderRadius: '12px',
                  fontSize: '0.875rem',
                  transition: 'all 0.2s ease',
                  outline: 'none',
                  background: '#fafafa'
                }}
                placeholder="Confirm password"
                onFocus={(e) => e.target.style.borderColor = '#059669'}
                onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
              />
            </div>
          )}

          <button
            type="submit"
            style={{
              width: '100%',
              background: 'linear-gradient(135deg, #059669, #10b981)',
              color: 'white',
              padding: '0.875rem',
              border: 'none',
              borderRadius: '12px',
              fontSize: '0.875rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              boxShadow: '0 4px 12px rgba(5, 150, 105, 0.4)'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-1px)';
              e.target.style.boxShadow = '0 6px 16px rgba(5, 150, 105, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 12px rgba(5, 150, 105, 0.4)';
            }}
          >
            {isLogin ? 'Sign In' : 'Create Account'}
          </button>
        </form>

        {isLogin && (
          <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
            <a href="#" style={{
              color: '#059669',
              textDecoration: 'none',
              fontSize: '0.8rem',
              fontWeight: '500'
            }}>
              Forgot password?
            </a>
          </div>
        )}

        <div style={{
          textAlign: 'center',
          paddingTop: '1rem',
          borderTop: '1px solid #e2e8f0'
        }}>
          <p style={{ color: '#64748b', fontSize: '0.8rem' }}>
            {isLogin ? "New to FitLife? " : "Already have an account? "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              style={{
                background: 'none',
                border: 'none',
                color: '#059669',
                fontWeight: '600',
                cursor: 'pointer',
                fontSize: '0.8rem'
              }}
            >
              {isLogin ? 'Create account' : 'Sign in'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

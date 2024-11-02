// InfoCard.tsx
import React from "react";

interface InfoCardProps {
  title: string;
  content: string;
  onClose: () => void;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, content, onClose }) => {
  return (
    <div style={styles.card}>
      <button onClick={onClose} style={styles.closeButton}>
        ✖
      </button>
      <h3 style={styles.title}>{title}</h3>
      <p style={styles.content}>{content}</p>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  card: {
    position: "fixed",
    top: "20px",
    right: "20px",
    width: "300px",
    padding: "20px",
    background: "#ffffff",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
    borderRadius: "8px",
    zIndex: 1000,
    transition: "transform 0.3s ease",
  },
  closeButton: {
    border: "none",
    background: "transparent",
    fontSize: "20px",
    cursor: "pointer",
    float: "right",
    color: "#888",
    padding: "0", // Optional: ensure there's no padding
  },
  title: {
    margin: "0 0 10px 0",
    fontSize: "18px",
    color: "#333",
  },
  content: {
    margin: "0",
    color: "#555",
  },
};

export default InfoCard;

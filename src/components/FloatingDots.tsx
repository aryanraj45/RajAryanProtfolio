const FloatingDots = () => {
  const dots = [
    { top: "10%", right: "15%", delay: "0s" },
    { top: "25%", right: "8%", delay: "0.5s" },
    { top: "45%", right: "12%", delay: "1s" },
    { top: "60%", right: "5%", delay: "1.5s" },
    { top: "75%", right: "18%", delay: "2s" },
    { top: "85%", right: "10%", delay: "2.5s" },
    { top: "15%", left: "5%", delay: "0.3s" },
    { top: "35%", left: "2%", delay: "0.8s" },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {dots.map((dot, index) => (
        <div
          key={index}
          className="floating-dot"
          style={{
            top: dot.top,
            right: dot.right,
            left: dot.left,
            animationDelay: dot.delay,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingDots;

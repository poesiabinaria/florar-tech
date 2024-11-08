const FeatureCard = ({ icon, content }) => {
  return (
    <div className="item-card">
      <div>Icon</div>
      <div className="text-sm leading-6 opacity-75 mt-2">{content}</div>
    </div>
  );
};

export default FeatureCard;

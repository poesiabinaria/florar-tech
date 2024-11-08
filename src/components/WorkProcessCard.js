const WorkProcessCard = ({ icon, title, subtitle, content }) => {
  return (
    <div className="item-card bg-white/5 rounded-lg p-6">
      <div className="flex items-center mb-4">
        <div className="rounded-full bg-white/20 p-4">Icon</div>

        <div className="ml-4">
          <div className="mb-1">{title}</div>
          <div className="text-xs opacity-50 uppercase">{subtitle}</div>
        </div>
      </div>
      <div className="text-sm leading-6 opacity-75 mt-2">{content}</div>
    </div>
  );
};

export default WorkProcessCard;

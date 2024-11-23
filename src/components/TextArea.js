import logoBlue from "../img/logo-blue.svg";
import logoViolet from "../img/logo-violet.svg";
import logoYellow from "../img/logo-yellow.svg";

const TextArea = ({ id, label, type = "text" }) => {
  return (
    <div className="mb-6 last:mb-0">
      <label className="block text-sm mb-2" for={id}>
        {label}
      </label>
      <textarea
        id={id}
        name={id}
        type={type}
        className="w-full p-3 text-dark rounded-lg"
        rows="9"
      />
    </div>
  );
};

export default TextArea;

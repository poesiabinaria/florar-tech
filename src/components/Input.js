import logoBlue from "../img/logo-blue.svg";
import logoViolet from "../img/logo-violet.svg";
import logoYellow from "../img/logo-yellow.svg";

const Input = ({ id, label, placeholder, type = "text" }) => {
  return (
    <div className="mb-6 last:mb-0">
      <label className="block text-sm mb-2" for={id}>
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        className="w-full p-3 text-dark rounded-lg"
      />
    </div>
  );
};

export default Input;

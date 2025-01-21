import logoBlue from "../img/logo-blue.svg";
import logoViolet from "../img/logo-violet.svg";
import logoYellow from "../img/logo-yellow.svg";

const Input = ({ id, label, placeholder, required, type = "text" }) => {
  return (
    <div className="mb-6 last:mb-0">
      <label className="block text-sm mb-2" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full p-3 bg-[#D8CAFF] placeholder-violet/60 text-violet focus:outline-none rounded-lg"
      />
    </div>
  );
};

export default Input;

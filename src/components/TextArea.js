import logoBlue from "../img/logo-blue.svg";
import logoViolet from "../img/logo-violet.svg";
import logoYellow from "../img/logo-yellow.svg";

const TextArea = ({ id, label, required, type = "text" }) => {
  return (
    <div className="mb-6 last:mb-0">
      <label className="block text-sm mb-2" for={id}>
        {label}
      </label>
      <textarea
        id={id}
        name={id}
        type={type}
        required={required}
        className="w-full py-3 px-4 bg-[#D8CAFF] placeholder-violet/60 text-violet focus:outline-none rounded-lg h-[250px]"
        placeholder="Me descreva o que você precisa. Exemplo: queria desenvolver um app para minha loja"
      />
    </div>
  );
};

export default TextArea;

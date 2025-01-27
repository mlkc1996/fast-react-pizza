import { Link } from "react-router-dom";

const className =
  "inline-block text-sm rounded-full bg-yellow-500  font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed";

const styles = {
  primary: className + " px-4 py-3 md:px-6 md:py-4",
  small: className + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
  secondary:
    "inline-block text-sm rounded-full border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 focus:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5",
  round: className + " px-2.5 py-1 md:px-3.5 md:py-2 text-sm",
};

const Button = ({ children, disabled, to, type, onClick }) => {
  if (to) {
    return (
      <Link to={to} disabled={disabled} className={styles[type]}>
        {children}
      </Link>
    );
  }

  return (
    <button
      disabled={disabled}
      className={styles[type]}
      onClick={onClick ?? (() => {})}
    >
      {children}
    </button>
  );
};

export default Button;

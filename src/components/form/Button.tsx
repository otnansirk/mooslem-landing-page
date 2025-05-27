
type ButtonType = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button = (props: ButtonType) => {
  return <button onClick={props.onClick} className={`flex items-center justify-center gap-[0.7em] max-w-[260px] px-5 py-3 rounded-[12px] border border-white/10 whitespace-nowrap box-border backdrop-blur-md ${props.className || 'bg-white/10 text-inherit hover:bg-white/20'}`}>
    {props.children}
  </button>
}

export default Button;
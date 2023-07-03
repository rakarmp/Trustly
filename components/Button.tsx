interface Props {
  text: string;
  className?: string;
  onClick?: () => void;
}

export default function Button(props: Props) {
  return (
    <div>
      <button
        onClick={props.onClick}
        className={`px-3 py-2 font-bold border border-black  border-2} ${props.className}`}
      >
        {props.text}
      </button>
    </div>
  );
}

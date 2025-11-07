type RadioButtonUIProps = {
  onChange: () => void;
  text: string
  checked: boolean
}

const RadioButton = ({ onChange, text }: RadioButtonUIProps) => {
    return (
        <label>
            <button onClick={onChange}>
                {text}
            </button>
        </label>
    );
};
export default RadioButton;

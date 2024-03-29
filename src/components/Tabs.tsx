interface Props<OptionType extends string> {
    options: OptionType[];
    onSelectOption: (option: OptionType) => void;
    selectedOption: OptionType;
}

export const Tabs = <OptionType extends string,>({ options, onSelectOption, selectedOption }: Props<OptionType>) => {
    return (
        <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-400">
            <ul className="flex flex-wrap -mb-px">
                {options.map((opt) => (
                    <li className="me-2" key={opt}>
                        <button
                            onClick={() => onSelectOption(opt)}
                            className={
                                `inline-block p-4 border-b-2 rounded-t-lg ${opt === selectedOption ? "text-blue-600 border-blue-600 active" : "hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 border-transparent"}`
                            }
                        >
                            {opt}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
interface TabProps {
  TabName: string;
  isActive: boolean;
  onClick: () => void;
}

const Tab: React.FC<TabProps> = ({ TabName, isActive, onClick }) => {
  return (
    <li>
      <a
        href="#"
        onClick={onClick}
        className={`items-center justify-start border-b-2 rounded-t-lg py-2 pr-8 mr-8 hover:text-black dark:hover:text-gray-300 text-base ${
          isActive
            ? "text-black border-black dark:border-white dark:text-white"
            : "text-gray-500 border-transparent hover:border-black dark:hover:border-white"
        }`}
      >
        {TabName}
      </a>
    </li>
  );
};

export default Tab;

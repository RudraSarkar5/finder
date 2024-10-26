const Button = ({ name, onClick }: { name: string, onClick?: () => void }) => {
    return (
        <div 
            className="px-2 py-1 bg-blue-500 rounded-lg cursor-pointer" 
            onClick={onClick ? onClick : () => console.log(name + ' button clicked')}
        >
            {name}
        </div>
    );
};

export default Button;


const Title = ({ title, accent, className = '' }: any) => {
  
    return (
    <h2 className={`font-thin uppercase ${className}`}
    >
      {title} <span className="font-medium">{accent}</span>
    </h2>
  );
};


export default Title;
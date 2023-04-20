import { useNavigate } from 'react-router-dom';

function Test1({ name, age }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/test2', { state: { name, age } });
    }

    return (
        <div>
            <button onClick={handleClick}>Go to other page</button>
        </div>
    );
}

export default Test1;

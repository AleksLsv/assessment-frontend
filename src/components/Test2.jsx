import { useLocation } from 'react-router-dom';

function Test2() {
    const { state } = useLocation();

    if (!state) {
        return null;
    }

    const { name, age } = state;

    return (
        <div>
            <div>Name: {name}</div>
            <div>Age: {age}</div>
        </div>
    );
}

export default Test2;

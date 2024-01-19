import { Link } from 'react-router-dom';

const Content = ({ title, goals }) => {
    const items = goals.map(({ text, image }, index) => (
        <li key={index}>
            <Link to={'/step-2'}>
                <p>{text}</p>
                <img src={image} alt={text} />
            </Link>
        </li>
    ));
    return (
        <div className="main-content">
            {title && <h3>What are your goals?</h3>}
            <ul>{items}</ul>
        </div>
    );
};

export default Content;

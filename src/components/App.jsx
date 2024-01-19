import Goal from 'pages/Goal';
import { Route, Routes } from 'react-router-dom';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Goal to="/" />} />
            <Route path="/step-2" element={<div>Step 2</div>} />
        </Routes>
    );
};

export default App;

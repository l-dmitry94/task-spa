import Goal from 'pages/Goal';
import Measure from 'pages/Measure';
import { Route, Routes } from 'react-router-dom';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Goal to="/" />} />
            <Route path="/step-2" element={<Measure to="/" />} />
            <Route path="/step-3" element={<div>Step-3</div>} />
        </Routes>
    );
};

export default App;

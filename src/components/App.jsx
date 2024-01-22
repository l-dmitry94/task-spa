import Behaviors from 'pages/Behaviors';
import Exercise from 'pages/Exercise';
import Goal from 'pages/Goal';
import Measure from 'pages/Measure';
import { Route, Routes } from 'react-router-dom';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Goal to="/" />} />
            <Route path="/step-2" element={<Measure to="/" />} />
            <Route path="/step-3" element={<Behaviors to="/step-2" />} />
            <Route path="/step-4" element={<Exercise to="/step-3" />} />
            <Route path="/thank-you" element={<div>Thank you</div>} />
        </Routes>
    );
};

export default App;

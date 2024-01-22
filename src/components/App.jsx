import { Route, Routes } from 'react-router-dom';
import Behaviors from 'pages/Behaviors';
import Exercise from 'pages/Exercise';
import Goal from 'pages/Goal';
import Measure from 'pages/Measure';
import ShowInfo from 'pages/ShowInfo';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Goal to="/" />} />
            <Route path="/step-2" element={<Measure to="/" />} />
            <Route path="/step-3" element={<Behaviors to="/step-2" />} />
            <Route path="/step-4" element={<Exercise to="/step-3" />} />
            <Route path="/thank-you" element={<ShowInfo to="/"/>} />
        </Routes>
    );
};

export default App;

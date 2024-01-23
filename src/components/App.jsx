import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

const Goal = lazy(() => import('pages/Goal'));
const Measure = lazy(() => import('pages/Measure'));
const Behaviors = lazy(() => import('pages/Behaviors'));
const Exercise = lazy(() => import('pages/Exercise'));
const ShowInfo = lazy(() => import('pages/ShowInfo'));

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Goal to="/" />} />
            <Route path="/step-2" element={<Measure to="/" />} />
            <Route path="/step-3" element={<Behaviors to="/step-2" />} />
            <Route path="/step-4" element={<Exercise to="/step-3" />} />
            <Route path="/thank-you" element={<ShowInfo to="/" />} />
        </Routes>
    );
};

export default App;

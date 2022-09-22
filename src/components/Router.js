import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from '../routes/Home';
import PianoYamaha from '../routes/PianoYamaha';
import PianoSteinway from '../routes/PianoSteinway';
import PianoBoesendorfer from '../routes/PianoBoesendorfer';
import TestContents from '../routes/TestContents';
import NotFound from '../routes/NotFound';

const AppRouter = () => {
  return (
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home/>} />
                    <Route exact path='/piano/yamaha' element={<PianoYamaha/>}/>
                    <Route exact path='/piano/steinway' element={<PianoSteinway/>}/>
                    <Route exact path='/piano/boesendorfer' element={<PianoBoesendorfer/>}/>
                    <Route exact path='/testcontents' element={<TestContents/>}/>
                    <Route path={'*'} element={<NotFound/>} />
                </Routes>
            </Router>
  );
};

export default AppRouter;

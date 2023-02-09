import React from 'react';
import './App.scss';
import { LayoutContent } from './components/Layout/style';
import { Layout } from './components/Layout/Layout';
import { ScreenCurtain } from './components/ScreenCurtain/ScreenCurtain';
import { AboutUs } from './components/AboutUs/AboutUs';
import { FeedBack } from './components/FeedBack/FeedBack';

function App() {
  return (
    <Layout>
       <LayoutContent>
          <ScreenCurtain/>
          <AboutUs/>
          <FeedBack/>
       </LayoutContent>
    </Layout>
  );
}

export default App;

// pages/_app.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from '../../src/Components/Layout/Index'; // Ensure the path is correct
import { MyProvider } from '../../src/Components/Contexts/MyContext'; // Ensure the path is correct
import CardX from '../../src/Components/Common/CardX';

function MyApp({ Component, pageProps }) {
  return (
    <MyProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MyProvider>
  );
}

export default MyApp;

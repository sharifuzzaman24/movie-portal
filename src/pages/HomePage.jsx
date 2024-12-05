import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import FeaturedMovies from '../components/FeaturedMovies';
import Footer from '../components/Footer';

const HomePage = () => {
    return (
        <>
            <header>
                <Navbar></Navbar>
            </header>
            <main className='w-11/12 mx-auto'>
                <section>
                    <Header></Header>
                </section>
                <section>
                    <FeaturedMovies></FeaturedMovies>
                </section>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </>
    );
};

export default HomePage;
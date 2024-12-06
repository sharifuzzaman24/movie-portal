import React, { useState, useEffect } from 'react';
import NewsCard from '../components/NewsCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const MovieNews = () => {
    const [news, setNews] = useState([]);
    const [category, setCategory] = useState('All');

    const movieNewsData = [
        {
            id: 1,
            title: 'Avengers 5 Announced!',
            description: 'Marvel confirms the release date of Avengers 5.',
            date: 'Dec 6, 2024',
            image: 'https://via.placeholder.com/150',
            category: 'Latest Releases',
        },
        {
            id: 2,
            title: 'Star Wars 10 in Development',
            description: 'Star Wars franchise to return with another sequel.',
            date: 'Dec 5, 2024',
            image: 'https://via.placeholder.com/150',
            category: 'Upcoming Movies',
        },
        {
            id: 3,
            title: 'Box Office Hits of 2024',
            description: 'Top 10 highest-grossing films of 2024.',
            date: 'Dec 4, 2024',
            image: 'https://via.placeholder.com/150',
            category: 'Box Office News',
        },
        {
            id: 4,
            title: 'James Bond 26 Casting News',
            description: 'The search for the next James Bond begins!',
            date: 'Dec 3, 2024',
            image: 'https://via.placeholder.com/150',
            category: 'Latest Releases',
        },
        {
            id: 5,
            title: 'The Batman 2 Officially Confirmed',
            description: 'The sequel to The Batman has officially been confirmed by Warner Bros.',
            date: 'Dec 2, 2024',
            image: 'https://via.placeholder.com/150',
            category: 'Upcoming Movies',
        },
        {
            id: 6,
            title: 'Oscars 2025 Predictions',
            description: 'Who will win the Oscars next year? Here are some predictions.',
            date: 'Dec 1, 2024',
            image: 'https://via.placeholder.com/150',
            category: 'Box Office News',
        },
        {
            id: 7,
            title: 'Spider-Man 4 Plot Leak',
            description: 'Rumors suggest a shocking twist for Spider-Man 4.',
            date: 'Nov 30, 2024',
            image: 'https://via.placeholder.com/150',
            category: 'Upcoming Movies',
        },
        {
            id: 8,
            title: 'Avatar 3 Release Date Confirmed',
            description: 'The release date for Avatar 3 has officially been announced!',
            date: 'Nov 29, 2024',
            image: 'https://via.placeholder.com/150',
            category: 'Latest Releases',
        },
        {
            id: 9,
            title: 'Director Talks About Dune 2',
            description: 'Director Denis Villeneuve shares insights into the making of Dune 2.',
            date: 'Nov 28, 2024',
            image: 'https://via.placeholder.com/150',
            category: 'Upcoming Movies',
        },
        {
            id: 10,
            title: 'Top 5 Movies of the Decade',
            description: 'A look back at the top 5 movies that defined the decade.',
            date: 'Nov 27, 2024',
            image: 'https://via.placeholder.com/150',
            category: 'Box Office News',
        },
    ];


    useEffect(() => {
        setNews(movieNewsData);
    }, []);

    const filteredNews = news.filter(item => category === 'All' || item.category === category);

    return (
        <>
            <header>
                <Navbar></Navbar>
            </header>
            <main className='w-11/12 mx-auto min-h-screen'>
                <section className="container mx-auto py-6">
                    <h1 className="text-4xl font-bold text-center mb-6">Movie News</h1>

                    <div className="mb-6 text-center">
                        <button
                            onClick={() => setCategory('All')}
                            className="px-4 py-2 bg-red-600 text-white rounded mx-2"
                        >
                            All
                        </button>
                        <button
                            onClick={() => setCategory('Latest Releases')}
                            className="px-4 py-2 bg-red-600 text-white rounded mx-2"
                        >
                            Latest Releases
                        </button>
                        <button
                            onClick={() => setCategory('Upcoming Movies')}
                            className="px-4 py-2 bg-red-600 text-white rounded mx-2"
                        >
                            Upcoming Movies
                        </button>
                        <button
                            onClick={() => setCategory('Box Office News')}
                            className="px-4 py-2 bg-red-600 text-white rounded mx-2"
                        >
                            Box Office News
                        </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredNews.map(newsItem => (
                            <NewsCard key={newsItem.id} newsItem={newsItem} />
                        ))}
                    </div>
                </section>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </>

    );
};

export default MovieNews;

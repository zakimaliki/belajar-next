import React, { useEffect } from 'react'

const Home = () => {
    useEffect(() => {
        document.title = 'Home Page';
    });
    return (
        <>
            <style jsx>{`
        p {
          color: blue;
        }
      `}</style>
            <p>scope</p>
        </>
    )
}

export default Home
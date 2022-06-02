import { useState} from 'react';

function Header() {
    const [ page, setPage ] = useState('home')

    return (
        <header>
                <section>
                    <h1>Michael Letanosky</h1>
                    <h4>full stack webdeveloper</h4>
                </section>
                <div className="right-header">
                    <figure></figure>
                    <nav>
                        <a href="#profile">Profile</a>
                        <a href="#projects-container">Projects</a>
                        <a href="#skillcard-container">Skillset</a>
                        <a href="#contact-footer">Contact</a>
                    </nav>
                </div>
        </header>
    );
}

export default Header;
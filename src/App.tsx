import './App.css';
import styled from 'styled-components';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Skills} from "./layout/sections/skills/Skills";
import {Abilities} from "./layout/sections/abilities/Abilities";
import {Testimony} from "./layout/sections/Testimony";
import {Contact} from "./layout/sections/contact/Contact";
import {Footer} from "./layout/sections/footer/Footer";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Abilities/>
            <Testimony/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;


import React, {useState} from 'react';
import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';
import Section from '../components/Section/Section';
import Sidebar from '../components/Sidebar/Sidebar';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    //change state from false to true & vice versa:
    const toggle = () => {
        setIsOpen(!isOpen)
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <Header/>
            <Section />
        </>

    )
}

export default Home;
import { useState, useRef, useEffect } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import { HiMenu } from 'react-icons/hi';

const SearchBar = ({ leftMenuRef, productsRef, handleOpenLeftMenu, handleCloseLeftMenu }) => {

    const inputRef = useRef();
    const [search, setSearch] = useState('');
    const [listExpand, setListExpand] = useState(false);

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    }

    const handleEmptySearch = () => {
        setSearch('');
        inputRef.current.focus();
    }

    const toggleListExpand = () => {
        setListExpand(!listExpand);
    }

    const toggleLeftMenu = () => {
        if (leftMenuRef.current.style.left === '-250px') {
            handleOpenLeftMenu();
        } else {
            handleCloseLeftMenu();
        }
    }

    useEffect(() => {
        function hideLeftmenu () {
            if (window.innerWidth < 1000) {
                handleCloseLeftMenu();
            } else {
                leftMenuRef.current.style.left = '0';
                leftMenuRef.current.style.width = '250px';
            }
        }
        window.addEventListener('resize', hideLeftmenu);

        return () => {
            window.removeEventListener('resize', hideLeftmenu);
        }
    });

    return (
        <div className='searchbar'>
            <div onClick={toggleLeftMenu} className='searchbar__leftmenu'>
                <AiOutlineMenuUnfold className='searchbar__icons searchbar__icons--leftmenu' />
            </div>
            <div className='searchbar__flexbox'>
                <div onClick={toggleListExpand} className='searchbar__label searchbar__label--start'>
                    <HiMenu className='searchbar__icons searchbar__icons--menu' />
                </div>
                <div className={listExpand ? 'searchbar__dropdown searchbar__dropdown--active' : 'searchbar__dropdown'}>
                    <div className='searchbar__list'>
                        Turn Off Suggestion
                    </div>
                </div>
                <div className='searchbar__label searchbar__label--middle'>
                    <FaSearch className='searchbar__icons searchbar__icons--search' />
                </div>
                <input type='text' ref={inputRef} autoFocus onChange={(e) => handleSearchChange(e)} value={search} className='searchbar__input' placeholder='Search for products' />
                <div onClick={handleEmptySearch} className='searchbar__label searchbar__label--end'>
                    <FaTimes className='searchbar__icons' />
                </div>
            </div>
        </div>
    );
}

export default SearchBar;
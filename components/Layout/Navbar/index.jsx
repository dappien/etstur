import React , {useState,useEffect} from 'react'
import Image from 'next/image'
import styles from './navbar.module.scss'
import Link from 'next/link';
import { BsSearch } from 'react-icons/bs'
import useWindowSize from '../../../hooks/useWindowSize'
import { AiOutlineMenu } from 'react-icons/ai'

function Navbar({style}) {
  const size = useWindowSize();
  const [inputText,setInputText] = useState("");
  const inputHandler = (e) => {
    const lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  }

  return (
    <>
    {size.width > 640 && 
    <div className={styles[(style==="fullWidth") ? 'navbar--fullWidth' : 'navbar']}>
      <div className={styles['navbar__elements']}>
        <Link href="/">
          {size.width > 1024 ? 
          <Image 
            src="https://res.cloudinary.com/droheqpxn/image/upload/v1655606264/etstur/logo_g04c5g.png"
            width={60}
            height={60}
            className={styles['navbar__logo']}
          />  
          :
          <Image 
            src="https://res.cloudinary.com/droheqpxn/image/upload/v1655606264/etstur/logo_g04c5g.png"
            width={40}
            height={40}
            className={styles['navbar__logo']}
          />  
          }
         
        </Link>

        <Link href="/">
          <h2>Home</h2>
        </Link>

        <Link href="/events">
          <h2>Events</h2>
        </Link>
        
        <Link href="/venues">
          <h2>Venues</h2>
        </Link>

        <Link href="/venues">
          <h2>Artists</h2>
        </Link>
      </div>
      <div className={styles['navbar__searchBar']}>
        <input type="text"  placeholder='Search...' onChange={inputHandler}/>
        <Link href={`/search?q=${inputText}`}>
          <BsSearch size="20" className={styles['navbar__searchIcon']}/>
        </Link>
      </div>

    </div>
    }
    {size.width < 640 && 
    <div className={styles['navbarResp']}>
        <AiOutlineMenu size={30}/>
        <h2>A</h2>
    </div>
    }
    </>
  )
}

export default Navbar
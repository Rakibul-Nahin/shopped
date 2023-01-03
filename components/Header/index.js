import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '../../styles/Home.module.css'

import Navbar from '../Header/Navbar'
import Shopped from '../Header/Shopped'

export default function Header() {
    return (

        <div>

            <div className='grid grid-flow-dense'>
                <Shopped />
                <Navbar />
            </div>

        </div>
    )
}

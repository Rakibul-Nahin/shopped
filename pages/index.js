import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

import Home from "../components/Home/index.js"

export default function App() {
    return (

        <div>

            <div className='grid grid-flow-dense'>
                <Home />
            </div>

        </div>
    )
}

"use client";

import React, { useState, useEffect } from 'react';
import { useTime } from 'react-timer-hook';
import { Col, Container, Row } from "react-bootstrap";
import styles from "@/styles/Header.module.css";
import Link from 'next/link';
import { FaHome, FaRegUserCircle } from "react-icons/fa";
import { FaBookBookmark, FaPhoneVolume } from "react-icons/fa6";
import { IoGrid } from "react-icons/io5";

export default function Header() {
    const {
        seconds,
        minutes,
        hours,
    } = useTime({ format: '24-hour' });

    // State to track whether the component is mounted (client-side)
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        // Set isClient to true after the component mounts
        setIsClient(true);
    }, []);

    if (!isClient) {
        // Render a fallback before the component is mounted
        return null;
    }

    return (
        <div className={styles.hdrMain}>
            <Container>
                <Row>
                    <Col className={`col-md-2 ${styles.logo}`}>
                        <h1><Link href="/" title='Nikhil Mishra'>Nikhil Mishra</Link></h1>
                    </Col>
                    <Col className={`col-md-8 ${styles.navs}`}>
                        <div className={styles.navLnk}>
                            <Link href="/home" title='Home'><FaHome /> Home</Link>
                            <Link href="/about" title='About'><FaRegUserCircle /> About</Link>
                            <Link href="/work" title='Work'><IoGrid /> Work</Link>
                            <Link href="/blog" title='Blog'><FaBookBookmark /> Blog</Link>
                            <Link href="/contact" title='Contact'><FaPhoneVolume /> Contact</Link>
                        </div>
                    </Col>
                    <Col className={`col-md-2 ${styles.time}`}>
                        <div>
                            <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

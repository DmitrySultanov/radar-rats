import React from 'react';
import { Container, Row, Col, Button } from 'bootstrap-4-react';
import styles from './SectionIntro.module.css';
import picture from '../../media/img/intro-picture.png';
import video from '../../media/img/animation.mp4';

const SectionIntro = () => {
    return (
        <section className={styles.SectionIntro}>
            <Container>
                <Row className={styles.content}>
                    <Col col="7 lg-7 xl-7">
                        <div className={styles.description}>
                            <h1 data-aos="fade-up" data-aos-duration="600">THE FIRST BANKSY TOKENIZED NFT DROP POWERED BY LCD LAB.</h1>
                            <div className={styles.text}>
                                <p data-aos="fade-up" data-aos-duration="600" data-aos-delay="300">Mint price: equivalent of 1000 USDT in SOL</p>
                                <p data-aos="fade-up" data-aos-duration="600" data-aos-delay="600">Launching on Magic Eden - September 2022</p>
                            </div>
                            <Row>
                                <Col col="auto">
                                    <Button data-aos="fade-up" data-aos-duration="600" data-aos-delay="600" as="a" href="https://kvr7g2jihv3.typeform.com/to/to1d9wLu" target="_blank" rel="noopener noreferrer" className={styles.mintButton}>Whitelist raffle</Button>
                                    <p className='mt-2' data-aos="fade-up"data-aos-duration="600" data-aos-delay="1000">*to raise your chance - subscribe to our discord and twitter</p>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col col="5 lg-5 xl-5">
                        <Row justifyContent="end">
                            <Col col="auto">
                                <video autoPlay loop muted poster={picture}>
                                    <source src={video} type='video/mp4' />
                                </video>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default SectionIntro;

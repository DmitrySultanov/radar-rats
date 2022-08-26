import React from 'react';
import { Container, Row, Col } from 'bootstrap-4-react';
import styles from './SectionDigitalArt.module.css';
import picture1 from '../../media/img/digital-art-img1.png';
import picture2 from '../../media/img/digital-art-img2.png';
import picture3 from '../../media/img/digital-art-img3.png';
import picture4 from '../../media/img/digital-art-img4.png';
import picture5 from '../../media/img/digital-art-img5.png';
import picture6 from '../../media/img/digital-art-img6.png';

const SectionDigitalArt = () => {
    return (
        <section className={styles.SectionDigitalArt}>
            <h2 className="section-title"><span>The Digital Art</span></h2>
            <Container>
                <div className={styles.content}>
                    <Row>
                        <Col col="12">
                            <p data-aos="fade-up" data-aos-duration="800">LCD LAB’s team created a collection of 1000 Banksy inspired Radar Rats NFT on the Solana Blockchain. Each Radar Rat is unique and algorithmically generated using 70+ traits.</p>
                        </Col>
                    </Row>
                    <Row justifyContent="center">
                        <Col col="12 xl-8 xxl-7">
                            <Row className={styles.pictures}>
                                <Col col="4 xl-4">
                                    <img data-aos="zoom-out" data-aos-duration="500" src={picture1} alt="" />
                                </Col>
                                <Col col="4 xl-4">
                                    <img data-aos="zoom-out" data-aos-duration="500" data-aos-delay="100" src={picture2} alt="" />
                                </Col>
                                <Col col="4 xl-4">
                                    <img data-aos="zoom-out" data-aos-duration="500" data-aos-delay="200" src={picture3} alt="" />
                                </Col>
                                <Col col="4 xl-4">
                                    <img data-aos="zoom-out" data-aos-duration="500" data-aos-delay="300" src={picture4} alt="" />
                                </Col>
                                <Col col="4 xl-4">
                                    <img data-aos="zoom-out" data-aos-duration="500" data-aos-delay="400" src={picture5} alt="" />
                                </Col>
                                <Col col="4 xl-4">
                                    <img data-aos="zoom-out" data-aos-duration="500" data-aos-delay="500" src={picture6} alt="" />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    );
}

export default SectionDigitalArt;

import React from 'react';
import { Container, Row, Col } from 'bootstrap-4-react';
import styles from './SectionStory.module.css';
import picture1 from '../../media/img/story-img1.png';
import picture2 from '../../media/img/story-img2.png';
import leftarrow from '../../media/img/left-arrow.svg';
import rightarrow from '../../media/img/right-arrow.svg';
import classNames from 'classnames';

const SectionStory = () => {
    return (
        <section className={styles.SectionStory}>
            <h2 className={classNames(styles.title, "section-title")}><span>The Story</span></h2>
            <Container>
                <Row>
                    <Col col="12">
                        <div className={styles.content}>
                            <p data-aos="fade-up" data-aos-duration="800">LCD Lab is disrupting the crypto and art world by launching the first ever NFT collection where every NFT is linked to a physical art on Solana Blockchain.</p>
                            <p data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">Every holder of the NFT will have the ownership rights for the famous and limited - Banksy Walled Off Hotel Box Set</p>
                        </div>
                    </Col>
                </Row>
                <Row className={styles.pictures}>
                    <Col col="5 lg-4">
                        <Row>
                            <Col col="auto">
                                <img src={picture1} alt="" />
                                <div className={styles.text}>
                                    <p data-aos="fade-up" data-aos-duration="800"><strong>Radar Rats NFT</strong></p>
                                    <p data-aos="fade-up" data-aos-duration="800" data-aos-delay="300"><i>Created by LCD LAB.</i></p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col col="2 lg-4">
                        <Row justifyContent="center">
                            <Col col="auto" className={styles.arrows}>
                                <div data-aos="fade-left"><img src={leftarrow} alt="" /></div>
                                <div data-aos="fade-right"><img src={rightarrow} alt="" /></div>
                            </Col>
                        </Row>
                    </Col>
                    <Col col="5 lg-4">
                        <Row justifyContent="end">
                            <Col col="auto">
                                <img src={picture2} alt="" />
                                <div className={styles.text}>
                                    <p data-aos="fade-up" data-aos-duration="800"><strong>Walled Off Hotel Box Set </strong></p>
                                    <p data-aos="fade-up" data-aos-duration="800" data-aos-delay="300"><i>Created by Banksy</i></p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default SectionStory;

import React from 'react';
import { Container, Row, Col } from 'bootstrap-4-react';
import styles from './SectionPhysicalArt.module.css';
import picture from '../../media/img/physical-art-img.png';

const SectionPhysicalArt = () => {
    return (
        <section className={styles.SectionPhysicalArt}>
            <h2 className="section-title"><span>Physical art</span></h2>
            <Container>
                <Row>
                    <Col col="7 xl-7" className={styles.description}>
                        <div data-aos="fade-up" data-aos-duration="800">
                            <p><strong>Walled Off Hotel Box Set.</strong></p>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                            <p><i>Created in 2017.</i></p>
                            <p><i>Artist: Banksy</i></p>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
                            <p>Framed lithograph and concrete,</p>
                            <p>25,5 x 25,5 cm</p>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="800">
                            <p><strong>Estimation: 1200-1500$</strong></p>
                        </div>
                    </Col>
                    <Col col="5 xl-5">
                        <img className={styles.picture} src={picture} alt='' />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default SectionPhysicalArt;

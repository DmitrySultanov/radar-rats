import React from 'react';
import { Container, Row, Col, Button } from 'bootstrap-4-react';
import styles from './SectionInfo.module.css';
import classNames from 'classnames';

const SectionInfo = () => {
    return (
        <>
            <section className={styles.SectionInfo}>
                <h2 className='section-title'><span>Info</span></h2>
                <Container>
                    <Row>
                        <Col col="6 xl-5" className={styles.Box}>
                            <p data-aos="fade-up" data-aos-duration="800">Join the community <br/>Be one /art step ahead!</p>
                            <div className={styles.btnGroup} data-aos="fade-up" data-aos-duration="800">
                                <Button as="a" href="https://discord.gg/lcdlab" target="_blank" rel="noopener noreferrer" className={classNames(styles.socButton, styles.socButtonDiscord)}>Discord</Button>
                                <Button as="a" href="https://twitter.com/LCDLabNFT" target="_blank" rel="noopener noreferrer" className={classNames(styles.socButton, styles.socButtonTwitter)}>Twitter</Button>
                            </div>
                        </Col>
                        <Col col="6 xl-6" className={styles.Box}>
                            <p data-aos="fade-up" data-aos-duration="800" data-aos-delay="300" className={styles.accent}>More detailed information can be found in the roadmap channel in our discord</p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default SectionInfo;

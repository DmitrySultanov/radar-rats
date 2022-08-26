import React from 'react';
import { Container, Row, Col } from 'bootstrap-4-react';
import styles from './SectionPowerChoice.module.css';
import { List } from 'bootstrap-4-react/lib/components';

const SectionPowerChoice = () => {
    return (
        <section className={styles.sectionPowerChoice}>
            <h2 className="section-title"><span>THE POWER OF CHOICE</span></h2>
            <Container>
                <Row>
                    <Col col="12">
                        <p data-aos="fade-up" data-aos-duration="800" className={styles.text}>Each Radar Rats NFT holder will have to decide…</p>
                    </Col>
                    <Col col="12">
                        <List className={styles.list}>
                            <List.Item data-aos="fade-up" data-aos-duration="800" data-aos-delay="300"><p><strong>Option A:</strong>Hold the Radar Rat NFT</p></List.Item>
                            <List.Item data-aos="fade-up" data-aos-duration="800" data-aos-delay="600"><p><strong>Option B:</strong>Burn the NFT and get the Banksy art piece instantly shipped to you.</p></List.Item>
                        </List>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default SectionPowerChoice;

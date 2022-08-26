import React from 'react';
import { Container, Row, Col, List, BA } from 'bootstrap-4-react';
import styles from './Header.module.css';
import classNames from 'classnames';
import presskit from '../../media/Banksy_LCDLAB_08_26.pdf';

const Header = () => {
    return (
        <header>
            <Container>
                <Row>
                    <Col col="12">
                        <List className={classNames(styles.navbar, 'nav')}>
                            <List.Item>
                                <BA href="https://discord.gg/lcdlab" target="_blank" rel="noopener noreferrer">
                                    Discord.
                                </BA>
                            </List.Item>
                            <List.Item>
                                <BA href="https://twitter.com/LCDLabNFT" target="_blank" rel="noopener noreferrer">
                                    Twitter.
                                </BA>
                            </List.Item>
                            <List.Item>
                                <BA href={presskit} target="_blank" rel="noopener noreferrer">
                                    Press Kit.
                                </BA>
                            </List.Item>
                        </List>
                    </Col>
                </Row>
            </Container>
        </header>
    );
}

export default Header;

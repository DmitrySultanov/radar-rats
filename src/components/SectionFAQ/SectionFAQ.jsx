import React from 'react';
import { Container, Row, Col, Card, Collapse } from 'bootstrap-4-react';
import styles from './SectionFAQ.module.css';
import classNames from 'classnames';

const SectionFAQ = () => {
    return (
        <section className={styles.SectionFAQ}>
            <h2 className="section-title"><span>F.A.Q.</span></h2>
            <Container>
                <Row justifyContent="center">
                    <Col col="12">
                        <div className={styles.accordion} id="accordionExample">
                            <Card className={styles.acc_section}>
                                <Collapse.Button className={styles.acc_head} target="#collapseOne" id="headingOne" aria-expanded="false">
                                Is Banksy behind this project?<span className={styles.btn}></span>
                                </Collapse.Button>
                                <Collapse className={styles.acc_content} id="collapseOne" aria-labelledby="headingOne" data-parent="#accordionExample">
                                    <div><p>No, this project is brought to you by LCD Lab tokenizing certified Banksy Box Sets.
                                    </p></div>
                                </Collapse>
                            </Card>
                            <Card className={styles.acc_section}>
                                <Collapse.Button className={styles.acc_head} target="#collapseTwo" id="headingTwo" aria-expanded="false">
                                What is LCD Lab? <span className={styles.btn}></span>
                                </Collapse.Button>
                                <Collapse className={styles.acc_content} id="collapseTwo" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                    <div><p>LCD Lab has been pushing innovations in the NFT space since 2020. We started by working on Leo Caillard's first Genesis collection, the Stone Heads, and now we are introducing tokenized art.</p></div>
                                </Collapse>
                            </Card>
                            <Card className={styles.acc_section}>
                                <Collapse.Button className={styles.acc_head} target="#collapseThree" id="headingThree" aria-expanded="false">
                                How can I be sure it is a real Banksy? <span className={styles.btn}></span>
                                </Collapse.Button>
                                <Collapse className={styles.acc_content} id="collapseThree" aria-labelledby="headingThree" data-parent="#accordionExample">
                                    <div><p>The collection is authenticated by Jean-Marc Scialom, a well-known street art expert working with Drouot, the famous French auction house. His independent and official estimation made in August 2022 for a box is between 1200 euros and 1500 euros.</p></div>
                                </Collapse>
                            </Card>
                            <Card className={styles.acc_section}>
                                <Collapse.Button className={styles.acc_head} target="#collapseFour" id="headingFour" aria-expanded="false">
                                Is the collection verified by Pest Control? <span className={styles.btn}></span>
                                </Collapse.Button>
                                <Collapse className={styles.acc_content} id="collapseFour" aria-labelledby="headingFour" data-parent="#accordionExample">
                                    <div><p>Pest Control is not qualified to certify Box Sets. Only Art Dealers and Experts can do it. </p></div>
                                </Collapse>
                            </Card>
                            <Card className={styles.acc_section}>
                                <Collapse.Button className={styles.acc_head} target="#collapseFive" id="headingFive" aria-expanded="false">
                                How can I be sure you own 1000 Banksy box set? <span className={styles.btn}></span>
                                </Collapse.Button>
                                <Collapse className={styles.acc_content} id="collapseFive" aria-labelledby="headingFive" data-parent="#accordionExample">
                                    <div><p>The collection certificate confirms LCD Lab owns 1000 Banksy Box sets. </p></div>
                                </Collapse>
                            </Card>
                            <Card className={styles.acc_section}>
                                <Collapse.Button className={styles.acc_head} target="#collapseSix" id="headingSix" aria-expanded="false">
                                Do you guarantee after-market value? <span className={styles.btn}></span>
                                </Collapse.Button>
                                <Collapse className={styles.acc_content} id="collapseSix" aria-labelledby="headingSix" data-parent="#accordionExample">
                                    <div><p>We do not guarantee after-market value. Like any art piece, the value fluctuates in an open art market. </p></div>
                                </Collapse>
                            </Card>
                            <Card className={styles.acc_section}>
                                <Collapse.Button className={styles.acc_head} target="#collapseSeven" id="headingSeven" aria-expanded="false">
                                On which blockchain will the NFT be minted? <span className={styles.btn}></span>
                                </Collapse.Button>
                                <Collapse className={styles.acc_content} id="collapseSeven" aria-labelledby="headingSeven" data-parent="#accordionExample">
                                    <div><p>The NFT will be minted on the Solana blockchain on the Magic Eden Launchpad. </p></div>
                                </Collapse>
                            </Card>
                            <Card className={styles.acc_section}>
                                <Collapse.Button className={styles.acc_head} target="#collapseEight" id="headingEight" aria-expanded="false">
                                When is the mint? <span className={styles.btn}></span>
                                </Collapse.Button>
                                <Collapse className={styles.acc_content} id="collapseEight" aria-labelledby="headingEight" data-parent="#accordionExample">
                                    <div><p>The mint is on September 17th. </p></div>
                                </Collapse>
                            </Card>
                            <Card className={styles.acc_section}>
                                <Collapse.Button className={styles.acc_head} target="#collapseNine" id="headingNine" aria-expanded="false">
                                What is the mint price? <span className={styles.btn}></span>
                                </Collapse.Button>
                                <Collapse className={styles.acc_content} id="collapseNine" aria-labelledby="headingNine" data-parent="#accordionExample">
                                    <div><p>The mint price will be 1000 USD in SOL. </p></div>
                                </Collapse>
                            </Card>
                            <Card className={styles.acc_section}>
                                <Collapse.Button className={styles.acc_head} target="#collapseTen" id="headingTen" aria-expanded="false">
                                How Can I get Whitelisted? <span className={styles.btn}></span>
                                </Collapse.Button>
                                <Collapse className={styles.acc_content} id="collapseTen" aria-labelledby="headingTen" data-parent="#accordionExample">
                                    <div><p>The easiest way to get whitelisted is to hold 5 Stone Heads, the genesis collection from LCD Lab. </p></div>
                                </Collapse>
                            </Card>
                            <Card className={styles.acc_section}>
                                <Collapse.Button className={styles.acc_head} target="#collapseEleven" id="headingEleven" aria-expanded="false">
                                How Can I learn more about this? <span className={styles.btn}></span>
                                </Collapse.Button>
                                <Collapse className={styles.acc_content} id="collapseEleven" aria-labelledby="headingEleven" data-parent="#accordionExample">
                                    <div><p>Join the Discord and follow our Twitter Page. </p></div>
                                </Collapse>
                            </Card>
                            <Card className={styles.acc_section}>
                                <Collapse.Button className={styles.acc_head} target="#collapseTwelve" id="headingTwelve" aria-expanded="false">
                                How can I buy the NFT? <span className={styles.btn}></span>
                                </Collapse.Button>
                                <Collapse className={styles.acc_content} id="collapseTwelve" aria-labelledby="headingTwelve" data-parent="#accordionExample">
                                    <div><p>You get the NFT by either minting it on Magic Eden Launch Pad or purchasing it on the secondary market. (Magic Eden, Open Sea, and every Solana marketplace) </p></div>
                                </Collapse>
                            </Card>
                            <Card className={styles.acc_section}>
                                <Collapse.Button className={styles.acc_head} target="#collapseThirteen" id="headingThirteen" aria-expanded="false">
                                What benefits do I get from keeping the NFT? <span className={styles.btn}></span>
                                </Collapse.Button>
                                <Collapse className={styles.acc_content} id="collapseThirteen" aria-labelledby="headingThirteen" data-parent="#accordionExample">
                                    <div><p>Owners of Radar Rats NFTs will open access to the LCD Lab’s roadmap. </p></div>
                                </Collapse>
                            </Card>
                            <Card className={styles.acc_section}>
                                <Collapse.Button className={styles.acc_head} target="#collapseFourteen" id="headingFourteen" aria-expanded="false">
                                How will I burn the NFT? <span className={styles.btn}></span>
                                </Collapse.Button>
                                <Collapse className={styles.acc_content} id="collapseFourteen" aria-labelledby="headingFourteen" data-parent="#accordionExample">
                                    <div><p>You just connect your wallet to the Banksy Radar Rats website, choose burn and redeem and then enter your contact information.</p></div>
                                </Collapse>
                            </Card>
                            <Card className={styles.acc_section}>
                                <Collapse.Button className={styles.acc_head} target="#collapseFiveteen" id="headingFiveteen" aria-expanded="false">
                                Are all boxes unique? <span className={styles.btn}></span>
                                </Collapse.Button>
                                <Collapse className={styles.acc_content} id="collapseFiveteen" aria-labelledby="headingFiveteen" data-parent="#accordionExample">
                                    <div><p>Each box has a unique color pattern. Unfortunately, you cannot choose which box set you will get. </p></div>
                                </Collapse>
                            </Card>
                            <Card className={styles.acc_section}>
                                <Collapse.Button className={styles.acc_head} target="#collapseSixteen" id="headingSixteen" aria-expanded="false">
                                Will I need to pay to get my box delivered? <span className={styles.btn}></span>
                                </Collapse.Button>
                                <Collapse className={styles.acc_content} id="collapseSixteen" aria-labelledby="headingSixteen" data-parent="#accordionExample">
                                    <div><p>You get the box free of any charge from FEDEX with a specific tracking number in an insured package. </p></div>
                                </Collapse>
                            </Card>
                            <Card className={styles.acc_section}>
                                <Collapse.Button className={styles.acc_head} target="#collapseSeventeen" id="headingSeventeen" aria-expanded="false">
                                Where can I get the box delivered? <span className={styles.btn}></span>
                                </Collapse.Button>
                                <Collapse className={styles.acc_content} id="collapseSeventeen" aria-labelledby="headingSeventeen" data-parent="#accordionExample">
                                    <div><p>Everywhere FEDEX delivers packages.</p></div>
                                </Collapse>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </Container>
		</section>
    );
}

export default SectionFAQ;
import React from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

const ProjectHome02 = () => {
    return (
        <div className="project_iso project_iso_bg">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="section_header section_header_white text-center">
                            <div className="shadow_icon"><img src="images/shadow_icon4.png" alt="" /></div>
                            <h6 className="section_sub_title">OUR PROJECTS</h6>
                            <h1 className="section_title">Our Most Popular Projects</h1>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Tabs>
                            <TabList className="button-group filters-button-group">
                                <Tab className="button is-checked" data-filter="*">All</Tab>
                                <Tab className="button" data-filter=".commercial">Commercial</Tab>
                                <Tab className="button" data-filter=".highrise">Highrise</Tab>
                                <Tab className="button" data-filter=".residential">Residential</Tab>
                                <Tab className="button" data-filter=".business">Business</Tab>
                            </TabList>

                            <div className="grid grid-4 gutter-15">
                                <TabPanel>
                                    <div className="element-item residential business">
                                        <div className="teambox">
                                            <img src="images/team/1.png" alt="" />
                                            <div className="teambox_inner">
                                                <div className="team_social">
                                                    <div className="share"><i className="ion-android-share-alt"></i></div>
                                                    <ul>
                                                        <li className="facebook"><a href="#"><i className="ion-social-facebook"></i></a></li>
                                                        <li className="twitter"><a href="#"><i className="ion-social-twitter"></i></a></li>
                                                        <li className="instagram"><a href="#"><i className="ion-social-instagram-outline"></i></a></li>
                                                        <li className="linkedin"><a href="#"><i className="ion-social-linkedin-outline"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div className="teambox_intro">
                                                    <div className="team_flex team_size">
                                                        <h6>NEW YORK</h6>
                                                        <h5><a href="/project-details">Large Garden Lodge</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>

                                <TabPanel>
                                    <div className="element-item highrise">
                                        <div className="teambox">
                                            <img src="images/team/2.png" alt="" />
                                            <div className="teambox_inner">
                                                <div className="team_social">
                                                    <div className="share"><i className="ion-android-share-alt"></i></div>
                                                    <ul>
                                                        <li className="facebook"><a href="#"><i className="ion-social-facebook"></i></a></li>
                                                        <li className="twitter"><a href="#"><i className="ion-social-twitter"></i></a></li>
                                                        <li className="instagram"><a href="#"><i className="ion-social-instagram-outline"></i></a></li>
                                                        <li className="linkedin"><a href="#"><i className="ion-social-linkedin-outline"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div className="teambox_intro">
                                                    <div className="team_flex team_size">
                                                        <h6>NEW YORK</h6>
                                                        <h5><a href="/project-details">Commercial Building</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>

                                <TabPanel>
                                    <div className="element-item residential commercial">
                                        <div className="teambox">
                                            <img src="images/team/3.png" alt="" />
                                            <div className="teambox_inner">
                                                <div className="team_social">
                                                    <div className="share"><i className="ion-android-share-alt"></i></div>
                                                    <ul>
                                                        <li className="facebook"><a href="#"><i className="ion-social-facebook"></i></a></li>
                                                        <li className="twitter"><a href="#"><i className="ion-social-twitter"></i></a></li>
                                                        <li className="instagram"><a href="#"><i className="ion-social-instagram-outline"></i></a></li>
                                                        <li className="linkedin"><a href="#"><i className="ion-social-linkedin-outline"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div className="teambox_intro">
                                                    <div className="team_flex team_size">
                                                        <h6>NEW YORK</h6>
                                                        <h5><a href="/project-details">Modern Pent House</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div className="element-item highrise commercial">
                                        <div className="teambox">
                                            <img src="images/team/5.png" alt="" />
                                            <div className="teambox_inner">
                                                <div className="team_social">
                                                    <div className="share"><i className="ion-android-share-alt"></i></div>
                                                    <ul>
                                                        <li className="facebook"><a href="#"><i className="ion-social-facebook"></i></a></li>
                                                        <li className="twitter"><a href="#"><i className="ion-social-twitter"></i></a></li>
                                                        <li className="instagram"><a href="#"><i className="ion-social-instagram-outline"></i></a></li>
                                                        <li className="linkedin"><a href="#"><i className="ion-social-linkedin-outline"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div className="teambox_intro">
                                                    <div className="team_flex team_size">
                                                        <h6>NEW YORK</h6>
                                                        <h5><a href="/project-details">Large Swiming Pool</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>

                                <TabPanel>
                                    <div className="element-item business highrise">
                                        <div className="teambox">
                                            <img src="images/team/9.png" alt="" />
                                            <div className="teambox_inner">
                                                <div className="team_social">
                                                    <div className="share"><i className="ion-android-share-alt"></i></div>
                                                    <ul>
                                                        <li className="facebook"><a href="#"><i className="ion-social-facebook"></i></a></li>
                                                        <li className="twitter"><a href="#"><i className="ion-social-twitter"></i></a></li>
                                                        <li className="instagram"><a href="#"><i className="ion-social-instagram-outline"></i></a></li>
                                                        <li className="linkedin"><a href="#"><i className="ion-social-linkedin-outline"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div className="teambox_intro">
                                                    <div className="team_flex team_size">
                                                        <h6>NEW YORK</h6>
                                                        <h5><a href="/project-details">Highrise Architecture</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>

                                <TabPanel>
                                    <div className="element-item residential">
                                        <div className="teambox">
                                            <img src="images/team/10.png" alt="" />
                                            <div className="teambox_inner">
                                                <div className="team_social">
                                                    <div className="share"><i className="ion-android-share-alt"></i></div>
                                                    <ul>
                                                        <li className="facebook"><a href="#"><i className="ion-social-facebook"></i></a></li>
                                                        <li className="twitter"><a href="#"><i className="ion-social-twitter"></i></a></li>
                                                        <li className="instagram"><a href="#"><i className="ion-social-instagram-outline"></i></a></li>
                                                        <li className="linkedin"><a href="#"><i className="ion-social-linkedin-outline"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div className="teambox_intro">
                                                    <div className="team_flex team_size">
                                                        <h6>NEW YORK</h6>
                                                        <h5><a href="/project-details">Curve Sky Tower</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div className="element-item residential">
                                        <div className="teambox">
                                            <img src="images/team/11.png" alt="" />
                                            <div className="teambox_inner">
                                                <div className="team_social">
                                                    <div className="share"><i className="ion-android-share-alt"></i></div>
                                                    <ul>
                                                        <li className="facebook"><a href="#"><i className="ion-social-facebook"></i></a></li>
                                                        <li className="twitter"><a href="#"><i className="ion-social-twitter"></i></a></li>
                                                        <li className="instagram"><a href="#"><i className="ion-social-instagram-outline"></i></a></li>
                                                        <li className="linkedin"><a href="#"><i className="ion-social-linkedin-outline"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div className="teambox_intro">
                                                    <div className="team_flex team_size">
                                                        <h6>NEW YORK</h6>
                                                        <h5><a href="/project-details">Shopping Mall</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div className="element-item business residential">
                                        <div className="teambox">
                                            <img src="images/team/12.png" alt="" />
                                            <div className="teambox_inner">
                                                <div className="team_social">
                                                    <div className="share"><i className="ion-android-share-alt"></i></div>
                                                    <ul>
                                                        <li className="facebook"><a href="#"><i className="ion-social-facebook"></i></a></li>
                                                        <li className="twitter"><a href="#"><i className="ion-social-twitter"></i></a></li>
                                                        <li className="instagram"><a href="#"><i className="ion-social-instagram-outline"></i></a></li>
                                                        <li className="linkedin"><a href="#"><i className="ion-social-linkedin-outline"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div className="teambox_intro">
                                                    <div className="team_flex team_size">
                                                        <h6>NEW YORK</h6>
                                                        <h5><a href="/project-details">Wonderful Bridge</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div className="element-item commercial residential">
                                        <div className="teambox">
                                            <img src="images/team/13.png" alt="" />
                                            <div className="teambox_inner">
                                                <div className="team_social">
                                                    <div className="share"><i className="ion-android-share-alt"></i></div>
                                                    <ul>
                                                        <li className="facebook"><a href="#"><i className="ion-social-facebook"></i></a></li>
                                                        <li className="twitter"><a href="#"><i className="ion-social-twitter"></i></a></li>
                                                        <li className="instagram"><a href="#"><i className="ion-social-instagram-outline"></i></a></li>
                                                        <li className="linkedin"><a href="#"><i className="ion-social-linkedin-outline"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div className="teambox_intro">
                                                    <div className="team_flex team_size">
                                                        <h6>NEW YORK</h6>
                                                        <h5><a href="/project-details">Small House Area</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div className="element-item business highrise">
                                        <div className="teambox">
                                            <img src="images/team/16.png" alt="" />
                                            <div className="teambox_inner">
                                                <div className="team_social">
                                                    <div className="share"><i className="ion-android-share-alt"></i></div>
                                                    <ul>
                                                        <li className="facebook"><a href="#"><i className="ion-social-facebook"></i></a></li>
                                                        <li className="twitter"><a href="#"><i className="ion-social-twitter"></i></a></li>
                                                        <li className="instagram"><a href="#"><i className="ion-social-instagram-outline"></i></a></li>
                                                        <li className="linkedin"><a href="#"><i className="ion-social-linkedin-outline"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div className="teambox_intro">
                                                    <div className="team_flex team_size">
                                                        <h6>NEW YORK</h6>
                                                        <h5><a href="/project-details">Large Swiming Pool</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div className="element-item residential">
                                        <div className="teambox">
                                            <img src="images/team/15.png" alt="" />
                                            <div className="teambox_inner">
                                                <div className="team_social">
                                                    <div className="share"><i className="ion-android-share-alt"></i></div>
                                                    <ul>
                                                        <li className="facebook"><a href="#"><i className="ion-social-facebook"></i></a></li>
                                                        <li className="twitter"><a href="#"><i className="ion-social-twitter"></i></a></li>
                                                        <li className="instagram"><a href="#"><i className="ion-social-instagram-outline"></i></a></li>
                                                        <li className="linkedin"><a href="#"><i className="ion-social-linkedin-outline"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div className="teambox_intro">
                                                    <div className="team_flex team_size">
                                                        <h6>NEW YORK</h6>
                                                        <h5><a href="/project-details">Modern Pent House</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div className="element-item business highrise">
                                        <div className="teambox">
                                            <img src="images/team/9.png" alt="" />
                                            <div className="teambox_inner">
                                                <div className="team_social">
                                                    <div className="share"><i className="ion-android-share-alt"></i></div>
                                                    <ul>
                                                        <li className="facebook"><a href="#"><i className="ion-social-facebook"></i></a></li>
                                                        <li className="twitter"><a href="#"><i className="ion-social-twitter"></i></a></li>
                                                        <li className="instagram"><a href="#"><i className="ion-social-instagram-outline"></i></a></li>
                                                        <li className="linkedin"><a href="#"><i className="ion-social-linkedin-outline"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div className="teambox_intro">
                                                    <div className="team_flex team_size">
                                                        <h6>NEW YORK</h6>
                                                        <h5><a href="/project-details">Highrise Architecture</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>











                            </div>
                        </Tabs>


                    </div>
                    <div className="col-12 box_bottom">
                        <p>If you want to see all the Builderrine projects,</p><a href="/project">Click Here</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectHome02;
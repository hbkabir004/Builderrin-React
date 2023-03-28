import React from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

const ProjectHome01 = () => {
    return (
        <div className="section project_iso project_iso1">
            <div className="container-fluid g-0">
                <div className="section_header text-center">
                    <div className="shadow_icon"><img src="images/about/shadow_icon1.png" alt="" /></div>
                    <h6 className="section_sub_title">ABOUT BUILDERRINE CONSTRUCTION</h6>
                    <h1 className="section_title">Our Most Popular Projects</h1>
                </div>
                <div className="row g-0">
                    <div className="col">
                        <Tabs>
                            <TabList className="button-group filters-button-group">
                                <Tab className="button is-checked" data-filter="*">All</Tab>
                                <Tab className="button" data-filter=".commercial">Commercial</Tab>
                                <Tab className="button" data-filter=".highrise">Highrise</Tab>
                                <Tab className="button" data-filter=".residential">Residential</Tab>
                                <Tab className="button" data-filter=".business">Business</Tab>
                            </TabList>


                            <div className="grid grid-5">
                                <TabPanel>
                                    <div className="element-item highrise">
                                        <div className="teambox">
                                            <img src="images/team/Project_2_Images/3.png" alt="" />
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
                                                    <div className="team_flex">
                                                        <h6>NEW YORK</h6>
                                                        <h5><a href="/project-details">Multistored Building</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div className="element-item business highrise">
                                        <div className="teambox">
                                            <img src="images/team/Project_2_Images/4.png" alt="" />
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
                                                    <div className="team_flex">
                                                        <h6>NEW YORK</h6>
                                                        <h5><a href="/project-details">Highrise Architecture</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div className="element-item residential ">
                                        <div className="teambox">
                                            <img src="images/team/Project_2_Images/5.png" alt="" />
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
                                                    <div className="team_flex">
                                                        <h6>NEW YORK</h6>
                                                        <h5><a href="/project-details">Large Swiming Pool</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div className="element-item commercial">
                                        <div className="teambox">
                                            <img src="images/team/Project_2_Images/1.png" alt="" />
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
                                                    <div className="team_flex">
                                                        <h6>NEW YORK</h6>
                                                        <h5><a href="/project-details">Large City Tower</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div className="element-item residential">
                                        <div className="teambox">
                                            <img src="images/team/Project_2_Images/2.png" alt="" />
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
                                                    <div className="team_flex">
                                                        <h6>NEW YORK</h6>
                                                        <h5><a href="/project-details">Curve Sky Tower</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>

                            </div>


                        </Tabs>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectHome01;
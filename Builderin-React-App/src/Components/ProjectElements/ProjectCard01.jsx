import React from 'react';
import LazyLoad from 'react-lazyload';


const ProjectCard01 = ({ data }) => {
    const { img, city, title, tag } = data;
    return (
        <div className={`element-item ${tag}`}>
            <div className="teambox">
                <LazyLoad height={500} once>
                    <img src={img} alt="" />
                </LazyLoad>

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
                            <h6>{city}</h6>
                            <h5><a href="/project-details">{title}</a></h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard01;
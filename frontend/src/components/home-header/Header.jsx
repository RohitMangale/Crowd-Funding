import CountUp from 'react-countup';
import './Header.css'

import groupstudy from '../../assets/imgs/group_study.png'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header '>

            <div className="h_cont">
                <div className="h_part">


                    <div className="h_pt1">
                        <div className="h1_left">
                            <h1 className='mainHeading'>
                                Inspiring Progress: Explore and Fund Visionary Projects
                            </h1>
                            <p className='para'>
                                Experience the transformative power of crowdfunding as you embark on a journey to ignite creativity and drive positive change. By backing innovative projects and visionary creators, you become an essential force for progress.
                            </p>
                            <div className="h_btn">
                                <NavLink to='/contactUs' className='btn1'>Contact us
                                
                                </NavLink>
                            </div>

                        </div>
                        <div className="h1_right">
                            <img src={groupstudy} alt="" />
                        </div>
                    </div>
                </div>

                <div className="h_counters ">
                    <div className="hc_1">
                        <div className="hc_box">
                            <div className="hc_info">
                                <div className="hc_nums">

                                <CountUp start={0} end={100} delay={0} suffix='+'>
                                {({ countUpRef }) => (
                                  <div>
                                    <span ref={countUpRef} />
                                  </div>
                                )}
                              </CountUp>

                                </div>
                                <div className="hc_text">
                                campaigns achieve funding goals, fulfilling dreams!
                                </div>
                            </div>
                            <div className="hc_info">
                                <div className="hc_nums">

                                <CountUp start={0} end={57} delay={0} suffix='+'>
                                {({ countUpRef }) => (
                                  <div>
                                    <span ref={countUpRef} />
                                  </div>
                                )}
                              </CountUp>

                                </div>
                                <div className="hc_text">
                                investors ready to fuel your venture with funding.
                                </div>
                            </div>
                            <div className="hc_info border none">
                                <div className="hc_nums">

                                <CountUp start={0} end={465} delay={0} suffix='+'>
                                {({ countUpRef }) => (
                                  <div>
                                    <span ref={countUpRef} />
                                  </div>
                                )}
                              </CountUp>

                                </div>
                                <div className="hc_text">
                                    
                                    interns in securing employment opportunities!
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Header

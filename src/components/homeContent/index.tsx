import React, { FC } from 'react';
import Styles from './homeContent.module.css';

const HomeContent: FC = () => {
    return (
        <>
            <div className={'container ' + Styles.introContainer}>
                <h2
                    className="text-center text-uppercase"
                    style={{
                        color: '#282828',
                        letterSpacing: '-0.5px',
                    }}
                    data-aos="fade-up"
                    data-aos-duration={1000}
                >
                    Delivering Reliable
                    <span style={{ color: '#ac3387' }}>
                        {' '}
                        ELECTRICAL SOLUTIONS
                    </span>
                </h2>
            </div>
        </>
    );
};

export default HomeContent;

import React, { FC } from 'react';
import Styles from './services.module.css';

const Services: FC = () => {
    return (
        <div
            className={`${Styles['services-container']} container`}
            id="services"
        >
            <div className="row">
                <div className="col-12">
                    <div className="text-center section-heading">Services</div>
                </div>
            </div>
        </div>
    );
};

export default Services;

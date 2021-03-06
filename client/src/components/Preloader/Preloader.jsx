import styles from './Preloader.module.css'
// import preload from '../../assets/Ellipse129.svg';
// import circle from '../../assets/Ellipse125.svg';
// import line from '../../assets/Vector10.svg';
// import logo from '../../assets/logo.svg';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


function Preloader({ procent }) {


    return (
        <div className={styles.container}>

            <div className={styles.svgcontainer}>

                <CircularProgressbarWithChildren value={procent} strokeWidth='0.9' styles={buildStyles({ rotation: 1, trailColor: 'none', pathColor: 'black' })} >

                    <svg width="100%" height="100%" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_b_947_7242)">
                            <circle className={styles.circle} cx="24.5" cy="24.5" r="24.3" fill="black" />
                            {/* <circle className={styles.loader} cx="24.5" cy="24.5" r="23.8" fill="none" stroke-width="0.3" stroke-miterlimit="10"/> */}
                        </g>

                        <path fill-rule="evenodd" clip-rule="evenodd" d="M24.6213 31.8268C28.6001 31.8268 31.8255 28.6014 31.8255 24.6226C31.8255 20.6438 28.6001 17.4184 24.6213 17.4184C20.6426 17.4184 17.4171 20.6438 17.4171 24.6226C17.4171 28.6014 20.6426 31.8268 24.6213 31.8268ZM24.6213 32.8301C29.1542 32.8301 32.8288 29.1555 32.8288 24.6226C32.8288 20.0897 29.1542 16.4151 24.6213 16.4151C20.0884 16.4151 16.4138 20.0897 16.4138 24.6226C16.4138 29.1555 20.0884 32.8301 24.6213 32.8301Z" fill="white" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M41.9102 19.5463L27.6899 34.7573L26.9557 34.0709L41.176 18.86L41.9102 19.5463Z" fill="white" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M22.3098 15.1363L8.08956 30.3473L7.3554 29.661L21.5757 14.45L22.3098 15.1363Z" fill="white" />
                        <defs>
                            <filter id="filter0_b_947_7242" x="-180.19" y="-180.19" width="409.379" height="409.379" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feGaussianBlur in="BackgroundImage" stdDeviation="90.0948" />
                                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_947_7242" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_947_7242" result="shape" />
                            </filter>
                        </defs>
                    </svg>
                </CircularProgressbarWithChildren>
            </div>

        </div>
    )
}

export default Preloader
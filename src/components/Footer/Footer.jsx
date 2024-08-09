import './Footer.scss';

export default function Footer () {
    return (
        <footer>
        <div className="footerContainer">
            <svg viewBox="0 0 99 99" fill="none" xmlns="http://www.w3.org/2000/svg" className='ckLogo'>
                <path d="M61.5012 80.238L60.5494 80.5767C52.5266 83.4153 43.7172 83.0405 35.9642 79.5308C28.2112 76.0212 22.1152 69.6485 18.9513 61.7458C15.7874 53.8431 15.8007 45.0228 18.9886 37.1297C22.1764 29.2367 28.2917 22.8825 36.0553 19.3963L36.9053 19.0157V1.58356L35.0486 2.15104C23.7025 5.61262 13.9769 13.0363 7.64352 23.0697C1.31016 33.1031 -1.20959 45.0786 0.543468 56.8146C2.29652 68.5505 8.20563 79.2661 17.1943 87.0091C26.1831 94.7522 37.6533 99.0076 49.5154 99C53.2222 99.0013 56.9175 98.5881 60.5325 97.7681C64.0349 96.9705 67.4396 95.7919 70.6857 94.2533L72.3475 93.465L61.5012 80.238Z"/>
                <path d="M95.1081 30.2315C91.3253 21.2636 84.9815 13.6117 76.8712 8.23401C68.7609 2.85635 59.2447 -0.00790476 49.5146 1.63851e-05C47.0792 0.000245481 44.6472 0.178228 42.2377 0.532537L41.0103 0.713372V75.9559C41.0103 75.9559 46.5254 78.9322 49.6994 76.983L55.4571 66.4566L65.4215 78.4267L65.3586 78.4656L75.9433 91.3749L77.0269 90.6486C81.5713 87.5954 85.5826 83.8149 88.8999 79.4588L68.5776 55.0479L78.49 41.811C78.49 41.811 78.522 39.2283 74.555 32.9101C70.9985 27.2442 68.4906 26.1742 68.4906 26.1742L58.3884 39.6619V17.7369C62.8947 19.0022 67.0805 21.2119 70.6678 24.2193C74.2551 27.2267 77.162 30.963 79.1954 35.1802C81.2288 39.3974 82.3423 43.999 82.4619 48.6796C82.5815 53.3602 81.7046 58.0127 79.8892 62.3283C79.8622 62.3923 79.8334 62.4552 79.8064 62.5191L91.192 76.1957C91.8238 75.2113 92.4208 74.2055 92.9828 73.1785C96.5352 66.6384 98.5709 59.3826 98.9393 51.9486C99.3077 44.5146 97.9994 37.093 95.1111 30.2335L95.1081 30.2315Z"/>
            </svg>
            <p className='moto'>Living to learn and find creative solutions. How can I help?</p>   
            {/* <div className="footDivide"></div>
            <a href="https://www.linkedin.com/in/cassy-kinderknecht" target="_blank">
                <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M41.0869 39.9916H32.871V27.9957C32.871 24.8541 31.5858 22.7132 28.7597 22.7132C26.5981 22.7132 25.396 24.1572 24.8364 25.5532C24.6266 26.0513 24.6594 26.7482 24.6594 27.4473V39.9916H16.52C16.52 39.9916 16.6249 18.7415 16.52 16.8103H24.6594V20.4477C25.1402 18.8551 27.7412 16.5853 31.894 16.5853C37.0412 16.5853 41.0869 19.919 41.0869 27.1021V39.9916ZM8.28831 13.9098H8.23586C5.61305 13.9098 3.9126 12.1381 3.9126 9.89446C3.9126 7.60277 5.66551 5.86816 8.33858 5.86816C11.0117 5.86816 12.6553 7.5984 12.7077 9.88791C12.7077 12.1315 11.0117 13.9098 8.28831 13.9098ZM4.84793 39.9907H12.0956V16.8094H4.84793V39.9907Z"/>
                    <mask id="mask0_22_26"  maskUnits="userSpaceOnUse" x="3" y="5" width="39" height="35">
                    <path fillRule="evenodd" clipRule="evenodd" d="M41.0869 39.9916H32.871V27.9957C32.871 24.8541 31.5858 22.7132 28.7597 22.7132C26.5981 22.7132 25.396 24.1572 24.8364 25.5532C24.6266 26.0513 24.6594 26.7482 24.6594 27.4473V39.9916H16.52C16.52 39.9916 16.6249 18.7415 16.52 16.8103H24.6594V20.4477C25.1402 18.8551 27.7412 16.5853 31.894 16.5853C37.0412 16.5853 41.0869 19.919 41.0869 27.1021V39.9916ZM8.28831 13.9098H8.23586C5.61305 13.9098 3.9126 12.1381 3.9126 9.89446C3.9126 7.60277 5.66551 5.86816 8.33858 5.86816C11.0117 5.86816 12.6553 7.5984 12.7077 9.88791C12.7077 12.1315 11.0117 13.9098 8.28831 13.9098ZM4.84793 39.9907H12.0956V16.8094H4.84793V39.9907Z" />
                    </mask>
                    <g mask="url(#mask0_22_26)">
                    <rect width="45" height="45"/>
                    </g>
                </svg>
            </a> */}
            <p>Cassy Kinderknecht Dallas, TX</p>                    
        </div>
    </footer>
    )
}
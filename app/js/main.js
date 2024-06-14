(function (){
  const dustWrapper = document.querySelector('.dust-wrapper')
  if(dustWrapper){

    for(let i = 0; i < 200; i++) {
      const dust = document.createElement('div');
      dust.classList.add('dust')
      dustWrapper.appendChild(dust)
    }
  }
})();

// decore element
(function(){
  const container = document.querySelector('.lines__wrapper')
  if (container === null) return
  let count = 15
  
  for (let i = 0; i < count; i++) {
    let line = document.createElement('div')
    line.innerHTML = `
    <svg width="2843" height="533" viewBox="0 0 2843 533" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path opacity="0.030303" d="M1772.11 317.647C2130.85 313.146 1872.08 308.607 2067.03 212.609C2119.69 275.554 2265.42 372.357 2427.05 256.002C2629.08 110.557 2970.53 87.6453 2612.76 128.71C2254.99 169.775 1928.6 32.1094 1646.29 82.5049C1363.98 132.9 1447.3 -76.1825 897.103 155.431C346.905 387.044 322.853 217.409 152.117 276.174C-18.6197 334.938 -25.6629 393.243 77.8186 413.167C181.3 433.092 629.304 442.692 877.553 360.335C1125.8 277.979 927.987 163.468 1344.13 120.849C1760.26 78.2301 1413.37 322.149 1772.11 317.647Z" stroke="url(#paint0_linear_299_816)"/>
    <path opacity="0.0606061" d="M1774.19 320.593C2132.93 316.091 1874.16 311.553 2069.11 215.554C2121.77 278.5 2267.5 375.303 2429.13 258.947C2631.16 113.503 2972.61 90.5911 2614.84 131.656C2257.07 172.721 1930.68 35.0552 1648.37 85.4507C1366.06 135.846 1449.38 -73.2367 899.182 158.377C348.984 389.99 324.932 220.355 154.196 279.119C-16.5406 337.884 -23.5838 396.189 79.8977 416.113C183.379 436.038 631.383 445.638 879.632 363.281C1127.88 280.924 930.066 166.414 1346.2 123.795C1762.34 81.1759 1415.44 325.095 1774.19 320.593Z" stroke="url(#paint1_linear_299_816)"/>
    <path opacity="0.0909091" d="M1776.27 323.539C2135.01 319.037 1876.24 314.498 2071.19 218.5C2123.85 281.446 2269.58 378.249 2431.21 261.893C2633.23 116.449 2974.69 93.5369 2616.92 134.602C2259.15 175.666 1932.76 38.001 1650.45 88.3965C1368.14 138.792 1451.46 -70.2909 901.261 161.322C351.063 392.936 327.011 223.3 156.275 282.065C-14.4615 340.83 -21.5047 399.134 81.9768 419.059C185.458 438.984 633.462 448.584 881.711 366.227C1129.96 283.87 932.145 169.359 1348.28 126.741C1764.42 84.1217 1417.52 328.041 1776.27 323.539Z" stroke="url(#paint2_linear_299_816)"/>
    <path opacity="0.121212" d="M1778.35 326.484C2137.09 321.983 1878.32 317.444 2073.27 221.446C2125.93 284.392 2271.66 381.194 2433.28 264.839C2635.31 119.394 2976.77 96.4825 2619 137.547C2261.23 178.612 1934.84 40.9465 1652.53 91.3421C1370.22 141.738 1453.54 -67.3453 903.34 164.268C353.142 395.881 329.09 226.246 158.354 285.011C-12.3824 343.775 -19.4256 402.08 84.0559 422.005C187.537 441.929 635.541 451.529 883.79 369.172C1132.04 286.816 934.224 172.305 1350.36 129.686C1766.5 87.0673 1419.6 330.986 1778.35 326.484Z" stroke="url(#paint3_linear_299_816)"/>
    <path opacity="0.151515" d="M1780.42 329.43C2139.17 324.928 1880.4 320.39 2075.35 224.391C2128.01 287.337 2273.74 384.14 2435.36 267.785C2637.39 122.34 2978.85 99.4283 2621.08 140.493C2263.31 181.558 1936.92 43.8923 1654.61 94.2879C1372.3 144.683 1455.62 -64.3995 905.419 167.214C355.221 398.827 331.17 229.192 160.433 287.957C-10.3033 346.721 -17.3465 405.026 86.135 424.95C189.616 444.875 637.62 454.475 885.87 372.118C1134.12 289.762 936.304 175.251 1352.44 132.632C1768.58 90.0131 1421.68 333.932 1780.42 329.43Z" stroke="url(#paint4_linear_299_816)"/>
    <path opacity="0.181818" d="M1782.5 332.376C2141.25 327.874 1882.48 323.336 2077.42 227.337C2130.09 290.283 2275.82 387.086 2437.44 270.73C2639.47 125.286 2980.92 102.374 2623.16 143.439C2265.39 184.504 1939 46.8381 1656.69 97.2337C1374.38 147.629 1457.7 -61.4537 907.498 170.16C357.3 401.773 333.249 232.138 162.512 290.902C-8.22417 349.667 -15.2674 407.972 88.2141 427.896C191.695 447.821 639.699 457.421 887.949 375.064C1136.2 292.707 938.383 178.197 1354.52 135.578C1770.66 92.9589 1423.76 336.878 1782.5 332.376Z" stroke="url(#paint5_linear_299_816)"/>
    <path opacity="0.212121" d="M1784.58 335.322C2143.33 330.82 1884.56 326.281 2079.5 230.283C2132.17 293.229 2277.9 390.032 2439.52 273.676C2641.55 128.231 2983 105.32 2625.23 146.384C2267.46 187.449 1941.08 49.7837 1658.77 100.179C1376.46 150.575 1459.77 -58.5081 909.577 173.105C359.38 404.718 335.328 235.083 164.591 293.848C-6.14507 352.613 -13.1883 410.917 90.2932 430.842C193.775 450.766 641.778 460.366 890.028 378.01C1138.28 295.653 940.462 181.142 1356.6 138.523C1772.74 95.9044 1425.84 339.823 1784.58 335.322Z" stroke="url(#paint6_linear_299_816)"/>
    <path opacity="0.242424" d="M1786.66 338.267C2145.41 333.766 1886.64 329.227 2081.58 233.229C2134.25 296.174 2279.98 392.977 2441.6 276.622C2643.63 131.177 2985.08 108.265 2627.31 149.33C2269.54 190.395 1943.16 52.7295 1660.85 103.125C1378.54 153.521 1461.85 -55.5623 911.656 176.051C361.459 407.664 337.407 238.029 166.67 296.794C-4.06597 355.558 -11.1092 413.863 92.3723 433.788C195.854 453.712 643.857 463.312 892.107 380.955C1140.36 298.599 942.541 184.088 1358.68 141.469C1774.82 98.8502 1427.92 342.769 1786.66 338.267Z" stroke="url(#paint7_linear_299_816)"/>
    <path opacity="0.272727" d="M1788.74 341.213C2147.48 336.711 1888.72 332.172 2083.66 236.174C2136.33 299.12 2282.06 395.923 2443.68 279.567C2645.71 134.123 2987.16 111.211 2629.39 152.276C2271.62 193.34 1945.24 55.6751 1662.92 106.071C1380.61 156.466 1463.93 -52.6168 913.735 178.996C363.538 410.61 339.486 240.974 168.75 299.739C-1.98687 358.504 -9.03008 416.809 94.4514 436.733C197.933 456.658 645.937 466.258 894.186 383.901C1142.44 301.544 944.62 187.033 1360.76 144.415C1776.9 101.796 1430 345.715 1788.74 341.213Z" stroke="url(#paint8_linear_299_816)"/>
    <path opacity="0.30303" d="M1790.82 344.159C2149.56 339.657 1890.8 335.118 2085.74 239.12C2138.4 302.066 2284.14 398.869 2445.76 282.513C2647.79 137.069 2989.24 114.157 2631.47 155.222C2273.7 196.286 1947.31 58.6209 1665 109.016C1382.69 159.412 1466.01 -49.671 915.815 181.942C365.617 413.556 341.565 243.92 170.829 302.685C0.0922333 361.45 -6.95097 419.754 96.5305 439.679C200.012 459.603 648.016 469.203 896.265 386.847C1144.51 304.49 946.699 189.979 1362.84 147.36C1778.98 104.742 1432.08 348.661 1790.82 344.159Z" stroke="url(#paint9_linear_299_816)"/>
    <path opacity="0.333333" d="M1792.9 347.105C2151.64 342.603 1892.87 338.064 2087.82 242.066C2140.48 305.012 2286.22 401.814 2447.84 285.459C2649.87 140.014 2991.32 117.103 2633.55 158.167C2275.78 199.232 1949.39 61.5667 1667.08 111.962C1384.77 162.358 1468.09 -46.7252 917.894 184.888C367.696 416.501 343.644 246.866 172.908 305.631C2.17133 364.396 -4.87187 422.7 98.6096 442.625C202.091 462.549 650.095 472.149 898.344 389.793C1146.59 307.436 948.778 192.925 1364.92 150.306C1781.06 107.687 1434.16 351.606 1792.9 347.105Z" stroke="url(#paint10_linear_299_816)"/>
    <path opacity="0.363636" d="M1794.98 350.05C2153.72 345.548 1894.95 341.01 2089.9 245.011C2142.56 307.957 2288.29 404.76 2449.92 288.404C2651.95 142.96 2993.4 120.048 2635.63 161.113C2277.86 202.178 1951.47 64.5122 1669.16 114.908C1386.85 165.303 1470.17 -43.7796 919.973 187.834C369.775 419.447 345.723 249.812 174.987 308.576C4.25044 367.341 -2.79277 425.646 100.689 445.57C204.17 465.495 652.174 475.095 900.423 392.738C1148.67 310.381 950.857 195.871 1367 153.252C1783.13 110.633 1436.24 354.552 1794.98 350.05Z" stroke="url(#paint11_linear_299_816)"/>
    <path opacity="0.393939" d="M1797.06 352.996C2155.8 348.494 1897.03 343.955 2091.98 247.957C2144.64 310.903 2290.37 407.706 2452 291.35C2654.03 145.906 2995.48 122.994 2637.71 164.059C2279.94 205.123 1953.55 67.458 1671.24 117.854C1388.93 168.249 1472.25 -40.8338 922.052 190.779C371.854 422.393 347.802 252.757 177.066 311.522C6.32954 370.287 -0.71367 428.591 102.768 448.516C206.249 468.441 654.253 478.041 902.502 395.684C1150.75 313.327 952.936 198.816 1369.07 156.198C1785.21 113.579 1438.31 357.498 1797.06 352.996Z" stroke="url(#paint12_linear_299_816)"/>
    <path opacity="0.424242" d="M1799.14 355.941C2157.88 351.44 1899.11 346.901 2094.06 250.903C2146.72 313.849 2292.45 410.651 2454.08 294.296C2656.11 148.851 2997.56 125.94 2639.79 167.004C2282.02 208.069 1955.63 70.4036 1673.32 120.799C1391.01 171.195 1474.33 -37.8883 924.131 193.725C373.934 425.338 349.882 255.703 179.146 314.468C8.40913 373.233 1.36592 431.537 104.847 451.462C208.329 471.386 656.333 480.986 904.582 398.629C1152.83 316.273 955.016 201.762 1371.15 159.143C1787.29 116.524 1440.39 360.443 1799.14 355.941Z" stroke="url(#paint13_linear_299_816)"/>
    <path opacity="0.454545" d="M1801.22 358.887C2159.96 354.386 1901.19 349.847 2096.14 253.849C2148.8 316.794 2294.53 413.597 2456.16 297.242C2658.18 151.797 2999.64 128.885 2641.87 169.95C2284.1 211.015 1957.71 73.3494 1675.4 123.745C1393.09 174.14 1476.41 -34.9425 926.211 196.671C376.013 428.284 351.961 258.649 181.225 317.414C10.4882 376.178 3.44502 434.483 106.927 454.407C210.408 474.332 658.412 483.932 906.661 401.575C1154.91 319.219 957.095 204.708 1373.23 162.089C1789.37 119.47 1442.47 363.389 1801.22 358.887Z" stroke="url(#paint14_linear_299_816)"/>
    <path opacity="0.484848" d="M1803.3 361.833C2162.04 357.331 1903.27 352.793 2098.22 256.794C2150.88 319.74 2296.61 416.543 2458.23 300.187C2660.26 154.743 3001.72 131.831 2643.95 172.896C2286.18 213.961 1959.79 76.2952 1677.48 126.691C1395.17 177.086 1478.49 -31.9967 928.29 199.617C378.092 431.23 354.04 261.595 183.304 320.359C12.5673 379.124 5.52412 437.429 109.006 457.353C212.487 477.278 660.491 486.878 908.74 404.521C1156.99 322.164 959.174 207.654 1375.31 165.035C1791.45 122.416 1444.55 366.335 1803.3 361.833Z" stroke="url(#paint15_linear_299_816)"/>
    <path opacity="0.515152" d="M1805.37 364.779C2164.12 360.277 1905.35 355.738 2100.3 259.74C2152.96 322.686 2298.69 419.489 2460.31 303.133C2662.34 157.688 3003.8 134.777 2646.03 175.841C2288.26 216.906 1961.87 79.2407 1679.56 129.636C1397.25 180.032 1480.57 -29.0511 930.369 202.562C380.171 434.175 356.119 264.54 185.383 323.305C14.6464 382.07 7.60322 440.374 111.085 460.299C214.566 480.223 662.57 489.823 910.819 407.467C1159.07 325.11 961.253 210.599 1377.39 167.98C1793.53 125.361 1446.63 369.28 1805.37 364.779Z" stroke="url(#paint16_linear_299_816)"/>
    <path opacity="0.545455" d="M1807.45 367.724C2166.2 363.223 1907.43 358.684 2102.37 262.686C2155.04 325.632 2300.77 422.434 2462.39 306.079C2664.42 160.634 3005.87 137.722 2648.1 178.787C2290.34 219.852 1963.95 82.1865 1681.64 132.582C1399.33 182.978 1482.65 -26.1053 932.448 205.508C382.25 437.121 358.198 267.486 187.462 326.251C16.7255 385.015 9.68233 443.32 113.164 463.245C216.645 483.169 664.649 492.769 912.898 410.412C1161.15 328.056 963.332 213.545 1379.47 170.926C1795.61 128.307 1448.71 372.226 1807.45 367.724Z" stroke="url(#paint17_linear_299_816)"/>
    <path opacity="0.575758" d="M1809.53 370.67C2168.28 366.168 1909.51 361.629 2104.45 265.631C2157.12 328.577 2302.85 425.38 2464.47 309.024C2666.5 163.58 3007.95 140.668 2650.18 181.733C2292.41 222.798 1966.03 85.1321 1683.72 135.528C1401.41 185.923 1484.72 -23.1598 934.527 208.453C384.329 440.067 360.277 270.431 189.541 329.196C18.8046 387.961 11.7614 446.266 115.243 466.19C218.724 486.115 666.728 495.715 914.977 413.358C1163.23 331.001 965.411 216.491 1381.55 173.872C1797.69 131.253 1450.79 375.172 1809.53 370.67Z" stroke="url(#paint18_linear_299_816)"/>
    <path opacity="0.606061" d="M1811.61 373.616C2170.35 369.114 1911.59 364.575 2106.53 268.577C2159.2 331.523 2304.93 428.326 2466.55 311.97C2668.58 166.526 3010.03 143.614 2652.26 184.679C2294.49 225.743 1968.11 88.0779 1685.8 138.473C1403.49 188.869 1486.8 -20.214 936.606 211.399C386.408 443.013 362.357 273.377 191.62 332.142C20.8837 390.907 13.8405 449.211 117.322 469.136C220.803 489.061 668.807 498.66 917.057 416.304C1165.31 333.947 967.491 219.436 1383.63 176.817C1799.77 134.199 1452.87 378.118 1811.61 373.616Z" stroke="url(#paint19_linear_299_816)"/>
    <path opacity="0.636364" d="M1813.69 376.562C2172.43 372.06 1913.67 367.521 2108.61 271.523C2161.27 334.469 2307.01 431.271 2468.63 314.916C2670.66 169.471 3012.11 146.56 2654.34 187.624C2296.57 228.689 1970.18 91.0237 1687.87 141.419C1405.56 191.815 1488.88 -17.2682 938.685 214.345C388.487 445.958 364.436 276.323 193.699 335.088C22.9628 393.853 15.9196 452.157 119.401 472.082C222.882 492.006 670.886 501.606 919.136 419.25C1167.39 336.893 969.57 222.382 1385.71 179.763C1801.85 137.144 1454.95 381.063 1813.69 376.562Z" stroke="url(#paint20_linear_299_816)"/>
    <path opacity="0.666667" d="M1815.77 379.507C2174.51 375.005 1915.75 370.467 2110.69 274.468C2163.35 337.414 2309.09 434.217 2470.71 317.861C2672.74 172.417 3014.19 149.505 2656.42 190.57C2298.65 231.635 1972.26 93.9692 1689.95 144.365C1407.64 194.76 1490.96 -14.3226 940.764 217.291C390.567 448.904 366.515 279.269 195.778 338.033C25.0419 396.798 17.9987 455.103 121.48 475.027C224.962 494.952 672.965 504.552 921.215 422.195C1169.46 339.838 971.649 225.328 1387.79 182.709C1803.93 140.09 1457.03 384.009 1815.77 379.507Z" stroke="url(#paint21_linear_299_816)"/>
    <path opacity="0.69697" d="M1817.85 382.453C2176.59 377.951 1917.82 373.412 2112.77 277.414C2165.43 340.36 2311.16 437.163 2472.79 320.807C2674.82 175.363 3016.27 152.451 2658.5 193.516C2300.73 234.58 1974.34 96.915 1692.03 147.311C1409.72 197.706 1493.04 -11.3768 942.843 220.236C392.646 451.85 368.594 282.214 197.857 340.979C27.121 399.744 20.0778 458.049 123.559 477.973C227.041 497.898 675.044 507.498 923.294 425.141C1171.54 342.784 973.728 228.273 1389.87 185.655C1806 143.036 1459.11 386.955 1817.85 382.453Z" stroke="url(#paint22_linear_299_816)"/>
    <path opacity="0.727273" d="M1819.93 385.399C2178.67 380.897 1919.9 376.358 2114.85 280.36C2167.51 343.306 2313.24 440.109 2474.87 323.753C2676.9 178.308 3018.35 155.397 2660.58 196.462C2302.81 237.526 1976.42 99.8608 1694.11 150.256C1411.8 200.652 1495.12 -8.431 944.922 223.182C394.725 454.796 370.673 285.16 199.937 343.925C29.2001 402.69 22.1569 460.994 125.638 480.919C229.12 500.843 677.124 510.443 925.373 428.087C1173.62 345.73 975.807 231.219 1391.95 188.6C1808.08 145.982 1461.19 389.901 1819.93 385.399Z" stroke="url(#paint23_linear_299_816)"/>
    <path opacity="0.757576" d="M1822.01 388.344C2180.75 383.843 1921.98 379.304 2116.93 283.306C2169.59 346.251 2315.32 443.054 2476.95 326.699C2678.98 181.254 3020.43 158.342 2662.66 199.407C2304.89 240.472 1978.5 102.806 1696.19 153.202C1413.88 203.597 1497.2 -5.48544 947.002 226.128C396.804 457.741 372.752 288.106 202.016 346.871C31.2792 405.635 24.236 463.94 127.718 483.864C231.199 503.789 679.203 513.389 927.452 431.032C1175.7 348.676 977.886 234.165 1394.02 191.546C1810.16 148.927 1463.26 392.846 1822.01 388.344Z" stroke="url(#paint24_linear_299_816)"/>
    <path opacity="0.787879" d="M1824.09 391.29C2182.83 386.788 1924.06 382.25 2119.01 286.251C2171.67 349.197 2317.4 446 2479.03 329.644C2681.05 184.2 3022.51 161.288 2664.74 202.353C2306.97 243.418 1980.58 105.752 1698.27 156.148C1415.96 206.543 1499.28 -2.53964 949.081 229.074C398.883 460.687 374.831 291.052 204.095 349.816C33.3583 408.581 26.3151 466.886 129.797 486.81C233.278 506.735 681.282 516.335 929.531 433.978C1177.78 351.621 979.965 237.111 1396.1 194.492C1812.24 151.873 1465.34 395.792 1824.09 391.29Z" stroke="url(#paint25_linear_299_816)"/>
    <path opacity="0.818182" d="M1826.17 394.236C2184.91 389.734 1926.14 385.195 2121.09 289.197C2173.75 352.143 2319.48 448.946 2481.11 332.59C2683.13 187.145 3024.59 164.234 2666.82 205.298C2309.05 246.363 1982.66 108.698 1700.35 159.093C1418.04 209.489 1501.36 0.405913 951.16 232.019C400.963 463.632 376.911 293.997 206.174 352.762C35.4379 411.527 28.3947 469.831 131.876 489.756C235.358 509.68 683.361 519.28 931.611 436.924C1179.86 354.567 982.045 240.056 1398.18 197.437C1814.32 154.819 1467.42 398.737 1826.17 394.236Z" stroke="url(#paint26_linear_299_816)"/>
    <path opacity="0.848485" d="M1828.25 397.181C2186.99 392.68 1928.22 388.141 2123.17 292.143C2175.83 355.089 2321.56 451.891 2483.18 335.536C2685.21 190.091 3026.67 167.179 2668.9 208.244C2311.13 249.309 1984.74 111.644 1702.43 162.039C1420.12 212.435 1503.44 3.35171 953.239 234.965C403.042 466.578 378.99 296.943 208.253 355.708C37.517 414.473 30.4738 472.777 133.955 492.702C237.437 512.626 685.44 522.226 933.69 439.869C1181.94 357.513 984.124 243.002 1400.26 200.383C1816.4 157.764 1469.5 401.683 1828.25 397.181Z" stroke="url(#paint27_linear_299_816)"/>
    <path opacity="0.878788" d="M1830.32 400.127C2189.07 395.625 1930.3 391.087 2125.25 295.088C2177.91 358.034 2323.64 454.837 2485.26 338.482C2687.29 193.037 3028.75 170.125 2670.98 211.19C2313.21 252.255 1986.82 114.589 1704.51 164.985C1422.2 215.38 1505.52 6.29751 955.318 237.911C405.121 469.524 381.069 299.889 210.333 358.654C39.5961 417.418 32.5529 475.723 136.034 495.647C239.516 515.572 687.52 525.172 935.769 442.815C1184.02 360.459 986.203 245.948 1402.34 203.329C1818.48 160.71 1471.58 404.629 1830.32 400.127Z" stroke="url(#paint28_linear_299_816)"/>
    <path opacity="0.909091" d="M1832.4 403.073C2191.15 398.571 1932.38 394.032 2127.32 298.034C2179.99 360.98 2325.72 457.783 2487.34 341.427C2689.37 195.983 3030.82 173.071 2673.05 214.136C2315.29 255.2 1988.9 117.535 1706.59 167.93C1424.28 218.326 1507.6 9.24307 957.398 240.856C407.2 472.47 383.148 302.834 212.412 361.599C41.6752 420.364 34.632 478.668 138.114 498.593C241.595 518.518 689.599 528.117 937.848 445.761C1186.1 363.404 988.282 248.893 1404.42 206.275C1820.56 163.656 1473.66 407.575 1832.4 403.073Z" stroke="url(#paint29_linear_299_816)"/>
    <path opacity="0.939394" d="M1834.48 406.019C2193.23 401.517 1934.46 396.978 2129.4 300.98C2182.07 363.926 2327.8 460.729 2489.42 344.373C2691.45 198.928 3032.9 176.017 2675.13 217.081C2317.36 258.146 1990.98 120.481 1708.67 170.876C1426.36 221.272 1509.67 12.1889 959.477 243.802C409.279 475.415 385.227 305.78 214.491 364.545C43.7543 423.31 36.7111 481.614 140.193 501.539C243.674 521.463 691.678 531.063 939.927 448.707C1188.18 366.35 990.361 251.839 1406.5 209.22C1822.64 166.601 1475.74 410.52 1834.48 406.019Z" stroke="url(#paint30_linear_299_816)"/>
    <path opacity="0.969697" d="M1836.56 408.964C2195.3 404.462 1936.54 399.924 2131.48 303.925C2184.15 366.871 2329.88 463.674 2491.5 347.318C2693.53 201.874 3034.98 178.962 2677.21 220.027C2319.44 261.092 1993.06 123.426 1710.75 173.822C1428.43 224.217 1511.75 15.1344 961.556 246.748C411.358 478.361 387.306 308.726 216.57 367.49C45.8334 426.255 38.7902 484.56 142.272 504.484C245.753 524.409 693.757 534.009 942.006 451.652C1190.26 369.296 992.44 254.785 1408.58 212.166C1824.72 169.547 1477.82 413.466 1836.56 408.964Z" stroke="url(#paint31_linear_299_816)"/>
    <path d="M1838.64 411.91C2197.38 407.408 1938.62 402.869 2133.56 306.871C2186.22 369.817 2331.96 466.62 2493.58 350.264C2695.61 204.82 3037.06 181.908 2679.29 222.973C2321.52 264.038 1995.13 126.372 1712.82 176.768C1430.51 227.163 1513.83 18.0802 963.635 249.693C413.437 481.307 389.385 311.671 218.649 370.436C47.9125 429.201 40.8693 487.506 144.351 507.43C247.832 527.355 695.836 536.955 944.085 454.598C1192.33 372.241 994.519 257.73 1410.66 215.112C1826.8 172.493 1479.9 416.412 1838.64 411.91Z" stroke="url(#paint32_linear_299_816)"/>
    <defs>
    <linearGradient id="paint0_linear_299_816" x1="1623.31" y1="628.84" x2="2008.87" y2="24.8637" gradientUnits="userSpaceOnUse">
    <stop stop-color="#47BE34"/>
    <stop offset="1" stop-color="#80CC28"/>
    </linearGradient>
    <linearGradient id="paint1_linear_299_816" x1="1625.39" y1="631.785" x2="2010.95" y2="27.8095" gradientUnits="userSpaceOnUse">
    <stop stop-color="#47BE34"/>
    <stop offset="1" stop-color="#80CC28"/>
    </linearGradient>
    <linearGradient id="paint2_linear_299_816" x1="1627.46" y1="634.731" x2="2013.03" y2="30.7553" gradientUnits="userSpaceOnUse">
    <stop stop-color="#47BE34"/>
    <stop offset="1" stop-color="#80CC28"/>
    </linearGradient>
    <linearGradient id="paint3_linear_299_816" x1="1629.54" y1="637.677" x2="2015.11" y2="33.7008" gradientUnits="userSpaceOnUse">
    <stop stop-color="#47BE34"/>
    <stop offset="1" stop-color="#80CC28"/>
    </linearGradient>
    <linearGradient id="paint4_linear_299_816" x1="1631.62" y1="640.623" x2="2017.18" y2="36.6466" gradientUnits="userSpaceOnUse">
    <stop stop-color="#47BE34"/>
    <stop offset="1" stop-color="#80CC28"/>
    </linearGradient>
    <linearGradient id="paint5_linear_299_816" x1="1633.7" y1="643.568" x2="2019.26" y2="39.5924" gradientUnits="userSpaceOnUse">
    <stop stop-color="#47BE34"/>
    <stop offset="1" stop-color="#80CC28"/>
    </linearGradient>
    <linearGradient id="paint6_linear_299_816" x1="1635.78" y1="646.514" x2="2021.34" y2="42.538" gradientUnits="userSpaceOnUse">
    <stop stop-color="#47BE34"/>
    <stop offset="1" stop-color="#80CC28"/>
    </linearGradient>
    <linearGradient id="paint7_linear_299_816" x1="1637.86" y1="649.46" x2="2023.42" y2="45.4838" gradientUnits="userSpaceOnUse">
    <stop stop-color="#47BE34"/>
    <stop offset="1" stop-color="#80CC28"/>
    </linearGradient>
    <linearGradient id="paint8_linear_299_816" x1="1639.94" y1="652.405" x2="2025.5" y2="48.4293" gradientUnits="userSpaceOnUse">
    <stop stop-color="#47BE34"/>
    <stop offset="1" stop-color="#80CC28"/>
    </linearGradient>
    <linearGradient id="paint9_linear_299_816" x1="1642.02" y1="655.351" x2="2027.58" y2="51.3751" gradientUnits="userSpaceOnUse">
    <stop stop-color="#47BE34"/>
    <stop offset="1" stop-color="#80CC28"/>
    </linearGradient>
    <linearGradient id="paint10_linear_299_816" x1="1644.1" y1="658.297" x2="2029.66" y2="54.3209" gradientUnits="userSpaceOnUse">
    <stop stop-color="#47BE34"/>
    <stop offset="1" stop-color="#80CC28"/>
    </linearGradient>
    <linearGradient id="paint11_linear_299_816" x1="1646.18" y1="661.242" x2="2031.74" y2="57.2665" gradientUnits="userSpaceOnUse">
    <stop stop-color="#47BE34"/>
    <stop offset="1" stop-color="#80CC28"/>
    </linearGradient>
    <linearGradient id="paint12_linear_299_816" x1="1648.26" y1="664.188" x2="2033.82" y2="60.2123" gradientUnits="userSpaceOnUse">
    <stop stop-color="#47BE34"/>
    <stop offset="1" stop-color="#80CC28"/>
    </linearGradient>
    <linearGradient id="paint13_linear_299_816" x1="1650.34" y1="667.134" x2="2035.9" y2="63.1579" gradientUnits="userSpaceOnUse">
    <stop stop-color="#47BE34"/>
    <stop offset="1" stop-color="#80CC28"/>
    </linearGradient>
    <linearGradient id="paint14_linear_299_816" x1="1652.41" y1="670.08" x2="2037.98" y2="66.1037" gradientUnits="userSpaceOnUse">
    <stop stop-color="#47BE34"/>
    <stop offset="1" stop-color="#80CC28"/>
    </linearGradient>
    <linearGradient id="paint15_linear_299_816" x1="1654.49" y1="673.025" x2="2040.05" y2="69.0495" gradientUnits="userSpaceOnUse">
    <stop stop-color="#47BE34"/>
    <stop offset="1" stop-color="#80CC28"/>
    </linearGradient>
    <linearGradient id="paint16_linear_299_816" x1="1656.57" y1="675.971" x2="2042.13" y2="71.995" gradientUnits="userSpaceOnUse">
    <stop stop-color="#47BE34"/>
    <stop offset="1" stop-color="#80CC28"/>
    </linearGradient>
    <linearGradient id="paint17_linear_299_816" x1="1658.65" y1="678.917" x2="2044.21" y2="74.9408" gradientUnits="userSpaceOnUse">
    <stop stop-color="#47BE34"/>
    <stop offset="1" stop-color="#80CC28"/>
    </linearGradient>
    <linearGradient id="paint18_linear_299_816" x1="1660.73" y1="681.862" x2="2046.29" y2="77.8864" gradientUnits="userSpaceOnUse">
    <stop stop-color="#47BE34"/>
    <stop offset="1" stop-color="#80CC28"/>
    </linearGradient>
    <linearGradient id="paint19_linear_299_816" x1="1662.81" y1="684.808" x2="2048.37" y2="80.8322" gradientUnits="userSpaceOnUse">
    <stop stop-color="#47BE34"/>
    <stop offset="1" stop-color="#80CC28"/>
    </linearGradient>
    <linearGradient id="paint20_linear_299_816" x1="1664.89" y1="687.754" x2="2050.45" y2="83.778" gradientUnits="userSpaceOnUse">
    <stop stop-color="#47BE34"/>
    <stop offset="1" stop-color="#80CC28"/>
    </linearGradient>
    <linearGradient id="paint21_linear_299_816" x1="1666.97" y1="690.699" x2="2052.53" y2="86.7235" gradientUnits="userSpaceOnUse">
    <stop stop-color="#47BE34"/>
    <stop offset="1" stop-color="#80CC28"/>
    </linearGradient>
    <linearGradient id="paint22_linear_299_816" x1="1669.05" y1="693.645" x2="2054.61" y2="89.6693" gradientUnits="userSpaceOnUse">
    <stop stop-color="#47BE34"/>
    <stop offset="1" stop-color="#80CC28"/>
    </linearGradient>
    <linearGradient id="paint23_linear_299_816" x1="1671.13" y1="696.591" x2="2056.69" y2="92.6151" gradientUnits="userSpaceOnUse">
    <stop stop-color="#47BE34"/>
    <stop offset="1" stop-color="#80CC28"/>
    </linearGradient>
    <linearGradient id="paint24_linear_299_816" x1="1673.21" y1="699.537" x2="2058.77" y2="95.5607" gradientUnits="userSpaceOnUse">
    <stop stop-color="#47BE34"/>
    <stop offset="1" stop-color="#80CC28"/>
    </linearGradient>
    <linearGradient id="paint25_linear_299_816" x1="1675.28" y1="702.482" x2="2060.85" y2="98.5065" gradientUnits="userSpaceOnUse">
    <stop stop-color="#47BE34"/>
    <stop offset="1" stop-color="#80CC28"/>
    </linearGradient>
    <linearGradient id="paint26_linear_299_816" x1="1677.36" y1="705.428" x2="2062.93" y2="101.452" gradientUnits="userSpaceOnUse">
    <stop stop-color="#47BE34"/>
    <stop offset="1" stop-color="#80CC28"/>
    </linearGradient>
    <linearGradient id="paint27_linear_299_816" x1="1679.44" y1="708.374" x2="2065" y2="104.398" gradientUnits="userSpaceOnUse">
    <stop stop-color="#47BE34"/>
    <stop offset="1" stop-color="#80CC28"/>
    </linearGradient>
    <linearGradient id="paint28_linear_299_816" x1="1681.52" y1="711.32" x2="2067.08" y2="107.344" gradientUnits="userSpaceOnUse">
    <stop stop-color="#47BE34"/>
    <stop offset="1" stop-color="#80CC28"/>
    </linearGradient>
    <linearGradient id="paint29_linear_299_816" x1="1683.6" y1="714.265" x2="2069.16" y2="110.289" gradientUnits="userSpaceOnUse">
    <stop stop-color="#47BE34"/>
    <stop offset="1" stop-color="#80CC28"/>
    </linearGradient>
    <linearGradient id="paint30_linear_299_816" x1="1685.68" y1="717.211" x2="2071.24" y2="113.235" gradientUnits="userSpaceOnUse">
    <stop stop-color="#47BE34"/>
    <stop offset="1" stop-color="#80CC28"/>
    </linearGradient>
    <linearGradient id="paint31_linear_299_816" x1="1687.76" y1="720.156" x2="2073.32" y2="116.181" gradientUnits="userSpaceOnUse">
    <stop stop-color="#47BE34"/>
    <stop offset="1" stop-color="#80CC28"/>
    </linearGradient>
    <linearGradient id="paint32_linear_299_816" x1="1689.84" y1="723.102" x2="2075.4" y2="119.126" gradientUnits="userSpaceOnUse">
    <stop stop-color="#47BE34"/>
    <stop offset="1" stop-color="#80CC28"/>
    </linearGradient>
    </defs>
    </svg>    
    `
    line.classList.add('line')
    container.appendChild(line)
    i++
  }
})();

const mainPageSwiper = new Swiper(".main-product-swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
});
const interestingSwiper = new Swiper(".interesting__slider", {
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {    
    440: {
      slidesPerView: 2,
    },
    600: {
      slidesPerView: 3,
    },
    800: {
      slidesPerView: 4,
      spaceBetween: 20
    }
  },
  autoplay: true,
  delay:3500,
  speed: 2000,
});


function removeActiveClass (itemClass) {
  const collection = document.querySelectorAll(itemClass)

  collection.forEach(item => {
      item.classList.remove('active')
  });
};

function onClickTab (buttonsClasslist, contentClasslist, dataAttrubute) {
  const tubButtons = document.querySelectorAll(buttonsClasslist);

  if(tubButtons.length < 1) return 
  tubButtons.forEach(item => {
    item.addEventListener('click', ()=>{
      if(!item.classList.contains('active')) {
        removeActiveClass(buttonsClasslist)
        removeActiveClass(contentClasslist)
        
        item.classList.add('active')
        document.querySelector(item.getAttribute(dataAttrubute)).classList.add('active')
      }
    })
  })
  document.querySelector(buttonsClasslist).click() 
}
//filters tabs
onClickTab('.filter-btn', '.catalog__product-description-item', 'data-tab-id');
//product-slider tabs
onClickTab('.product-slider__button', '.product-slider__slide', 'data-slide-content');

function productSliderAutoplay () {
  const sliderButtons = document.querySelectorAll('.product-slider__button')
  
  if(sliderButtons.length > 0 ) {
    let activeSlide = 0

    function autoplay() {
      if(activeSlide >=0 && activeSlide < sliderButtons.length) {
        removeActiveClass('.product-slider__button');
        sliderButtons[activeSlide].click();
        activeSlide++
      } else {
        activeSlide = 0
      }
    }
    
    let autoSlideInterval = setInterval(autoplay, 2000)

    document.querySelector('.product-slider .container').addEventListener('mouseover', () => {
        clearInterval(autoSlideInterval);
    });

    document.querySelector('.product-slider .container').addEventListener('mouseout', () => {
      autoSlideInterval = setInterval(autoplay, 2000);
     });
  }
}
productSliderAutoplay();

// burger
(function () {
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.header__menu-list'); 
 
  burger.addEventListener('click', ()=> {
    burger.classList.toggle('active')
    menu.classList.toggle('active')  
  })
})();

//animation
(function () {
  const animItems = document.querySelectorAll('.anim-items')

  if (animItems.length > 0) {
      window.addEventListener('scroll', animOnScroll);

      function animOnScroll() {
          for (let i = 0; i < animItems.length; i++) {
              const animItem = animItems[i];
              const animItemHeight = animItem.offsetHeight;
              const animItemOffset = offset(animItem).top;
              const animStart = 10;

              let animItemPoint = window.innerHeight - animItemHeight / animStart;
             
              if (animItemHeight > window.innerHeight) {
                  animItemPoint = window.innerHeight - window.innerHeight / animStart;
              }

              if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                  animItem.classList.add('_active')
              }
          }
      }

      function offset(el) {
          const rect = el.getBoundingClientRect(),
              scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
              scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
      }

      setTimeout(() => animOnScroll(), 300);
  }

  setTimeout(() => {
      document.querySelector('.main__description') ? document.querySelector('.main__description').classList.add('_active') : false;
  }, 1000);   
  
  const services = document.querySelectorAll('.service__card')

  if(services.length > 0) {
      setTimeout (() => {
          services.forEach(service => service.classList.add('_active'))
      }, 1500)
  }
})();

//gallery 
Fancybox.bind('[data-fancybox="sertificates"]', {});

// scroll to buy 
(function(){
  const buySection = document.querySelector("#buy");
  if (buySection) {
    const buySectionPosition = buySection.offsetTop - 120
    const buyButtons = document.querySelectorAll('.buy-here')
    
    buyButtons.forEach(btn => {
      btn.addEventListener('click', ()=> window.scrollTo({ top: buySectionPosition, behavior: 'smooth'}))
    })    
  }
})();

function closeModal () {
  const closeButtons = document.querySelectorAll('.close-modal')
  const modal = document.querySelector('#modal-form')
  if(closeButtons.length > 0) {
    closeButtons.forEach(item => {
      item.addEventListener('click', (e)=>{
        e.stopPropagation()
        modal.classList.remove('active')
        document.querySelector('body').classList.remove('disabled')
      })
    })
  }
}
closeModal()

function openModal () {
  const openButtons = document.querySelectorAll('.open-modal')
  const modal = document.querySelector('#modal-form')
  if (openButtons.length > 0) {
    openButtons.forEach(item => {
      item.addEventListener('click', ()=> {
        modal.classList.add('active')
        document.querySelector('body').classList.add('disabled')
      })
    })
  }
}
openModal();

function parallaxAboutPage() {
  const aboutHero = document.querySelector('.about__hero');
  const aboutText = document.querySelector('.about__inner');
 
  if (aboutHero && aboutText) {
    document.addEventListener('scroll', ()=>{
      console.log(window.scrollY)
      aboutText.style.transform = `translateY(${window.scrollY * 0.6}px)`
    })
  }
  
};
parallaxAboutPage()
// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React, { HTMLAttributes } from 'react';
import { AiOutlineEllipsis } from 'react-icons/ai';
import { clsx } from 'clsx';

import styles from './Icons.module.less';

export const OutlineDot = (props: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...props} className={clsx(styles.actionWrapper, props?.className)}>
      <AiOutlineEllipsis></AiOutlineEllipsis>
    </div>
  );
};

export const SettingFileIcon = (props: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...props} className={clsx(props?.className)}>
      <svg width="31" height="32" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="path-1-inside-1_21080_25409" fill="white">
          <path d="M20.4917 7.68539C20.5323 7.72327 20.5647 7.76905 20.5869 7.81991C20.6091 7.87078 20.6206 7.92565 20.6208 7.98114V15.3523C20.9351 15.4829 21.2036 15.7038 21.3926 15.9869C21.5815 16.27 21.6824 16.6028 21.6825 16.9432V17.2275C22.3416 17.4643 22.9527 17.818 23.4863 18.2717L23.7345 18.1282C23.9297 18.0154 24.1452 17.9422 24.3687 17.9128C24.5922 17.8834 24.8193 17.8983 25.0371 17.9567C25.2548 18.0151 25.4589 18.1159 25.6377 18.2532C25.8164 18.3905 25.9664 18.5617 26.079 18.7571L26.373 19.265C26.5913 19.6587 26.6463 20.1223 26.5262 20.5562C26.4062 20.99 26.1206 21.3594 25.731 21.5848L25.4844 21.7287C25.6084 22.4181 25.6084 23.124 25.4844 23.8134L25.7586 23.9717C26.149 24.2079 26.4295 24.5895 26.5386 25.0326C26.6477 25.4756 26.5764 25.9439 26.3403 26.3343C26.2487 26.4926 26.1591 26.656 26.0641 26.813C25.8297 27.2024 25.4502 27.4829 25.0092 27.5928C24.5681 27.7028 24.1015 27.6332 23.7116 27.3994L23.4863 27.2704C22.9522 27.7228 22.3412 28.0758 21.6825 28.3126V28.5979C21.6815 29.0532 21.5002 29.4896 21.1782 29.8116C20.8563 30.1335 20.4199 30.3148 19.9646 30.3158H19.4068C18.9515 30.3148 18.5151 30.1335 18.1931 29.8116C17.8712 29.4896 17.6899 29.0532 17.6889 28.5979V28.3119C17.0302 28.0751 16.4193 27.7221 15.8851 27.2697L15.6368 27.4136C15.4396 27.5269 15.2219 27.6 14.9962 27.6287C14.7705 27.6573 14.5414 27.6409 14.3222 27.5804C14.1029 27.5199 13.8978 27.4166 13.7187 27.2763C13.5396 27.136 13.3902 26.9616 13.279 26.7631L13.0647 26.3906H0.748088C0.694931 26.3908 0.642249 26.3806 0.593087 26.3604C0.543925 26.3401 0.499258 26.3104 0.461671 26.2728C0.424083 26.2352 0.394319 26.1905 0.3741 26.1414C0.353882 26.0922 0.343609 26.0395 0.343877 25.9864V0.404216C0.343609 0.351059 0.353882 0.298377 0.3741 0.249215C0.394319 0.200053 0.424083 0.155386 0.461671 0.117799C0.499258 0.0802108 0.543925 0.0504469 0.593087 0.0302283C0.642249 0.0100096 0.694931 -0.000262692 0.748088 5.10422e-06H13.0728C13.1325 -7.60401e-05 13.1914 0.0130504 13.2454 0.0384423C13.2994 0.0638342 13.3471 0.100862 13.3851 0.146868L20.4917 7.68539ZM19.3024 19.203C20.0077 19.1275 20.7196 19.2628 21.348 19.5918C21.9765 19.9208 22.4932 20.4288 22.833 21.0515C23.1727 21.6742 23.3202 22.3837 23.2567 23.0902C23.1933 23.7967 22.9218 24.4685 22.4765 25.0207C22.0312 25.5729 21.4322 25.9807 20.7552 26.1925C20.0782 26.4042 19.3536 26.4105 18.673 26.2105C17.9924 26.0104 17.3864 25.6131 16.9317 25.0686C16.4769 24.5242 16.1938 23.8572 16.1182 23.1518C16.017 22.206 16.2956 21.2587 16.8927 20.5182C17.4898 19.7777 18.3566 19.3046 19.3024 19.203ZM21.4312 20.603C21.0027 20.2576 20.4814 20.0471 19.9332 19.9981C19.385 19.949 18.8347 20.0636 18.3516 20.3274C17.8686 20.5912 17.4747 20.9924 17.2197 21.4801C16.9647 21.9678 16.86 22.5202 16.919 23.0674C16.9779 23.6145 17.1978 24.132 17.5509 24.5541C17.9039 24.9763 18.3743 25.2843 18.9024 25.4392C19.4305 25.5941 19.9927 25.5888 20.5178 25.4241C21.043 25.2595 21.5075 24.9427 21.8526 24.514C22.3152 23.9394 22.5306 23.2047 22.4516 22.4713C22.3726 21.7378 22.0055 21.0658 21.4312 20.603ZM21.1974 17.9106C21.107 17.8912 21.026 17.8415 20.9678 17.7697C20.9097 17.6978 20.8779 17.6082 20.8778 17.5158V16.9432C20.8768 16.7014 20.7802 16.4699 20.6091 16.2991C20.438 16.1284 20.2063 16.0322 19.9646 16.0317H19.4068C19.165 16.0322 18.9333 16.1284 18.7622 16.2991C18.5912 16.4699 18.4946 16.7014 18.4936 16.9432V17.5158C18.4935 17.6084 18.4617 17.6981 18.4034 17.7701C18.3451 17.842 18.2638 17.8917 18.1733 17.9109C17.4459 18.1378 16.7788 18.5253 16.2213 19.0447C16.1588 19.108 16.077 19.1488 15.9889 19.1606C15.9007 19.1724 15.8112 19.1547 15.7342 19.1101L15.2289 18.8194C15.0191 18.7016 14.7715 18.6709 14.5392 18.7339C14.307 18.7969 14.1088 18.9485 13.9873 19.1562C13.9856 19.1562 13.7307 19.5975 13.7078 19.6382C13.588 19.8482 13.5561 20.0969 13.6188 20.3303C13.6815 20.5637 13.8338 20.7629 14.0426 20.8846C14.249 20.9913 14.4472 21.1132 14.6358 21.249C14.6799 21.2975 14.7115 21.356 14.728 21.4194C14.7445 21.4828 14.7453 21.5493 14.7304 21.6131C14.5558 22.3728 14.5558 23.1622 14.7304 23.9219C14.7506 24.0105 14.7403 24.1034 14.7012 24.1855C14.6621 24.2676 14.5964 24.3341 14.5148 24.3742L14.0213 24.6602C13.8279 24.7804 13.686 24.968 13.623 25.1868C13.5599 25.4055 13.5803 25.6399 13.6801 25.8446L13.9873 26.3771C14.1087 26.5862 14.3078 26.7388 14.5412 26.8019C14.7746 26.865 15.0234 26.8334 15.2336 26.7139L15.7318 26.4263C15.809 26.3821 15.8987 26.3647 15.9869 26.3769C16.075 26.3891 16.1566 26.4301 16.2189 26.4936C16.5003 26.7543 16.8099 26.9827 17.1419 27.1747C17.4668 27.3634 17.812 27.5148 18.1709 27.6258C18.2615 27.645 18.3428 27.6948 18.4011 27.7668C18.4594 27.8387 18.4913 27.9286 18.4912 28.0212V28.5979C18.4928 28.8397 18.5899 29.0711 18.7614 29.2415C18.933 29.4119 19.165 29.5075 19.4068 29.5074H19.9639C20.2054 29.507 20.437 29.4112 20.6082 29.2409C20.7794 29.0705 20.8763 28.8394 20.8778 28.5979V28.0219C20.8778 27.9293 20.9096 27.8394 20.9679 27.7674C21.0262 27.6954 21.1075 27.6457 21.1981 27.6264C21.5572 27.5157 21.9026 27.3644 22.2275 27.1754C22.5594 26.9833 22.869 26.7549 23.1504 26.4943C23.2126 26.4307 23.2942 26.3896 23.3823 26.3774C23.4704 26.3652 23.5601 26.3826 23.6372 26.427L24.1583 26.7274C24.3641 26.8371 24.604 26.8643 24.8292 26.8037C25.0543 26.743 25.248 26.5989 25.3709 26.4007C25.4524 26.2373 25.5686 26.0578 25.6616 25.8954C25.7812 25.6855 25.8131 25.4368 25.7505 25.2034C25.6878 24.9701 25.5355 24.7709 25.3268 24.6491L24.8552 24.3763C24.7736 24.3361 24.708 24.2696 24.6688 24.1875C24.6297 24.1054 24.6194 24.0125 24.6396 23.9239C24.8144 23.1642 24.8144 22.3748 24.6396 21.6152C24.6192 21.5289 24.628 21.4384 24.6646 21.3577C24.7012 21.277 24.7635 21.2107 24.8417 21.1692L25.3561 20.8704C25.5512 20.7468 25.6928 20.5545 25.7528 20.3314C25.8127 20.1084 25.7867 19.8709 25.6798 19.6662L25.3857 19.1566C25.2634 18.9474 25.0635 18.795 24.8295 18.7323C24.5955 18.6696 24.3462 18.7018 24.1357 18.8217L23.6375 19.1091C23.5606 19.1536 23.4711 19.1714 23.383 19.1596C23.2949 19.1477 23.2132 19.107 23.1508 19.0437C22.5916 18.5258 21.9243 18.1385 21.1971 17.9099L21.1974 17.9106ZM17.6882 17.2261V16.9432C17.6889 16.4878 17.8701 16.0512 18.1922 15.7292C18.5142 15.4072 18.9507 15.226 19.4061 15.2253H19.813V8.38737H13.0728C13.0197 8.38737 12.9672 8.37692 12.9181 8.3566C12.8691 8.33629 12.8245 8.30652 12.787 8.26898C12.7494 8.23145 12.7197 8.18689 12.6994 8.13785C12.679 8.08881 12.6686 8.03625 12.6686 7.98316V0.808426H1.15162V25.5825H12.7872C12.7603 25.2537 12.8286 24.924 12.9839 24.6329C13.1391 24.3418 13.3749 24.1016 13.663 23.9407L13.8869 23.8117C13.7627 23.1224 13.7627 22.4163 13.8869 21.727L13.64 21.5848C13.246 21.3568 12.9586 20.9816 12.841 20.5418C12.7234 20.1019 12.7852 19.6334 13.0128 19.2391L13.2907 18.7537C13.4041 18.5581 13.5549 18.3868 13.7345 18.2495C13.9141 18.1123 14.1191 18.0118 14.3376 17.9538C14.5561 17.8958 14.7839 17.8815 15.0079 17.9117C15.2319 17.9418 15.4478 18.0158 15.6432 18.1295L15.8848 18.27C16.4184 17.8164 17.0294 17.4627 17.6886 17.2258L17.6882 17.2261ZM4.54497 23.0275C4.43777 23.0275 4.33496 22.985 4.25915 22.9092C4.18335 22.8333 4.14076 22.7305 4.14076 22.6233C4.14076 22.5161 4.18335 22.4133 4.25915 22.3375C4.33496 22.2617 4.43777 22.2191 4.54497 22.2191H10.4313C10.5385 22.2191 10.6413 22.2617 10.7171 22.3375C10.7929 22.4133 10.8355 22.5161 10.8355 22.6233C10.8355 22.7305 10.7929 22.8333 10.7171 22.9092C10.6413 22.985 10.5385 23.0275 10.4313 23.0275H4.54497ZM4.54497 19.2438C4.43777 19.2438 4.33496 19.2012 4.25915 19.1254C4.18335 19.0496 4.14076 18.9468 4.14076 18.8396C4.14076 18.7324 4.18335 18.6296 4.25915 18.5538C4.33496 18.478 4.43777 18.4354 4.54497 18.4354H12.0188C12.126 18.4354 12.2288 18.478 12.3046 18.5538C12.3804 18.6296 12.423 18.7324 12.423 18.8396C12.423 18.9468 12.3804 19.0496 12.3046 19.1254C12.2288 19.2012 12.126 19.2438 12.0188 19.2438H4.54497ZM4.54497 15.46C4.43777 15.46 4.33496 15.4175 4.25915 15.3417C4.18335 15.2659 4.14076 15.163 4.14076 15.0558C4.14076 14.9486 4.18335 14.8458 4.25915 14.77C4.33496 14.6942 4.43777 14.6516 4.54497 14.6516H16.45C16.5572 14.6516 16.66 14.6942 16.7358 14.77C16.8116 14.8458 16.8542 14.9486 16.8542 15.0558C16.8542 15.163 16.8116 15.2659 16.7358 15.3417C16.66 15.4175 16.5572 15.46 16.45 15.46H4.54497ZM4.54497 11.675C4.49189 11.675 4.43933 11.6645 4.39029 11.6442C4.34125 11.6239 4.29669 11.5941 4.25915 11.5566C4.22162 11.519 4.19184 11.4745 4.17153 11.4254C4.15122 11.3764 4.14076 11.3238 4.14076 11.2707C4.14076 11.2177 4.15122 11.1651 4.17153 11.1161C4.19184 11.067 4.22162 11.0225 4.25915 10.9849C4.29669 10.9474 4.34125 10.9176 4.39029 10.8973C4.43933 10.877 4.49189 10.8665 4.54497 10.8665H16.45C16.5572 10.8665 16.66 10.9091 16.7358 10.9849C16.8116 11.0607 16.8542 11.1635 16.8542 11.2707C16.8542 11.3779 16.8116 11.4808 16.7358 11.5566C16.66 11.6324 16.5572 11.675 16.45 11.675H4.54497ZM19.2845 7.57895L13.4763 1.41845V7.57895H19.2845Z" />
        </mask>
        <path
          d="M20.4917 7.68539C20.5323 7.72327 20.5647 7.76905 20.5869 7.81991C20.6091 7.87078 20.6206 7.92565 20.6208 7.98114V15.3523C20.9351 15.4829 21.2036 15.7038 21.3926 15.9869C21.5815 16.27 21.6824 16.6028 21.6825 16.9432V17.2275C22.3416 17.4643 22.9527 17.818 23.4863 18.2717L23.7345 18.1282C23.9297 18.0154 24.1452 17.9422 24.3687 17.9128C24.5922 17.8834 24.8193 17.8983 25.0371 17.9567C25.2548 18.0151 25.4589 18.1159 25.6377 18.2532C25.8164 18.3905 25.9664 18.5617 26.079 18.7571L26.373 19.265C26.5913 19.6587 26.6463 20.1223 26.5262 20.5562C26.4062 20.99 26.1206 21.3594 25.731 21.5848L25.4844 21.7287C25.6084 22.4181 25.6084 23.124 25.4844 23.8134L25.7586 23.9717C26.149 24.2079 26.4295 24.5895 26.5386 25.0326C26.6477 25.4756 26.5764 25.9439 26.3403 26.3343C26.2487 26.4926 26.1591 26.656 26.0641 26.813C25.8297 27.2024 25.4502 27.4829 25.0092 27.5928C24.5681 27.7028 24.1015 27.6332 23.7116 27.3994L23.4863 27.2704C22.9522 27.7228 22.3412 28.0758 21.6825 28.3126V28.5979C21.6815 29.0532 21.5002 29.4896 21.1782 29.8116C20.8563 30.1335 20.4199 30.3148 19.9646 30.3158H19.4068C18.9515 30.3148 18.5151 30.1335 18.1931 29.8116C17.8712 29.4896 17.6899 29.0532 17.6889 28.5979V28.3119C17.0302 28.0751 16.4193 27.7221 15.8851 27.2697L15.6368 27.4136C15.4396 27.5269 15.2219 27.6 14.9962 27.6287C14.7705 27.6573 14.5414 27.6409 14.3222 27.5804C14.1029 27.5199 13.8978 27.4166 13.7187 27.2763C13.5396 27.136 13.3902 26.9616 13.279 26.7631L13.0647 26.3906H0.748088C0.694931 26.3908 0.642249 26.3806 0.593087 26.3604C0.543925 26.3401 0.499258 26.3104 0.461671 26.2728C0.424083 26.2352 0.394319 26.1905 0.3741 26.1414C0.353882 26.0922 0.343609 26.0395 0.343877 25.9864V0.404216C0.343609 0.351059 0.353882 0.298377 0.3741 0.249215C0.394319 0.200053 0.424083 0.155386 0.461671 0.117799C0.499258 0.0802108 0.543925 0.0504469 0.593087 0.0302283C0.642249 0.0100096 0.694931 -0.000262692 0.748088 5.10422e-06H13.0728C13.1325 -7.60401e-05 13.1914 0.0130504 13.2454 0.0384423C13.2994 0.0638342 13.3471 0.100862 13.3851 0.146868L20.4917 7.68539ZM19.3024 19.203C20.0077 19.1275 20.7196 19.2628 21.348 19.5918C21.9765 19.9208 22.4932 20.4288 22.833 21.0515C23.1727 21.6742 23.3202 22.3837 23.2567 23.0902C23.1933 23.7967 22.9218 24.4685 22.4765 25.0207C22.0312 25.5729 21.4322 25.9807 20.7552 26.1925C20.0782 26.4042 19.3536 26.4105 18.673 26.2105C17.9924 26.0104 17.3864 25.6131 16.9317 25.0686C16.4769 24.5242 16.1938 23.8572 16.1182 23.1518C16.017 22.206 16.2956 21.2587 16.8927 20.5182C17.4898 19.7777 18.3566 19.3046 19.3024 19.203ZM21.4312 20.603C21.0027 20.2576 20.4814 20.0471 19.9332 19.9981C19.385 19.949 18.8347 20.0636 18.3516 20.3274C17.8686 20.5912 17.4747 20.9924 17.2197 21.4801C16.9647 21.9678 16.86 22.5202 16.919 23.0674C16.9779 23.6145 17.1978 24.132 17.5509 24.5541C17.9039 24.9763 18.3743 25.2843 18.9024 25.4392C19.4305 25.5941 19.9927 25.5888 20.5178 25.4241C21.043 25.2595 21.5075 24.9427 21.8526 24.514C22.3152 23.9394 22.5306 23.2047 22.4516 22.4713C22.3726 21.7378 22.0055 21.0658 21.4312 20.603ZM21.1974 17.9106C21.107 17.8912 21.026 17.8415 20.9678 17.7697C20.9097 17.6978 20.8779 17.6082 20.8778 17.5158V16.9432C20.8768 16.7014 20.7802 16.4699 20.6091 16.2991C20.438 16.1284 20.2063 16.0322 19.9646 16.0317H19.4068C19.165 16.0322 18.9333 16.1284 18.7622 16.2991C18.5912 16.4699 18.4946 16.7014 18.4936 16.9432V17.5158C18.4935 17.6084 18.4617 17.6981 18.4034 17.7701C18.3451 17.842 18.2638 17.8917 18.1733 17.9109C17.4459 18.1378 16.7788 18.5253 16.2213 19.0447C16.1588 19.108 16.077 19.1488 15.9889 19.1606C15.9007 19.1724 15.8112 19.1547 15.7342 19.1101L15.2289 18.8194C15.0191 18.7016 14.7715 18.6709 14.5392 18.7339C14.307 18.7969 14.1088 18.9485 13.9873 19.1562C13.9856 19.1562 13.7307 19.5975 13.7078 19.6382C13.588 19.8482 13.5561 20.0969 13.6188 20.3303C13.6815 20.5637 13.8338 20.7629 14.0426 20.8846C14.249 20.9913 14.4472 21.1132 14.6358 21.249C14.6799 21.2975 14.7115 21.356 14.728 21.4194C14.7445 21.4828 14.7453 21.5493 14.7304 21.6131C14.5558 22.3728 14.5558 23.1622 14.7304 23.9219C14.7506 24.0105 14.7403 24.1034 14.7012 24.1855C14.6621 24.2676 14.5964 24.3341 14.5148 24.3742L14.0213 24.6602C13.8279 24.7804 13.686 24.968 13.623 25.1868C13.5599 25.4055 13.5803 25.6399 13.6801 25.8446L13.9873 26.3771C14.1087 26.5862 14.3078 26.7388 14.5412 26.8019C14.7746 26.865 15.0234 26.8334 15.2336 26.7139L15.7318 26.4263C15.809 26.3821 15.8987 26.3647 15.9869 26.3769C16.075 26.3891 16.1566 26.4301 16.2189 26.4936C16.5003 26.7543 16.8099 26.9827 17.1419 27.1747C17.4668 27.3634 17.812 27.5148 18.1709 27.6258C18.2615 27.645 18.3428 27.6948 18.4011 27.7668C18.4594 27.8387 18.4913 27.9286 18.4912 28.0212V28.5979C18.4928 28.8397 18.5899 29.0711 18.7614 29.2415C18.933 29.4119 19.165 29.5075 19.4068 29.5074H19.9639C20.2054 29.507 20.437 29.4112 20.6082 29.2409C20.7794 29.0705 20.8763 28.8394 20.8778 28.5979V28.0219C20.8778 27.9293 20.9096 27.8394 20.9679 27.7674C21.0262 27.6954 21.1075 27.6457 21.1981 27.6264C21.5572 27.5157 21.9026 27.3644 22.2275 27.1754C22.5594 26.9833 22.869 26.7549 23.1504 26.4943C23.2126 26.4307 23.2942 26.3896 23.3823 26.3774C23.4704 26.3652 23.5601 26.3826 23.6372 26.427L24.1583 26.7274C24.3641 26.8371 24.604 26.8643 24.8292 26.8037C25.0543 26.743 25.248 26.5989 25.3709 26.4007C25.4524 26.2373 25.5686 26.0578 25.6616 25.8954C25.7812 25.6855 25.8131 25.4368 25.7505 25.2034C25.6878 24.9701 25.5355 24.7709 25.3268 24.6491L24.8552 24.3763C24.7736 24.3361 24.708 24.2696 24.6688 24.1875C24.6297 24.1054 24.6194 24.0125 24.6396 23.9239C24.8144 23.1642 24.8144 22.3748 24.6396 21.6152C24.6192 21.5289 24.628 21.4384 24.6646 21.3577C24.7012 21.277 24.7635 21.2107 24.8417 21.1692L25.3561 20.8704C25.5512 20.7468 25.6928 20.5545 25.7528 20.3314C25.8127 20.1084 25.7867 19.8709 25.6798 19.6662L25.3857 19.1566C25.2634 18.9474 25.0635 18.795 24.8295 18.7323C24.5955 18.6696 24.3462 18.7018 24.1357 18.8217L23.6375 19.1091C23.5606 19.1536 23.4711 19.1714 23.383 19.1596C23.2949 19.1477 23.2132 19.107 23.1508 19.0437C22.5916 18.5258 21.9243 18.1385 21.1971 17.9099L21.1974 17.9106ZM17.6882 17.2261V16.9432C17.6889 16.4878 17.8701 16.0512 18.1922 15.7292C18.5142 15.4072 18.9507 15.226 19.4061 15.2253H19.813V8.38737H13.0728C13.0197 8.38737 12.9672 8.37692 12.9181 8.3566C12.8691 8.33629 12.8245 8.30652 12.787 8.26898C12.7494 8.23145 12.7197 8.18689 12.6994 8.13785C12.679 8.08881 12.6686 8.03625 12.6686 7.98316V0.808426H1.15162V25.5825H12.7872C12.7603 25.2537 12.8286 24.924 12.9839 24.6329C13.1391 24.3418 13.3749 24.1016 13.663 23.9407L13.8869 23.8117C13.7627 23.1224 13.7627 22.4163 13.8869 21.727L13.64 21.5848C13.246 21.3568 12.9586 20.9816 12.841 20.5418C12.7234 20.1019 12.7852 19.6334 13.0128 19.2391L13.2907 18.7537C13.4041 18.5581 13.5549 18.3868 13.7345 18.2495C13.9141 18.1123 14.1191 18.0118 14.3376 17.9538C14.5561 17.8958 14.7839 17.8815 15.0079 17.9117C15.2319 17.9418 15.4478 18.0158 15.6432 18.1295L15.8848 18.27C16.4184 17.8164 17.0294 17.4627 17.6886 17.2258L17.6882 17.2261ZM4.54497 23.0275C4.43777 23.0275 4.33496 22.985 4.25915 22.9092C4.18335 22.8333 4.14076 22.7305 4.14076 22.6233C4.14076 22.5161 4.18335 22.4133 4.25915 22.3375C4.33496 22.2617 4.43777 22.2191 4.54497 22.2191H10.4313C10.5385 22.2191 10.6413 22.2617 10.7171 22.3375C10.7929 22.4133 10.8355 22.5161 10.8355 22.6233C10.8355 22.7305 10.7929 22.8333 10.7171 22.9092C10.6413 22.985 10.5385 23.0275 10.4313 23.0275H4.54497ZM4.54497 19.2438C4.43777 19.2438 4.33496 19.2012 4.25915 19.1254C4.18335 19.0496 4.14076 18.9468 4.14076 18.8396C4.14076 18.7324 4.18335 18.6296 4.25915 18.5538C4.33496 18.478 4.43777 18.4354 4.54497 18.4354H12.0188C12.126 18.4354 12.2288 18.478 12.3046 18.5538C12.3804 18.6296 12.423 18.7324 12.423 18.8396C12.423 18.9468 12.3804 19.0496 12.3046 19.1254C12.2288 19.2012 12.126 19.2438 12.0188 19.2438H4.54497ZM4.54497 15.46C4.43777 15.46 4.33496 15.4175 4.25915 15.3417C4.18335 15.2659 4.14076 15.163 4.14076 15.0558C4.14076 14.9486 4.18335 14.8458 4.25915 14.77C4.33496 14.6942 4.43777 14.6516 4.54497 14.6516H16.45C16.5572 14.6516 16.66 14.6942 16.7358 14.77C16.8116 14.8458 16.8542 14.9486 16.8542 15.0558C16.8542 15.163 16.8116 15.2659 16.7358 15.3417C16.66 15.4175 16.5572 15.46 16.45 15.46H4.54497ZM4.54497 11.675C4.49189 11.675 4.43933 11.6645 4.39029 11.6442C4.34125 11.6239 4.29669 11.5941 4.25915 11.5566C4.22162 11.519 4.19184 11.4745 4.17153 11.4254C4.15122 11.3764 4.14076 11.3238 4.14076 11.2707C4.14076 11.2177 4.15122 11.1651 4.17153 11.1161C4.19184 11.067 4.22162 11.0225 4.25915 10.9849C4.29669 10.9474 4.34125 10.9176 4.39029 10.8973C4.43933 10.877 4.49189 10.8665 4.54497 10.8665H16.45C16.5572 10.8665 16.66 10.9091 16.7358 10.9849C16.8116 11.0607 16.8542 11.1635 16.8542 11.2707C16.8542 11.3779 16.8116 11.4808 16.7358 11.5566C16.66 11.6324 16.5572 11.675 16.45 11.675H4.54497ZM19.2845 7.57895L13.4763 1.41845V7.57895H19.2845Z"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="0.6"
          mask="url(#path-1-inside-1_21080_25409)"
        />
        <ellipse cx="23.4176" cy="25.0947" rx="6.90526" ry="6.90526" fill="currentColor" fillOpacity="0.15" />
      </svg>
    </div>
  );
};
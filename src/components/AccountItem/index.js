import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind"
import styles from "./AccountItem.module.scss"

const cx = classNames.bind(styles)
function AccountsItem() {
    return <div className={cx('wrapper')}>
        <img className={cx('avatar')} src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/7965680b7f371c9997b5e06843016e63~c5_100x100.jpeg?x-expires=1676278800&x-signature=tICdtZaX4qatyFM8o7piF%2B3ccFc%3D" alt="Hoa" />
        <div className={cx('info')}>
            <h4 className={cx('name')}>
               <span> NGUYEN VAN A </span>
               <FontAwesomeIcon className={cx('check')} icon ={faCheckCircle}/>
            </h4>
            <span className={cx('username')}>nguyenvana</span>
        </div>
    </div>
}

export default AccountsItem;
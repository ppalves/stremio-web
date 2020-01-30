const React = require('react');
const PropTypes = require('prop-types');
const classnames = require('classnames');
const Icon = require('stremio-icons/dom');
const Button = require('stremio/common/Button');
const styles = require('./styles');

const Toast = ({ type, title, text, icon, closeButton, onClick, onClose }) => {
    return (
        <div className={classnames(styles['toast-container'], styles[type])}>
            {
                typeof icon === 'string' && icon.length > 0 ?
                    <div className={styles['icon-container']}>
                        <Icon className={styles['icon']} icon={icon} />
                    </div>
                    :
                    null
            }
            <div className={classnames(styles['message-container'], { [styles.clickable]: typeof onClick === 'function' })} onClick={onClick}>
                {
                    typeof title === 'string' && title.length > 0 ?
                        <h1>{title}</h1>
                        :
                        null
                }
                {text}
            </div>
            {
                closeButton ?
                    <Button className={styles['close-button-container']} title={'Close'} onClick={onClose}>
                        <Icon className={styles['icon']} icon={'ic_x'} />
                    </Button>
                    :
                    null
            }
        </div>
    );
};

Toast.propTypes = {
    type: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
    icon: PropTypes.string,
    closeButton: PropTypes.bool,
    onClick: PropTypes.func,
    onClose: PropTypes.func
};

module.exports = Toast;
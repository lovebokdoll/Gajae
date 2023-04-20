import { useCookies } from 'react-cookie';
import moment from 'moment';

const COOKIE_KEY = 'HideModal';

const CookiePopup = () => {
  const [cookies, setCookie] = useCookies([COOKIE_KEY]);

  const hideModal = () => {
    const decade = moment();
    decade.add(3650, 'd');
    setCookie(COOKIE_KEY, 'true', {
      path: '/',
      expires: decade.toDate(),
    });
  };

  const setHidden = () => {
    hideModal();
  };

  return (
    <>
      {cookies[COOKIE_KEY] ? null : (
        <div className="modal">
          모달입니다.
          <a className="modal-close" onClick={setHidden}>
            <span>X</span>
          </a>
        </div>
      )}
    </>
  );
};

export default CookiePopup;

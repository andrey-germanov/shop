import s from './Header.module.scss';
import { Link } from 'react-router-dom';
export const Header = () => {
  return (
    <header className={s.header}>
        <div>logo</div>
        <ul>
            <li>
                <Link to={'/shop'}>shop</Link>
            </li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
        </ul>
        <div>
            <div>login</div>
            <div>korzina</div>
        </div>
    </header>
  )
}

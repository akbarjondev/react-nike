import { NavLink, Route, Switch } from 'react-router-dom'
import Home from '../../Pages/Home/Home'
import Boys from '../../Pages/Boys/Boys'
import Girls from '../../Pages/Girls/Girls'
import Customize from '../../Pages/Customize/Customize'

// css
import './Header.css'

// img
import logo from './../../Image/nike-logo.png'
import logoBig from './../../Image/nike-logo@2x.png'
import logoFacebook from './../../Image/facebook.png'
import logoFacebookBig from './../../Image/facebook@2x.png'
import logoInstagram from './../../Image/instagram.png'
import logoInstagramBig from './../../Image/instagram@2x.png'
import logoYoutube from './../../Image/youtube.png'
import logoYoutubeBig from './../../Image/youtube@2x.png'

export default function Header() {
	return (
		<>
			<div className="header">
				<a className="logo header__logo" href="index.html">
					<img className='logo__img' width='100' height='34' src={logo} srcset={logoBig} alt="Nike logo" />
				</a>

				<ul className="links header__links un-list">
					<li className="links__item">
						<NavLink className='links__link' activeClassName="links__link--active" to='/'>Home</NavLink>
					</li>
					<li className="links__item">
						<NavLink className='links__link' activeClassName="links__link--active" to='/boys'>Boys</NavLink>
					</li>
					<li className="links__item">
						<NavLink className='links__link' activeClassName="links__link--active" to='/girls'>Girls</NavLink>
					</li>
					<li className="links__item">
						<NavLink className='links__link' activeClassName="links__link--active" to='/customize'>customize</NavLink>
					</li>
				</ul>

				<ul className="socials header__socials un-list">
					<li className="socials__item">
						<a className="social" href="#">
							<img src={logoFacebook} srcse={logoFacebookBig} alt="Facebook icon" width='30' height='30' />
						</a>
					</li>
					<li className="socials__item">
						<a className="social" href="#">
							<img src={logoInstagram} srcse={logoInstagramBig} alt="Instagram icon" width='30' height='30' />
						</a>
					</li>
					<li className="socials__item">
						<a className="social" href="#">
							<img src={logoYoutube} srcse={logoYoutubeBig} alt="Youtube icon" width='30' height='30' />
						</a>
					</li>
				</ul>
			</div> {/* end of header */}

			<Switch>
				
				<Route path='/' component={Home} exact />

				<Route path='/boys' component={Boys} exact />
				
				<Route path='/girls' component={Girls} exact />

				<Route path='/customize' component={Customize} exact />

			</Switch>
		</>
	);
}

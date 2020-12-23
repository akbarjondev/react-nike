import './Home.css'

// img
import nike from './../../Image/nike-shoe.png'
import nikeBig from './../../Image/nike-shoe@2x.png'

export default function Home() {
	return (
		<>
			<div className="home">
				<h1 className="home__heading">Nothing can <span className="tamato-text">stop</span> the run</h1>
			
				<div className="home__left">
					<img className='home__img' src={nike} srcSet={`${nike} 1x, ${nikeBig} 2x`} alt="Nike" />
				</div>
			</div>
		</>
	)
}
import styles from './Head.module.css';
// import flowers from '../../media/images/main_flowers.png';
import { HashLink } from 'react-router-hash-link';

export const Head = () => {
	const scrollWithOffset = (el) => {
		const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
		const yOffset = window.innerWidth < 762 ? -98 : 0;
		window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
	};
	return (
		<section className={styles.head}>
			<div className="container">
				<div className={styles.head_content}>
					<div className={styles.head_inner}>
						<h1 className={styles.head_title}>
							Sale
							<span>New season</span>
						</h1>
						<HashLink
							smooth
							to="#sale"
							className={styles.head_link}
							scroll={(el) => scrollWithOffset(el)}
						>
							Sale
						</HashLink>
					</div>
				</div>
			</div>
		</section>
	);
};

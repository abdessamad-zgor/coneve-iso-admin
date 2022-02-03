import React from 'react';
import styles from './productstable.module';
import { connect } from 'react-redux';

function ProductsTable(props) {
	return (
		<div className={styles.root}>
			<div className={styles.header}></div>
			<div className={styles.content}>
				<div className={styles.columnIds}>
					{props.ids.length > 0
						? props.ids.map((id, i) => (
								<div className={styles.id} key={i}>
									{id}
								</div>
						  ))
						: ''}
				</div>
				<div className={styles.columnData}>
					{Object.keys(props.selectedProduct).length > 0
						? Object.keys(props.selectedProduct).map((key, i) => {
								return (
									<div className={styles.dataEntry}>
										<h3>{key}: </h3>
										<p>{props.selectedProduct[key]}</p>
									</div>
								);
						  })
						: ''}
				</div>
			</div>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		ids: state.products.ids,
		status: state.products.status,
		selectedProduct: state.products.selectedProduct,
		error: state.products.error,
	};
};

export default connect(mapStateToProps)(ProductsTable);

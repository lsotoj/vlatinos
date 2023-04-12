<script>
	import { Container, Row, Col } from 'sveltestrap';
	import BreadcrumbOne from '@components/breadcrumbs/BreadcrumbOne.svelte';
	import OverviewCards from '@components/cards/OverviewCards.svelte';
	import overviewCardData from '@data/overviewCard.json';
	import TotalLineChart from '@view/dashboard/demoOne/TotalLineChart.svelte';
	import SalesGrowth from '@view/dashboard/demoOne/SalesGrowth.svelte';
	import SalesByLocation from '@view/dashboard/demoOne/SalesByLocation.svelte';
	import TopSellingProduct from '@view/dashboard/virtual-latinos/TopSellingProduct.svelte';
	import BrowserState from '@view/dashboard/demoOne/BrowserState.svelte';

	const overviewDataSorted = overviewCardData.slice(0, 4);

	const breadcrumbData = {
		pageTitle: 'Virtual Latinos',
		bcItem: 'Dashboard',
		bcItemActive: 'Virtual Latinos'
	};
	let cardStyle = 'ap-po-details--two';
</script>

<svelte:head>
	<title>Virtual Latinos</title>
</svelte:head>

<div class="crm mb-25">
	<Container fluid>
		<Row>
			<Col xxl={12}>
				<BreadcrumbOne {...breadcrumbData} />
			</Col>
			<Col xxl={12} lg={12} class="mb-25">
				<TopSellingProduct />
			</Col>
		</Row>
	</Container>
</div>

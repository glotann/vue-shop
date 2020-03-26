<template>
	<div class="container">
		<div class="row">
			<div class="col-md-9" style="background-color: #009688">
				<div>
				<b-card-group columns>
					<b-card v-for="item in data" v-bind:key="item.name" :title="item.name" :img-src="item.image" img-alt="Image" img-top>
						<b-card-text>
							{{item.description}}
							<p>Rp. {{item.price}},-</p>
						</b-card-text>
						<template v-slot:footer>
							<b-button variant="info" @click="addToCart(item.id)">Add To Cart</b-button>
						</template>
					</b-card>
				</b-card-group>
				</div>
			</div>

			<div class="col-md-3" style="background-color: #4a4e4d">
				<Cart></Cart>
			</div>
		</div>
	</div>
</template>

<script>
// import axios from 'axios'
import {mapGetters} from 'vuex'
import Cart from '@/components/Cart'

	export default{
		components:{
			Cart
		},
		data()
		{
			return {
				data: [],
				cart: [],
				id:''
			}
		},

		computed:
		{
			...mapGetters({
				products: 'products',
				// product: 'product'
			})
		},

		methods:
		{
			addToCart(id)
			{
				console.log(id)
				
			}
		},

		created()
		{
			this.$store.dispatch('fetch',null, {root:true})
			.then(()=>{
				this.data = this.products
			})
		}
	}
</script>
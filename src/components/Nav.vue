<template>
	<header class="nav">
		<template v-if="mode == 'navigate'">
			<div class="nav-item-left">
				<BackIcon class="nav-item-back" @click="$emit('back')" />
			</div>
			<div class="nav-item-right">
				<EditIcon class="nav-item-edit" @click="$emit('edit')" />
				<AddNewIcon class="nav-item-add" @click="$emit('add')" />
			</div>
		</template>
		<template v-else-if="mode == 'add'">
			<div class="nav-item-left">
				<BackIcon class="nav-item-back" @click="$emit('back')" />
			</div>
			<div class="nav-item-center">{{ toOpen.mode }}</div>
		</template>
		<template v-else>
			<div class="nav-sort" @click="selectSort">
				<svg style="width:24px;height:24px" viewBox="0 0 24 24">
					<path
						fill="white"
						d="M14,12V19.88C14.04,20.18 13.94,20.5 13.71,20.71C13.32,21.1 12.69,21.1 12.3,20.71L10.29,18.7C10.06,18.47 9.96,18.16 10,17.87V12H9.97L4.21,4.62C3.87,4.19 3.95,3.56 4.38,3.22C4.57,3.08 4.78,3 5,3V3H19V3C19.22,3 19.43,3.08 19.62,3.22C20.05,3.56 20.13,4.19 19.79,4.62L14.03,12H14Z"
					/>
				</svg>
				<!-- {{ sortMode[0].toUpperCase() }} -->
			</div>
			<div class="nav-filter" @click="selectFilter">
				<svg style="width:24px;height:24px" viewBox="0 0 24 24">
					<path
						fill="white"
						d="M19 7H22L18 3L14 7H17V21H19M5 7C5 8.1 5.9 9 7 9C8.1 9 9 8.1 9 7C9 5.9 8.1 5 7 5C5.9 5 5 5.9 5 7M7 3C9.21 3 11 4.79 11 7C11 9.21 9.21 11 7 11C4.79 11 3 9.21 3 7C3 4.79 4.79 3 7 3M7 13C4.79 13 3 14.79 3 17C3 19.21 4.79 21 7 21C9.21 21 11 19.21 11 17C11 14.79 9.21 13 7 13Z"
					/>
				</svg>
				{{ filterName }}
			</div>
			<div class="nav-search">
				<SearchIcon />
				<input v-model="searchS" @input="search" class="nav-search__input" />
			</div>
			<AddNewIcon class="nav-item-add" @click="$emit('add')" />
		</template>
	</header>
</template>
<script>
import BackIcon from 'vue-material-design-icons/ArrowLeft';
import AddNewIcon from 'vue-material-design-icons/Plus';
import EditIcon from 'vue-material-design-icons/Pencil';
import SearchIcon from './SearchIcon';
import store from '../store';
import {mapMutations, mapState} from 'vuex';
export default {
	name: 'Nav',
	props: {
		contactid: Number,
		mode: String,
		searchStr: String,
		toOpen: Object,
	},
	components: {
		BackIcon,
		AddNewIcon,
		EditIcon,
		SearchIcon,
	},
	data() {
		return {
			searchS: '',
		};
	},
	methods: {
		selectSort() {
			this.$emit('sort');
		},
		selectFilter() {
			this.$emit('filter');
		},
		search(e) {
			store.commit('setSearchString', e.srcElement.value);
		},
	},
	computed: {
		...mapMutations(['setSearchString']),
		...mapState(['sortMode', 'filterName']),
	},
};
</script>
<style lang="scss" scoped>
.nav {
	height: 60px;
	min-width: 300px;
	max-width: 400px;
	margin: auto;
	display: flex;
	align-items: center;
	background-color: #673ab7;
	box-shadow: 1px 1px 10px 1px #9e9e9e;
	&-sort {
		width: 30px;
		height: 27px;
		margin-left: 10px;
		margin-right: 10px;
		/* background-color: #8b5fda; */
	}
	&-filter {
		width: 30px;
		height: 27px;
		margin-left: 10px;
		margin-right: 10px;
		/* background-color: #8b5fda; */
		user-select: none;
	}
	&-search {
		padding-left: 7px;
		background-color: #8b5fda;
		margin: auto;
		width: 80%;
		border-radius: 10px;
		margin-right: 10px;
		height: 35px;
		&__input {
			background-color: #8b5fda;
			width: 84%;
			border: 0;
			box-sizing: border-box;
			/* padding: 0px 0px 0px 5px; */
			margin-bottom: 5px;
			outline: none;
			font: caption;
			padding-left: 10px;
		}
	}
	&-item {
		width: max-content;
		margin-right: 20px;

		&-left {
			flex: auto;
			margin-left: 20px;
		}
		&-center {
			flex: auto;
			font: 1em sans-serif;
			color: #dddddd;
		}
		&-edit {
			margin-right: 20px;
		}
		&-add {
			margin-right: 20px;
		}
	}
}
</style>

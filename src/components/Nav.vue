<template>
  <header class="nav">
    <template v-if="mode=='navigate'">
      <div class="nav-item-left">
        <BackIcon class="nav-item-back" @click="$emit('back')" />
      </div>
      <div class="nav-item-right">
        <EditIcon class="nav-item-edit" @click="$emit('edit')" />
        <AddNewIcon class="nav-item-add" @click="$emit('add')" />
      </div>
    </template>
    <template v-else-if="mode=='add'">
      <div class="nav-item-left">
        <BackIcon class="nav-item-back" @click="$emit('back')" />
      </div>
      <div class="nav-item-center">{{toOpen.mode}}</div>
    </template>
    <template v-else>
      <div class="nav-sort" @click="selectSort">{{sortMode[0].toUpperCase()}}</div>
      <div class="nav-filter" @click="selectFilter">{{filterName}}</div>
      <div class="nav-search">
        <SearchIcon />
        <input v-model="searchS" @input="search" class="nav-search__input" />
      </div>
      <AddNewIcon class="nav-item-add" @click="$emit('add')" />
    </template>
  </header>
</template>
<script>
import BackIcon from "vue-material-design-icons/ArrowLeft";
import AddNewIcon from "vue-material-design-icons/Plus";
import EditIcon from "vue-material-design-icons/Pencil";
import SearchIcon from "./SearchIcon";
import store from "../store";
import { mapMutations, mapState } from "vuex";
export default {
  name: "Nav",
  props: {
    contactid: Number,
    mode: String,
    searchStr: String,
    toOpen:Object
  },
  components: {
    BackIcon,
    AddNewIcon,
    EditIcon,
    SearchIcon
  },
  data() {
    return {
      searchS: "",

    };
  },
  methods: {
    selectSort(){
      this.$emit('sort')
    },
    selectFilter(){
      this.$emit('filter')
    },
    search(e) {
      store.commit("setSearchString", e.srcElement.value);
    }
  },
  computed: {
    ...mapMutations(["setSearchString"]),
    ...mapState(["sortMode","filterName"])
  }
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
  &-sort{
    width: 30px;
    height: 27px;
    margin-left: 10px;
    margin-right: 10px;
    background-color: #8b5fda;

  }
    &-filter{
    width: 30px;
    height: 27px;
    margin-left: 10px;
    margin-right: 10px;
    background-color: #8b5fda;

  }
  &-search {
    padding-left: 7px;
    background-color: #8b5fda;
    margin: auto;
    width: 80%;
    border-radius: 10px;
    margin-right: 10px;
    &__input {
      background-color: #8b5fda;
      width: 90%;
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

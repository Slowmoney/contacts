<template>
  <div id="app">
    <div class="block" >
      <Nav v-on:filter="filter" v-on:sort="sort" v-bind:mode="nav.mode" v-bind:toOpen="toOpen" v-on:back="back" v-on:add="add" v-on:edit="edit" />
      <div class="wrap" v-if="contactListNull">
        <div class="block-contacts"  v-if="!toOpen.show">
          <ContactsList v-on:open-contact="open" />
        </div>
        <div class="block-view"  v-if="toOpen.show&&nav.mode=='navigate'">
          <Contact v-bind:contactid="toOpen.id" />
        </div>
        </div>
        <div class="block-create" v-if="toOpen.show&&nav.mode=='add'">
          <CreateEdit v-on:remove="remove" v-bind:contactid="toOpen.id" :mode="toOpen.mode" v-on:save="save" />
        </div>
    </div>
  </div>
</template>

<script>
import ContactsList from "./components/ContactsList.vue";
import Contact from "./components/Contact.vue";
import Nav from "./components/Nav.vue";
import CreateEdit from "./components/CreateEdit.vue";

export default {
  name: "App",
  components: {
    Nav,
    ContactsList,
    Contact,
    CreateEdit,
   
  },
  data() {
    return {
      nav: { mode: "search", str: "" },
      toOpen: { show: false, id: 0, mode: "create" }
    };
  },
  beforeCreate() {
    this.$store.commit("load");
  },
  computed: {
    contactListNull() {
      return this.$store.getters.getLength;
    }
  },
  methods: {
    open(e) {
      document.getElementsByClassName("nav")[0].scrollIntoView();
      this.toOpen.id = e;
      this.toOpen.show = true; //show contact
      this.listShow = !this.listShow; // hide list
      this.nav.mode = "navigate";
    },
    back() {
      this.toOpen.show = false;
      this.listShow = !this.listShow;
      this.nav.mode = "search";
    },
    add() {
      this.toOpen.show = true;
      this.nav.mode = "add";
      this.toOpen.mode = "create";
    },
    edit() {
      this.toOpen.show = true;
      this.nav.mode = "add";
      this.toOpen.mode = "edit";
    },
    save() {
      this.toOpen.show = false;
      this.nav.mode = "search";
      this.$store.commit("save");
    },
    remove(e){
      this.toOpen.show = false;
      this.nav.mode = "search";
      this.$store.commit("remove",e);
      this.$store.commit("save");
    },
    sort(){
      this.$store.commit("nextSort");
    },
    filter(){
      this.$store.commit("nextFilter");
    }
  }
};
</script>

<style lang="scss" scoped>
.block {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  overflow: auto;
  /* background: #9E9E9E; */
  &-contacts {
    max-width: 400px;
    min-width: 300px;
    /*  position: absolute; */
    top: 0;
    right: 0;
    left: 0;
    margin: auto;
    background: rgb(231, 231, 231);
    box-shadow: 1px 1px 10px 1px #9e9e9e;
  }
  &-view {
    max-width: 400px;
    min-width: 300px;
    display: flow-root;
    margin: auto;
    background: #e7e7e7;
    margin-top: 0px;
    box-shadow: 1px 1px 10px 1px #9e9e9e;

    position: static;
  }
  &-create {
    max-width: 400px;
    min-width: 300px;
    display: flow-root;
    margin: auto;
    background: #e7e7e7;
    margin-top: 0px;
    box-shadow: 1px 1px 10px 1px #9e9e9e;
    position: static;
  }
}
</style>
